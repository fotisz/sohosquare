$(document).ready(function () {
	var n = $(window);
	var v = $("#nav a");
	var h = $("#one");
	var f = $("#two");
	var A = $("#three");
	var o = $("#four");
	var z = $("#five");
	var m = $("#six");
	var a = $("#seven");
	var B = $("#eight");
	var u = $("#nine");
	var C = $("#tenth");
	var d = $("#eleventh");
	var y = $("#twelth");
	var p = $("#end");
	var x = $("#two .bg");
	var l = $("#four .bg");
	var w = $("#five .bg");
	var e = $("#seven .bg");
	var r = $("#eight .bg");
	var t = $("#eight .bg2");
	var q = $("#tenth .bg");
	var s = $("#twelth .bg");
	var i = $("#one .bg");
	var j = n.height();
	$("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").bind("inview", function (D, E) {
		if (E == true) {
			$(this).addClass("inview")
		} else {
			$(this).removeClass("inview")
		}
	});

	function k() {
		var G = n.height();
		var F = $("#nav").height() / 2;
		var E = (G / 2);
		var D = E - F;
		$("#nav").css({
			top: D
		});
		$("#end").css({
			height: G
		});
		$("#two.bg").css({
			height: G
		})
	}
	function c(D, H, G, F, E) {
		return D + "% " + (-((H + G) - F) * E) + "px"
	}
	function b() {
		var G = n.height();
		var F = $("#nav").height() / 2;
		var E = (G / 2);
		var D = n.scrollTop();
		if (h.hasClass("inview")) {
			h.css({
				backgroundPosition: c(50, G, D, 0, 0.1)
			});
			v.css({
				color: "#333333"
			})
		}
		if (f.hasClass("inview")) {
			f.css({
				backgroundPosition: c(50, G, D, 1700, 0.3)
			});
			x.css({
				backgroundPosition: c(50, G, D, 2000, 0.6)
			});
			v.css({
				color: "#333333"
			})
		}
		if (A.hasClass("inview")) {
			A.css({
				backgroundPosition: c(50, G, D, 3200, 0.3)
			});
			v.css({
				color: "#FFFFFF"
			})
		}
		if (o.hasClass("inview")) {
			o.css({
				backgroundPosition: c(50, G, D, 4000, 0.2)
			});
			l.css({
				backgroundPosition: c(50, G, D, 5025, 0.6)
			});
			v.css({
				color: "#333333"
			})
		}
		if (z.hasClass("inview")) {
			z.css({
				backgroundPosition: c(50, G, D, 5100, 0.2)
			});
			w.css({
				backgroundPosition: c(50, G, D, 5500, 0.4)
			});
			v.css({
				color: "#333333"
			})
		}
		if (m.hasClass("inview")) {
			m.css({
				backgroundPosition: c(50, G, D, 6500, 0.3)
			});
			v.css({
				color: "#ffffff"
			})
		}
		if (a.hasClass("inview")) {
			a.css({
				backgroundPosition: c(50, G, D, 7600, 0.2)
			});
			e.css({
				backgroundPosition: c(50, G, D, 7800, 0.4)
			});
			v.css({
				color: "#333333"
			})
		}
		if (B.hasClass("inview")) {
			B.css({
				backgroundPosition: c(50, G, D, 8900, 0.2)
			});
			t.css({
				backgroundPosition: c(50, G, D, 9400, 0.3)
			});
			v.css({
				color: "#333333"
			})
		}
		if (u.hasClass("inview")) {
			u.css({
				backgroundPosition: c(50, G, D, 10000, 0.3)
			});
			v.css({
				color: "#333333"
			})
		}
	}
	function g() {
		var G = n.height();
		var F = $("#nav").height() / 2;
		var E = (G / 2);
		var D = n.scrollTop();
		if (h.hasClass("inview")) {
			h.css({
				backgroundPosition: c(50, G, D, 0, 0.1)
			})
		}
		if (f.hasClass("inview")) {
			f.css({
				backgroundPosition: c(50, G, D, 2700, 0.3)
			});
			x.css({
				backgroundPosition: c(50, G, D, 3000, 0.6)
			})
		}
		if (A.hasClass("inview")) {
			A.css({
				backgroundPosition: c(50, G, D, 4200, 0.3)
			})
		}
		if (o.hasClass("inview")) {
			o.css({
				backgroundPosition: c(50, G, D, 6800, 0.2)
			});
			l.css({
				backgroundPosition: c(50, G, D, 7525, 0.6)
			})
		}
		if (z.hasClass("inview")) {
			z.css({
				backgroundPosition: c(50, G, D, 8800, 0.2)
			});
			w.css({
				backgroundPosition: c(50, G, D, 8400, 0.4)
			})
		}
		if (m.hasClass("inview")) {
			m.css({
				backgroundPosition: c(50, G, D, 10000, 0.3)
			})
		}
		if (a.hasClass("inview")) {
			a.css({
				backgroundPosition: c(50, G, D, 12000, 0.2)
			});
			e.css({
				backgroundPosition: c(50, G, D, 12000, 0.4)
			})
		}
		if (B.hasClass("inview")) {
			B.css({
				backgroundPosition: c(50, G, D, 14000, 0.2)
			});
			t.css({
				backgroundPosition: c(50, G, D, 14400, 0.3)
			})
		}
		if (u.hasClass("inview")) {
			u.css({
				backgroundPosition: c(50, G, D, 15500, 0.3)
			})
		}
	}
	k();
	n.resize(function () {
		k();
		if (n.width() > 1900 && n.height() > 1200) {
			g()
		} else {
			if (n.width() > 1900 && n.height() < 1200) {
				g()
			} else {
				if (n.width() < 1900 && n.height() < 1200) {
					b()
				} else {
					if (n.width() < 1900 && n.height() > 1200) {
						g()
					}
				}
			}
		}
	});
	n.bind("scroll", function () {
		if (n.width() > 1900 && n.height() > 1200) {
			g()
		} else {
			if (n.width() > 1900 && n.height() < 1200) {
				g()
			} else {
				if (n.width() < 1900 && n.height() < 1200) {
					b()
				} else {
					if (n.width() < 1900 && n.height() > 1200) {
						g()
					}
				}
			}
		}
	})
});