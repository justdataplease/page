/* Article charts: redraws every <figure class="dfg-chart"> (from _includes/article-chart.html, values in
   _data/article_charts/<id>.yml) with ECharts once it scrolls into view. The plain HTML bars stay as the fallback
   when the script or the CDN is not there. Colours and fonts come from the page's CSS variables, so both editions
   (classic, salmon) work, and a theme switch redraws. */
(function () {
    'use strict';
    var ECHARTS = 'https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js';
    var figures = Array.prototype.slice.call(document.querySelectorAll('figure.dfg-chart'));
    if (!figures.length) return;

    var loading = null;
    function loadEcharts() {
        if (window.echarts) return Promise.resolve(window.echarts);
        if (!loading) {
            loading = new Promise(function (resolve, reject) {
                var s = document.createElement('script');
                s.src = ECHARTS;
                s.async = true;
                s.onload = function () { resolve(window.echarts); };
                s.onerror = reject;
                document.head.appendChild(s);
            });
        }
        return loading;
    }

    function tokens() {
        var css = getComputedStyle(document.documentElement);
        var v = function (n) { return css.getPropertyValue(n).trim(); };
        return { accent: v('--accent'), ink: v('--ink'), ink2: v('--ink-2'), ink3: v('--ink-3'), rule: v('--rule'),
                 paper: v('--paper'), font: v('--f-sans') || 'sans-serif' };
    }

    function numberText(n, dec, lang, unit) {
        var f = new Intl.NumberFormat(lang === 'gr' ? 'el-GR' : 'en-GB', {
            minimumFractionDigits: dec == null ? 0 : dec,
            maximumFractionDigits: dec == null ? 1 : dec
        });
        return f.format(n) + (unit || '');
    }

    var ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
    function esc(s) {
        return String(s).replace(/[&<>"]/g, function (c) { return ESC[c]; });
    }

    // The second series colour (lines, dumbbells): burnt orange, checked with the dataviz validator against both
    // editions' accent (colour-blind separation dE 15.8 classic, 11.8 salmon). Lines also carry end labels.
    var SECOND = '#c0582b';

    function baseTooltip(t, trigger) {
        return {
            trigger: trigger || 'item', confine: true,
            backgroundColor: t.paper, borderColor: t.rule,
            textStyle: { color: t.ink, fontFamily: t.font, fontSize: 13 },
            extraCssText: 'box-shadow: 0 2px 10px rgba(0,0,0,.12); border-radius: 2px;'
        };
    }

    function legendOf(t, names) {
        return { top: 0, left: 0, icon: 'roundRect', itemWidth: 14, itemHeight: 4, itemGap: 18, data: names,
                 textStyle: { color: t.ink2, fontFamily: t.font, fontSize: 12 } };
    }

    function lineOption(spec, lang, width, t) {
        var unit = spec.unit || '', colors = [t.accent, SECOND];
        var fmt = function (v) { return numberText(v, spec.decimals, lang, unit); };
        var series = spec.select_series ? [spec.series[spec.selected_series], spec.series[0]] : spec.series;
        var names = series.map(function (s) { return s.name[lang]; });
        var narrow = width < 520;
        var stackedLegend = narrow && spec.select_series;
        var tooltip = baseTooltip(t, 'axis');
        tooltip.axisPointer = { type: 'line', lineStyle: { color: t.ink3, type: 'dashed' } };
        tooltip.formatter = function (ps) {
            return '<b>' + esc(ps[0].axisValue) + '</b><br>' + ps.map(function (p) {
                var s = series[p.seriesIndex];
                var count = s.denominators ? '<br>' + esc(numberText(s.denominators[p.dataIndex], 0, lang, '')) +
                    (lang === 'gr' ? ' ιδιοκτήτες με προσδιορισμένο φύλο' : ' owners with inferred gender') : '';
                var value = p.value == null || p.value === '-' ? '—' : fmt(p.value);
                return p.marker + esc(p.seriesName) + ': <b>' + esc(value) + '</b>' + count;
            }).join('<br>');
        };
        var legend = legendOf(t, names);
        if (stackedLegend) { legend.orient = 'vertical'; legend.itemGap = 9; }
        return {
            animationDuration: 600,
            textStyle: { fontFamily: t.font },
            legend: legend,
            grid: { left: 4, right: narrow ? (spec.select_series ? 28 : 16) : 70,
                top: stackedLegend ? 58 : 34, bottom: 30, containLabel: true },
            tooltip: tooltip,
            xAxis: {
                type: 'category', boundaryGap: false, data: spec.x.map(String),
                name: spec.x_label[lang], nameLocation: 'middle', nameGap: 28,
                nameTextStyle: { color: t.ink2, fontFamily: t.font, fontSize: 12 },
                axisTick: { show: false }, axisLine: { lineStyle: { color: t.ink3 } },
                axisLabel: { color: t.ink3, fontFamily: t.font, fontSize: 11,
                    interval: spec.x_interval != null ? spec.x_interval : spec.select_series ? (narrow ? 1 : 0) : (narrow ? 9 : 4) }
            },
            yAxis: {
                type: 'value', min: 0, max: spec.max || 100, interval: spec.y_interval || (spec.max || 100) / 5,
                axisLabel: { formatter: function (v) { return numberText(v, 0, lang, unit); }, color: t.ink3, fontFamily: t.font, fontSize: 11 },
                splitLine: { lineStyle: { color: t.rule, type: 'dotted' } }
            },
            series: series.map(function (s, i) {
                return {
                    type: 'line', name: names[i], data: s.values,
                    showSymbol: false, symbolSize: 8,
                    lineStyle: { width: 2.5, color: colors[i], type: s.dashed ? 'dashed' : 'solid' },
                    itemStyle: { color: colors[i], borderColor: t.paper, borderWidth: 2 },
                    emphasis: { focus: 'series' },
                    endLabel: { show: !narrow, color: t.ink, fontFamily: t.font, fontSize: 12, fontWeight: 600, distance: 6,
                                formatter: function (p) { return fmt(p.value); } }
                };
            })
        };
    }

    function dumbbellOption(spec, lang, width, t) {
        var unit = spec.unit || '', colors = [t.accent, SECOND];
        var fmt = function (v) { return numberText(v, spec.decimals, lang, unit); };
        var names = spec.series.map(function (s) { return s.name[lang]; });
        var labels = spec.rows.map(function (r) { return r.label[lang]; });
        var low = spec.rows.map(function (r) { return Math.min(r.values[0], r.values[1]); });
        var tooltip = baseTooltip(t);
        tooltip.formatter = function (p) {
            var r = spec.rows[p.dataIndex];
            var gap = Math.abs(r.values[0] - r.values[1]);
            return '<b>' + esc(labels[p.dataIndex]) + '</b><br>' +
                names.map(function (n, i) { return esc(n) + ': <b>' + esc(fmt(r.values[i])) + '</b>'; }).join('<br>') +
                '<br>' + (lang === 'gr' ? 'Απόσταση: ' : 'Gap: ') + esc(numberText(gap, spec.decimals == null ? 1 : spec.decimals, lang, '')) + (lang === 'gr' ? ' μονάδες' : ' points');
        };
        function dots(i) {
            return {
                type: 'scatter', name: names[i], symbolSize: 13, z: 3,
                // the larger value's label goes right of its dot, the smaller one's left
                data: spec.rows.map(function (r, k) {
                    return { value: [r.values[i], k], label: { position: r.values[i] >= r.values[1 - i] ? 'right' : 'left' } };
                }),
                itemStyle: { color: colors[i], borderColor: t.paper, borderWidth: 2 },
                emphasis: { scale: 1.25 },
                label: { show: true, color: t.ink, fontFamily: t.font, fontSize: 12, fontWeight: 600, distance: 8,
                         formatter: function (p) { return fmt(p.value[0]); } }
            };
        }
        return {
            animationDuration: 500,
            textStyle: { fontFamily: t.font },
            legend: legendOf(t, names),
            grid: { left: 4, right: 52, top: 34, bottom: 4, containLabel: true },
            tooltip: tooltip,
            xAxis: {
                type: 'value', min: 0, max: spec.max || 100, interval: (spec.max || 100) / 5,
                axisLabel: { formatter: function (v) { return numberText(v, 0, lang, unit); }, color: t.ink3, fontFamily: t.font, fontSize: 11 },
                splitLine: { lineStyle: { color: t.rule, type: 'dotted' } }
            },
            yAxis: {
                type: 'category', inverse: true, data: labels,
                axisTick: { show: false }, axisLine: { lineStyle: { color: t.ink3 } },
                axisLabel: { width: Math.round(Math.min(220, width * 0.38)), overflow: 'break', lineHeight: 15, color: t.ink2, fontFamily: t.font, fontSize: 12 }
            },
            series: [
                { type: 'bar', stack: 'gap', silent: true, barWidth: 3, itemStyle: { color: 'transparent' }, tooltip: { show: false }, data: low },
                { type: 'bar', stack: 'gap', barWidth: 3, itemStyle: { color: t.ink3, opacity: 0.5 },
                  data: spec.rows.map(function (r) { return Math.abs(r.values[0] - r.values[1]); }) },
                dots(0),
                dots(1)
            ]
        };
    }

    function mix(a, b, f) {
        var pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16);
        var ch = function (s) { return Math.round(((pa >> s) & 255) * (1 - f) + ((pb >> s) & 255) * f); };
        return '#' + ((1 << 24) + (ch(16) << 16) + (ch(8) << 8) + ch(0)).toString(16).slice(1);
    }

    function labelInk(color) {
        var rgb = color.slice(1).match(/.{2}/g).map(function (c) {
            var v = parseInt(c, 16) / 255;
            return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        var luminance = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
        return luminance > 0.179 ? '#000000' : '#ffffff';
    }

    function treemapOption(spec, lang, width, t) {
        var unit = spec.unit || '';
        var fmt = function (v) { return numberText(v, spec.decimals, lang, unit); };
        var lo = spec.color_min, hi = spec.color_max;
        var areaField = spec.area_field || 'size', colorField = spec.color_field || 'value';
        var colorUnit = spec.color_unit == null ? unit : spec.color_unit;
        // Area and colour can encode different measures; labels always show the main value.
        var light = mix(t.paper.length === 7 ? t.paper : '#ffffff', t.accent, 0.18);
        var count = new Intl.NumberFormat(lang === 'gr' ? 'el-GR' : 'en-GB');
        var total = spec.rows.reduce(function (s, r) { return s + r.size; }, 0);
        var areaTotal = spec.rows.reduce(function (s, r) { return s + r[areaField]; }, 0);
        var legendWidth = Math.min(260, width - 36);
        var legend = [{
            type: 'text', style: { text: spec.color_label[lang], x: 0, y: 0,
                fill: t.ink2, font: '12px ' + t.font }
        }, {
            type: 'rect', shape: { x: 0, y: 22, width: legendWidth, height: 10 },
            style: { fill: { type: 'linear', x: 0, y: 0, x2: 1, y2: 0,
                colorStops: [{ offset: 0, color: light }, { offset: 1, color: t.accent }] } }
        }];
        for (var tick = 0; tick <= 3; tick++) {
            legend.push({ type: 'text', style: {
                text: numberText(lo + (hi - lo) * tick / 3, spec.color_decimals || 0, lang, colorUnit),
                x: legendWidth * tick / 3, y: 38, align: tick === 0 ? 'left' : tick === 3 ? 'right' : 'center',
                fill: t.ink2, font: '11px ' + t.font
            } });
        }
        var tooltip = baseTooltip(t);
        tooltip.formatter = function (p) {
            return '<b>' + esc(p.name) + '</b><br>' + (lang === 'gr' ? 'Γυναίκες στους ιδιοκτήτες: ' : 'Women among owners: ') +
                '<b>' + esc(fmt(p.data.share)) + '</b><br>' + esc(count.format(p.data.size)) + ' ' + esc(spec.size_label[lang]) +
                '<br>' + (lang === 'gr' ? 'Μερίδιο επιχειρήσεων του χάρτη: ' : 'Share of businesses shown: ') +
                '<b>' + esc(numberText(p.data.size / total * 100, spec.decimals == null ? 1 : spec.decimals, lang, '%')) + '</b>';
        };
        return {
            animationDuration: 500,
            tooltip: tooltip,
            graphic: [
                { type: 'text', left: 0, top: 0, silent: true,
                  style: { text: spec.area_label[lang], fill: t.ink2, font: '12px ' + t.font } },
                { type: 'group', left: 'center', bottom: 0, silent: true, children: legend }
            ],
            series: [{
                type: 'treemap', roam: false, nodeClick: false, breadcrumb: { show: false },
                left: 0, right: 0, top: 24, bottom: 72, squareRatio: 0.7,
                itemStyle: { borderColor: t.paper, borderWidth: 2, gapWidth: 2 },
                emphasis: { itemStyle: { borderColor: t.ink } },
                data: spec.rows.map(function (r) {
                    var f = Math.max(0, Math.min(1, (r[colorField] - lo) / (hi - lo)));
                    var color = mix(light, t.accent, f);
                    return {
                        name: r.label[lang], short: r.short ? r.short[lang] : null,
                        value: r[areaField], share: r.value, size: r.size,
                        itemStyle: { color: color },
                        label: {
                            // plain text, name then value: rich text mis-places values once names wrap
                            // Small boxes stay available in tooltips and in the full data table.
                            show: r[areaField] / areaTotal >= 0.01, color: labelInk(color), fontFamily: t.font,
                            fontSize: width >= 520 && r[areaField] / areaTotal >= 0.04 ? 12 : 10,
                            fontWeight: 600, overflow: 'truncate', lineHeight: 13, padding: [2, 2],
                            formatter: function (p) { return (p.data.short || p.name) + '\n' + fmt(p.data.share); }
                        }
                    };
                })
            }]
        };
    }

    function option(spec, lang, width) {
        var t = tokens();
        if (spec.type === 'line') return lineOption(spec, lang, width, t);
        if (spec.type === 'dumbbell') return dumbbellOption(spec, lang, width, t);
        if (spec.type === 'treemap') return treemapOption(spec, lang, width, t);
        var unit = spec.unit || '';
        var range = spec.type === 'range';
        var rows = spec.rows.map(function (r) {
            var dec = r.decimals != null ? r.decimals : spec.decimals;
            var row = { label: r.label[lang], value: r.value, from: r.from, to: r.to };
            if (range) {
                row.fromText = numberText(r.from, dec, lang, unit);
                row.toText = numberText(r.to, dec, lang, unit);
                row.text = row.fromText + ' – ' + row.toText;
            } else {
                row.text = r.text ? r.text[lang] : numberText(r.value, dec, lang, unit);
            }
            return row;
        });
        var labelWidth = Math.round(Math.min(220, width * (width < 520 ? 0.36 : 0.4)));
        var ref = spec.reference;
        var refLabel = ref && (ref.label_prefix ?
            ref.label_prefix[lang] + ' ' + numberText(ref.value, ref.decimals == null ? spec.decimals : ref.decimals, lang, unit) :
            ref.label[lang]);
        var refLine = ref ? {
            symbol: 'none', silent: true, z: 1,   // under the bars and their value labels
            lineStyle: { type: 'dashed', color: t.ink3, width: 1 },
            // the y-axis runs top to bottom, so the line's start is at the top
            label: { formatter: refLabel, position: 'start', distance: 6, color: t.ink3, fontFamily: t.font, fontSize: 11 },
            data: [{ xAxis: ref.value }]
        } : undefined;
        // paper behind the value, so a reference line passing under it does not cross the digits
        var valueLabel = { show: true, color: t.ink, fontFamily: t.font, fontSize: 12, fontWeight: 600, backgroundColor: t.paper, padding: [1, 3] };
        var o = {
            animationDuration: 500,
            textStyle: { fontFamily: t.font },
            grid: { left: 4, right: 58, top: ref ? 24 : 4, bottom: 4, containLabel: true },
            tooltip: {
                trigger: 'item',
                confine: true,
                backgroundColor: t.paper,
                borderColor: t.rule,
                textStyle: { color: t.ink, fontFamily: t.font, fontSize: 13 },
                extraCssText: 'box-shadow: 0 2px 10px rgba(0,0,0,.12); border-radius: 2px;',
                formatter: function (p) {
                    var r = rows[p.dataIndex];
                    return esc(r.label) + '<br><b>' + esc(r.text) + '</b>';
                }
            },
            xAxis: {
                type: 'value', min: 0, max: spec.max || 100, interval: (spec.max || 100) / 4,
                axisLabel: { formatter: function (v) { return numberText(v, 0, lang, unit); }, color: t.ink3, fontFamily: t.font, fontSize: 11 },
                splitLine: { lineStyle: { color: t.rule, type: 'dotted' } }
            },
            yAxis: {
                type: 'category', inverse: true,
                data: rows.map(function (r) { return r.label; }),
                axisTick: { show: false },
                axisLine: { lineStyle: { color: t.ink3 } },
                axisLabel: { width: labelWidth, overflow: 'break', lineHeight: 15, color: t.ink2, fontFamily: t.font, fontSize: 12 }
            }
        };
        if (spec.type === 'column') {
            // Over time: categories along the bottom, values up the side.
            o.grid = { left: 4, right: 8, top: 22, bottom: 4, containLabel: true };
            o.xAxis = {
                type: 'category', data: rows.map(function (r) { return r.label; }),
                axisTick: { show: false },
                axisLine: { lineStyle: { color: t.ink3 } },
                axisLabel: { color: t.ink2, fontFamily: t.font, fontSize: width < 520 ? 10 : 12, interval: 0, hideOverlap: false }
            };
            o.yAxis = {
                type: 'value', min: 0, max: spec.max || 100, interval: (spec.max || 100) / 5,
                axisLabel: { formatter: function (v) { return numberText(v, 0, lang, unit); }, color: t.ink3, fontFamily: t.font, fontSize: 11 },
                splitLine: { lineStyle: { color: t.rule, type: 'dotted' } }
            };
            o.series = [{
                type: 'bar', barMaxWidth: 44,
                data: rows.map(function (r) { return r.value; }),
                itemStyle: { color: t.accent, borderRadius: [4, 4, 0, 0] },
                emphasis: { focus: 'self', itemStyle: { color: t.ink } },
                blur: { itemStyle: { opacity: 0.35 } },
                label: Object.assign({ position: 'top', distance: 4,
                    formatter: function (p) { return rows[p.dataIndex].text; } }, valueLabel)
            }];
            return o;
        }
        if (!range) {
            o.series = [{
                type: 'bar', barWidth: 16,
                data: rows.map(function (r) { return r.value; }),
                itemStyle: { color: t.accent, borderRadius: [0, 4, 4, 0] },
                emphasis: { focus: 'self', itemStyle: { color: t.ink } },
                blur: { itemStyle: { opacity: 0.35 } },
                label: Object.assign({ position: 'right', distance: 6,
                    formatter: function (p) { return rows[p.dataIndex].text; } }, valueLabel),
                markLine: refLine
            }];
            return o;
        }
        // A range: an invisible bar up to "from", a thin bar from "from" to "to", and a dot at each end.
        function dot(key, side) {
            return {
                type: 'scatter', symbolSize: 11, z: 3,
                data: rows.map(function (r, i) { return [r[key], i]; }),
                itemStyle: { color: t.accent, borderColor: t.paper, borderWidth: 2 },
                emphasis: { scale: 1.3, itemStyle: { color: t.ink } },
                label: Object.assign({ position: side, distance: 6,
                    formatter: function (p) { return rows[p.dataIndex][key + 'Text']; } }, valueLabel)
            };
        }
        o.series = [
            { type: 'bar', stack: 'r', silent: true, barWidth: 4, itemStyle: { color: 'transparent' },
              tooltip: { show: false }, data: rows.map(function (r) { return r.from; }), markLine: refLine },
            { type: 'bar', stack: 'r', barWidth: 4, itemStyle: { color: t.accent, borderRadius: 2 },
              emphasis: { itemStyle: { color: t.ink } }, data: rows.map(function (r) { return r.to - r.from; }) },
            dot('from', 'bottom'),   // below and above the dots, so close ends do not collide
            dot('to', 'top')
        ];
        return o;
    }

    function draw(fig) {
        var spec;
        try { spec = JSON.parse(fig.querySelector('.dfg-chart__spec').textContent); } catch (e) { return; }
        // Presentation-only override: preserve source values, geometry and calculations.
        if (fig.hasAttribute('data-decimals')) {
            var decimals = Number(fig.getAttribute('data-decimals'));
            spec.decimals = decimals;
            (spec.rows || []).forEach(function (r) { r.decimals = decimals; });
            if (spec.reference) spec.reference.decimals = decimals;
        }
        var lang = fig.getAttribute('data-lang') || 'gr';
        var box = fig.querySelector('.dfg-chart__canvas');
        loadEcharts().then(function (echarts) {
            var rowHeight = spec.type === 'range' ? 52 : 34;
            var heights = {
                column: 260,
                line: 320,
                treemap: fig.clientWidth < 520 ? 520 : 480,
                dumbbell: spec.rows ? spec.rows.length * 42 + 58 : 0
            };
            box.style.height = (heights[spec.type] ||
                (spec.rows.length * rowHeight + (spec.reference ? 24 : 4) + 24)) + 'px';
            fig.classList.add('dfg-chart--live');
            box.removeAttribute('aria-hidden');
            box.setAttribute('role', 'img');
            box.setAttribute('aria-label', spec.title[lang]);
            var chart = echarts.init(box, null, { renderer: 'svg' });
            var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            var render = function () {
                var o = option(spec, lang, box.clientWidth);
                if (reduce) {
                    o.animation = false;
                    o.series.forEach(function (s) { s.animation = false; });
                }
                chart.setOption(o, { notMerge: true });
            };
            render();
            if (spec.select_series) {
                var controls = document.createElement('label');
                controls.className = 'dfg-chart__select';
                controls.textContent = spec.selector_label ? spec.selector_label[lang] :
                    (lang === 'gr' ? 'Περιφέρεια' : 'Region');
                var select = document.createElement('select');
                spec.series.slice(1).forEach(function (s, i) {
                    var item = document.createElement('option');
                    item.value = i + 1;
                    item.textContent = s.name[lang];
                    select.appendChild(item);
                });
                select.value = spec.selected_series;
                controls.appendChild(select);
                fig.insertBefore(controls, box);
                var describe = function () {
                    box.setAttribute('aria-label', spec.title[lang] + ': ' + spec.series[spec.selected_series].name[lang]);
                };
                select.addEventListener('change', function () {
                    spec.selected_series = Number(select.value);
                    render();
                    describe();
                });
                describe();
            }
            var dataTable = fig.querySelector('.bars__data');
            if (dataTable) dataTable.open = false;
            var lastWidth = box.clientWidth;
            if (window.ResizeObserver) {
                new ResizeObserver(function () {
                    if (box.clientWidth === lastWidth) return;
                    lastWidth = box.clientWidth;
                    if (spec.type === 'treemap') box.style.height = (lastWidth < 520 ? 520 : 480) + 'px';
                    chart.resize();
                    render();
                }).observe(box);
            }
            new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
            addActions(fig, spec, lang, echarts, box);
        }).catch(function () { /* the HTML bars stay */ });
    }

    /* ---- Share and PNG: the whole figure (title, chart, source, logo) as one image ---- */

    var WORDS = {
        gr: { share: 'Κοινοποίηση γραφήματος', png: 'Λήψη ως εικόνα (PNG)', copied: 'Ο σύνδεσμος αντιγράφηκε' },
        en: { share: 'Share this chart', png: 'Download as image (PNG)', copied: 'Link copied' }
    };

    // 18px line icons drawn in currentColor
    var ICONS = {
        share: '<circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/>' +
               '<path d="m8.3 13.3 7.4 4.4"/><path d="m15.7 6.3-7.4 4.4"/>',
        png: '<path d="M12 4v11"/><path d="m7 10 5 5 5-5"/><path d="M5 20h14"/>',
        done: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
        wait: '<circle cx="12" cy="12" r="8" stroke-dasharray="12 38"/>'
    };
    function icon(name) {
        return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" ' +
            'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + ICONS[name] + '</svg>';
    }

    function wrap(ctx, text, maxWidth) {
        var lines = [], line = '';
        String(text).split(/\s+/).forEach(function (w) {
            var next = line ? line + ' ' + w : w;
            if (line && ctx.measureText(next).width > maxWidth) { lines.push(line); line = w; } else { line = next; }
        });
        if (line) lines.push(line);
        return lines;
    }

    function logoImage(fig) {
        var icon = fig.querySelector('.bars__brand svg');
        if (!icon) return Promise.resolve(null);
        var svg = icon.cloneNode(true);
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.querySelectorAll('.mast-icon__disc, .mast-icon__disc *').forEach(function (n) { n.setAttribute('fill', '#5E4FE6'); });
        svg.querySelectorAll('.mast-icon__land, .mast-icon__land *').forEach(function (n) { n.setAttribute('fill', '#D8E2FF'); });
        return new Promise(function (resolve) {
            var img = new Image();
            img.onload = function () { resolve(img); };
            img.onerror = function () { resolve(null); };
            img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg.outerHTML);
        });
    }

    function chartPng(fig, spec, lang, echarts, box) {
        var t = tokens();
        var scale = 2, pad = 24, width = box.clientWidth, height = box.clientHeight;
        // a canvas copy of the chart, drawn with the page's fonts (an SVG turned into an image would lose them)
        var off = document.createElement('div');
        off.style.cssText = 'position:fixed;left:-10000px;top:0;width:' + width + 'px;height:' + height + 'px';
        document.body.appendChild(off);
        var copy = echarts.init(off, null, { renderer: 'canvas', devicePixelRatio: scale });
        var o = option(spec, lang, width);
        o.animation = false;
        // Treemap has a series-level animation default; otherwise labels are still transparent in the PNG.
        o.series.forEach(function (s) { s.animation = false; });
        copy.setOption(o);
        var plot = copy.getRenderedCanvas({ pixelRatio: scale, backgroundColor: t.paper });

        return logoImage(fig).then(function (logo) {
            copy.dispose();
            off.remove();
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var titleFont = '700 15px ' + t.font, noteFont = '12px ' + t.font, brandFont = '700 13px ' + t.font;
            ctx.font = titleFont;
            var titleLines = wrap(ctx, spec.title[lang], width);
            ctx.font = noteFont;
            var noteLines = spec.note ? wrap(ctx, spec.note[lang], width) : [];
            var noteHeight = noteLines.length ? noteLines.length * 16 + 10 : 0;
            var h = pad + 2 + 14 + titleLines.length * 20 + 12 + height + 14 + noteHeight + 20 + pad;
            canvas.width = (width + pad * 2) * scale;
            canvas.height = h * scale;
            ctx.scale(scale, scale);
            ctx.fillStyle = t.paper;
            ctx.fillRect(0, 0, width + pad * 2, h);
            ctx.fillStyle = t.ink;
            ctx.fillRect(pad, pad, width, 2);
            var y = pad + 2 + 14;
            ctx.font = titleFont;
            ctx.textBaseline = 'top';
            titleLines.forEach(function (l) { ctx.fillText(l, pad, y); y += 20; });
            y += 12;
            ctx.drawImage(plot, pad, y, width, height);
            y += height + 14;
            ctx.font = noteFont;
            ctx.fillStyle = t.ink3;
            noteLines.forEach(function (l, i) { ctx.fillText(l, pad, y + i * 16); });
            y += noteHeight;
            // the logo bottom left, as on the page
            ctx.font = brandFont;
            ctx.fillStyle = '#121212';
            var size = 18;
            if (logo) ctx.drawImage(logo, pad, y, size, size);
            ctx.fillText('DataForGreece', pad + (logo ? size + 6 : 0), y + 3);
            return new Promise(function (resolve) { canvas.toBlob(resolve, 'image/png'); });
        });
    }

    function addActions(fig, spec, lang, echarts, box) {
        var foot = fig.querySelector('.bars__foot');
        if (!foot || fig.querySelector('.dfg-chart__actions')) return;
        var w = WORDS[lang] || WORDS.gr;
        var id = fig.getAttribute('data-chart');
        var fileName = 'dataforgreece-' + id + '.png';
        var link = location.origin + location.pathname + '#' + fig.id;
        var actions = document.createElement('span');
        actions.className = 'dfg-chart__actions';
        // a polite live region, so "link copied" is read out as well as shown
        var status = document.createElement('span');
        status.className = 'dfg-chart__status';
        status.setAttribute('role', 'status');
        actions.appendChild(status);
        function button(name, label) {
            var b = document.createElement('button');
            b.type = 'button';
            b.className = 'dfg-chart__btn';
            b.title = label;
            b.setAttribute('aria-label', label);
            b.innerHTML = icon(name);
            b.dataset.icon = name;
            actions.appendChild(b);
            return b;
        }
        function busy(b, on) {
            b.disabled = on;
            b.classList.toggle('is-busy', on);
            b.innerHTML = icon(on ? 'wait' : b.dataset.icon);
        }
        function done(b, text) {
            b.innerHTML = icon('done');
            status.textContent = text || '';
            setTimeout(function () { b.innerHTML = icon(b.dataset.icon); status.textContent = ''; }, 2000);
        }

        var share = button('share', w.share);
        share.addEventListener('click', function () {
            busy(share, true);
            chartPng(fig, spec, lang, echarts, box).then(function (blob) {
                busy(share, false);
                var file = blob && window.File ? new File([blob], fileName, { type: 'image/png' }) : null;
                var data = { title: spec.title[lang], text: spec.title[lang] + ' ' + link, url: link };
                if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
                    return navigator.share({ files: [file], title: data.title, text: data.text });
                }
                if (navigator.share) return navigator.share(data);
                return navigator.clipboard.writeText(link).then(function () { done(share, w.copied); });
            }).catch(function () { busy(share, false); });
        });

        var png = button('png', w.png);
        png.addEventListener('click', function () {
            busy(png, true);
            chartPng(fig, spec, lang, echarts, box).then(function (blob) {
                busy(png, false);
                var a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                a.remove();
                setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
                done(png);
            }).catch(function () { busy(png, false); });
        });

        foot.appendChild(actions);
    }

    if ('IntersectionObserver' in window) {
        var seen = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { seen.unobserve(e.target); draw(e.target); }
            });
        }, { rootMargin: '200px 0px' });
        figures.forEach(function (f) { seen.observe(f); });
    } else {
        figures.forEach(draw);
    }
})();
