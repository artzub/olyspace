/**
 * Created with JetBrains PhpStorm.
 * User: ArtZub
 * Date: 27.07.12
 * Time: 10:42
 */
var init = function() {

    window.cMedals = window.cMedals || d3.scale.ordinal()
        .domain(["GOLD", "SILVER", "BRONZE"])
        .range(["#FCD975", "#CDC5C2", "#cd7f32"]);
    window.cCountry = window.cCountry || d3.scale.category20();

    d3.asyncForEach = function(items, fnproc) {
        var workArr = items.concat();

        setTimeout(function() {
            fnproc(workArr.pop(), workArr);
            if (workArr.length > 0)
                setTimeout(arguments.callee, 30);
        }, 30);
    }

    var replaceCountry = {
    	"AFG" : { "iso" : "af", "name" : "Afghanistan" },
    	"ALB" : { "iso" : "al", "name" : "Albania" },
    	"ALG" : { "iso" : "dz", "name" : "Algeria" },
    	"ASA" : { "iso" : "as", "name" : "American Samoa" },
    	"AND" : { "iso" : "ad", "name" : "Andorra" },
    	"ANG" : { "iso" : "ao", "name" : "Angola" },
    	"ANT" : { "iso" : "ag", "name" : "Antigua and Barbuda" },
        "ANZ" : { "iso" : "ai", "name" : "Australasia" },
    	"ARG" : { "iso" : "ar", "name" : "Argentina" },
    	"ARM" : { "iso" : "am", "name" : "Armenia" },
    	"ARU" : { "iso" : "aw", "name" : "Aruba" },
    	"AUS" : { "iso" : "au", "name" : "Australia" },
    	"AUT" : { "iso" : "at", "name" : "Austria" },
    	"AZE" : { "iso" : "az", "name" : "Azerbaijan" },
    	"BAH" : { "iso" : "bs", "name" : "Bahamas" },
    	"BRN" : { "iso" : "bh", "name" : "Bahrain" },
    	"BAN" : { "iso" : "bd", "name" : "Bangladesh" },
        "BIN" : { "iso" : "bin", "name" : "British India" },
    	"BAR" : { "iso" : "bb", "name" : "Barbados" },
    	"BLR" : { "iso" : "by", "name" : "Belarus" },
    	"BEL" : { "iso" : "be", "name" : "Belgium" },
    	"BIZ" : { "iso" : "bz", "name" : "Belize" },
    	"BER" : { "iso" : "bm", "name" : "Bermuda" },
    	"BEN" : { "iso" : "bj", "name" : "Benin" },
    	"BHU" : { "iso" : "bt", "name" : "Bhutan" },
        "BOH" : { "iso" : "pl", "name" : "Bohemia" },
    	"BOL" : { "iso" : "bo", "name" : "Bolivia" },
    	"BIH" : { "iso" : "ba", "name" : "Bosnia and Herzegovina" },
    	"BOT" : { "iso" : "bw", "name" : "Botswana" },
    	"BRA" : { "iso" : "br", "name" : "Brazil" },
    	"IVB" : { "iso" : "vg", "name" : "British Virgin Islands" },
    	"BRU" : { "iso" : "bn", "name" : "Brunei" },
    	"BUL" : { "iso" : "bg", "name" : "Bulgaria" },
    	"BUR" : { "iso" : "bf", "name" : "Burkina Faso" },
    	"BDI" : { "iso" : "bi", "name" : "Burundi" },
    	"CAM" : { "iso" : "kh", "name" : "Cambodia" },
    	"CMR" : { "iso" : "cm", "name" : "Cameroon" },
    	"CAN" : { "iso" : "ca", "name" : "Canada" },
    	"CPV" : { "iso" : "cv", "name" : "Cape Verde" },
    	"CAY" : { "iso" : "ky", "name" : "Cayman Islands" },
    	"CAF" : { "iso" : "cf", "name" : "Central African Republic" },
    	"CHA" : { "iso" : "td", "name" : "Chad" },
    	"CHI" : { "iso" : "cl", "name" : "Chile" },
    	"CHN" : { "iso" : "cn", "name" : "China" },
    	"COL" : { "iso" : "co", "name" : "Colombia" },
    	"COM" : { "iso" : "km", "name" : "Comoros" },
    	"CGO" : { "iso" : "cg", "name" : "Congo" },
    	"COD" : { "iso" : "cd", "name" : "Congo, Dem Rep" },
    	"COK" : { "iso" : "ck", "name" : "Cook Islands" },
    	"CRC" : { "iso" : "cr", "name" : "Costa Rica" },
    	"CIV" : { "iso" : "ci", "name" : "Cote d'Ivoire" },
    	"CRO" : { "iso" : "hr", "name" : "Croatia" },
    	"CUB" : { "iso" : "cu", "name" : "Cuba" },
    	"CYP" : { "iso" : "cy", "name" : "Cyprus" },
    	"CZE" : { "iso" : "cz", "name" : "Czech Republic" },
        "CZR" : { "iso" : "cz", "name" : "Czech Republic" },
    	"DEN" : { "iso" : "dk", "name" : "Denmark" },
    	"DJI" : { "iso" : "dj", "name" : "Djibouti" },
    	"DMA" : { "iso" : "dm", "name" : "Dominica" },
    	"DOM" : { "iso" : "do", "name" : "Dominican Republic" },
    	"TLS" : { "iso" : "tl", "name" : "East Timor (Timor-Leste)" },
    	"ECU" : { "iso" : "ec", "name" : "Ecuador" },
    	"EGY" : { "iso" : "eg", "name" : "Egypt" },
    	"ESA" : { "iso" : "sv", "name" : "El Salvador" },
    	"GEQ" : { "iso" : "gq", "name" : "Equatorial Guinea" },
    	"ERI" : { "iso" : "er", "name" : "Eritrea" },
    	"EST" : { "iso" : "ee", "name" : "Estonia" },
    	"ETH" : { "iso" : "et", "name" : "Ethiopia" },
    	"FIJ" : { "iso" : "fj", "name" : "Fiji" },
    	"FIN" : { "iso" : "fi", "name" : "Finland" },
    	"FRA" : { "iso" : "fr", "name" : "France" },
    	"GAB" : { "iso" : "ga", "name" : "Gabon" },
    	"GAM" : { "iso" : "gm", "name" : "Gambia" },
    	"GEO" : { "iso" : "ge", "name" : "Georgia" },
    	"GER" : { "iso" : "de", "name" : "Germany" },
        "FRG" : { "iso" : "de", "name" : "West Germany" },
        "GDR" : { "iso" : "dd", "name" : "Germany" },
    	"GHA" : { "iso" : "gh", "name" : "Ghana" },
    	"GRE" : { "iso" : "gr", "name" : "Greece" },
    	"GRN" : { "iso" : "gd", "name" : "Grenada" },
    	"GUM" : { "iso" : "gu", "name" : "Guam" },
    	"GUA" : { "iso" : "gt", "name" : "Guatemala" },
    	"GUI" : { "iso" : "gn", "name" : "Guinea" },
    	"GBS" : { "iso" : "gw", "name" : "Guinea-Bissau" },
    	"GUY" : { "iso" : "gy", "name" : "Guyana" },
    	"HAI" : { "iso" : "ht", "name" : "Haiti" },
    	"HON" : { "iso" : "hn", "name" : "Honduras" },
    	"HKG" : { "iso" : "hk", "name" : "Hong Kong*" },
    	"HUN" : { "iso" : "hu", "name" : "Hungary" },
    	"ISL" : { "iso" : "is", "name" : "Iceland" },
    	"IND" : { "iso" : "in", "name" : "India" },
    	"INA" : { "iso" : "id", "name" : "Indonesia" },
    	"IRI" : { "iso" : "ir", "name" : "Iran" },
    	"IRQ" : { "iso" : "iq", "name" : "Iraq" },
    	"IRL" : { "iso" : "ie", "name" : "Ireland" },
    	"ISR" : { "iso" : "il", "name" : "Israel" },
    	"ITA" : { "iso" : "it", "name" : "Italy" },
    	"JAM" : { "iso" : "jm", "name" : "Jamaica" },
    	"JPN" : { "iso" : "jp", "name" : "Japan" },
    	"JOR" : { "iso" : "jo", "name" : "Jordan" },
    	"KAZ" : { "iso" : "kz", "name" : "Kazakhstan" },
    	"KEN" : { "iso" : "ke", "name" : "Kenya" },
    	"PRK" : { "iso" : "kp", "name" : "North Korea" },
    	"KOR" : { "iso" : "kr", "name" : "South Korea" },
    	"KUW" : { "iso" : "kw", "name" : "Kuwait" },
    	"KGZ" : { "iso" : "kg", "name" : "Kyrgyzstan" },
    	"LAO" : { "iso" : "la", "name" : "Laos" },
    	"LAT" : { "iso" : "lv", "name" : "Latvia" },
    	"LIB" : { "iso" : "lb", "name" : "Lebanon" },
    	"LES" : { "iso" : "ls", "name" : "Lesotho" },
    	"LBR" : { "iso" : "lr", "name" : "Liberia" },
    	"LBA" : { "iso" : "ly", "name" : "Libya" },
    	"LIE" : { "iso" : "li", "name" : "Liechtenstein" },
    	"LTU" : { "iso" : "lt", "name" : "Lithuania" },
    	"LUX" : { "iso" : "lu", "name" : "Luxembourg" },
    	"MKD" : { "iso" : "mk", "name" : "Macedonia" },
    	"MAD" : { "iso" : "mg", "name" : "Madagascar" },
    	"MAW" : { "iso" : "mw", "name" : "Malawi" },
    	"MAS" : { "iso" : "my", "name" : "Malaysia" },
    	"MDV" : { "iso" : "mv", "name" : "Maldives" },
    	"MLI" : { "iso" : "ml", "name" : "Mali" },
    	"MLT" : { "iso" : "mt", "name" : "Malta" },
    	"MTN" : { "iso" : "mr", "name" : "Mauritania" },
    	"MRI" : { "iso" : "mu", "name" : "Mauritius" },
    	"MEX" : { "iso" : "mx", "name" : "Mexico" },
    	"FSM" : { "iso" : "fm", "name" : "Micronesia" },
    	"MDA" : { "iso" : "md", "name" : "Moldova" },
    	"MON" : { "iso" : "mc", "name" : "Monaco" },
    	"MGL" : { "iso" : "mn", "name" : "Mongolia" },
    	"MAR" : { "iso" : "ma", "name" : "Morocco" },
    	"MOZ" : { "iso" : "mz", "name" : "Mozambique" },
    	"MYA" : { "iso" : "mm", "name" : "Burma" },
    	"NAM" : { "iso" : "na", "name" : "Namibia" },
    	"NRU" : { "iso" : "nr", "name" : "Nauru" },
    	"NEP" : { "iso" : "np", "name" : "Nepal" },
    	"NED" : { "iso" : "nl", "name" : "Netherlands" },
    	"AHO" : { "iso" : "an", "name" : "Netherlands Antilles" },
    	"NZL" : { "iso" : "nz", "name" : "New Zealand" },
    	"NCA" : { "iso" : "ni", "name" : "Nicaragua" },
    	"NIG" : { "iso" : "ne", "name" : "Niger" },
    	"NGR" : { "iso" : "ng", "name" : "Nigeria" },
    	"NOR" : { "iso" : "no", "name" : "Norway" },
    	"OMA" : { "iso" : "om", "name" : "Oman" },
    	"PAK" : { "iso" : "pk", "name" : "Pakistan" },
    	"PLW" : { "iso" : "pw", "name" : "Palau" },
    	"PLE" : { "iso" : "ps", "name" : "Occupied Territories Palestine" },
    	"PAN" : { "iso" : "pa", "name" : "Panama" },
    	"PNG" : { "iso" : "pg", "name" : "Papua New Guinea" },
    	"PAR" : { "iso" : "py", "name" : "Paraguay" },
    	"PER" : { "iso" : "pe", "name" : "Peru" },
    	"PHI" : { "iso" : "ph", "name" : "Philippines" },
    	"POL" : { "iso" : "pl", "name" : "Poland" },
    	"POR" : { "iso" : "pt", "name" : "Portugal" },
    	"PUR" : { "iso" : "pr", "name" : "Puerto Rico" },
    	"QAT" : { "iso" : "qa", "name" : "Qatar" },
    	"ROM" : { "iso" : "ro", "name" : "Romania" },
    	"RUS" : { "iso" : "ru", "name" : "Russia" },
    	"RWA" : { "iso" : "rw", "name" : "Rwanda" },
    	"SKN" : { "iso" : "kn", "name" : "Saint Kitts and Nevis" },
    	"LCA" : { "iso" : "lc", "name" : "Saint Lucia" },
    	"VIN" : { "iso" : "vc", "name" : "Saint Vincent and the Grenadines" },
    	"SAM" : { "iso" : "ws", "name" : "Samoa" },
    	"SMR" : { "iso" : "sm", "name" : "San Marino" },
    	"STP" : { "iso" : "st", "name" : "Sao Tome and Principe" },
    	"KSA" : { "iso" : "sa", "name" : "Saudi Arabia" },
    	"SEN" : { "iso" : "sn", "name" : "Senegal" },
    	"SCG" : { "iso" : "rs", "name" : "Serbia" },
    	"SEY" : { "iso" : "sc", "name" : "Seychelles" },
    	"SLE" : { "iso" : "sl", "name" : "Sierra Leone" },
    	"SIN" : { "iso" : "sg", "name" : "Singapore" },
    	"SVK" : { "iso" : "sk", "name" : "Slovakia" },
    	"SLO" : { "iso" : "si", "name" : "Slovenia" },
    	"SOL" : { "iso" : "sb", "name" : "Solomon Islands" },
    	"SOM" : { "iso" : "so", "name" : "Somalia" },
    	"RSA" : { "iso" : "za", "name" : "South Africa" },
    	"ESP" : { "iso" : "es", "name" : "Spain" },
    	"SRI" : { "iso" : "lk", "name" : "Sri Lanka" },
        "SRB" : { "iso" : "rs", "name" : "Serbia" },
    	"SUD" : { "iso" : "sd", "name" : "Sudan" },
    	"SUR" : { "iso" : "sr", "name" : "Suriname" },
    	"SWZ" : { "iso" : "sz", "name" : "Swaziland" },
    	"SWE" : { "iso" : "se", "name" : "Sweden" },
    	"SUI" : { "iso" : "ch", "name" : "Switzerland" },
    	"SYR" : { "iso" : "sy", "name" : "Syria" },
        "SAF" : { "iso" : "sf", "name" : "South Africa (until 1960)" },
    	"TPE" : { "iso" : "tw", "name" : "Taiwan" },
    	"TJK" : { "iso" : "tj", "name" : "Tajikistan" },
    	"TAN" : { "iso" : "tz", "name" : "Tanzania" },
    	"THA" : { "iso" : "th", "name" : "Thailand" },
    	"TOG" : { "iso" : "tg", "name" : "Togo" },
    	"TGA" : { "iso" : "to", "name" : "Tonga" },
    	"TRI" : { "iso" : "tt", "name" : "Trinidad and Tobago" },
    	"TUN" : { "iso" : "tn", "name" : "Tunisia" },
    	"TUR" : { "iso" : "tr", "name" : "Turkey" },
    	"TKM" : { "iso" : "tm", "name" : "Turkmenistan" },
    	"UGA" : { "iso" : "ug", "name" : "Uganda" },
    	"UKR" : { "iso" : "ua", "name" : "Ukraine" },
    	"UAE" : { "iso" : "ae", "name" : "United Arab Emirates" },
    	"GBR" : { "iso" : "gb", "name" : "United Kingdom" },
    	"USA" : { "iso" : "us", "name" : "United States" },
    	"URU" : { "iso" : "uy", "name" : "Uruguay" },
    	"UZB" : { "iso" : "uz", "name" : "Uzbekistan" },
    	"VAN" : { "iso" : "vu", "name" : "Vanuatu" },
    	"VEN" : { "iso" : "ve", "name" : "Venezuela" },
    	"VIE" : { "iso" : "vn", "name" : "Vietnam" },
    	"ISV" : { "iso" : "vi", "name" : "Virgin Islands" },
    	"YEM" : { "iso" : "ye", "name" : "Yemen" },
    	"ZAM" : { "iso" : "zm", "name" : "Zambia" },
    	"ZIM" : { "iso" : "zw", "name" : "Zimbabwe" },
        "YOF" : { "iso" : "yu", "name" : "Yougoslav Federation" },
        "YOG" : { "iso" : "yu", "name" : "Yougoslavia (until 1988)" },
        "USR" : { "iso" : "su", "name" : "Soviet Union" }
    };

    var yearsForm = {
        "1896" : ".jpg",
        "1900" : ".jpg",
        "1904" : ".jpg",
        "1906" : ".jpg",
        "1908" : ".jpg",
        "1912" : ".jpg",
        "1920" : ".jpg",
        "1924" : ".png",
        "1928" : ".png",
        "1932" : ".png",
        "1936" : ".jpg",
        "1948" : ".png",
        "1952" : ".png",
        "1956" : ".png",
        "1960" : ".png",
        "1964" : ".svg",
        "1968" : ".svg",
        "1972" : ".svg",
        "1976" : ".svg",
        "1980" : ".png",
        "1984" : ".svg",
        "1988" : ".svg",
        "1992" : ".svg",
        "1996" : ".svg",
        "2000" : ".svg",
        "2004" : ".svg",
        "2008" : ".svg"
    };

    var yearsCountry = {
        "1896" : "gr",
        "1900" : "fr",
        "1904" : "us",
        "1906" : "gr",
        "1908" : "gb",
        "1912" : "se",
        "1920" : "be",
        "1924" : "fr",
        "1928" : "nl",
        "1932" : "us",
        "1936" : "de",
        "1948" : "gb",
        "1952" : "fi",
        "1956" : "se,au",
        "1960" : "it",
        "1964" : "jp",
        "1968" : "mx",
        "1972" : "de",
        "1976" : "ca",
        "1980" : "su",
        "1984" : "us",
        "1988" : "kr",
        "1992" : "es",
        "1996" : "us",
        "2000" : "au",
        "2004" : "gr",
        "2008" : "cn"
    };

    var margin = {top:0, right:0, bottom:0, left:0},
        width = function() { return window.innerWidth - margin.left - margin.right },
        height = function() { return window.innerHeight - margin.top - margin.bottom },
        zoomLevel = -6.2,
        scale = Math.pow(Math.sqrt(2), zoomLevel),
        sizeFactor = scale * Math.pow(scale, -.15),
        edgeSizeFactor = sizeFactor,
        nodeSizeFactor = sizeFactor,
        centerX = width() / 2,
        centerY = height() / 2,
        lastZoom = 1,
        delx = centerX - (centerX * scale),
        dely = centerY - (centerY * scale),
        lastTranslate = [0, 0],
        showAsBall = true,
        showStat = false,
        showLabelOnRoot = true;


    var params = document.location.search.replace(/^\?/, "").split("&");

    var drawGraph = params.indexOf("nograph") < 0,
        showStatOnLoad = params.indexOf("showstatonload") > -1;

    function resize() {
        scale = Math.pow(Math.sqrt(2), zoomLevel),
        sizeFactor = scale * Math.pow(scale, -.15),
        edgeSizeFactor = sizeFactor,
        nodeSizeFactor = sizeFactor,
        centerX = width() / 2,
        centerY = height() / 2,
        delx = centerX - (centerX * scale),
        dely = centerY - (centerY * scale);
    }

    var color = d3.scale.category20c(),
        cAthletes = d3.scale.category20(),
        cSports = d3.scale.category20(),
        cCountries = d3.scale.category20();

    var cord = function(c, s) {
        return c - (c - c / s)
    }

    var vis = function(x, y) {
        var w = width(),
            h = height(),
            dx = cord(lastTranslate[0], lastZoom),
            dy = cord(lastTranslate[1], lastZoom),
            x1 = x,
            y1 = y;

        return x1 > -dx && x1 < -dx + cord(w, lastZoom)
            && y1 > -dy && y1 < -dy + cord(h, lastZoom);
    }

    var zoom = d3.behavior.zoom()
            .translate(lastTranslate)
            .scale(lastZoom)
            .scaleExtent([0.1, 8]);

    var svg = d3.select("body").select("svg#mainsvg")
            .attr("id", "mainsvg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("width", width)
            .attr("height", height)
            .call(zoom)
            .append("g")
            .attr("transform", "scale(1)translate(" + [0 , 0] + ")")
            .attr("width", width)
            .attr("height", height);

    var svgnode = svg.append("g");
    var svglabel = svg.append("g");
    var tooltip = d3.select("#tooltip");

    var radius = d3.scale.sqrt()
            .range([0, 4]);

    var sw = d3.scale.sqrt()
            .range([0.01, 0.2]);

    d3.select("#filters > span:first-child").on("click", function(d) {
        d3.select(this.parentNode)
            .classed("clicked", function() {
                return !d3.select(this).classed("clicked");
            });
    })

    d3.json("graph.json", function (graph) {

        zoom.on("zoom", zoomMove);

        var repaintTimer = false;

        function zoomMove() {

            if (repaintTimer && !(lastZoom != s || lastTranslate[0] != t[0] || lastTranslate[1] != t[1])) {
                clearTimeout(repaintTimer);
                repaintTimer = false;
            }

            d3.select("body").select("svg")
                .attr("width", width)
                .attr("height", height);

            var t = d3.event.translate,
                s = d3.event.scale,
                needZoom = true,
                needMove = true;

            var dz = s / 1000;
            resize();
            svg
              .attr("transform", "scale(" + s + ")translate(" + [cord(t[0], s), cord(t[1], s)] + ")");
            if (lastZoom != s || lastTranslate[0] != t[0] || lastTranslate[1] != t[1])
                repaintTimer = setTimeout(makeSmallStars, 500);
            lastTranslate = t.slice(0);
            lastZoom = s;
            refresh();
        }

        function refresh() {
            svg.selectAll(".link path")
               .style("stroke-width", function(m) { return sw(m.target().size) * nodeSizeFactor * 8/lastZoom });
            svg.selectAll(".nodelabel")
                    .style("font-size", 24 / lastZoom + "pt")
                    .style("stroke-width", function(d) { return sw(d.size) * edgeSizeFactor / lastZoom})
                    .style("visibility", function(d) {return d.type == 0 && showLabelOnRoot ? null : "hidden"});
        }

        var stars = {};

        function calcColor(d) {
            return (d.type + d.size * d.tag.split(',').length) / 20;
        }

        var countNodes = graph.nodes.length;
        var proc = 0;

        svg.append("g")
            .attr("id", "stateCont")
            .attr("transform", "translate(" + [centerX, centerY] + ")")
            .append("text")
            .attr("id", "stateLabel")
            .style("fill", "#fff")
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .text("Completed");



        graph.edges.forEach(function(d) {
            d.si = d.source;
            d.ti = d.target;
            d.source = function() { return graph.nodes[this.si]; };
            d.target = function() { return graph.nodes[this.ti]; };
        });

        var haveDate = [];
        graph.nodes.forEach(function(d) {
            d.rx = elx(scale * d.x + delx, scale * d.y + dely),
            d.ry = ely(scale * d.y + dely, scale * d.x + delx, d.size, d.type);
            d.date = new Date(d.date);
            d.country = !d.country ? {name:"",abbr:""} : {
                name : d.country.split('|')[0],
                abbr : d.country.split('|')[1]
            };
            if (d.type == 0) {
                d.country.name = d.id.split(",")[1];
                d.country.iso = yearsCountry[d.label.split(" ")[0]];
            }
            if (haveDate.indexOf(d.date.getFullYear()) < 0)
                haveDate.push(d.date.getFullYear());
            /*d.edges = {
                in : graph.edges.filter(function(k) { return k.ti == d.index; }),
                out : graph.edges.filter(function(k) { return k.si == d.index; })
            }*/
            color(calcColor(d));
            radius(d.size);
            sw(d.size);
        });
        var realDate = haveDate.slice(0);
        realDate.push((new Date("01.01.1916")).getFullYear());
        realDate.push((new Date("01.01.1940")).getFullYear());
        realDate.push((new Date("01.01.1944")).getFullYear());
        realDate.sort(d3.ascending);

        if (haveDate.length > 0)
            haveDate.push((new Date("01.01." + (4 + parseInt(haveDate[haveDate.length - 1])))).getFullYear());

        function elx(x, y) {
            return x;//Math.sqrt(Math.pow(y * 0.1, 3) + 150 * 0.1 * y + 50);
        }

        function ely(y, x, a, b) {
            return y//Math.sqrt(Math.pow(x * 0.1, 3) + a * 0.1 * x + b);
        }

        function tick() {
            d3.select("#stateCont")
                .style("visibility", null);
            d3.select("#stateLabel")
                .text(Math.round(proc++ * 100000 / countNodes) / 1000 + "% left...");
        }

        function tick_start() {
        }

        function translateNode(node) {
            if (node)
                node
                    .attr("transform", function (d) {
                        return "translate(" + [d.rx , d.ry] + ")";
                    });

            if (stars.zeroGreatness)
                stars.zeroGreatness
                    .attr("transform", function (d) {
                        return "scale(" + 0.05 * nodeSizeFactor * radius(d.size) + ")"
                    });
            if (stars.zeroGreatnessOver)
                stars.zeroGreatnessOver
                        .attr("transform", function (d) {
                            return "scale(" + 0.05 * nodeSizeFactor * radius(d.size) + ")"
                        });
            if (stars.firstGreatness)
                stars.firstGreatness
                    .attr("transform", function (d) {
                        return "scale(" + 0.05 * nodeSizeFactor * radius(d.size) + ")"
                    });

            if (stars.firstGreatnessOver)
                stars.firstGreatnessOver
                    .attr("transform", function (d) {
                        return "scale(" + 0.05 * nodeSizeFactor * radius(d.size) + ")"
                    });

            if (stars.secondGreatness)
                stars.secondGreatness
                    .attr("transform", function (d) {
                        return "scale(" + 0.05 * nodeSizeFactor * radius(d.size) + ")"
                    });
            if (stars.secondGreatnessOver)
                stars.secondGreatnessOver
                        .attr("transform", function (d) {
                            return "scale(" + 0.05 * nodeSizeFactor * radius(d.size) + ")"
                        });
            if (stars.thirdGreatness)
                stars.thirdGreatness
                    .attr("transform", function (d) {
                        return "scale(" + 0.1 * nodeSizeFactor * radius(d.size * d.tag.split(",").length) + ")"
                    });

            if (stars.thirdGreatnessOver)
                stars.thirdGreatnessOver
                    .attr("transform", function (d) {
                        return "scale(" + 0.5 * nodeSizeFactor * radius(d.size * d.tag.split(",").length) + ")"
                    });
        }

        function showedges(d) {
            hideedges(d);
            var arr = [];
            if (d instanceof Array) {
                arr = d.slice(0);
            }
            else {
                arr.push(d);
            }

            d = arr.pop();
            while(d) {
                graph.edges.
                    filter(function(m) {
                        return (m.si == d.index || m.ti == d.index) && m.target().visibile && m.source().visibile;
                }).forEach(function(l) {
                    svgnode
                        .insert("g", ":first-child")
                        .datum(l)
                        .attr("class", "link")
                        .append("path")
                        .style("stroke", function(m) { return d3.rgb(color(calcColor(m.target())))/*.brighter()*/; })
                        .style("stroke-width", function(m) { return sw(m.target().size) * nodeSizeFactor * 8/lastZoom })
                        .attr("d", function(m) {
                            var xs = m.source().rx,
                                ys = m.source().ry,
                                xt = m.target().rx,
                                yt = m.target().ry;

                            var x3 = .3 * yt - .3 * ys + .8 * xs + .2 * xt;
                            var y3 = .8 * ys + .2 * yt - .3 * xt + .3 * xs;
                            var x4 = .3 * yt - .3 * ys + .2 * xs + .8 * xt;
                            var y4 = .2 * ys + .8 * yt - .3 * xt + .3 * xs;

                            return "M " + xs + "," + ys + " C " + x3 + "," + y3 + " " + x4 + "," + y4 + " " + xt + "," + yt;
                        });
                })
                svgnode.selectAll(".nodelabel").style("visibility", function(b) {
                    return b.index == d.index && false ? null : d3.select(this).style("visibility")});
                d = arr.pop();
            }
        }

        function showtooltip(d, othertype) {
            showedges(d);
            var label = tooltip.select("#tooltiplabel");
            var cont = tooltip.select("#tooltipcontext");

            label.text(d.label);

            var html = "<ul>";
            var cases = d.type == undefined ? othertype : d.type.toString();
            switch (cases){
                case "-1":
                    html = "<span class='games " + replaceCountry[d.country.abbr].iso + "'></span>" + html;
                    html += "<li>Medals: <strong>" + d.size + "</strong></li>";
                    break;
                case "0":
                    var int = d.label.split(" ")[0];
                    html = "<span class='games g" + int + "'></span>" + html;
                    html += "<li>Sports: <strong>"
                         +  graph.edges.filter(function(l) { return l.si == d.index; }).length + "</strong></li>"
                         +  "<li><span class='label'>Country:</span> " + (
                            d.country.iso.indexOf(",") > 0
                         ?  "<span class='iso " + d.country.iso.split(",")[0] + "'></span>"
                                    + "<span class='iso " + d.country.iso.split(",")[1] + "'></span>"

                         :  "<span class='iso " + d.country.iso.split(",")[0] + "'></span>" )
                         +  "<span style='padding-right: 10px;'><strong>" + d.country.name + "</strong></span></li>";
                    break;
                case "1":
                    var int = d.label.replace(/\s/g, "_").toLowerCase();
                    html = "<span class='games " + int + "'></span>" + html;
                    html += "<li>Games: <strong>"
                         +  graph.nodes.filter(function(l) { return l.label == d.label}).length + "</strong></li>"
                         +  "<li>Sports events: <strong>"
                         +  graph.edges.filter(function(l) { return l.ti == d.index; }).length + "</strong></li>";
                    break;
                case "2":
                    html += "<li>Sports: <strong>" + graph.edges.filter(function(l) { return l.si == d.index }).map(function(l) {
                        return l.target().label;
                    }).join(", ") + "</strong>";
                    html += "<li>Medals on event: <strong>" + graph.edges.filter(function(l) { return l.ti == d.index }).length
                    + "</strong></li>";
                    break;
                case "3":
                    html += "<li>Games: <strong>" + graph.nodes.filter(function(l) { return l.label == d.label && d.country.name == l.country.name }).length + "</strong>"
                     +  "<li><span class='label'>Country:</span> " +
                        "<span class='iso " + replaceCountry[d.country.abbr].iso + "'></span>"
                     +  "<span style='padding-right: 10px;'><strong>" + d.country.name + "</strong></span></li>";
                    var meds = {};
                    html += "<li>Medals: <strong>" + graph.edges.filter(function(l) {
                        return l.si == d.index && (!meds[l.label] ? meds[l.label] = 1 : meds[l.label]++);
                    }).length
                    + "</strong><ul>" +
                        d3.keys(meds).map(function(m) { return "<li>" + m + ": <strong>" + meds[m] + "</strong></li>" }).join("")
                        + "</ul></li>";
                    break;
                case "#athletescont":
                    html += "<li>Games: <strong>" + d.values.length + "</strong>"
                         +  "<li><span class='label'>Country:</span> " +
                            "<span class='iso " + replaceCountry[d.values[0].country.abbr].iso + "'></span>"
                         +  "<span style='padding-right: 10px;'><strong>" + d.values[0].country.name + "</strong></span></li>";
                        var meds = {};
                        html += "<li>Medals on all games: <strong>" + d3.sum(d.values.map(function(j) {
                            return graph.edges.filter(function(l) {
                                return l.si == j.index && (!meds[l.label] ? meds[l.label] = 1 : meds[l.label]++);
                        }).length; }))
                        + "</strong><ul>" +
                            d3.keys(meds).map(function(m) {
                                return "<li>" + m + ": <strong>" + meds[m] + "</strong></li>";
                            }).join("")
                            + "</ul></li>";
                    break;
                case "#sportscont":
                    var int = d.key.replace(/\s/g, "_").toLowerCase();
                    html = "<span class='games " + int + "'></span>" + html;
                    html += "<li>Games: <strong>"
                         + d.values.length + "</strong></li>"
                         +  "<li>Sports events: <strong>"
                         + d3.sum(d.values.map(function(j) { return graph.edges.filter(function(l) { return l.ti == j.index; }).length })) + "</strong></li>";
                    break;
                case "#countriescont":
                    html += "<li>Medals: <strong>"
                         + d.values.length + "</strong></li>"
                        +  "<li><span class='label'>Country:</span> " +
                            "<span class='iso " + replaceCountry[d.values[0].country.abbr].iso + "'></span>"
                         +  "<span style='padding-right: 10px;'><strong>" + d.values[0].country.name + "</strong></span></li>";
                    break;
            }
            html += "</ul>";

            cont.html(html);

            tooltip.style("display", "block");
        }

        function movemouese() {
            tooltip
                .style("top", d3.event.pageY > height() * 3 / 4 ? (d3.event.pageY - tooltip.node().clientHeight - 6) + "px" : (d3.event.pageY + 12) + "px")
                .style("left", d3.event.pageX > width() * 3 / 4 ? (d3.event.pageX - tooltip.node().clientWidth - 6) + "px" : (d3.event.pageX + 12) + "px")
                ;
        }

        function hideedges(d) {
            tooltip.style("display", "none");
            svgnode.selectAll(".link").remove();
            refresh();
        }

        function makeBigStars() {
            resize();

            svg.select("#stateCont")
                .style("visibility", "hidden");

            stars.zeroGreatness = false;
            stars.firstGreatness = false;
            stars.secondGreatness = false;
            stars.thirdGreatness = false;

            proc = 0;
            graph.nodes
                .forEach(function(d) {
                    d.visibile = d.type < 2;
                });

            svgnode.selectAll(".nodesmall").remove();
            svgnode.selectAll(".nodebig").remove();

            var node = svgnode.selectAll(".nodebig")
                    .data(graph.nodes
                        .filter(function(d) {return d.visibile && d.type < 2;}))
                    .enter().append("g")
                    .attr("class", "nodebig node")
                    .on("mouseover", showtooltip)
                    .on("mousemove", movemouese)
                    .on("mouseout", hideedges);

            if (!stars.zeroGreatness) {
                stars.zeroGreatness = makeStars(node.filter(function(d) { return d.type == 0 }), showAsBall ? 5 : 0);
                if (showAsBall)
                    stars.zeroGreatness = false;
            }
            if (!stars.firstGreatness) {
                stars.firstGreatness = makeStars(node.filter(function(d) { return d.type == 1 }), showAsBall ? 5 : 1);
                if (showAsBall)
                    stars.firstGreatness = false;
            }

            translateNode(node);

            if (lastZoom > 3)
                makeSmallStars();
        }

        function makeSmallStars() {
            repaintTimer = false;
            resize();

            svg.select("#stateCont")
                .style("visibility", "hidden");

            stars.secondGreatness = false;
            stars.thirdGreatness = false;

            proc = 0;

            svgnode.selectAll(".nodesmall").filter(function(d) {
                return !((d.type == 2 && lastZoom > 3) || (d.type == 3 && lastZoom > 5)) || !vis(d.rx, d.ry);
            }).remove();

            node = svgnode.selectAll(".nodesmall");

            graph.nodes
                .forEach(function(d) {
                    var needVis = d.type > 1;
                    if (needVis) {
                        d.drawn = d.visibile;
                        d.needDel = !((d.type == 2 && lastZoom > 3) || (d.type == 3 && lastZoom > 5));
                        d.visibile = !d.needDel && vis(d.rx, d.ry);
                        if (d.drawn && !d.visibile)
                            d.drawn = !(d.needDel = true);
                        needVis = d.visibile && !d.drawn;
                    }
                    if (needVis) {
                        svgnode.append("g")
                            .on("mouseover", showtooltip)
                            .on("mousemove", movemouese)
                            .on("mouseout", hideedges)
                            .attr("class", "nodesmall node")
                            .datum(d);
                    }
                })

            var node = svgnode.selectAll(".nodesmall");

            if (!stars.secondGreatness) {
                stars.secondGreatness = makeStars(node.filter(function(d) {
                    return d.type == 2 && this.childNodes.length < 1
                }), showAsBall ? 5 : 2);
                if (showAsBall)
                    stars.secondGreatness = false;
            }
            if (!stars.thirdGreatness) {
                stars.thirdGreatness = makeStars(node.filter(function(d) {
                    return d.type == 3 && this.childNodes.length < 1
                }), showAsBall ? 5 : 3);
                if (showAsBall)
                    stars.thirdGreatness = false;
            }

            translateNode(node);
        }

        function tick_end() {
            makeLabel();
            makeBigStars();
        }
        buttonStarOffOn();
        buttonLabelRoot();
        buttonStat();

        if (drawGraph) {
            setTimeout(tick_end, 10);
            setTimeout(function() {
                initFilters("#athletescont", 3, stars.thirdGreatnessOver, 16, cAthletes,
                        function(d) { return d.label + " (" + d.country.abbr + ")"; }
                );
            }, 1500);
            setTimeout(function() {
                initFilters("#sportscont", 1, stars.firstGreatnessOver, 2, cSports, false,
                    function(d) {
                        var int = d.key.replace(/\s/g, "_").toLowerCase();
                        return int ? "<span><img style='vertical-align: middle;' width='16px' height='16px' src='sports/" + int + (int == "art_contests" ? ".png" : ".svg") + "' /> " + d.key + "</span>"
                                   : "<span>" + d.key + "</span>";
                });
            }, 1500);
            setTimeout(function() {
                initFilters("#countriescont", 3, stars.zeroGreatnessOver, 1/8, cCountries,
                    function(d) { return d.country.name + " (" + d.country.abbr + ")"; },
                    function(d) {
                        var int = d.key.replace(/(.*?)\((.*?)(,.*?)?\)/, "$2");
                        var iso = (replaceCountry[int] || {iso: false}).iso;
                        return iso ? "<span><img style='vertical-align: middle;' width='16px' height='10px' src='flags/" + iso + ".png' /> " + d.key + "</span>"
                                   : "<span>" + d.key + "</span>";
                    }
                );
            }, 1500);
        }

        function makeLabel() {
        }

        function makeStars(parent, typeStars) {
            if (!parent)
                return parent;

            var newParent = parent;

            switch (typeStars) {
                case 0 :
                    var dpath = function(d) {
                        var cof = Math.random() * d.size * 0.01;
                        var coord = [[0,27.89459],
                                     [-22.61303,50.50763],
                                     [-50.507621,50.50763],
                                     [-27.894591,0],
                                     [-50.507626,-22.61304],
                                     [-50.507626,-50.50763],
                                     [0,-27.894591],
                                     [22.613035,-50.507625],
                                     [50.507626,-50.507625],
                                     [27.894591,0],
                                     [50.507621,22.613034],
                                     [50.507621,50.507625]];
                        var path = "m 134.35028,75.54467 c ";
                        coord.forEach(function(m) {
                            m[0] += Math.random() * 0.02 + d.size * 0.2;
                            m[1] += Math.random() * 0.02 + d.size * 0.2;
                            path += m + " ";
                        });
                        return path + "z";
                    }

                    newParent = parent.append("g")
                            .style("opacity", 0)
                            .attr("class", "stars2");
                    newParent.append("g")
                            .attr("transform", "translate(-140, -58)")
                            .append("g")
                            .attr("class", "outter")
                            //.attr("transform", "translate(-157.5838,-167.68533)")
                            .append("path")
                            .attr("transform", "matrix(1.5656854,0,0,0.75958369,9.13997,-4.06119)")
                            .attr("sodipodi:sodipodi:ry", "50.507626")
                            .attr("sodipodi:sodipodi:rx", "50.507626")
                            .attr("sodipodi:sodipodi:cy", "75.54467")
                            .attr("sodipodi:sodipodi:cx", "83.842659")
                            .attr("sodipodi:sodipodi:type", "arc")
                            .attr("d", "m 134.35028,75.54467 c 0,27.89459 -22.61303,50.50763 -50.507621,50.50763 -27.894591,0 -50.507626,-22.61304 -50.507626,-50.50763 0,-27.894591 22.613035,-50.507625 50.507626,-50.507625 27.894591,0 50.507621,22.613034 50.507621,50.507625 z")
                            .style("opacity", 0.6)
                            .style("fill", function(d) { return color(calcColor(d)) })
                            .style("filter", "url(#filter3859)");
                    newParent.selectAll(".outter").append("path")
                            .attr("transform", "matrix(-0.81901553,0.04016906,-0.02181049,-0.44469885,227.01302,84.54806)")
                            .attr("sodipodi:sodipodi:ry", "50.507626")
                            .attr("sodipodi:sodipodi:rx", "50.507626")
                            .attr("sodipodi:sodipodi:cy", "75.54467")
                            .attr("sodipodi:sodipodi:cx", "83.842659")
                            .attr("sodipodi:sodipodi:type", "arc")
                            .attr("d", "m 134.35028,75.54467 c 0,27.89459 -22.61303,50.50763 -50.507621,50.50763 -27.894591,0 -50.507626,-22.61304 -50.507626,-50.50763 0,-27.894591 22.613035,-50.507625 50.507626,-50.507625 27.894591,0 50.507621,22.613034 50.507621,50.507625 z")
                            .style("opacity", 0.7)
                            .style("fill", function(d) { return d3.rgb(color(calcColor(d))).brighter() })
                            .style("filter", "url(#filter3859)");
                    newParent.selectAll(".outter").append("path")
                            .attr("sodipodi:sodipodi:type", "star")
                            .attr("style", "fill:#ffffff;fill-opacity:1")
                            .attr("sodipodi:sodipodi:sides", "9")
                            .attr("sodipodi:sodipodi:cx", "408.802")
                            .attr("sodipodi:sodipodi:cy", "662.41638")
                            .attr("sodipodi:sodipodi:r1", "34.595016")
                            .attr("sodipodi:sodipodi:r2", "0.80043751")
                            .attr("sodipodi:sodipodi:arg1", "1.2736714")
                            .attr("sodipodi:sodipodi:arg2", "1.6227373")
                            .attr("d", "m 418.93047,695.49552 -10.17002,-32.27978 -13.46246,31.05118 12.95836,-31.26491 -30.27215,15.13309 30.02337,-15.62084 -32.91717,-7.86594 33.04012,7.33239 -20.15989,-27.18441 20.59703,26.85472 2.03043,-33.783 -1.48364,33.81142 23.27069,-24.57413 -22.8701,24.94738 33.62234,-3.86677 -33.55538,4.41019 28.24172,18.64991 -28.53973,-18.19058 z")
                            .attr("transform", "matrix(0.60865681,-0.02610034,0.02610034,0.60865681,-125.24117,-338.82995)");
                    newParent.selectAll(".outter").append("path")
                            .attr("sodipodi:sodipodi:type", "arc")
                            .attr("style", "fill:#ffffff;fill-opacity:1;filter:url(#filter3831)")
                            .style("fill", function(d) { return color(calcColor(d)) })
                            .attr("sodipodi:sodipodi:cx", "83.842659")
                            .attr("sodipodi:sodipodi:cy", "75.54467")
                            .attr("sodipodi:sodipodi:rx", "50.507626")
                            .attr("sodipodi:sodipodi:ry", "50.507626")
                            .attr("d", "m 134.35028,75.54467 c 0,27.89459 -22.61303,50.50763 -50.507621,50.50763 -27.894591,0 -50.507626,-22.61304 -50.507626,-50.50763 0,-27.894591 22.613035,-50.507625 50.507626,-50.507625 27.894591,0 50.507621,22.613034 50.507621,50.507625 z")
                            .attr("transform", "matrix(0.1885681,0,0,0.1885681,124.60115,39.075996)");
                    newParent.selectAll(".outter").append("path")
                            .attr("transform", "matrix(0.39032722,0,0,0.39032722,107.68513,23.83417)")
                            .attr("sodipodi:sodipodi:ry", "50.507626")
                            .attr("sodipodi:sodipodi:rx", "50.507626")
                            .attr("sodipodi:sodipodi:cy", "75.54467")
                            .attr("sodipodi:sodipodi:cx", "83.842659")
                            .attr("sodipodi:sodipodi:type", "arc")
                            .attr("d", "m 134.35028,75.54467 c 0,27.89459 -22.61303,50.50763 -50.507621,50.50763 -27.894591,0 -50.507626,-22.61304 -50.507626,-50.50763 0,-27.894591 22.613035,-50.507625 50.507626,-50.507625 27.894591,0 50.507621,22.613034 50.507621,50.507625 z")
                            .style("fill-opacity", 0.7)
                            .style("fill", "url(#radialGradient3982)")
                            .style("filter", "url(#filter3831)");
                    newParent.selectAll(".outter").append("path")
                            .attr("transform", "matrix(0.39032722,0,0,0.39032722,107.68513,23.83417)")
                            .attr("sodipodi:sodipodi:ry", "50.507626")
                            .attr("sodipodi:sodipodi:rx", "50.507626")
                            .attr("sodipodi:sodipodi:cy", "75.54467")
                            .attr("sodipodi:sodipodi:cx", "83.842659")
                            .attr("sodipodi:sodipodi:type", "arc")
                            .attr("d", "m 134.35028,75.54467 c 0,27.89459 -22.61303,50.50763 -50.507621,50.50763 -27.894591,0 -50.507626,-22.61304 -50.507626,-50.50763 0,-27.894591 22.613035,-50.507625 50.507626,-50.507625 27.894591,0 50.507621,22.613034 50.507621,50.507625 z")
                            .style("fill-opacity", 0.7)
                            .style("fill", "url(#radialGradient3982)")
                            .style("filter", "url(#filter3831)");
                    newParent.transition()
                            .delay(100)
                            .style("opacity", 1);
                    break;
                case 1 :
                    newParent = parent.append("g")
                            .attr("class", "stars1");
                    newParent.append("g")
                            .attr("transform", "translate(-52, -52)")
                            .append("g")
                            .attr("class", "outter")
                            .attr("transform", "translate(-332.30773,-562.38891)")
                            .append("path")
                            .attr("d", "m 412.46549,642.0517 -27.56005,-26.9168 -0.45485,38.52095 -0.45484,-38.52095 -27.56006,26.9168 26.91681,-27.56005 -38.52095,-0.45485 38.52095,-0.45484 -26.9168,-27.56005 27.56005,26.9168 0.45485,-38.52095 0.45484,38.52095 27.56005,-26.9168 -26.9168,27.56005 38.52095,0.45485 -38.52095,0.45484 z")
                            .attr("sodipodi:sodipodi:arg2", "1.1780974")
                            .attr("sodipodi:sodipodi:arg1", "0.78539824")
                            .attr("sodipodi:sodipodi:r2", "1.1885713")
                            .attr("sodipodi:sodipodi:r1", "39.619045")
                            .attr("sodipodi:sodipodi:cy", "614.0368")
                            .attr("sodipodi:sodipodi:cx", "384.45059")
                            .attr("sodipodi:sodipodi:sides", "8")
                            .attr("sodipodi:sodipodi:type", "star")
                            .attr("style", function(d) {return "fill:" + color(calcColor(d)) + ";filter:url(#filter5909)"});
                    newParent.selectAll(".outter").append("path")
                            .attr("d", "m 415.91347,628.69075 -28.03151,-12.30866 8.45434,30.26423 -11.11773,-28.5248 -15.42192,27.37816 12.30865,-28.0315 -30.26423,8.45433 28.52481,-11.11773 -27.37817,-15.42192 28.03151,12.30866 -8.45434,-30.26424 11.11773,28.52481 15.42193,-27.37816 -12.30866,28.0315 30.26423,-8.45434 -28.5248,11.11774 z")
                            .attr("sodipodi:sodipodi:arg2", "0.59955522")
                            .attr("sodipodi:sodipodi:arg1", "0.43587706")
                            .attr("sodipodi:sodipodi:r2", "4.1562829")
                            .attr("sodipodi:sodipodi:r1", "34.70808")
                            .attr("sodipodi:sodipodi:cy", "614.0368")
                            .attr("sodipodi:sodipodi:cx", "384.45059")
                            .attr("sodipodi:sodipodi:sides", "8") //#deffff
                            .attr("style", function(d) {return "fill:" + d3.rgb(color(calcColor(d))).brighter() + ";fill-opacity:1;filter:url(#filter4888-1)"})
                            .attr("sodipodi:sodipodi:type", "star")
                            .attr("transform", "translate(-7.0792635e-6,0.86198797)");
                    break;
                case 2 :
                    var defs = d3.select("body").select("svg#mainsvg").selectAll("#starsZeroGr");
                    if (!defs[0].length)
                        defs = d3.select("body").select("svg#mainsvg").append("defs").attr("id", "starsZeroGr");

                    var makeGrad = function(d, type) {
                        if (!type)
                            type = 0;

                        if (defs.selectAll("#rg_st_" + type + "_" + d.index).empty())
                            defs.append("radialGradient")
                                    .attr("xlink:xlink:href", "#lg_st_" + type + "_" + d.index)
                                    .attr("id", "rg_st_" + type + "_" + d.index)
                                    .attr("cx", "398.24252")
                                    .attr("cy", "662.73962")
                                    .attr("fx", "398.24252")
                                    .attr("fy", "662.73962")
                                    .attr("r", type ? "47.601433" : "31.487122")
                                    .attr("gradientTransform", type ? "matrix(1,0,0,1.0336521,0,-22.302595)" : "matrix(1,0,0,1.0302824,0,-20.069346)")
                                    .attr("gradientUnits", "userSpaceOnUse");

                        if (defs.selectAll("#lg_st_" + type + "_" + d.index).empty()){
                            var lin = defs.append("linearGradient")
                                    .attr("id", "lg_st_" + type + "_" + d.index);
                                lin.append("stop")
                                    .attr("offset","0")
                                    .attr("style", "stop-color:#deffff;stop-opacity:1;")
                                    .style("stop-color", color(calcColor(d)));
                                lin.append("stop")
                                    .attr("offset","1")
                                    .attr("style", "stop-color:#deffff;stop-opacity:0;")
                                    .style("stop-color", color(calcColor(d)));
                        }

                        return "url(#rg_st_" + type + "_" + d.index + ")";
                    }

                    newParent = parent.append("g")
                            .attr("class", "stars0");
                    newParent.append("g")
                            .attr("transform", "translate(-98, -58)")
                            .append("g")
                            .attr("class", "outter")
                            .attr("transform", "translate(-309.89778,-605.66567)")
                            .append("path")
                            .attr("transform", "matrix(3.1757535,0,0,1,-854.82231,-0.388021)")
                            .attr("d", "m 410.74148,679.54857 -10.62929,-11.26426 -1.63785,15.40074 -1.97831,-15.36072 -10.37737,11.49676 7.42831,-13.5899 -15.15309,3.2014 13.99757,-6.62821 -14.14084,-6.31677 15.22023,2.86523 -7.72727,-13.42216 10.62928,11.26426 1.63785,-15.40074 1.97831,15.36071 10.37738,-11.49675 -7.42832,13.5899 15.1531,-3.2014 -13.99758,6.6282 14.14085,6.31678 -15.22024,-2.86523 z")
                            .attr("sodipodi:sodipodi:arg2", "1.2455696")
                            .attr("sodipodi:sodipodi:arg1", "0.93141043")
                            .attr("sodipodi:sodipodi:r2", "5.8514285")
                            .attr("sodipodi:sodipodi:r1", "20.946705")
                            .attr("sodipodi:sodipodi:cy", "662.73962")
                            .attr("sodipodi:sodipodi:cx", "398.24252")
                            .attr("sodipodi:sodipodi:sides", "10")
                            .attr("style", "opacity:0.7;" +
                                           "fill:url(#radialGradient6179);" +
                                           "fill-opacity:1;" +
                                           "filter:url(#filter6197)")
                            .style("fill", function(d) { return makeGrad(d, 0) })
                            .attr("sodipodi:sodipodi:type", "star");
                    newParent.selectAll(".outter").append("path")
                            .attr("sodipodi:sodipodi:type", "star")
                            .style("fill", function(d) { return color(curType = (calcColor(d))) })
                            .style("fill-opacity", "1")
                            .attr("sodipodi:sodipodi:sides", "9")
                            .attr("sodipodi:sodipodi:cx", "408.802")
                            .attr("sodipodi:sodipodi:cy", "662.41638")
                            .attr("sodipodi:sodipodi:r1", "34.595016")
                            .attr("sodipodi:sodipodi:r2", "0.80043751")
                            .attr("sodipodi:sodipodi:arg1", "1.2736714")
                            .attr("sodipodi:sodipodi:arg2", "1.6227373")
                            .attr("d", "m 418.93047,695.49552 -10.17002,-32.27978 -13.46246,31.05118 12.95836,-31.26491 -30.27215,15.13309 30.02337,-15.62084 -32.91717,-7.86594 33.04012,7.33239 -20.15989,-27.18441 20.59703,26.85472 2.03043,-33.783 -1.48364,33.81142 23.27069,-24.57413 -22.8701,24.94738 33.62234,-3.86677 -33.55538,4.41019 28.24172,18.64991 -28.53973,-18.19058 z");
                    newParent.selectAll(".outter").append("path")
                            .attr("sodipodi:type", "star")
                            .attr("style", "fill:url(#radialGradient6187);" +
                                           "fill-opacity:1;" +
                                           "filter:url(#filter6115)")
                            .style("fill", function(d) { return makeGrad(d, 1) })
                            .attr("sodipodi:sodipodi:sides", "9")
                            .attr("sodipodi:sodipodi:cx", "398.24252")
                            .attr("sodipodi:sodipodi:cy", "662.73962")
                            .attr("sodipodi:sodipodi:r1", "49.886093")
                            .attr("sodipodi:sodipodi:r2", "5.8514285")
                            .attr("sodipodi:sodipodi:arg1", "0.87716425")
                            .attr("sodipodi:sodipodi:arg2", "1.2262301")
                            .attr("d", "m 430.13641,701.09849 -29.91734,-32.85137 -2.20101,44.37809 -1.80156,-44.3961 -30.21177,32.58081 27.15719,-35.16741 -44.08609,5.5386 43.40879,-9.48349 -37.33205,-24.09518 39.34893,20.63785 -13.10992,-42.45456 16.87727,41.10252 17.24648,-40.94897 -13.49145,42.33486 39.53306,-20.28292 -37.54737,23.75825 43.32169,9.87375 -44.03447,-5.93511 z")
                            .attr("transform", "translate(10.469284,-0.46332952)");
                   break;
                case 3 :
                    newParent = parent.append("g")
                            .attr("class", "stars3");
                    newParent.append("g")
                            .attr("class", "inner")
                            .attr("transform", "translate(-25, -25)")
                            .append("g")
                            .attr("class", "outter")
                            .attr("transform", "translate(-1070.6413,-990.16135)");
                    newParent.selectAll(".outter").append("path")
                            .style("opacity", 0.4)
                            .attr("d", "m 1102.371,1016.991 c -0.094,4.524 -3.828,8.093 -8.35,7.982 -4.541,-0.111 -8.094,-3.863 -7.982,-8.35 0.09,-4.524 3.844,-8.09 8.367,-7.979 4.524,0.09 8.076,3.826 7.965,8.347 z")
                            .style("fill", function(d) { return color(calcColor(d)) });

                    newParent.selectAll(".inner")
                            .append("g")
                            .attr("class", "outter1")
                            .attr("transform", "matrix(0.95767353,0,0,0.95767353,-393.20808,-433.63763)")
                            .append("g")
                            .attr("transform", "matrix(1.25,0,0,-1.25,452.07562,480.62886)")
                            .append("path")
                            .attr("d", "M 0,0 C -14.945,0.799 -14.298,1.447 -13.5,-13.5 -12.701,1.447 -12.053,0.799 -27.001,0 -12.053,-0.799 -12.701,-1.446 -13.5,13.5 -14.298,-1.446 -14.945,-0.799 0,0")
                            .attr("style", "fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none")
                            .style("fill", function(d) {
                                return d3.rgb(color(calcColor(d)))
                                        .brighter()
                                        .brighter()
                                        .brighter()

                            });
                    newParent.selectAll(".outter1")
                            .append("g")
                            .attr("transform", "matrix(1.25,0,0,-1.25,111.99012,763.50118)")
                            .append("g")
                            .attr("clip-path", "url(#clipPath116341)")
                            .style("opacity", "0.5")
                            .append("g")
                            .attr("transform", "translate(262.6494,226.2979)")
                            .append("path")
                            .attr("d", "m 0,0 c 0,-2.252 -1.829,-4.08 -4.079,-4.08 -2.255,0 -4.083,1.828 -4.083,4.08 0,2.253 1.828,4.079 4.083,4.079 C -1.829,4.079 0,2.253 0,0")
                            .attr("style", "fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none")
                            .style("fill", function(d) {
                                return d3.rgb(color(calcColor(d)))
                                        .brighter()
                                        .brighter()
                                        .brighter()

                            });
                    break;
                default:
                        newParent.append("circle")
                            .attr("r", 0)
                            .style("fill", function(d) { return color(calcColor(d)); })
                            .style("stroke", function(d) { return d3.rgb(color(calcColor(d))).darker() })
                            .style("stroke-width", function(d) { return sw(d.size) * edgeSizeFactor})
                            .transition()
                            .delay(100)
                            .duration(1000)
                            .attr("r", function(d) { return radius(d.size) * nodeSizeFactor; });
                    break;
            }
            parent.append("text")
                .attr("class", "nodelabel")
                .attr("text-anchor", "middle")
                .attr("pointer-events", "none")
                .style("stroke", function(d) { return d3.rgb(color(calcColor(d))).darker().darker() })
                .style("fill", "#fff")
                .text(function(d) { return d.label })
                .attr("dy", ".35em")
                .style("stroke-width", function(d) { return sw(d.size) * edgeSizeFactor / lastZoom})
                .style("font-size", 24 / lastZoom + "pt")
                .style("visibility", function(d) { return d.type == 0 && showLabelOnRoot ? null : "hidden"});

            return newParent;
        }

        var timerClick = false;
        function buttonStarOffOn() {
            var but = d3.select("body").select("#mainsvg").selectAll("#starOnOff")
                        .data([{check : !showAsBall}])
                        .enter()
                        .append("g")
                        .attr("transform", "scale(1)translate(33, 20)")
                        .attr("id", "starOnOff")
                        .attr("class", "button")
                    .on("click", function(d) {
                        d.check = !d.check;
                        showAsBall = !d.check;
                        if (timerClick) {
                            clearTimeout(timerClick);
                            timerClick = false;
                        }
                        timerClick = setTimeout(tick_end, 500);

                        if (showAsBall)
                            toCircle();
                        else
                            toStar();

                        var item = d3.select(this);
                        item.select("title").text("stars " + (!showAsBall ? "off" : "on"));
                        item.select("text").text("stars " + (showAsBall ? "off" : "on"));
                        item.select(".outter").selectAll("path")
                                .style("fill", !showAsBall ? "#90E89B" : "#FBA09C");
                        item.select(".outter1").selectAll("path")
                                .style("fill", d3.rgb(!showAsBall ?  "#90E89B" : "#FBA09C")
                                    .brighter()
                                    .brighter()
                                    .brighter()
                                    );
                    });
            but.append("title").text("stars " + (!showAsBall ? "off" : "on"));
            but.append("text")
                    .style("fill", "#fff")
                    .attr("dy", "30px")
                    .attr("dx", "5px")
                    .attr("text-anchor", "middle")
                    .text("stars " + (showAsBall ? "off" : "on"));

            function toStar() {
                but.selectAll("g").remove();
                but.append("g")
                    .attr("class", "inner")
                    .attr("transform", "translate(-18, -21)")
                    .append("g")
                    .attr("class", "outter")
                    .attr("transform", "translate(-1070.6413,-990.16135)")
                but.selectAll(".outter").append("path")
                    .style("opacity", 0.4)
                    .attr("d", "m 1102.371,1016.991 c -0.094,4.524 -3.828,8.093 -8.35,7.982 -4.541,-0.111 -8.094,-3.863 -7.982,-8.35 0.09,-4.524 3.844,-8.09 8.367,-7.979 4.524,0.09 8.076,3.826 7.965,8.347 z")
                    .style("fill", !showAsBall ? "#90E89B" : "#FBA09C");
                but.selectAll(".inner")
                    .append("g")
                    .attr("class", "outter1")
                    .attr("transform", "matrix(0.95767353,0,0,0.95767353,-393.20808,-433.63763)")
                    .append("g")
                    .attr("transform", "matrix(1.25,0,0,-1.25,452.07562,480.62886)")
                    .append("path")
                    .attr("d", "M 0,0 C -14.945,0.799 -14.298,1.447 -13.5,-13.5 -12.701,1.447 -12.053,0.799 -27.001,0 -12.053,-0.799 -12.701,-1.446 -13.5,13.5 -14.298,-1.446 -14.945,-0.799 0,0")
                    .attr("style", "fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none")
                    .style("fill", function(d) {
                        return d3.rgb(!showAsBall ?  "#90E89B" : "#FBA09C")
                                .brighter()
                                .brighter()
                                .brighter()

                    });
                but.selectAll(".outter1")
                    .append("g")
                    .attr("transform", "matrix(1.25,0,0,-1.25,111.99012,763.50118)")
                    .append("g")
                    .attr("clip-path", "url(#clipPath116341)")
                    .style("opacity", "0.5")
                    .append("g")
                    .attr("transform", "translate(262.6494,226.2979)")
                    .append("path")
                    .attr("d", "m 0,0 c 0,-2.252 -1.829,-4.08 -4.079,-4.08 -2.255,0 -4.083,1.828 -4.083,4.08 0,2.253 1.828,4.079 4.083,4.079 C -1.829,4.079 0,2.253 0,0")
                    .attr("style", "fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none")
                    .style("fill", function(d) {
                        return d3.rgb(!showAsBall ?  "#90E89B" : "#FBA09C")
                                .brighter()
                                .brighter()
                                .brighter()
                    });
            }

            function toCircle() {
                but.selectAll("g").remove();
                but.append("g")
                    .attr("transform", "translate(5, 5)")
                    .append("circle")
                    .style("fill", !showAsBall ? "#90E89B" : "#FBA09C")
                    .style("stroke", d3.rgb(!showAsBall ? "#90E89B" : "#FBA09C").darker())
                    .style("stroke-width", 1.5)
                    .attr("r", 10);
            }

            if (showAsBall)
                toCircle();
            else
                toStar();
        }

        var timerStat = false;
        function buttonStat() {
            var but = d3.select("body").select("#mainsvg").selectAll("#statOffOn")
                .data([{check : showStatOnLoad}])
                .enter()
                .append("g")
                .attr("transform", "scale(1)translate(20, 80)")
                .attr("id", "statOffOn")
                .attr("class", "button")
                    .on("click", function (d) {
                        var item = d3.select(this);
                        d.check = !d.check;
                        if (d.check)
                            show();
                        else
                            hide();
                        chTxt(item);
                    });

            function chTxt(item) {
                item.select("title")
                    .text(function(d) {return "statistics " + (!d.check ? "show" : "hide")});
                item.select("text")
                    .text(function(d) {return "statistics " + (!d.check ? "show" : "hide")});
            }

            but.append("title");
            but.append("text")
                    .style("fill", "#fff")
                    .attr("dy", "30px")
                    .attr("dx", "20px")
                    .attr("text-anchor", "middle");
            chTxt(but);

            but = but.append("g")
                    .attr("transform", "scale(0.8)translate(2,-22)");
            but.append("rect")
                    .attr("y", "-2.7421434")
                    .attr("x", "-2.5253813")
                    .attr("height", "47.477169")
                    .attr("width", "53.033009")
                    .attr("style", "fill:#000000;fill-opacity:0.1;stroke:none");
            but.append("path")
                    .attr("d", "M 1.515229,41.199484 13.131983,13.420289 17.67767,23.016738 38.385797,9.379679")
                    .attr("style", "fill:none;stroke:#B5E2F7;stroke-width:1px;");
            but.append("path")
                    .attr("d", "m 0.505076,15.945671 4.545687,6.060915 2.525381,12.626907 15.152288,-3.535534 9.596449,-12.121831 6.565992,14.647212")
                    .attr("style", "fill:none;stroke:#00ff00;stroke-width:1px");
            but.append("path")
                    .attr("d", "m 38.385797,37.411411 c 0,3.486824 -2.6005,6.313453 -5.808378,6.313453 -3.207878,0 -5.808377,-2.826629 -5.808377,-6.313453 0,-3.486824 2.600499,-6.313453 5.808377,-6.313453 3.207878,0 5.808378,2.826629 5.808378,6.313453 z")
                    .attr("transform", "matrix(0.59999999,0,0,0.59999999,-0.101015,-7.763867)")
                    .attr("style", "fill:#c83737");
            but.append("path")
                    .attr("d", "m 45.456866,59.382229 c 0,2.510513 -1.809043,4.545686 -4.04061,4.545686 -2.231568,0 -4.04061,-2.035173 -4.04061,-4.545686 0,-2.510513 1.809042,-4.545686 4.04061,-4.545686 2.231567,0 4.04061,2.035173 4.04061,4.545686 z")
                    .attr("transform", "translate(-10.606602,-28.284271)")
                    .attr("style", "fill:#ffff00");
            but.append("path")
                    .attr("d", "m 1.515229,0.288307 -1.010153,41.416254 0,0 46.972093,-1.010153")
                    .attr("style", "fill:none;stroke:#a8afbd;stroke-width:1px;");

            var divstat = d3.select("#statcont")
                    .style("display", "none")
                    .style("top", "80px")
                    .style("left", "80px");
            divstat.select("div:first-child")
                    .style("opacity", 1);

            var w = width() - 290,
                h = height() - 290,
                ma = {top: 40, right: 40, bottom: 40, left: 40};

            var svgstat = divstat.select("div:first-child").select("svg")
                    .attr("width", w + ma.left + ma.right)
                    .attr("height", h + ma.top + ma.bottom);

            // sport countries to medals
            var sCTM = function() {
                var dataset = false;
                var dataforyear = false;
                var curYear = [-1,0,1];
                var hm = h / 1.8,
                    ha = h / 3;

                var r = function(k, ind, data, i) {
                            if (arguments.length < 4)
                                i = (k.values[haveDate[curYear[1]]] || 0) - 1;
                            else
                                i = (k.values[i] || 0) - 1;
                            return i >= 0 ? k.values[i].cType2s.length : 0;
                        },
                    ra = function(k, ind, data, i) {
                            if (arguments.length < 4)
                                i = (k.values[haveDate[curYear[1]]] || 0) - 1;
                            else
                                i = (k.values[i] || 0) - 1;
                            return i >= 0 ? k.values[i].cTypeAs.length : 0;
                        },
                    x = function(k, ind, data, i) {
                            if (arguments.length < 4)
                                i = (k.values[haveDate[curYear[1]]] || 0) - 1;
                            else
                                i = (k.values[i] || 0) - 1;
                            return i >= 0 ? k.values[i].cType3s.length : 0;
                        },
                    y = function(k, ind, data, i) {
                            if (arguments.length < 4)
                                i = (k.values[haveDate[curYear[1]]] || 0) - 1;
                            else
                                i = (k.values[i] || 0) - 1;
                            return i >= 0 ? d3.keys(k.values[i].countries).length : 0;
                        },
                    countries = function(k, ind, data, i) {
                            if (arguments.length < 4)
                                i = (k.values[haveDate[curYear[1]]] || 0) - 1;
                            else
                                i = (k.values[i] || 0) - 1;
                            return i >= 0 ? k.values[i].countries : [];
                        },
                    c = function(l) { return l.count; };

                var xScale = d3.scale.linear()
                            .range([0, w]),
                    yScale = d3.scale.linear()
                            .range([hm, 0]),
                    rScale = d3.scale.sqrt()
                            .range([0, 20]),
                    cScale = d3.scale.category20(),
                    xYearScale = d3.scale.linear()
                            .domain(d3.extent(haveDate))
                            .range([0, w]),
                    xAdYearScale = d3.scale.linear()
                            .domain(d3.extent(realDate))
                            .range([0, w/2]),
                    yAdScaleC = d3.scale.linear()
                            .range([ha, 0 * ha / 3]),
                    yAdScaleM = d3.scale.linear()
                            .range([ha, 0]);


                var position = function(item) {
                    item.transition()
                        .delay(500)
                        .duration(500)
                            .attr("transform", function(k) { return "translate(" + [xScale(x(k)), yScale(y(k))] + ")"; })
                            .select("circle.ev")
                            .transition()
                            .duration(500)
                            .attr("r", function(k) {
                                return rScale(r(k));
                            });
                    item.select("circle.ath")
                            .transition()
                            .duration(500)
                            .attr("r", function(k) {
                                return rScale(ra(k));
                            });;
                }

                var comp = function(a, b) {
                    return r(b) - r(a);
                }

                var compCountry = function(a, b) {
                    return d3.ascending(
                        d3.sum(b.medals.map(function(l) { return l.count })),
                        d3.sum(a.medals.map(function(l) { return l.count })));
                }

                var xAxis = d3.svg.axis().orient("bottom").scale(xScale).ticks(20, d3.format(",d")),
                    yAxis = d3.svg.axis().scale(yScale).orient("left"),
                    xYsAxis = d3.svg.axis().orient("bottom").scale(xYearScale).tickFormat(d3.format("d"))
                            .tickValues(haveDate),
                    xAdYsAxis = d3.svg.axis().orient("bottom").scale(xAdYearScale).tickFormat(d3.format("d"))
                            //.tickValues(haveDate)
                            .ticks(10);

                var svgchart,
                    svgYearsLine,
                    svgadchart,
                    svgcochart,
                    svgcolist,
                    sportLabel,
                    imgSport,
                    infostat,
                    mlabel,
                    clabel,
                    alabel,
                    selabel,
                    x_axis,
                    y_axis,
                    dots,
                    runner,
                    areaC,
                    areaM,
                    lineC,
                    lineM,
                    dotsSelect,
                    curLinked,
                    playBut;

                var bp = d3.layout.pack()
                    .size([w / 4 + 50, ha + 30])
                    .value(function(l) { return l.count; });

                function sCTM() {
                    var item = this;

                    if (!sCTM.initialized) {

                        sCTM.makeArea = function(M, C, year, ym, yc, cMa, cMl, cCa, cCl, op) {
                            svgadchart.selectAll(".areaPath").remove();
                            svgadchart.selectAll(".topgraphleg, .bottomgraphleg")
                                    .style("fill", "none")
                                    .style("stroke", "none");

                            yAdScaleM.domain(d3.extent(M.map(c).concat(C.map(c))));
                            //yAdScaleC.domain(d3.extent(C.map(c)));

                            svgadchart.selectAll(".areaPath").remove();
                            svgadchart.append("path")
                                    .attr("class", "areaPath")
                                    .style("fill", cMa)
                                    .attr("d", areaM(M));
                            svgadchart.append("path")
                                    .attr("class", "areaPath")
                                    .style("fill", "none")
                                    .style("stroke", cMl)
                                    .attr("d", lineM(M));
                            svgadchart.append("path")
                                    .attr("class", "areaPath")
                                    .style("fill", cCa)
                                    .style("fill-opacity", op)
                                    .attr("d", areaM(C));
                            svgadchart.append("path")
                                    .attr("class", "areaPath")
                                    .style("fill", "none")
                                    .style("stroke", cCl)
                                    .attr("d", lineM(C));
                            svgadchart.selectAll(".topgraphleg")
                                    .style("fill", cMa)
                                    .style("stroke", cMl);
                            svgadchart.selectAll(".bottomgraphleg")
                                    .style("fill", cCa)
                                    .style("stroke", cCl);

                            svgadchart.selectAll(".gCurPosOnLine").remove();
                            var g = svgadchart.append("g")
                                    .attr("class", "gCurPosOnLine")
                                    .attr("transform", "translate(" + [xAdYearScale(year), 0] + ")")
                                    .attr("height", ha);
                            g.append("path")
                                    .attr("d", "M 0, " + d3.min([yAdScaleM(ym), yAdScaleM(yc)]) + " L 0, " + ha);
                            g.append("circle")
                                    .attr("class", "curPosOnLine")
                                    .attr("cy", yAdScaleM(ym))
                                    .attr("r", 5);
                            g.append("circle")
                                    .attr("class", "curPosOnLine")
                                    .attr("cy", yAdScaleM(yc))
                                    .attr("r", 5);
                            g.append("text")
                                    .attr("text-anchor", "end")
                                    .attr("x", ha)
                                    .attr("transform", "rotate(90)")
                                    .text(year);
                        }

                        sCTM.countriesRate = function(ck) {
                            svgcochart.selectAll("g.coStats").remove();
                            var bubbles = svgcochart.data([
                                {
                                    key:"countries",
                                    type:0,
                                    children:ck.map(function (l) {
                                        return {key:l.key, type:1,
                                            children:l.medals
                                        };
                                    })
                                }
                            ])
                                    .selectAll("g.coStats")
                                    .data(bp.nodes)
                                    .enter()
                                    .append("g")
                                    .attr("class", "coStats")
                                    .attr("transform", function (l) {
                                        return "translate(" + l.x + "," + l.y + ")";
                                    });

                            bubbles.append("title")
                                    .text(function (l) {
                                        return l.key + (l.children ? "" : ": " + l.count);
                                    });

                            bubbles.append("circle")
                                    .style("fill", function (l) {
                                        return l.type ? l.type == 1 ? cCountry(l.key) : cMedals(l.key) : "none"
                                    })
                                    .style("stroke", function(l) {
                                        return l.type == 2 ? d3.rgb(cMedals(l.key)).darker() : "none";
                                    })
                                    .transition()
                                    .duration(150)
                                    .attr("r", function (l) {
                                        return l.r + (l.type == 1 && l.children && l.children.length == 1 ? l.r * 0.05 : 0);
                                    });

                            bubbles.filter(function (l) {
                                return !l.children && l.r > 8;
                            }).append("text")
                                    .attr("text-anchor", "middle")
                                    .attr("dy", ".3em")
                                    .text(function (l) {
                                        return l.count;
                                    })

                            svgcolist.selectAll(".coListItem").remove();
                            var table = svgcolist.selectAll(".coListItem").data(ck.filter(function (l, i) {
                                return i < 10;
                            }))
                                    .enter()
                                    .append("g")
                                    .attr("class", "coListItem")
                                    .attr("transform", function (l, i) {
                                        return "translate(0, " + i * 16 + ")";
                                    });
                            table.append("rect")
                                    .attr("width", 10)
                                    .attr("height", 10)
                                    .attr("x", -10)
                                    .attr("y", -9.5)
                                    .attr("fill", function (l) {
                                        return cCountry(l.key);
                                    })
                            table.append("text")
                                    .attr("class", "name")
                                    .attr("x", 5)
                                    .text(function (l) {
                                        return l.key
                                    });

                            var wg = +svgcolist.attr("width") - 20;
                            table.append("text")
                                    .attr("x", wg - 30)
                                    .attr("y", -1)
                                    .style("fill", cMedals("BRONZE"))
                                    .text(function (l) {
                                        var m = l.medals.filter(function (m) {
                                            return m.key == "BRONZE"
                                        });
                                        return m.length > 0 ? m[0].count : 0;
                                    });
                            table.append("text")
                                    .attr("x", wg - 50)
                                    .attr("y", -1)
                                    .style("fill", cMedals("SILVER"))
                                    .text(function (l) {
                                        var m = l.medals.filter(function (m) {
                                            return m.key == "SILVER"
                                        });
                                        return m.length > 0 ? m[0].count : 0;
                                    });
                            table.append("text")
                                    .attr("x", wg - 70)
                                    .attr("y", -1)
                                    .style("fill", cMedals("GOLD"))
                                    .text(function (l) {
                                        var m = l.medals.filter(function (m) {
                                            return m.key == "GOLD"
                                        });
                                        return m.length > 0 ? m[0].count : 0;
                                    });
                            table.insert("rect", ":first-child")
                                    .attr("x", -12)
                                    .attr("y", -11)
                                    .attr("class", "bg")
                                    .attr("width", wg)
                                    .attr("height", 13);
                        }

                        sCTM.mout = function(k) {
                            var year = haveDate[curYear[1]],
                                dyear = dataforyear[year + "y"];

                            sportLabel.text(year);
                            imgSport.style("fill", "url(#s" + year + ")");

                            mlabel.text(mlabel.text().split(":")[0] + ": " + dataforyear.M[dyear.Mi].count);
                            clabel.text(clabel.text().split(":")[0] + ": " + dataforyear.C[dyear.Ci].count);
                            selabel.text(selabel.text().split(":")[0] + ": " + dataforyear.S[dyear.Si].count);
                            alabel.text(alabel.text().split(":")[0] + ": " + dataforyear.A[dyear.Ai].count);

                            dots.selectAll(".xCoord").remove();
                            if(curLinked) {
                                var item = d3.select(curLinked)
                                        .transition()
                                        .duration(150)
                                        .attr("transform", function(l) {
                                            l.linked = false;
                                            return "translate(" + [xScale(x(l)), yScale(y(l))] + ")"
                                        })
                                    item.select("circle.ev")
                                        .style("fill", function(l) { return cScale(l.key) });
                                    item.select("text")
                                        .style("visibility", "hidden");
                                        //.style("stroke", function(l) { return d3.rgb(cScale(l.key)).darker().darker() });
                                curLinked = false;
                            }

                            if (dotsSelect) {
                                dotsSelect.transition()
                                        .duration(150)
                                        .attr("transform", function(l) {
                                            l.linked = false;
                                            return "translate(" +  [xScale(x(l)), yScale(y(l))] + ")"
                                        })
                                        .selectAll("path, .xCoord").remove();
                                dotsSelect.select("text")
                                        .style("visibility", "hidden");
                                dotsSelect.selectAll("circle.ev")
                                        .style("fill", function(l) { return cScale(l.key); });
                                        //.style("stroke", function(l) { return d3.rgb(cScale(l.key)).darker().darker(); });
                            }
                            dots.sort(comp);

                            sCTM.makeArea(dataforyear.M, dataforyear.C, year,
                                    dataforyear.M[dyear.Mi].count,
                                    dataforyear.C[dyear.Ci].count,
                                    "#59C0ED", "#18A4E3", "#FFA560", "#FF7E1B", .8);
                            sCTM.countriesRate(dataforyear[year + "y"].countries);
                        }

                        sCTM.mover = function(k) {

                            var year = haveDate[curYear[1]],
                                dyear = {
                                    Mi : k.M.map(function(l, i) { return {key : l.key, ind : i} })
                                            .filter(function(l) { return l.key == year })[0].ind,
                                    Ci : k.C.map(function(l, i) { return {key : l.key, ind : i} })
                                            .filter(function(l) { return l.key == year })[0].ind
                                };
                            k.linked = true;

                            curLinked = this;

                            sportLabel.text(k.key);
                            imgSport.style("fill", "url(#s" + k.key.replace(/\s/g, "_").toLowerCase() + ")");

                            mlabel.text(mlabel.text().split(":")[0] + ": " + x(k));
                            clabel.text(clabel.text().split(":")[0] + ": " + y(k));
                            selabel.text(selabel.text().split(":")[0] + ": " + r(k));
                            alabel.text(alabel.text().split(":")[0] + ": " + ra(k));

                            dotsSelect = dots.filter(function(l) {
                                return xScale(x(k)) == xScale(x(l)) && yScale(y(k)) == yScale(y(l)) && k.key != l.key;
                            });

                            if (curLinked) {
                                var item = d3.select(curLinked);
                                    item.transition()
                                            .duration(150)
                                            .attr("transform", function(l) { return "scale(2)translate(" + [xScale(x(l)) / 2, yScale(y(l)) / 2] + ")"});
                                    item.select("title").text(function(l) {
                                        return "sports events: " + r(l) + "\n" + "athletes: " + ra(l);
                                    })
                                    item.select("text")
                                            .style("visibility", null);
                                    item.select("circle.ev")
                                            .transition()
                                            .duration(150)
                                            .style("fill", function(l) { return d3.rgb(cScale(k.key)).brighter() });
                                            //.style("stroke", "#fff");
                                    dots.selectAll(".xCoord").remove();
                                    item.insert("path", ":first-child")
                                        .attr("class", "xCoord")
                                        .style("stroke-width", "0.2px")
                                        .style("stroke", function(l) { return d3.rgb(cScale(k.key)).darker() })
                                        .attr("d", function(l) { return "M 0, 0 L 0, 0"; })
                                        .transition()
                                        .duration(150)
                                        .each("end", function() {
                                                item.insert("text", ":first-child")
                                                    .attr("class", "xCoord x label")
                                                    .attr("y", function(l) { return (hm / 2 - yScale(y(l)) / 2); })
                                                    .attr("x", "0.4px")
                                                    .style("font-size", "5px")
                                                    .text(function(l) { return x(l) });
                                                item.insert("text", ":first-child")
                                                    .attr("class", "xCoord x label")
                                                    .attr("y", function(l) { return (hm / 2 - yScale(y(l)) / 2); })
                                                    .attr("x", "0.4px")
                                                    .style("fill", function(l) { return d3.rgb(cScale(k.key)).brighter().brighter(); })
                                                    .text(function(l) { return x(l) })
                                                    .transition()
                                                    .duration(500)
                                                    .style("font-size", "20px")
                                                    .style("opacity", 0)
                                                    .remove();
                                                    ;
                                        })
                                        .attr("d", function(l) { return "M 0, 0 L 0, " + (hm / 2 - yScale(y(l)) / 2); });
                                    item.insert("path", ":first-child")
                                                .attr("class", "xCoord")
                                                .style("stroke-width", "0.2px")
                                                .style("stroke", function(l) { return d3.rgb(cScale(k.key)).darker() })
                                                .attr("d", function(l) { return "M 0, 0 L 0, 0"; })
                                                .transition()
                                                .duration(150)
                                                .each("end", function() {
                                                        item.insert("text", ":first-child")
                                                            .attr("class", "xCoord y label")
                                                            .attr("y", "0.4px")
                                                            .attr("x", function(l) { return ( -xScale(x(l)) / 2); } )
                                                            .style("font-size", "5px")
                                                            .text(function(l) { return y(l) });
                                                        item.insert("text", ":first-child")
                                                            .attr("class", "xCoord y label")
                                                            .attr("y", "0.4px")
                                                            .attr("x", function(l) { return ( -xScale(x(l)) / 2); } )
                                                            .style("fill", function(l) { return d3.rgb(cScale(k.key)).brighter().brighter(); })
                                                            .text(function(l) { return y(l) })
                                                            .transition()
                                                            .duration(500)
                                                            .style("font-size", "20px")
                                                            .style("opacity", 0)
                                                            .remove();
                                                            ;
                                                })
                                                .attr("d", function(l) { return "M 0, 0 L " + (-xScale(x(l)) / 2) + ", 0"; });
                            }

                            dotsSelect.transition()
                                    .duration(150)
                                    .attr("transform", function(l, i) {
                                        l.linked = true;
                                        return "scale(2)translate(" +
                                                [xScale(x(k)) / 2 + r(k) * 2 * Math.sin(i * Math.PI),
                                                 yScale(y(k)) / 2 + r(k) * 2 * Math.cos(i * Math.PI)] + ")"
                                    })
                                    .selectAll("text")
                                    .transition()
                                    .duration(150)
                                    .style("visibility", null);
                            dotsSelect.selectAll("circle.ev")
                                    .transition()
                                    .duration(150)
                                    .style("fill", function(l) { return d3.rgb(cScale(l.key)); });
                                    //.style("stroke", "#fff");

                            dots.sort(function(a, b) {
                                return a.linked ? 1 : comp(a, b);
                            });

                            sCTM.makeArea(k.M, k.C, year,
                                    k.M[dyear.Mi].count,
                                    k.C[dyear.Ci].count,
                                    d3.rgb(cScale(k.key)).brighter().brighter(),
                                    d3.rgb(cScale(k.key)).brighter(),
                                    cScale(k.key),
                                    d3.rgb(cScale(k.key)).darker(), .3)

                            sCTM.countriesRate(countries(k));
                        }

                        svgYearsLine = item.append("g")
                                .attr("width", w)
                                .attr("height", ma.top / 2)
                            .attr("transform", "translate(" + [ma.left , ma.top + ma.top / 2 + hm] + ")")
                            .call(d3.behavior.drag().on("drag", function() {
                                var newX = +runner.attr("x") + d3.event.dx;
                                if (newX < xYearScale(haveDate[0]))
                                    newX = xYearScale(haveDate[0]);
                                if (newX > xYearScale(haveDate[haveDate.length - 2]))
                                    newX = xYearScale(haveDate[haveDate.length - 2]);

                                var xp = xYearScale(haveDate[curYear[0]]),
                                    xc = xYearScale(haveDate[curYear[1]]),
                                    xn = xYearScale(haveDate[curYear[2]]);

                                var dw = runner.attr("width") / 3,
                                    xwd = +runner.attr("x") + dw;

                                runner
                                    .attr("x", newX);

                                if (xwd > xn)
                                    recalcDate(haveDate[curYear[2]]);
                                else if (xwd < xc)
                                    recalcDate(haveDate[curYear[0]]);
                            })
                            .on("dragend", function() {
                                resizeRunner();
                            }));
                        svgYearsLine.append("g")
                            .attr("class", "x axis")
                            .attr("transform", "translate(" + [0, 10] + ")")
                            .call(xYsAxis);

                        function resizeRunner() {
                            runner
                                .transition()
                                .duration(300)
                                .attr("x", xYearScale(haveDate[curYear[1]]))
                                .attr("width", xYearScale(haveDate[curYear[2]]) - xYearScale(haveDate[curYear[1]]))
                        }

                        svgYearsLine.selectAll(".runnerPos")
                                .data(haveDate.filter(function(k, i) {return i < haveDate.length - 1;}))
                                .enter()
                                .append("rect")
                                .attr("class", "runnerPos")
                                .attr("width", function(k, i) {
                                    return xYearScale(haveDate[i+1]) - xYearScale(k);
                                })
                                .attr("x", function(k) { return xYearScale(k)})
                                .attr("height", 10)
                                .on("click", function(k) {
                                    recalcDate(k);
                                    resizeRunner();
                                });

                        runner = svgYearsLine.append("rect")
                            .attr("class", "runner")
                            .attr("height", 10);

                        d3.json("statdata.json", function (datasets) {

                            dataset = datasets.dataset;
                            dataforyear = datasets.dataforyear;

                            init();

                            infostat = item.append("g")
                                    .attr("width", w / 2)
                                    .attr("height", ha + 30)
                                    .attr("transform", "translate(" + [ma.left + w / 2, 2.5 * ma.top + hm] + ")");

                            sportLabel = infostat.append("text")
                                    .attr("class", "typeLabel")
                                    .attr("x", ma.left - 15)
                                    .attr("y", ma.top - 28);

                            imgSport = infostat.append("rect")
                                .attr("class", "typeImage")
                                .attr("width", "56px")
                                .attr("height", "56px")
                                .attr("x", ma.left + 100)
                                .attr("y", ma.top - 23);

                            mlabel = infostat.append("text")
                                    .attr("class", "aLabel")
                                    .attr("x", ma.left - 15)
                                    .attr("y", ma.top - 10)
                                    .text("medals");

                            alabel = infostat.append("text")
                                    .attr("class", "aLabel")
                                    .attr("x", ma.left - 15)
                                    .attr("y", ma.top + 3)
                                    .text("athletes");

                            clabel = infostat.append("text")
                                    .attr("class", "aLabel")
                                    .attr("x", ma.left - 15)
                                    .attr("y", ma.top + 16)
                                    .text("countries");

                            selabel = infostat.append("text")
                                    .attr("class", "aLabel")
                                    .attr("x", ma.left - 15)
                                    .attr("y", ma.top + 29)
                                    .text("sports events");

                            svgcochart = infostat.append("g")
                                    .attr("width", w / 4 + 50)
                                    .attr("height", ha + 30)
                                    .attr("transform", "translate(" + [w / 4, 0] + ")");

                            svgcolist = infostat.append("g")
                                    .attr("width", w / 4)
                                    .attr("height", ha - (ma.top + 2))
                                    .attr("transform", "translate(" + [ma.left - 15 / 4, ma.top + 48] + ")");

                            svgadchart = item.append("g")
                                .attr("width", w / 2)
                                .attr("height", ha + 30)
                                .attr("transform", "translate(" + [ma.left , 2.5 * ma.top + hm] + ")");

                            svgadchart.append("g")
                                .attr("class", "x axis")
                                .attr("transform", "translate(" + [0 , ha] + ")")
                                .call(xAdYsAxis);

                            var g = svgadchart.append("g")
                                    .attr("transform", "translate(" + [0 , ha + 25] + ")");
                            g.append("rect")
                                    .attr("height", 10)
                                    .attr("width", 10)
                                    .attr("y", -8)
                                    .attr("class", "topgraphleg");
                            g.append("text")
                                    .attr("dx", "15px")
                                    .text("medals");
                            g = svgadchart.append("g")
                                    .attr("transform", "translate(" + [0 , ha + 38] + ")");
                            g.append("rect")
                                    .attr("height", 10)
                                    .attr("width", 10)
                                    .attr("y", -8)
                                    .attr("class", "bottomgraphleg");
                            g.append("text")
                                    .attr("dx", "15px")
                                    .text("countries");

                            areaC = d3.svg.area()
                                .interpolate("monotone")
                                .x(function(k) { return xAdYearScale(k.key); })
                                .y0(ha)
                                .y1(function(k) { return yAdScaleC(k.count); });
                            lineC = d3.svg.line()
                                .interpolate("monotone")
                                .x(function(k) { return xAdYearScale(k.key); })
                                .y(function(k) { return yAdScaleC(k.count); });

                            areaM = d3.svg.area()
                                .interpolate("monotone")
                                .x(function(k) { return xAdYearScale(k.key); })
                                .y0(ha)
                                .y1(function(k) { return yAdScaleM(k.count); });
                            lineM = d3.svg.line()
                                .interpolate("monotone")
                                .x(function(k) { return xAdYearScale(k.key); })
                                .y(function(k) { return yAdScaleM(k.count) });

                            svgchart = item.append("g")
                                .attr("width", w)
                                .attr("height", hm)
                                .attr("transform", "translate(" + ma.left + "," + ma.top + ")");

                            svgchart.append("text")
                                .attr("class", "x label")
                                .attr("text-anchor", "end")
                                .attr("x", w)
                                .attr("y", hm - 6)
                                .text("medals");

                            svgchart.append("text")
                                .attr("class", "label")
                                .attr("id", "lyaer")
                                .attr("text-anchor", "end")
                                .attr("x", w)
                                .attr("y", hm - 20)
                                .style("font-size", "14pt")
                                .text("1896");

                            svgchart.append("text")
                                .attr("class", "y label")
                                .attr("text-anchor", "end")
                                .attr("y", 6)
                                .attr("dy", ".75em")
                                .attr("transform", "rotate(-90)")
                                .text("countries");

                            x_axis = svgchart.append("g")
                                .attr("class", "x axis")
                                .attr("transform", "translate(" + 0 + "," + hm + ")");

                            y_axis = svgchart.append("g")
                                .attr("class", "y axis");

                            var dotsInit = !dots;

                            dots = !dotsInit ? dots : svgchart.selectAll(".dots")
                                    .data(dataset)
                                    .enter()
                                    .append("g")
                                    .attr("class", "dots")
                                    .on("mouseover", sCTM.mover)
                                    .on("mouseout", sCTM.mout);
                            if (dotsInit) {
                                dots.append("title")
                                        .text(function(k) {
                                            return "sports events: " + r(k) + "\n" + "athletes: " + ra(k);
                                        });
                                dots.append("circle")
                                        .attr("class", "ath")
                                        .style("fill", function(k) {return cScale(k.key); })
                                        .style("fill-opacity", 0.2);
                                        //.style("stroke", function(k) {return d3.rgb(cScale(k.key)).brighter().brighter(); });
                                dots.append("circle")
                                        .attr("class", "ev")
                                        .attr("pointer-events", "none")
                                        .style("fill", function(k) {return cScale(k.key); });
                                        //.style("stroke", function(k) {return d3.rgb(cScale(k.key)).darker().darker(); });
                                dots.append("text")
                                        .style("visibility", "hidden")
                                        .attr("text-anchor", "middle")
                                        .attr("dy", ".35em")
                                        .attr("pointer-events", "none")
                                        .style("cursor", "default")
                                        .text(function(k) { return k.key });
                            }

                            item.append("text")
                                    .text("Sports")
                                    .attr("y", 20)
                                    .attr("class", "chartCaption");
                            recalcDate(haveDate[curYear[1]]);

                            var playInterval;
                            playBut = item.append("g")
                                    .attr("width", 16)
                                    .attr("height", 16)
                                    .attr("transform", "translate(" + [ma.left - 16 , ma.top + ma.top / 2 + hm - 5] + ")")
                                .on("click", function() {
                                    if (playInterval) {
                                        clearInterval(playInterval);
                                        recalcDate(haveDate[curYear[1]]);
                                        d3.select(this).select("path")
                                            .attr("d", "M 0,0 L 0,16 16,8 z")
                                            .style("fill", "#5EE177");
                                        playInterval = undefined;
                                    }
                                    else {
                                        d3.select(this).select("path")
                                            .attr("d", "M 0,0 L 0,16 16,16 16,0 z")
                                            .style("fill", "#FF746A");
                                        function step() {
                                            var i = curYear[2];
                                            if (curYear[1] == curYear[2] || curYear[2] == haveDate.length - 1)
                                                i = 0;
                                            recalcDate(haveDate[i]);
                                            resizeRunner();
                                        }
                                        step();
                                        playInterval = setInterval(step, 3000);
                                    }
                                })
                                .on("mouseover", function() {
                                    d3.select(this).select("path")
                                        .transition()
                                        .duration(150)
                                        .style("fill-opacity", 1);
                                })
                                .on("mouseout", function() {
                                    d3.select(this).select("path")
                                        .transition()
                                        .duration(150)
                                        .style("fill-opacity", .5);
                                })
                                .append("path")
                                .attr("d", "M 0,0 L 0,16 16,8 z")
                                .style("fill", "#5EE177")
                                .style("fill-opacity", .5);
                            sCTM.initialized = true;
                        });
                    }
                    else {
                        recalcDate(haveDate[curYear[1]]);
                    }
                }

                function init() {
                    function childs(l, i) {
                        var medals = {};
                        l.values.forEach(function(m) {
                            graph.edges.filter(function(n) {
                                    return n.si == m.index
                                        && ( !medals[n.label]
                                           ? medals[n.label] = 1
                                           :  medals[n.label]++
                                           )
                                        ;
                            });
                        });

                        return d3.keys(medals).map(function(m) {
                            return {key: m, type: 2, count: medals[m]};
                        });
                    }


                    var notInit = !dataset;
                    dataset = dataset || d3.nest()
                        .key(function(d) { return d.label.replace(/(^\s*)|(\s*$)/g, ""); })
                        .key(function(d) { return d.date.getFullYear(); })
                        .entries(graph.nodes
                            .filter(function(d) { return d.type == 1;})
                            .sort(function(a, b) { return d3.ascending(a.date, b.date); })
                            .sort(function(a, b) { return d3.ascending(a.label, b.label); })
                        );

                    if (notInit) {
                        dataforyear = {M : [], C : [], S : [], A : []};

                        dataset.forEach(function (d) {
                            d.values
                                    .forEach(function(m, i){
                                        var item = m.values[0];
                                        m = {key : m.key};

                                        var ein = graph.edges.filter(function(k) { return k.ti == item.index; });

                                        m.cType3s = ein.filter(function(k) { return k.source().type == 3; }).map(function(k) { return { index : k.si, country : k.source().country, medal : k.label } });
                                        m.cType2s = ein.filter(function(k) { return k.source().type == 2; }).map(function(k) { return k.si });
                                        if (m.cType2s.length) {
                                            m.cType2s.forEach(function(k) {
                                                m.cType3s = m.cType3s.concat(graph.edges.filter(function(n) {
                                                    return n.ti == k;
                                                }).map(function(l) {
                                                    return { index : l.si, country : l.source().country, medal : l.label };
                                                }));
                                            })
                                        }

                                        var hash = {};
                                        m.cTypeAs = m.cType3s.filter(function(k, j, arr) {
                                            return !hash[k.index] && (hash[k.index] = true);
                                        });

                                        m.countries = d3.nest()
                                                .key(function(k) { return k.country.name + " (" + k.country.abbr + ")"; })
                                                .entries(m.cType3s);
                                        m.countries.forEach(function(k) {
                                            k.medals = {};
                                            k.values.forEach(function(l) {
                                                !k.medals[l.medal] ? k.medals[l.medal] = 1 : k.medals[l.medal]++;
                                            });
                                            k.medals = d3.keys(k.medals).map(function(m) {
                                                return {key: m, type: 2, count: k.medals[m]};
                                            });
                                        });
                                        m.countries.sort(compCountry);
                                        d.values[i] = m;
                                        d.values[m.key] = i + 1;
                                    });
                            d.M = realDate.map(function(l, i) {
                                var o = {key : l, count : x(d, 0, 0, l)};
                                if (!dataforyear[l + "y"]) {
                                    dataforyear[l + "y"] = {
                                        Mi : dataforyear.M.length,
                                        Ci : dataforyear.C.length,
                                        Si : dataforyear.S.length,
                                        Ai : dataforyear.A.length,
                                        countries : []
                                    };
                                    dataforyear.M.push({key : l, count: 0});
                                    dataforyear.C.push({key : l, count: 0});
                                    dataforyear.S.push({key : l, count: 0});
                                    dataforyear.A.push({key : l, count: 0});
                                }
                                dataforyear.M[dataforyear[l + "y"].Mi].count += o.count;
                                dataforyear.S[dataforyear[l + "y"].Si].count += r(d, 0, 0, l);
                                dataforyear.C[dataforyear[l + "y"].Ci].count += y(d, 0, 0, l);
                                dataforyear.A[dataforyear[l + "y"].Ai].count += ra(d, 0, 0, l);
                                return o;
                            });
                            d.C = realDate.map(function(l, i) {
                                return {key : l, count : y(d, 0, 0, l)};
                            });
                        });
                        d3.nest()
                            .key(function(d) {
                                return d.date.getFullYear();
                            })
                            .key(function(d) {
                                return d.country.name + " (" + d.country.abbr + ")";
                            })
                            .entries(graph.nodes.filter(function(d) {return d.type == 3 })
                                          .map(function(d) { return { date : d.date, index : d.index, country : d.country }; }))
                            .forEach(function(d){
                                var curArr = dataforyear[d.key + "y"].countries = [];
                                d.values.forEach(function(k) {
                                    curArr.push({
                                        key : k.key,
                                        values : k.values,
                                        medals : childs(k)
                                    });
                                });
                                curArr.sort(compCountry);
                            });

                        mywin = window.open('text/plain','', 'menubar=1,scrollbars=2,resizeable=1');
                        mywin.document.open;
                        mywin.opener = self;
                        mywin.document.write(JSON.stringify({
                            dataset : dataset,
                            dataforyear : dataforyear
                        }));
                    }
                }

                function recalcDate(year) {
                    curYear[1] = haveDate.indexOf(year);
                    curYear[1] = curYear[1] < 0 ? 0 : curYear[1];
                    year = haveDate[curYear[1]];

                    curYear[0] = curYear[1] - 1;
                    curYear[0] = curYear[0] < 0 ? 0 : curYear[0];
                    curYear[2] = curYear[1] + 1;
                    curYear[2] = curYear[2] < haveDate.length ? curYear[2] : haveDate.length - 2;

                    xScale.domain(d3.extent(dataset.map(x))).nice();
                    yScale.domain(d3.extent(dataset.map(y))).nice();
                    rScale.domain(d3.extent(dataset.map(r))).nice();

                    x_axis.transition()
                          .duration(1000)
                          .call(xAxis);
                    y_axis.transition()
                          .duration(1000)
                          .call(yAxis);

                    svgchart.selectAll("#lyaer").text(year);

                    runner
                        .transition()
                        .duration(1000)
                        .attr("width", xYearScale(haveDate[curYear[2]]) - xYearScale(haveDate[curYear[1]]));

                    dots.call(position)
                        .sort(comp);
                    sCTM.mout(null);
                }

                return sCTM;
            }

            var stat_sCTM = sCTM();

            function show() {
                w = width() - 290,
                h = height() - 290;

                divstat.style("display", "block");

                svgstat
                    .attr("width", w + ma.left + ma.right)
                    .attr("height", h + ma.top + ma.bottom);

                svgstat.call(stat_sCTM);
            }

            function hide() {
                d3.select("#statcont")
                    .style("display", "none");
            }

            if (showStatOnLoad)
                show();
        }

        function buttonLabelRoot() {
            var but = d3.select("body").select("#mainsvg").selectAll("#labelRootOffOn")
                .data([{check : showLabelOnRoot}])
                .enter()
                .append("g")
                .attr("transform", "scale(1)translate(37, 140)")
                .attr("id", "labelRootOffOn")
                .attr("class", "button")
                    .on("click", function(d) {
                        var item = d3.select(this);
                        showLabelOnRoot = d.check = !d.check;
                        chTxt(item);
                        refresh();
                    });

            function chTxt(item) {
                item.select("title")
                    .text(function(d) {return (!d.check ? "show" : "hide") + " label on games"});
                item.select("text")
                    .text(function(d) {return (!d.check ? "show" : "hide")});
            }

            but.append("title");
            but.append("text")
                    .style("fill", "#fff")
                    .attr("dy", "20px")
                    .attr("text-anchor", "middle");
            but.append("text")
                    .attr("y","0")
                    .attr("x","0")
                    .attr("text-anchor", "middle")
                    .attr("style", "font-size:24px;font-weight:bold;line-height:125%;fill:#aaaaff;fill-opacity:1;stroke:none;opacity:1")
                    .text("label");
            chTxt(but);
        }

        var timerOpHighLow = false;

        function hideSelectedNode(d) {
            if (timerOpHighLow) {
                clearTimeout(timerOpHighLow);
                timerOpHighLow = false;
            }

            var havevis = svgnode.selectAll(".overnode").length > 0;
            svgnode.selectAll(".overnode").remove();
            if (havevis)
                timerOpHighLow = setTimeout(function () {
                    svgnode.selectAll(".node")
                            .transition()
                            .duration(200)
                            .style("opacity", 1);
                }, 200);
            hideedges();
        }

        function showSelectedNode(m, conteiner, typeNode) {
            if (timerOpHighLow) {
                clearTimeout(timerOpHighLow);
                timerOpHighLow = false;
            }

            resize();

            proc = 0;

            conteiner = false;

            svgnode.selectAll(".overnode").remove();

            var havevis = false;

            m.values
                    .forEach(function (d) {
                        d.visibile = vis(d.rx, d.ry);
                        if (d.visibile) {
                            havevis = true;
                            svgnode.append("g")
                                    .on("mouseover",  showtooltip)
                                    .on("mousemove", movemouese)
                                    .on("mouseout", hideedges)
                                    .attr("class", "overnode")
                                    .datum(d);
                        }
                    })

            var node = svgnode.selectAll(".overnode");

            if (!conteiner) {
                conteiner = makeStars(node.filter(function (d) {
                    return d.type == typeNode && this.childNodes.length < 1
                }), showAsBall ? 5 : typeNode);
                if (showAsBall)
                    conteiner = false;
            }


            translateNode(node);
            refresh();
            if (havevis)
                timerOpHighLow = setTimeout(function () {
                    svgnode.selectAll(".node")
                            .transition()
                            .duration(200)
                            .style("opacity", .2);
                    node.style("opacity", 1);
                }, 200);
            showedges(m.values);
            svg.selectAll(".nodelabel")
                .style("visibility", function(d) {return d.type == 0 && showLabelOnRoot ? null : "hidden"});
            node.transition()
                .duration(100)
                .attr("transform", function(d) {
                    return "scale(" + (d.type == 3 ? 20 : 5) + ")translate(" + [d.rx / (d.type == 3 ? 20 : 5), d.ry / (d.type == 3 ? 20 : 5)] +")"
                });
            node.append("text")
                    .attr("font-size", function(d) { return d.type == 3 ? "0.5px" : "3px"; })
                    .attr("pointer-events", "none")
                    .style("cursor", "pointer")
                    .style("fill", function(d) { return d3.rgb(color(calcColor(d))).darker().darker()})
                    .attr("dy", ".35em")
                    .attr("text-anchor", "middle")
                    .text(function(d) { return d.size; });
        }

        function showSelectedNodeForCountry(m, conteiner, typeNode) {
            if (timerOpHighLow) {
                clearTimeout(timerOpHighLow);
                timerOpHighLow = false;
            }

            resize();

            proc = 0;

            conteiner = false;

            svgnode.selectAll(".overnode").remove();

            var havevis = false;

            var node = m.values.map(function(l) {
                return l.index;
            })

            node = graph.edges.filter(function(l) {
                return node.indexOf(l.si) > -1;
            })
            .map(function(l) {
                return l.ti;
            });

            node = graph.edges.filter(function(l) {
                return node.indexOf(l.si) > -1 || (l.target().type == 1 && node.indexOf(l.ti) > -1);
            })
            .map(function(l) {
                return l.ti;
            });

            node = graph.edges.filter(function(l) {
                return node.indexOf(l.ti) > -1 && l.source().type == 0;
            })
            .map(function(l) {
                return l.si;
            });

            node
                .forEach(function (d) {
                    d = graph.nodes[d];
                    d.visibile = vis(d.rx, d.ry);
                    if (d.visibile) {
                        var k = {};
                        k.label = m.key;
                        k.country = { name : m.key.split("(")[0], abbr : m.key.split("(")[1].replace(/\)/g, ""), };
                        k.size = m.values.length;
                        k.rx = d.rx;
                        k.ry = d.ry;
                        k.tag = d.tag;
                        k.visibile = d.visibile;
                        k.index = 0;
                        k.type = -1;

                        havevis = true;
                        svgnode.append("g")
                            .on("mouseover", showtooltip)
                                .on("mousemove", movemouese)
                                .on("mouseout", hideedges)
                                .attr("class", "overnode")
                                .datum(k);
                    }
                })

            node = svgnode.selectAll(".overnode");

            if (!conteiner) {
                conteiner = makeStars(node.filter(function (d) {
                    return d.type == -1 && this.childNodes.length < 1
                }), showAsBall ? 5 : 0);
                if (showAsBall)
                    conteiner = false;
            }


            translateNode(node);
            refresh();
            if (havevis)
                timerOpHighLow = setTimeout(function () {
                    svgnode.selectAll(".node")
                            .transition()
                            .duration(200)
                            .style("opacity", .2);
                    node.style("opacity", 1);
                }, 200);
            showedges(m.values);
            svg.selectAll(".nodelabel")
                .style("visibility", function(d) {return d.type == 0 && showLabelOnRoot ? null : "hidden"});
            node.transition()
                .duration(100)
                .attr("transform", function(d) {return "scale(5)translate(" + [d.rx / 5, d.ry / 5] +")"});
            node.append("text")
                    .attr("font-size", "3px")
                    .attr("pointer-events", "none")
                    .style("cursor", "pointer")
                    .style("fill", function(d) { return d3.rgb(color(calcColor(d))).darker().darker()})
                    .attr("dy", ".35em")
                    .attr("text-anchor", "middle")
                    .text(function(d) { return d.size; });
        }

        function initFilters(id, typeNode, nodeObject, paddingCoff, colors, fnkey, fnhtml) {

            function make(items, id, typeNode, nodeObject, paddingCoff, colors, fnkey, fnhtml) {
                return function(d, arr) {
                    d3.select(id)
                    .append("li")
                    .datum(d)
                    .append("a")
                    .attr("href", function(d) {
                        return "#" + d.key;
                    })
                    .html(fnhtml || function(d) { return "<span>" + d.key + "</span>"})
                    .on("mouseover", function(m) {
                        showtooltip(m, id);
                    })
                    .on("click", function(m) {
                        d3.event.preventDefault();
                        d3.select(this)
                            .classed("clicked", function() {
                                var s = !d3.select(this).classed("clicked");
                                d3.select(this.parentNode.parentNode)
                                    .selectAll("a.clicked").classed("clicked", false);
                                return s;
                            });
                        if (!d3.select(this).classed("clicked")) {
                            hideSelectedNode(m);
                        } else {
                            if (id == "#countriescont")
                                showSelectedNodeForCountry(m, nodeObject, typeNode);
                            else
                                showSelectedNode(m, nodeObject, typeNode);
                        }
                    })
                    .on("mousemove", movemouese)
                    .on("mouseout", hideedges)
                    .insert("span", ":first-child")
                    .text(function(d) {
                        return d.values.length;
                    })
                    .style("background", function(d) {
                        return colors(d.values.length);
                    })
                    .style("border-color", function(d) {
                        return d3.rgb(colors(d.values.length)).darker().darker().darker();
                    })
                    .style("padding-left", function(d) {
                        return d.values.length * paddingCoff + "px";
                    });
                }
            }

            var items = d3.nest()
                        .key(fnkey || function(d) { return d.label; })
                        .entries(graph.nodes
                        .filter(function(d) { return d.type == typeNode; }))
                        .sort(function(a, b) { return d3.ascending(b.key, a.key); });

            d3.asyncForEach(items, make(items, id, typeNode, nodeObject, paddingCoff, colors, fnkey, fnhtml));

            d3.select(d3.select(id).node().parentNode)
                    .select("h3")
                    .style("cursor", "pointer")
                    .on("click", function(d) {
                        d3.select(this.parentNode)
                                .classed("show", function() {
                                    var s = !d3.select(this).classed("show");
                                    d3.select(this.parentNode)
                                        .selectAll("li.show").classed("show", false);
                                    return s;
                                });
                    });
        }
    });
}