function getStatOnline() {
    var osvg, obg;
    window.cMedals = window.cMedals || d3.scale.ordinal()
        .domain(["GOLD", "SILVER", "BRONZE"])
        .range(["#FCD975", "#CDC5C2", "#cd7f32"]);
    window.cCountry = window.cCountry || d3.scale.category20();
    var params = document.location.search.replace(/^\?/, "").split("&");
    var showOnlineStatOnLoad = params.indexOf("sosol") > -1;

    function run() {


        d3.html("http://artzub.com/cross/goo.gl/Kmb93", function(html) {
            var w = window.innerWidth * 0.8,
                h = window.innerHeight * 0.8;

            var direction = d3.ascending; //;

            var mG = function(a, b) {
                    return direction(a.medals.GOLD, b.medals.GOLD);
                },
                mS = function(a, b) {
                    return direction(a.medals.SILVER, b.medals.SILVER);
                },
                mB = function(a, b) {
                    return direction(a.medals.BRONZE, b.medals.BRONZE);
                },
                mC = function(a, b) {
                    return direction(a.count, b.count);
                };

            var vAll = function(l) {return l.count;},
                vG = function(l) {return l.medals && l.medals.GOLD ? l.medals.GOLD : 0;},
                vS = function(l) {return l.medals && l.medals.SILVER ? l.medals.SILVER : 0;},
                vB = function(l) {return l.medals && l.medals.BRONZE ? l.medals.BRONZE : 0;};

            var typeValue = vAll,
                useFill = false;

            var position = function(item) {
                item
                    .transition()
                    .delay(200)
                    .duration(1500)
                    .attr("transform", function (l) {
                    return "translate(" + l.x + "," + l.y + ")";
                })
            };

            var radius = function(item) {
                item.transition()
                    .duration(500)
                    .attr("r", function (l) {
                        return (l.r || 0) * 0.2
                    });
            }

            d3.select("#onlines").classed("open", showOnlineStatOnLoad)
                .select(".popup>span").on("click", function(item) {
                    d3.select(this.parentNode.parentNode).classed("open",
                        !d3.select(this.parentNode.parentNode).classed("open"));
                });

            osvg = osvg || d3.select("svg#online");

            osvg.attr("width", w)
                .attr("height", h)
                .style("background", "none");
            obg = obg || osvg.append("g")
                             .attr("id", "baseGroupOS");
            obg.attr("width", w)
               .attr("height", h);

            var bup = d3.layout.pack()
                .sort(mG)
                .size([w - 4, h - 4])
                .value(vAll);

            html = d3.select(html).select("table.wikitable.sortable").select("tbody").selectAll("tr")
                .filter(function(l, i) {
                    return i > 0 && i < this.parentNode.children.length - 1;
                })
                .shift()
                .map(function(d) {
                    var result = {type : 1, medals : {GOLD : 0, SILVER: 0, BRONZE : 0}};
                    d3.select(d).selectAll("td").each(function(l, i){
                        var ii = i;
                        if (this.parentNode.children.length < 6)
                            ii++;
                        switch (ii) {
                            case 1:
                                var item = d3.select(this);
                                result.key = item.text().replace("*", "").replace(/^\s*|\s*$/, "");
                                result.country = {
                                    name : result.key.replace(/\s\(.*\)$/, ""),
                                    abbr : result.key.replace(/.*?\((.*)\)$/, "$1")
                                }
                                break
                            case 2:
                                result.medals.GOLD = parseInt(this.innerText);
                                break
                            case 3:
                                result.medals.SILVER = parseInt(this.innerText);
                                break
                            case 4:
                                result.medals.BRONZE = parseInt(this.innerText);
                                break
                            case 5:
                                result.count = parseInt(this.innerText);
                                break
                        }
                    });
                    return result;
                });

            obg.selectAll("g.cbStats").remove();

            var root = function(fnfl) {
                return {
                    key : "",
                    type : 0,
                    children : html.filter(fnfl || function(d) { return true; })
                };
            }

            var bubbles = obg.selectAll("g.cbStats")
                .data(bup.nodes(root()))
                .enter()
                .append("g")
                .attr("class", "cbStats")
                .call(position);

            bubbles.append("title")
                .attr("class", "bctitle")
                .text(function (l) {
                    return l.type ? l.key + (l.children ? "" : ": " + l.value) : "";
                });

            function recalcRm(l) {
                l.r = l.r || 0;
                l.medalsOffset = l.r * 0.2;
                d3.selectAll(d3.select(this).selectAll("g.medalCir circle")
                    .shift()
                    .reverse())
                    .transition()
                    .duration(1500)
                    .attr("r", function (d) {
                        var r = 0;
                        if (l.medalsOffset) {
                            if (typeValue == vAll
                            || (typeValue == vG && d == "GOLD")
                            || (typeValue == vS && d == "SILVER")
                            || (typeValue == vB && d == "BRONZE")) {
                                r = l.medalsOffset = l.medalsOffset + (l.r - l.r * 0.2) * (l.medals[d] / ((useFill ? typeValue(l) : vAll(l)) || 1));
                            }
                        }
                        return r;
                    });
            }

            function medaliring(l) {
                var item = d3.select(this);
                var g = item.selectAll("g.medalCir")
                    .data(d3.keys(l.medals))
                    .enter()
                    .append("g").attr("class", "medalCir")
                g.append("circle")
                    .attr("class", "childCircle")
                    .style("fill-opacity", .8)
                    .style("fill", function(d) { return cMedals(d) })
                    .style("stroke", function(d) { return d3.rgb(cMedals(d)).darker().darker() })
                    .style("stroke-opacity",.3);
                g.append("title")
                    .attr("class", "cctitle")
                    .text(function(d) { return l.country.name + " " + d + ":" + l.medals[d] });
            }

            bubbles.filter(function(l) {
                    return l.type == 1;
                })
                .each(medaliring)
                .each(recalcRm);
            bubbles.append("circle")
                .attr("class", "baseCircle")
                .style("fill", function (l) {
                    return l.type == 1 ?  cCountry(l.key) : "none";
                })
                .style("fill-opacity", 1)
                .call(radius);
            bubbles
                .filter(function(l) { return l.r * 0.2 > 6; })
                .append("text")
                .style("fill", function(l) { return d3.rgb(cCountry(l.key)).darker().darker()/*brighter().brighter()*/; })
                .attr("text-anchor", "middle")
                .attr("dy", "0.35em")
                .text(function(l) { return l.r > 50 ? l.key + (l.children ? "" : ": " + l.value) : l.value });

            obg.append("g").attr("transform", "translate(" + 45 + "," + (h - 45) + ")")
                .datum({
                    r : 40,
                    key : "country",
                    country: {name : "country"},
                    medals : { GOLD : 5 , SILVER : 5, BRONZE : 5},
                    count : 15,
                    value : 15,
                    type : 1
                })
            .each(medaliring)
            .each(recalcRm)
            .call(function(item) {
                item.append("circle")
                    .style("fill", function (l) {
                        return l.type == 1 ?  cCountry(l.key) : "none";
                    })
                    .style("fill-opacity", 1)
                    .transition()
                    .duration(150)
                    .attr("r", function (l) {
                        return l.r * 0.2;
                    });

                item.selectAll("g.legCo")
                    .data(["country name", "number of BRONZE", "number of SILVER", "number of GOLD"])
                    .enter()
                    .append("g")
                    .call(function(grp) {
                        grp.append("path")
                            .attr("d", "M 0, 0 L 55, 0")
                            .style("stroke", "#5D5D5D");
                        grp.append("circle")
                            .attr("r", 2)
                            .style("fill", "#5D5D5D");
                        grp.append("text")
                            .attr("dy", "0.3em")
                            .attr("x", "55")
                            .style("fill", "#5D5D5D")
                            .text(function(d) { return d });
                    })
                    .attr("transform", function(d, i) {
                        return "translate(0, " + (-i * 12) + ")";
                    });
            });

            obg.append("g").attr("transform", "translate(" + (w - 10) + "," + (h - 10) + ")")
                .append("text").text("data by Wikipedia.org")
                .attr("text-anchor", "end");

            var clearSort = function(selector, classes) {
                d3.selectAll(selector).classed(classes, false);
            };

            function applySort(item) {
                item = d3.select(this);
                if (!item.classed("sort") || (item.classed("sort") && item.classed("desc"))) {
                    clearSort("text.sitem","abs");
                    clearSort("text.sitem","desc");
                    clearSort("text.sitem","sort");
                    item.classed("sort abs", true);
                    d3.selectAll("text.sitem").text(function(n) { return n; });
                    item.text(function(n) { return n + " ▲"; });
                    direction = d3.ascending;
                    bup.sort(
                        item.datum() == "Gold"
                            ? mG
                            : item.datum() == "Silver"
                                ? mS
                                : item.datum() == "Bronze"
                                    ? mB
                                    : mC
                    );
                }
                else if (item.classed("sort") && item.classed("abs")) {
                    item.classed("sort abs", false);
                    item.classed("sort desc", true);
                    item.text(function(n) { return n + " ▼"; });
                    direction = d3.descending;
                }
                bup.nodes(root(/*bup.value()*/));
                bubbles.call(radius)
                        .each(recalcRm)
                        .call(position);
            }

            obg.append("g").attr("transform", "translate(" + [10, 20] + ")").call(function(menu) {
                menu.append("text").text("sort by:");
                menu.selectAll("text.sitem").data(["Total", "Gold", "Silver", "Bronze"]).enter()
                    .append("text")
                    .attr("id", function(n) { return "sort" + n; })
                    .attr("class", function(n, i) { return "sitem" + (i == 1 ? " sort abs" : "") })
                    .attr("x", 15)
                    .attr("y", function(n, i) { return (i + 1) * 20; })
                    .style("cursor", "pointer")
                    .text(function(n, i) {return n + (i == 1 ? " ▲" : ""); } )
                    .on("click", applySort);
            });

            function applyDisplay(item) {
                item = d3.select(this);
                var ch = item.classed("checked");
                clearSort("text.onitem", "checked");
                obg.selectAll("text.onitem").text(function(n) { return "○ " + n; });
                if (!ch) {
                    item.classed("checked", true);
                    item.text(function(n) { return "● " + n; });
                    typeValue =
                        item.datum() == "Gold"
                            ? vG
                            : item.datum() == "Silver"
                            ? vS
                            : item.datum() == "Bronze"
                            ? vB
                            : vAll;
                }
                else {
                    obg.select("text#dAll").text(function(n) { return "● " + n; });
                    typeValue = vAll;
                }
                bubbles.call(radius)
                    .each(recalcRm)
                    .call(position);
            }

            function applyFill(item) {
                item = d3.select(this);
                item.classed("checked", !(useFill = item.classed("checked")));
                item.text(function(n) {
                    return (useFill ? "○ " : "● ")  + n;
                });
                bubbles.call(radius)
                    .each(recalcRm)
                    .call(position);
            }

            obg.append("g").attr("transform", "translate(" + [10, 130] + ")").call(function(menu) {
                menu.append("text").text("display:");
                menu.selectAll("text.onitem").data(["All", "Gold", "Silver", "Bronze"]).enter()
                    .append("text")
                    .attr("id", function(n) { return "d" + n; })
                    .attr("class", function(n, i) { return "onitem" + (!i ? " checked" : "") })
                    .attr("x", 15)
                    .attr("y", function(n, i) { return (i + 1) * 20; })
                    .style("cursor", "pointer")
                    .text(function(n, i) {return (!i ? "● " : "○ ") + n; } )
                    .on("click", applyDisplay);
            })

            obg.append("g").attr("transform", "translate(" + [10, 240] + ")").call(function(menu) {
                menu.append("text").text("fill:");
                menu.selectAll("text.fillitem").data(["proportionally"]).enter()
                    .append("text")
                    .attr("id", function(n) { return "d" + n; })
                    .attr("class", function(n, i) { return "fillitem" + (!i && !useFill ? " checked" : "") })
                    .attr("x", 15)
                    .attr("y", function(n, i) { return (i + 1) * 20; })
                    .style("cursor", "pointer")
                    .text(function(n, i) {return (!i && !useFill ? "● " : "○ ") + n; } )
                    .on("click", applyFill);
            })

        });
    }
    return run;
}
setTimeout(getStatOnline(), 3200);
