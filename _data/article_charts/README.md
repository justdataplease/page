# Article charts

One file per chart; the file name is the chart id. An article shows it with

    {% include article-chart.html id="<id>" %}

Every value is typed in by hand and matches the article text; the source query and the date it was checked
go in the file's first comment. The page writes each chart as plain HTML (bars, or a table for line, dumbbell
and treemap), and `assets/js/article-charts.js` redraws it with ECharts when it scrolls into view: tooltips,
hover, and Share / PNG buttons that export the whole figure with the DataForGreece logo.

    type: bar | column | range | line | dumbbell | treemap
    unit: "%"                  appended to every value
    max: 100                   end of the scale; the scale always starts at 0
    decimals: 1                optional; fixed decimals, otherwise values print as written
    title / note: {gr, en}
    reference:                 optional dashed line (bar, range)
      value: 50
      label: {gr, en}

  bar, column, range:
    rows:
      - label: {gr, en}
        value: 39.7            (range: from: 6, to: 65)
        decimals: 1            optional, per row
        text: {gr, en}         optional (bar only): shown instead of the formatted value (e.g. "38–39%")

  line (over time; at most two series, the second is orange):
    x_label: {gr, en}
    x: [1980, 1981, ...]
    series:
      - name: {gr, en}
        values: [15.0, 16.2, ...]
    fallback_step: 5           the no-JS table shows every 5th x

  dumbbell (two values per row, e.g. owners vs leaders):
    series: [{name: {gr, en}}, {name: {gr, en}}]
    rows:
      - label: {gr, en}
        values: [36.4, 21.3]

  treemap (box size = size, colour = value, one hue light to dark):
    color_min: 15 / color_max: 50
    size_label: {gr, en}       the unit of size in the tooltip
    rows:
      - {label: {gr, en}, short: {gr, en}, value: 36.3, size: 277828}   short = optional box text
