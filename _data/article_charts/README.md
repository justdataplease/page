# Article charts

One file per chart; the file name is the chart id. An article shows it with

    {% include article-chart.html id="<id>" %}

Set `chart_decimals: 0` in an article's front matter (or `decimals=0` on an include)
to show whole percentages in its HTML tables, charts, tooltips and PNG exports,
without rounding source data or changing chart geometry. Reference lines can use
`label_prefix: {gr, en}` and `decimals` to format their numeric labels consistently.

Values match the article text; the source query and the date checked go in the file's first comment.
The all-status women-in-business cohort charts are generated from saved public aggregate queries by
`_research/women-in-business/build_cohort_charts.py`. Their source counts and query provenance are alongside
that script. These compare founding cohorts using one person snapshot, not historical ownership observations.
The page writes each chart as plain HTML (bars, or a table for line, dumbbell
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
    select_series: true        optional selector: series[0] is the national comparator
    selected_series: 1         default selected series index; shown beside series[0]
    selector_label: {gr, en}   e.g. Region or Sector
    table_label: {gr, en}      expandable table summary; includes every series
    y_interval: 10            optional explicit y-axis tick interval
                              optional series.denominators adds counts to tooltips
                              optional series.dashed distinguishes the national line
                              null values show gaps in lines and an em dash in the table;
                              sector cohorts suppress percentages with fewer than 100
                              owners of inferred gender, documented in the chart note

  dumbbell (two values per row, e.g. owners vs leaders):
    series: [{name: {gr, en}}, {name: {gr, en}}]
    rows:
      - label: {gr, en}
        values: [36.4, 21.3]

  treemap (default: box area = size, colour = value, one hue light to dark):
    area_field: value         optional: "size" (default) or "value"
    color_field: size         optional: "value" (default) or "size"
    color_min: 0 / color_max: 300000    scale for the business count in this example
    color_unit: ""            optional: defaults to unit; "" for a count
    color_decimals: 0         optional: decimals on the colour legend
    size_label: {gr, en}       the unit of size in the tooltip
    value_label: {gr, en}     column heading for value in the data table
    color_label: {gr, en}      label for the numeric colour legend
    area_label: {gr, en}       explains the area encoding above the boxes
    rows:
      - {label: {gr, en}, short: {gr, en}, value: 36.3, size: 277828}   short = optional box text
