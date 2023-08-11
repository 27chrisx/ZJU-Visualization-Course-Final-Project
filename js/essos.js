(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('essos', {
        "color": [
            "#893448",
            "#d95850",
            "#eb8146",
            "#ffb248",
            "#eb8146",
            "#d95850"
        ],
        "backgroundColor": "rgba(255,216,39,0.15)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#893448"
            },
            "subtextStyle": {
                "color": "#d95850"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": "3"
            },
            "lineStyle": {
                "width": "1"
            },
            "symbolSize": "3",
            "symbol": "emptyCircle",
            "smooth": true
        },
        "radar": {
            "itemStyle": {
                "borderWidth": "3"
            },
            "lineStyle": {
                "width": "1"
            },
            "symbolSize": "3",
            "symbol": "emptyCircle",
            "smooth": true
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": "0",
                "barBorderColor": "#2c0d0d"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#2c0d0d"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#2c0d0d"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#2c0d0d"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#2c0d0d"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#2c0d0d"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#2c0d0d"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#2c0d0d"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#eb8146",
                "color0": "transparent",
                "borderColor": "#d95850",
                "borderColor0": "#58c470",
                "borderWidth": "2"
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#2c0d0d"
            },
            "lineStyle": {
                "width": 1,
                "color": "#6a4f17"
            },
            "symbolSize": "3",
            "symbol": "emptyCircle",
            "smooth": true,
            "color": [
                "#893448",
                "#d95850",
                "#eb8146",
                "#ffb248",
                "#eb8146",
                "#d95850"
            ],
            "label": {
                "color": "#d6a94f"
            }
        },
        "map": {
            "itemStyle": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#893448"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "#ffb248",
                    "borderColor": "#eb8146",
                    "borderWidth": 1
                },
                "label": {
                    "color": "#893448"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#893448"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "#ffb248",
                    "borderColor": "#eb8146",
                    "borderWidth": 1
                },
                "label": {
                    "color": "#893448"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#000000"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#000000"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#7a4600"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#000000"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#000000"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#7a4600"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#000000"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#000000"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#7a4600"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#000000"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#000000"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#7a4600"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "iconStyle": {
                    "borderColor": "#666666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#000000"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#d8d8d8",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#d8d8d8",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#893448",
                "width": 1
            },
            "itemStyle": {
                "color": "#893448",
                "borderWidth": 1
            },
            "controlStyle": {
                "color": "#893448",
                "borderColor": "#893448",
                "borderWidth": 0.5
            },
            "checkpointStyle": {
                "color": "#eb8146",
                "borderColor": "#ffb248"
            },
            "label": {
                "color": "#893448"
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#ffb248"
                },
                "controlStyle": {
                    "color": "#893448",
                    "borderColor": "#893448",
                    "borderWidth": 0.5
                },
                "label": {
                    "color": "#893448"
                }
            }
        },
        "visualMap": {
            "color": [
                "#893448",
                "#d95850",
                "#eb8146",
                "#ffb248"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(255,255,255,0)",
            "dataBackgroundColor": "rgba(255,178,72,0.5)",
            "fillerColor": "rgba(255,178,72,0.15)",
            "handleColor": "#ffb248",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333"
            }
        },
        "markPoint": {
            "label": {
                "color": "#d6a94f"
            },
            "emphasis": {
                "label": {
                    "color": "#d6a94f"
                }
            }
        }
    });
}));