/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var u = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var Ui = u(() => {
        window.tram = function(e) {
            function t(l, _) {
                var T = new V.Bare;
                return T.init(l, _)
            }

            function r(l) {
                return l.replace(/[A-Z]/g, function(_) {
                    return "-" + _.toLowerCase()
                })
            }

            function n(l) {
                var _ = parseInt(l.slice(1), 16),
                    T = _ >> 16 & 255,
                    b = _ >> 8 & 255,
                    m = 255 & _;
                return [T, b, m]
            }

            function o(l, _, T) {
                return "#" + (1 << 24 | l << 16 | _ << 8 | T).toString(16).slice(1)
            }

            function i() {}

            function a(l, _) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof _ + "] " + _)
            }

            function s(l, _, T) {
                f("Units do not match [" + l + "]: " + _ + ", " + T)
            }

            function c(l, _, T) {
                if (_ !== void 0 && (T = _), l === void 0) return T;
                var b = T;
                return xt.test(l) || !gt.test(l) ? b = parseInt(l, 10) : gt.test(l) && (b = 1e3 * parseFloat(l)), 0 > b && (b = 0), b === b ? b : T
            }

            function f(l) {
                de.debug && window && window.console.warn(l)
            }

            function p(l) {
                for (var _ = -1, T = l ? l.length : 0, b = []; ++_ < T;) {
                    var m = l[_];
                    m && b.push(m)
                }
                return b
            }
            var d = function(l, _, T) {
                    function b(ne) {
                        return typeof ne == "object"
                    }

                    function m(ne) {
                        return typeof ne == "function"
                    }

                    function A() {}

                    function Z(ne, Ee) {
                        function H() {
                            var De = new ce;
                            return m(De.init) && De.init.apply(De, arguments), De
                        }

                        function ce() {}
                        Ee === T && (Ee = ne, ne = Object), H.Bare = ce;
                        var le, be = A[l] = ne[l],
                            ot = ce[l] = H[l] = new A;
                        return ot.constructor = H, H.mixin = function(De) {
                            return ce[l] = H[l] = Z(H, De)[l], H
                        }, H.open = function(De) {
                            if (le = {}, m(De) ? le = De.call(H, ot, be, H, ne) : b(De) && (le = De), b(le))
                                for (var Ar in le) _.call(le, Ar) && (ot[Ar] = le[Ar]);
                            return m(ot.init) || (ot.init = ne), H
                        }, H.open(Ee)
                    }
                    return Z
                }("prototype", {}.hasOwnProperty),
                g = {
                    ease: ["ease", function(l, _, T, b) {
                        var m = (l /= b) * l,
                            A = m * l;
                        return _ + T * (-2.75 * A * m + 11 * m * m + -15.5 * A + 8 * m + .25 * l)
                    }],
                    "ease-in": ["ease-in", function(l, _, T, b) {
                        var m = (l /= b) * l,
                            A = m * l;
                        return _ + T * (-1 * A * m + 3 * m * m + -3 * A + 2 * m)
                    }],
                    "ease-out": ["ease-out", function(l, _, T, b) {
                        var m = (l /= b) * l,
                            A = m * l;
                        return _ + T * (.3 * A * m + -1.6 * m * m + 2.2 * A + -1.8 * m + 1.9 * l)
                    }],
                    "ease-in-out": ["ease-in-out", function(l, _, T, b) {
                        var m = (l /= b) * l,
                            A = m * l;
                        return _ + T * (2 * A * m + -5 * m * m + 2 * A + 2 * m)
                    }],
                    linear: ["linear", function(l, _, T, b) {
                        return T * l / b + _
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, _, T, b) {
                        return T * (l /= b) * l + _
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, _, T, b) {
                        return -T * (l /= b) * (l - 2) + _
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, _, T, b) {
                        return (l /= b / 2) < 1 ? T / 2 * l * l + _ : -T / 2 * (--l * (l - 2) - 1) + _
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, _, T, b) {
                        return T * (l /= b) * l * l + _
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, _, T, b) {
                        return T * ((l = l / b - 1) * l * l + 1) + _
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, _, T, b) {
                        return (l /= b / 2) < 1 ? T / 2 * l * l * l + _ : T / 2 * ((l -= 2) * l * l + 2) + _
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, _, T, b) {
                        return T * (l /= b) * l * l * l + _
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, _, T, b) {
                        return -T * ((l = l / b - 1) * l * l * l - 1) + _
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, _, T, b) {
                        return (l /= b / 2) < 1 ? T / 2 * l * l * l * l + _ : -T / 2 * ((l -= 2) * l * l * l - 2) + _
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, _, T, b) {
                        return T * (l /= b) * l * l * l * l + _
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, _, T, b) {
                        return T * ((l = l / b - 1) * l * l * l * l + 1) + _
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, _, T, b) {
                        return (l /= b / 2) < 1 ? T / 2 * l * l * l * l * l + _ : T / 2 * ((l -= 2) * l * l * l * l + 2) + _
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, _, T, b) {
                        return -T * Math.cos(l / b * (Math.PI / 2)) + T + _
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, _, T, b) {
                        return T * Math.sin(l / b * (Math.PI / 2)) + _
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, _, T, b) {
                        return -T / 2 * (Math.cos(Math.PI * l / b) - 1) + _
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, _, T, b) {
                        return l === 0 ? _ : T * Math.pow(2, 10 * (l / b - 1)) + _
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, _, T, b) {
                        return l === b ? _ + T : T * (-Math.pow(2, -10 * l / b) + 1) + _
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, _, T, b) {
                        return l === 0 ? _ : l === b ? _ + T : (l /= b / 2) < 1 ? T / 2 * Math.pow(2, 10 * (l - 1)) + _ : T / 2 * (-Math.pow(2, -10 * --l) + 2) + _
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, _, T, b) {
                        return -T * (Math.sqrt(1 - (l /= b) * l) - 1) + _
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, _, T, b) {
                        return T * Math.sqrt(1 - (l = l / b - 1) * l) + _
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, _, T, b) {
                        return (l /= b / 2) < 1 ? -T / 2 * (Math.sqrt(1 - l * l) - 1) + _ : T / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + _
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, _, T, b, m) {
                        return m === void 0 && (m = 1.70158), T * (l /= b) * l * ((m + 1) * l - m) + _
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, _, T, b, m) {
                        return m === void 0 && (m = 1.70158), T * ((l = l / b - 1) * l * ((m + 1) * l + m) + 1) + _
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, _, T, b, m) {
                        return m === void 0 && (m = 1.70158), (l /= b / 2) < 1 ? T / 2 * l * l * (((m *= 1.525) + 1) * l - m) + _ : T / 2 * ((l -= 2) * l * (((m *= 1.525) + 1) * l + m) + 2) + _
                    }]
                },
                h = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                y = document,
                I = window,
                x = "bkwld-tram",
                S = /[\-\.0-9]/g,
                w = /[A-Z]/,
                O = "number",
                L = /^(rgb|#)/,
                P = /(em|cm|mm|in|pt|pc|px)$/,
                M = /(em|cm|mm|in|pt|pc|px|%)$/,
                X = /(deg|rad|turn)$/,
                z = "unitless",
                Y = /(all|none) 0s ease 0s/,
                re = /^(width|height)$/,
                U = " ",
                N = y.createElement("a"),
                v = ["Webkit", "Moz", "O", "ms"],
                q = ["-webkit-", "-moz-", "-o-", "-ms-"],
                C = function(l) {
                    if (l in N.style) return {
                        dom: l,
                        css: l
                    };
                    var _, T, b = "",
                        m = l.split("-");
                    for (_ = 0; _ < m.length; _++) b += m[_].charAt(0).toUpperCase() + m[_].slice(1);
                    for (_ = 0; _ < v.length; _++)
                        if (T = v[_] + b, T in N.style) return {
                            dom: T,
                            css: q[_] + l
                        }
                },
                F = t.support = {
                    bind: Function.prototype.bind,
                    transform: C("transform"),
                    transition: C("transition"),
                    backface: C("backface-visibility"),
                    timing: C("transition-timing-function")
                };
            if (F.transition) {
                var $ = F.timing.dom;
                if (N.style[$] = g["ease-in-back"][0], !N.style[$])
                    for (var J in h) g[J][0] = h[J]
            }
            var D = t.frame = function() {
                    var l = I.requestAnimationFrame || I.webkitRequestAnimationFrame || I.mozRequestAnimationFrame || I.oRequestAnimationFrame || I.msRequestAnimationFrame;
                    return l && F.bind ? l.bind(I) : function(_) {
                        I.setTimeout(_, 16)
                    }
                }(),
                W = t.now = function() {
                    var l = I.performance,
                        _ = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                    return _ && F.bind ? _.bind(l) : Date.now || function() {
                        return +new Date
                    }
                }(),
                K = d(function(l) {
                    function _(ee, fe) {
                        var me = p(("" + ee).split(U)),
                            pe = me[0];
                        fe = fe || {};
                        var Fe = k[pe];
                        if (!Fe) return f("Unsupported property: " + pe);
                        if (!fe.weak || !this.props[pe]) {
                            var Ye = Fe[0],
                                Ve = this.props[pe];
                            return Ve || (Ve = this.props[pe] = new Ye.Bare), Ve.init(this.$el, me, Fe, fe), Ve
                        }
                    }

                    function T(ee, fe, me) {
                        if (ee) {
                            var pe = typeof ee;
                            if (fe || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), pe == "number" && fe) return this.timer = new ge({
                                duration: ee,
                                context: this,
                                complete: A
                            }), void(this.active = !0);
                            if (pe == "string" && fe) {
                                switch (ee) {
                                    case "hide":
                                        H.call(this);
                                        break;
                                    case "stop":
                                        Z.call(this);
                                        break;
                                    case "redraw":
                                        ce.call(this);
                                        break;
                                    default:
                                        _.call(this, ee, me && me[1])
                                }
                                return A.call(this)
                            }
                            if (pe == "function") return void ee.call(this, this);
                            if (pe == "object") {
                                var Fe = 0;
                                ot.call(this, ee, function(Ae, II) {
                                    Ae.span > Fe && (Fe = Ae.span), Ae.stop(), Ae.animate(II)
                                }, function(Ae) {
                                    "wait" in Ae && (Fe = c(Ae.wait, 0))
                                }), be.call(this), Fe > 0 && (this.timer = new ge({
                                    duration: Fe,
                                    context: this
                                }), this.active = !0, fe && (this.timer.complete = A));
                                var Ye = this,
                                    Ve = !1,
                                    un = {};
                                D(function() {
                                    ot.call(Ye, ee, function(Ae) {
                                        Ae.active && (Ve = !0, un[Ae.name] = Ae.nextStyle)
                                    }), Ve && Ye.$el.css(un)
                                })
                            }
                        }
                    }

                    function b(ee) {
                        ee = c(ee, 0), this.active ? this.queue.push({
                            options: ee
                        }) : (this.timer = new ge({
                            duration: ee,
                            context: this,
                            complete: A
                        }), this.active = !0)
                    }

                    function m(ee) {
                        return this.active ? (this.queue.push({
                            options: ee,
                            args: arguments
                        }), void(this.timer.complete = A)) : f("No active transition timer. Use start() or wait() before then().")
                    }

                    function A() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var ee = this.queue.shift();
                            T.call(this, ee.options, !0, ee.args)
                        }
                    }

                    function Z(ee) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var fe;
                        typeof ee == "string" ? (fe = {}, fe[ee] = 1) : fe = typeof ee == "object" && ee != null ? ee : this.props, ot.call(this, fe, De), be.call(this)
                    }

                    function ne(ee) {
                        Z.call(this, ee), ot.call(this, ee, Ar, _I)
                    }

                    function Ee(ee) {
                        typeof ee != "string" && (ee = "block"), this.el.style.display = ee
                    }

                    function H() {
                        Z.call(this), this.el.style.display = "none"
                    }

                    function ce() {
                        this.el.offsetHeight
                    }

                    function le() {
                        Z.call(this), e.removeData(this.el, x), this.$el = this.el = null
                    }

                    function be() {
                        var ee, fe, me = [];
                        this.upstream && me.push(this.upstream);
                        for (ee in this.props) fe = this.props[ee], fe.active && me.push(fe.string);
                        me = me.join(","), this.style !== me && (this.style = me, this.el.style[F.transition.dom] = me)
                    }

                    function ot(ee, fe, me) {
                        var pe, Fe, Ye, Ve, un = fe !== De,
                            Ae = {};
                        for (pe in ee) Ye = ee[pe], pe in _e ? (Ae.transform || (Ae.transform = {}), Ae.transform[pe] = Ye) : (w.test(pe) && (pe = r(pe)), pe in k ? Ae[pe] = Ye : (Ve || (Ve = {}), Ve[pe] = Ye));
                        for (pe in Ae) {
                            if (Ye = Ae[pe], Fe = this.props[pe], !Fe) {
                                if (!un) continue;
                                Fe = _.call(this, pe)
                            }
                            fe.call(this, Fe, Ye)
                        }
                        me && Ve && me.call(this, Ve)
                    }

                    function De(ee) {
                        ee.stop()
                    }

                    function Ar(ee, fe) {
                        ee.set(fe)
                    }

                    function _I(ee) {
                        this.$el.css(ee)
                    }

                    function ze(ee, fe) {
                        l[ee] = function() {
                            return this.children ? yI.call(this, fe, arguments) : (this.el && fe.apply(this, arguments), this)
                        }
                    }

                    function yI(ee, fe) {
                        var me, pe = this.children.length;
                        for (me = 0; pe > me; me++) ee.apply(this.children[me], fe);
                        return this
                    }
                    l.init = function(ee) {
                        if (this.$el = e(ee), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, de.keepInherited && !de.fallback) {
                            var fe = B(this.el, "transition");
                            fe && !Y.test(fe) && (this.upstream = fe)
                        }
                        F.backface && de.hideBackface && E(this.el, F.backface.css, "hidden")
                    }, ze("add", _), ze("start", T), ze("wait", b), ze("then", m), ze("next", A), ze("stop", Z), ze("set", ne), ze("show", Ee), ze("hide", H), ze("redraw", ce), ze("destroy", le)
                }),
                V = d(K, function(l) {
                    function _(T, b) {
                        var m = e.data(T, x) || e.data(T, x, new K.Bare);
                        return m.el || m.init(T), b ? m.start(b) : m
                    }
                    l.init = function(T, b) {
                        var m = e(T);
                        if (!m.length) return this;
                        if (m.length === 1) return _(m[0], b);
                        var A = [];
                        return m.each(function(Z, ne) {
                            A.push(_(ne, b))
                        }), this.children = A, this
                    }
                }),
                G = d(function(l) {
                    function _() {
                        var A = this.get();
                        this.update("auto");
                        var Z = this.get();
                        return this.update(A), Z
                    }

                    function T(A, Z, ne) {
                        return Z !== void 0 && (ne = Z), A in g ? A : ne
                    }

                    function b(A) {
                        var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(A);
                        return (Z ? o(Z[1], Z[2], Z[3]) : A).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var m = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    l.init = function(A, Z, ne, Ee) {
                        this.$el = A, this.el = A[0];
                        var H = Z[0];
                        ne[2] && (H = ne[2]), Q[H] && (H = Q[H]), this.name = H, this.type = ne[1], this.duration = c(Z[1], this.duration, m.duration), this.ease = T(Z[2], this.ease, m.ease), this.delay = c(Z[3], this.delay, m.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = re.test(this.name), this.unit = Ee.unit || this.unit || de.defaultUnit, this.angle = Ee.angle || this.angle || de.defaultAngle, de.fallback || Ee.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + U + this.duration + "ms" + (this.ease != "ease" ? U + g[this.ease][0] : "") + (this.delay ? U + this.delay + "ms" : ""))
                    }, l.set = function(A) {
                        A = this.convert(A, this.type), this.update(A), this.redraw()
                    }, l.transition = function(A) {
                        this.active = !0, A = this.convert(A, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), A == "auto" && (A = _.call(this))), this.nextStyle = A
                    }, l.fallback = function(A) {
                        var Z = this.el.style[this.name] || this.convert(this.get(), this.type);
                        A = this.convert(A, this.type), this.auto && (Z == "auto" && (Z = this.convert(this.get(), this.type)), A == "auto" && (A = _.call(this))), this.tween = new te({
                            from: Z,
                            to: A,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.get = function() {
                        return B(this.el, this.name)
                    }, l.update = function(A) {
                        E(this.el, this.name, A)
                    }, l.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, E(this.el, this.name, this.get()));
                        var A = this.tween;
                        A && A.context && A.destroy()
                    }, l.convert = function(A, Z) {
                        if (A == "auto" && this.auto) return A;
                        var ne, Ee = typeof A == "number",
                            H = typeof A == "string";
                        switch (Z) {
                            case O:
                                if (Ee) return A;
                                if (H && A.replace(S, "") === "") return +A;
                                ne = "number(unitless)";
                                break;
                            case L:
                                if (H) {
                                    if (A === "" && this.original) return this.original;
                                    if (Z.test(A)) return A.charAt(0) == "#" && A.length == 7 ? A : b(A)
                                }
                                ne = "hex or rgb string";
                                break;
                            case P:
                                if (Ee) return A + this.unit;
                                if (H && Z.test(A)) return A;
                                ne = "number(px) or string(unit)";
                                break;
                            case M:
                                if (Ee) return A + this.unit;
                                if (H && Z.test(A)) return A;
                                ne = "number(px) or string(unit or %)";
                                break;
                            case X:
                                if (Ee) return A + this.angle;
                                if (H && Z.test(A)) return A;
                                ne = "number(deg) or string(angle)";
                                break;
                            case z:
                                if (Ee || H && M.test(A)) return A;
                                ne = "number(unitless) or string(unit or %)"
                        }
                        return a(ne, A), A
                    }, l.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                j = d(G, function(l, _) {
                    l.init = function() {
                        _.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), L))
                    }
                }),
                oe = d(G, function(l, _) {
                    l.init = function() {
                        _.init.apply(this, arguments), this.animate = this.fallback
                    }, l.get = function() {
                        return this.$el[this.name]()
                    }, l.update = function(T) {
                        this.$el[this.name](T)
                    }
                }),
                ie = d(G, function(l, _) {
                    function T(b, m) {
                        var A, Z, ne, Ee, H;
                        for (A in b) Ee = _e[A], ne = Ee[0], Z = Ee[1] || A, H = this.convert(b[A], ne), m.call(this, Z, H, ne)
                    }
                    l.init = function() {
                        _.init.apply(this, arguments), this.current || (this.current = {}, _e.perspective && de.perspective && (this.current.perspective = de.perspective, E(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, l.set = function(b) {
                        T.call(this, b, function(m, A) {
                            this.current[m] = A
                        }), E(this.el, this.name, this.style(this.current)), this.redraw()
                    }, l.transition = function(b) {
                        var m = this.values(b);
                        this.tween = new ht({
                            current: this.current,
                            values: m,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var A, Z = {};
                        for (A in this.current) Z[A] = A in m ? m[A] : this.current[A];
                        this.active = !0, this.nextStyle = this.style(Z)
                    }, l.fallback = function(b) {
                        var m = this.values(b);
                        this.tween = new ht({
                            current: this.current,
                            values: m,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.update = function() {
                        E(this.el, this.name, this.style(this.current))
                    }, l.style = function(b) {
                        var m, A = "";
                        for (m in b) A += m + "(" + b[m] + ") ";
                        return A
                    }, l.values = function(b) {
                        var m, A = {};
                        return T.call(this, b, function(Z, ne, Ee) {
                            A[Z] = ne, this.current[Z] === void 0 && (m = 0, ~Z.indexOf("scale") && (m = 1), this.current[Z] = this.convert(m, Ee))
                        }), A
                    }
                }),
                te = d(function(l) {
                    function _(H) {
                        ne.push(H) === 1 && D(T)
                    }

                    function T() {
                        var H, ce, le, be = ne.length;
                        if (be)
                            for (D(T), ce = W(), H = be; H--;) le = ne[H], le && le.render(ce)
                    }

                    function b(H) {
                        var ce, le = e.inArray(H, ne);
                        le >= 0 && (ce = ne.slice(le + 1), ne.length = le, ce.length && (ne = ne.concat(ce)))
                    }

                    function m(H) {
                        return Math.round(H * Ee) / Ee
                    }

                    function A(H, ce, le) {
                        return o(H[0] + le * (ce[0] - H[0]), H[1] + le * (ce[1] - H[1]), H[2] + le * (ce[2] - H[2]))
                    }
                    var Z = {
                        ease: g.ease[1],
                        from: 0,
                        to: 1
                    };
                    l.init = function(H) {
                        this.duration = H.duration || 0, this.delay = H.delay || 0;
                        var ce = H.ease || Z.ease;
                        g[ce] && (ce = g[ce][1]), typeof ce != "function" && (ce = Z.ease), this.ease = ce, this.update = H.update || i, this.complete = H.complete || i, this.context = H.context || this, this.name = H.name;
                        var le = H.from,
                            be = H.to;
                        le === void 0 && (le = Z.from), be === void 0 && (be = Z.to), this.unit = H.unit || "", typeof le == "number" && typeof be == "number" ? (this.begin = le, this.change = be - le) : this.format(be, le), this.value = this.begin + this.unit, this.start = W(), H.autoplay !== !1 && this.play()
                    }, l.play = function() {
                        this.active || (this.start || (this.start = W()), this.active = !0, _(this))
                    }, l.stop = function() {
                        this.active && (this.active = !1, b(this))
                    }, l.render = function(H) {
                        var ce, le = H - this.start;
                        if (this.delay) {
                            if (le <= this.delay) return;
                            le -= this.delay
                        }
                        if (le < this.duration) {
                            var be = this.ease(le, 0, 1, this.duration);
                            return ce = this.startRGB ? A(this.startRGB, this.endRGB, be) : m(this.begin + be * this.change), this.value = ce + this.unit, void this.update.call(this.context, this.value)
                        }
                        ce = this.endHex || this.begin + this.change, this.value = ce + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, l.format = function(H, ce) {
                        if (ce += "", H += "", H.charAt(0) == "#") return this.startRGB = n(ce), this.endRGB = n(H), this.endHex = H, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var le = ce.replace(S, ""),
                                be = H.replace(S, "");
                            le !== be && s("tween", ce, H), this.unit = le
                        }
                        ce = parseFloat(ce), H = parseFloat(H), this.begin = this.value = ce, this.change = H - ce
                    }, l.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = i
                    };
                    var ne = [],
                        Ee = 1e3
                }),
                ge = d(te, function(l) {
                    l.init = function(_) {
                        this.duration = _.duration || 0, this.complete = _.complete || i, this.context = _.context, this.play()
                    }, l.render = function(_) {
                        var T = _ - this.start;
                        T < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                ht = d(te, function(l, _) {
                    l.init = function(T) {
                        this.context = T.context, this.update = T.update, this.tweens = [], this.current = T.current;
                        var b, m;
                        for (b in T.values) m = T.values[b], this.current[b] !== m && this.tweens.push(new te({
                            name: b,
                            from: this.current[b],
                            to: m,
                            duration: T.duration,
                            delay: T.delay,
                            ease: T.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, l.render = function(T) {
                        var b, m, A = this.tweens.length,
                            Z = !1;
                        for (b = A; b--;) m = this.tweens[b], m.context && (m.render(T), this.current[m.name] = m.value, Z = !0);
                        return Z ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, l.destroy = function() {
                        if (_.destroy.call(this), this.tweens) {
                            var T, b = this.tweens.length;
                            for (T = b; T--;) this.tweens[T].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                de = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !F.transition,
                    agentTests: []
                };
            t.fallback = function(l) {
                if (!F.transition) return de.fallback = !0;
                de.agentTests.push("(" + l + ")");
                var _ = new RegExp(de.agentTests.join("|"), "i");
                de.fallback = _.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(l) {
                return new te(l)
            }, t.delay = function(l, _, T) {
                return new ge({
                    complete: _,
                    duration: l,
                    context: T
                })
            }, e.fn.tram = function(l) {
                return t.call(null, this, l)
            };
            var E = e.style,
                B = e.css,
                Q = {
                    transform: F.transform && F.transform.css
                },
                k = {
                    color: [j, L],
                    background: [j, L, "background-color"],
                    "outline-color": [j, L],
                    "border-color": [j, L],
                    "border-top-color": [j, L],
                    "border-right-color": [j, L],
                    "border-bottom-color": [j, L],
                    "border-left-color": [j, L],
                    "border-width": [G, P],
                    "border-top-width": [G, P],
                    "border-right-width": [G, P],
                    "border-bottom-width": [G, P],
                    "border-left-width": [G, P],
                    "border-spacing": [G, P],
                    "letter-spacing": [G, P],
                    margin: [G, P],
                    "margin-top": [G, P],
                    "margin-right": [G, P],
                    "margin-bottom": [G, P],
                    "margin-left": [G, P],
                    padding: [G, P],
                    "padding-top": [G, P],
                    "padding-right": [G, P],
                    "padding-bottom": [G, P],
                    "padding-left": [G, P],
                    "outline-width": [G, P],
                    opacity: [G, O],
                    top: [G, M],
                    right: [G, M],
                    bottom: [G, M],
                    left: [G, M],
                    "font-size": [G, M],
                    "text-indent": [G, M],
                    "word-spacing": [G, M],
                    width: [G, M],
                    "min-width": [G, M],
                    "max-width": [G, M],
                    height: [G, M],
                    "min-height": [G, M],
                    "max-height": [G, M],
                    "line-height": [G, z],
                    "scroll-top": [oe, O, "scrollTop"],
                    "scroll-left": [oe, O, "scrollLeft"]
                },
                _e = {};
            F.transform && (k.transform = [ie], _e = {
                x: [M, "translateX"],
                y: [M, "translateY"],
                rotate: [X],
                rotateX: [X],
                rotateY: [X],
                scale: [O],
                scaleX: [O],
                scaleY: [O],
                skew: [X],
                skewX: [X],
                skewY: [X]
            }), F.transform && F.backface && (_e.z = [M, "translateZ"], _e.rotateZ = [X], _e.scaleZ = [O], _e.perspective = [P]);
            var xt = /ms/,
                gt = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var ws = u((XW, Ss) => {
        var mI = window.$,
            TI = Ui() && mI.tram;
        Ss.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                o = Function.prototype,
                i = r.push,
                a = r.slice,
                s = r.concat,
                c = n.toString,
                f = n.hasOwnProperty,
                p = r.forEach,
                d = r.map,
                g = r.reduce,
                h = r.reduceRight,
                y = r.filter,
                I = r.every,
                x = r.some,
                S = r.indexOf,
                w = r.lastIndexOf,
                O = Array.isArray,
                L = Object.keys,
                P = o.bind,
                M = e.each = e.forEach = function(v, q, C) {
                    if (v == null) return v;
                    if (p && v.forEach === p) v.forEach(q, C);
                    else if (v.length === +v.length) {
                        for (var F = 0, $ = v.length; F < $; F++)
                            if (q.call(C, v[F], F, v) === t) return
                    } else
                        for (var J = e.keys(v), F = 0, $ = J.length; F < $; F++)
                            if (q.call(C, v[J[F]], J[F], v) === t) return;
                    return v
                };
            e.map = e.collect = function(v, q, C) {
                var F = [];
                return v == null ? F : d && v.map === d ? v.map(q, C) : (M(v, function($, J, D) {
                    F.push(q.call(C, $, J, D))
                }), F)
            }, e.find = e.detect = function(v, q, C) {
                var F;
                return X(v, function($, J, D) {
                    if (q.call(C, $, J, D)) return F = $, !0
                }), F
            }, e.filter = e.select = function(v, q, C) {
                var F = [];
                return v == null ? F : y && v.filter === y ? v.filter(q, C) : (M(v, function($, J, D) {
                    q.call(C, $, J, D) && F.push($)
                }), F)
            };
            var X = e.some = e.any = function(v, q, C) {
                q || (q = e.identity);
                var F = !1;
                return v == null ? F : x && v.some === x ? v.some(q, C) : (M(v, function($, J, D) {
                    if (F || (F = q.call(C, $, J, D))) return t
                }), !!F)
            };
            e.contains = e.include = function(v, q) {
                return v == null ? !1 : S && v.indexOf === S ? v.indexOf(q) != -1 : X(v, function(C) {
                    return C === q
                })
            }, e.delay = function(v, q) {
                var C = a.call(arguments, 2);
                return setTimeout(function() {
                    return v.apply(null, C)
                }, q)
            }, e.defer = function(v) {
                return e.delay.apply(e, [v, 1].concat(a.call(arguments, 1)))
            }, e.throttle = function(v) {
                var q, C, F;
                return function() {
                    q || (q = !0, C = arguments, F = this, TI.frame(function() {
                        q = !1, v.apply(F, C)
                    }))
                }
            }, e.debounce = function(v, q, C) {
                var F, $, J, D, W, K = function() {
                    var V = e.now() - D;
                    V < q ? F = setTimeout(K, q - V) : (F = null, C || (W = v.apply(J, $), J = $ = null))
                };
                return function() {
                    J = this, $ = arguments, D = e.now();
                    var V = C && !F;
                    return F || (F = setTimeout(K, q)), V && (W = v.apply(J, $), J = $ = null), W
                }
            }, e.defaults = function(v) {
                if (!e.isObject(v)) return v;
                for (var q = 1, C = arguments.length; q < C; q++) {
                    var F = arguments[q];
                    for (var $ in F) v[$] === void 0 && (v[$] = F[$])
                }
                return v
            }, e.keys = function(v) {
                if (!e.isObject(v)) return [];
                if (L) return L(v);
                var q = [];
                for (var C in v) e.has(v, C) && q.push(C);
                return q
            }, e.has = function(v, q) {
                return f.call(v, q)
            }, e.isObject = function(v) {
                return v === Object(v)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var z = /(.)^/,
                Y = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                re = /\\|'|\r|\n|\u2028|\u2029/g,
                U = function(v) {
                    return "\\" + Y[v]
                },
                N = /^\s*(\w|\$)+\s*$/;
            return e.template = function(v, q, C) {
                !q && C && (q = C), q = e.defaults({}, q, e.templateSettings);
                var F = RegExp([(q.escape || z).source, (q.interpolate || z).source, (q.evaluate || z).source].join("|") + "|$", "g"),
                    $ = 0,
                    J = "__p+='";
                v.replace(F, function(V, G, j, oe, ie) {
                    return J += v.slice($, ie).replace(re, U), $ = ie + V.length, G ? J += `'+
((__t=(` + G + `))==null?'':_.escape(__t))+
'` : j ? J += `'+
((__t=(` + j + `))==null?'':__t)+
'` : oe && (J += `';
` + oe + `
__p+='`), V
                }), J += `';
`;
                var D = q.variable;
                if (D) {
                    if (!N.test(D)) throw new Error("variable is not a bare identifier: " + D)
                } else J = `with(obj||{}){
` + J + `}
`, D = "obj";
                J = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + J + `return __p;
`;
                var W;
                try {
                    W = new Function(q.variable || "obj", "_", J)
                } catch (V) {
                    throw V.source = J, V
                }
                var K = function(V) {
                    return W.call(this, V, e)
                };
                return K.source = "function(" + D + `){
` + J + "}", K
            }, e
        }()
    });
    var ke = u((UW, Ms) => {
        var ve = {},
            zt = {},
            Yt = [],
            Wi = window.Webflow || [],
            Tt = window.jQuery,
            Qe = Tt(window),
            OI = Tt(document),
            at = Tt.isFunction,
            $e = ve._ = ws(),
            Cs = ve.tram = Ui() && Tt.tram,
            ln = !1,
            Bi = !1;
        Cs.config.hideBackface = !1;
        Cs.config.keepInherited = !0;
        ve.define = function(e, t, r) {
            zt[e] && Ps(zt[e]);
            var n = zt[e] = t(Tt, $e, r) || {};
            return Ns(n), n
        };
        ve.require = function(e) {
            return zt[e]
        };

        function Ns(e) {
            ve.env() && (at(e.design) && Qe.on("__wf_design", e.design), at(e.preview) && Qe.on("__wf_preview", e.preview)), at(e.destroy) && Qe.on("__wf_destroy", e.destroy), e.ready && at(e.ready) && bI(e)
        }

        function bI(e) {
            if (ln) {
                e.ready();
                return
            }
            $e.contains(Yt, e.ready) || Yt.push(e.ready)
        }

        function Ps(e) {
            at(e.design) && Qe.off("__wf_design", e.design), at(e.preview) && Qe.off("__wf_preview", e.preview), at(e.destroy) && Qe.off("__wf_destroy", e.destroy), e.ready && at(e.ready) && AI(e)
        }

        function AI(e) {
            Yt = $e.filter(Yt, function(t) {
                return t !== e.ready
            })
        }
        ve.push = function(e) {
            if (ln) {
                at(e) && e();
                return
            }
            Wi.push(e)
        };
        ve.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var cn = navigator.userAgent.toLowerCase(),
            qs = ve.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            SI = ve.env.chrome = /chrome/.test(cn) && /Google/.test(navigator.vendor) && parseInt(cn.match(/chrome\/(\d+)\./)[1], 10),
            wI = ve.env.ios = /(ipod|iphone|ipad)/.test(cn);
        ve.env.safari = /safari/.test(cn) && !SI && !wI;
        var Vi;
        qs && OI.on("touchstart mousedown", function(e) {
            Vi = e.target
        });
        ve.validClick = qs ? function(e) {
            return e === Vi || Tt.contains(e, Vi)
        } : function() {
            return !0
        };
        var Ls = "resize.webflow orientationchange.webflow load.webflow",
            RI = "scroll.webflow " + Ls;
        ve.resize = Hi(Qe, Ls);
        ve.scroll = Hi(Qe, RI);
        ve.redraw = Hi();

        function Hi(e, t) {
            var r = [],
                n = {};
            return n.up = $e.throttle(function(o) {
                $e.each(r, function(i) {
                    i(o)
                })
            }), e && t && e.on(t, n.up), n.on = function(o) {
                typeof o == "function" && ($e.contains(r, o) || r.push(o))
            }, n.off = function(o) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = $e.filter(r, function(i) {
                    return i !== o
                })
            }, n
        }
        ve.location = function(e) {
            window.location = e
        };
        ve.env() && (ve.location = function() {});
        ve.ready = function() {
            ln = !0, Bi ? CI() : $e.each(Yt, Rs), $e.each(Wi, Rs), ve.resize.up()
        };

        function Rs(e) {
            at(e) && e()
        }

        function CI() {
            Bi = !1, $e.each(zt, Ns)
        }
        var Mt;
        ve.load = function(e) {
            Mt.then(e)
        };

        function xs() {
            Mt && (Mt.reject(), Qe.off("load", Mt.resolve)), Mt = new Tt.Deferred, Qe.on("load", Mt.resolve)
        }
        ve.destroy = function(e) {
            e = e || {}, Bi = !0, Qe.triggerHandler("__wf_destroy"), e.domready != null && (ln = e.domready), $e.each(zt, Ps), ve.resize.off(), ve.scroll.off(), ve.redraw.off(), Yt = [], Wi = [], Mt.state() === "pending" && xs()
        };
        Tt(ve.ready);
        xs();
        Ms.exports = window.Webflow = ve
    });
    var Gs = u((VW, Fs) => {
        var Ds = ke();
        Ds.define("brand", Fs.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                o = e("body"),
                i = ".w-webflow-badge",
                a = window.location,
                s = /PhantomJS/i.test(navigator.userAgent),
                c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                f;
            t.ready = function() {
                var h = n.attr("data-wf-status"),
                    y = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(y) && a.hostname !== y && (h = !0), h && !s && (f = f || d(), g(), setTimeout(g, 500), e(r).off(c, p).on(c, p))
            };

            function p() {
                var h = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(f).attr("style", h ? "display: none !important;" : "")
            }

            function d() {
                var h = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    y = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
                        marginRight: "8px",
                        width: "16px"
                    }),
                    I = e("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow");
                return h.append(y, I), h[0]
            }

            function g() {
                var h = o.children(i),
                    y = h.length && h.get(0) === f,
                    I = Ds.env("editor");
                if (y) {
                    I && h.remove();
                    return
                }
                h.length && h.remove(), I || o.append(f)
            }
            return t
        })
    });
    var Us = u((WW, Xs) => {
        var ki = ke();
        ki.define("edit", Xs.exports = function(e, t, r) {
            if (r = r || {}, (ki.env("test") || ki.env("frame")) && !r.fixture && !NI()) return {
                exit: 1
            };
            var n = {},
                o = e(window),
                i = e(document.documentElement),
                a = document.location,
                s = "hashchange",
                c, f = r.load || g,
                p = !1;
            try {
                p = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            p ? f() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && f() : o.on(s, d).triggerHandler(s);

            function d() {
                c || /\?edit/.test(a.hash) && f()
            }

            function g() {
                c = !0, window.WebflowEditor = !0, o.off(s, d), w(function(L) {
                    e.ajax({
                        url: S("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: i.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: h(L)
                    })
                })
            }

            function h(L) {
                return function(P) {
                    if (!P) {
                        console.error("Could not load editor data");
                        return
                    }
                    P.thirdPartyCookiesSupported = L, y(x(P.bugReporterScriptPath), function() {
                        y(x(P.scriptPath), function() {
                            window.WebflowEditor(P)
                        })
                    })
                }
            }

            function y(L, P) {
                e.ajax({
                    type: "GET",
                    url: L,
                    dataType: "script",
                    cache: !0
                }).then(P, I)
            }

            function I(L, P, M) {
                throw console.error("Could not load editor script: " + P), M
            }

            function x(L) {
                return L.indexOf("//") >= 0 ? L : S("https://editor-api.webflow.com" + L)
            }

            function S(L) {
                return L.replace(/([^:])\/\//g, "$1/")
            }

            function w(L) {
                var P = window.document.createElement("iframe");
                P.src = "https://webflow.com/site/third-party-cookie-check.html", P.style.display = "none", P.sandbox = "allow-scripts allow-same-origin";
                var M = function(X) {
                    X.data === "WF_third_party_cookies_unsupported" ? (O(P, M), L(!1)) : X.data === "WF_third_party_cookies_supported" && (O(P, M), L(!0))
                };
                P.onerror = function() {
                    O(P, M), L(!1)
                }, window.addEventListener("message", M, !1), window.document.body.appendChild(P)
            }

            function O(L, P) {
                window.removeEventListener("message", P, !1), L.remove()
            }
            return n
        });

        function NI() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var Ws = u((BW, Vs) => {
        var PI = ke();
        PI.define("focus-visible", Vs.exports = function() {
            function e(r) {
                var n = !0,
                    o = !1,
                    i = null,
                    a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function s(O) {
                    return !!(O && O !== document && O.nodeName !== "HTML" && O.nodeName !== "BODY" && "classList" in O && "contains" in O.classList)
                }

                function c(O) {
                    var L = O.type,
                        P = O.tagName;
                    return !!(P === "INPUT" && a[L] && !O.readOnly || P === "TEXTAREA" && !O.readOnly || O.isContentEditable)
                }

                function f(O) {
                    O.getAttribute("data-wf-focus-visible") || O.setAttribute("data-wf-focus-visible", "true")
                }

                function p(O) {
                    O.getAttribute("data-wf-focus-visible") && O.removeAttribute("data-wf-focus-visible")
                }

                function d(O) {
                    O.metaKey || O.altKey || O.ctrlKey || (s(r.activeElement) && f(r.activeElement), n = !0)
                }

                function g() {
                    n = !1
                }

                function h(O) {
                    s(O.target) && (n || c(O.target)) && f(O.target)
                }

                function y(O) {
                    s(O.target) && O.target.hasAttribute("data-wf-focus-visible") && (o = !0, window.clearTimeout(i), i = window.setTimeout(function() {
                        o = !1
                    }, 100), p(O.target))
                }

                function I() {
                    document.visibilityState === "hidden" && (o && (n = !0), x())
                }

                function x() {
                    document.addEventListener("mousemove", w), document.addEventListener("mousedown", w), document.addEventListener("mouseup", w), document.addEventListener("pointermove", w), document.addEventListener("pointerdown", w), document.addEventListener("pointerup", w), document.addEventListener("touchmove", w), document.addEventListener("touchstart", w), document.addEventListener("touchend", w)
                }

                function S() {
                    document.removeEventListener("mousemove", w), document.removeEventListener("mousedown", w), document.removeEventListener("mouseup", w), document.removeEventListener("pointermove", w), document.removeEventListener("pointerdown", w), document.removeEventListener("pointerup", w), document.removeEventListener("touchmove", w), document.removeEventListener("touchstart", w), document.removeEventListener("touchend", w)
                }

                function w(O) {
                    O.target.nodeName && O.target.nodeName.toLowerCase() === "html" || (n = !1, S())
                }
                document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", g, !0), document.addEventListener("pointerdown", g, !0), document.addEventListener("touchstart", g, !0), document.addEventListener("visibilitychange", I, !0), x(), r.addEventListener("focus", h, !0), r.addEventListener("blur", y, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var ks = u((HW, Hs) => {
        var Bs = ke();
        Bs.define("focus", Hs.exports = function() {
            var e = [],
                t = !1;

            function r(a) {
                t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
            }

            function n(a) {
                var s = a.target,
                    c = s.tagName;
                return /^a$/i.test(c) && s.href != null || /^(button|textarea)$/i.test(c) && s.disabled !== !0 || /^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(c) || /^video$/i.test(c) && s.controls === !0
            }

            function o(a) {
                n(a) && (t = !0, setTimeout(() => {
                    for (t = !1, a.target.focus(); e.length > 0;) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type, s))
                    }
                }, 0))
            }

            function i() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Bs.env.safari && (document.addEventListener("mousedown", o, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: i
            }
        })
    });
    var zs = u((kW, Ks) => {
        "use strict";
        var ji = window.jQuery,
            st = {},
            fn = [],
            js = ".w-ix",
            dn = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, ji(t).triggerHandler(st.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, ji(t).triggerHandler(st.types.OUTRO))
                }
            };
        st.triggers = {};
        st.types = {
            INTRO: "w-ix-intro" + js,
            OUTRO: "w-ix-outro" + js
        };
        st.init = function() {
            for (var e = fn.length, t = 0; t < e; t++) {
                var r = fn[t];
                r[0](0, r[1])
            }
            fn = [], ji.extend(st.triggers, dn)
        };
        st.async = function() {
            for (var e in dn) {
                var t = dn[e];
                dn.hasOwnProperty(e) && (st.triggers[e] = function(r, n) {
                    fn.push([t, n])
                })
            }
        };
        st.async();
        Ks.exports = st
    });
    var vn = u((jW, Qs) => {
        "use strict";
        var Ki = zs();

        function Ys(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var qI = window.jQuery,
            pn = {},
            $s = ".w-ix",
            LI = {
                reset: function(e, t) {
                    Ki.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Ki.triggers.intro(e, t), Ys(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Ki.triggers.outro(e, t), Ys(t, "COMPONENT_INACTIVE")
                }
            };
        pn.triggers = {};
        pn.types = {
            INTRO: "w-ix-intro" + $s,
            OUTRO: "w-ix-outro" + $s
        };
        qI.extend(pn.triggers, LI);
        Qs.exports = pn
    });
    var Zs = u((KW, Et) => {
        function zi(e) {
            return Et.exports = zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, Et.exports.__esModule = !0, Et.exports.default = Et.exports, zi(e)
        }
        Et.exports = zi, Et.exports.__esModule = !0, Et.exports.default = Et.exports
    });
    var Dt = u((zW, Sr) => {
        var xI = Zs().default;

        function Js(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (Js = function(o) {
                return o ? r : t
            })(e)
        }

        function MI(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || xI(e) !== "object" && typeof e != "function") return {
                default: e
            };
            var r = Js(t);
            if (r && r.has(e)) return r.get(e);
            var n = {},
                o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                }
            return n.default = e, r && r.set(e, n), n
        }
        Sr.exports = MI, Sr.exports.__esModule = !0, Sr.exports.default = Sr.exports
    });
    var Ze = u((YW, wr) => {
        function DI(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        wr.exports = DI, wr.exports.__esModule = !0, wr.exports.default = wr.exports
    });
    var Ie = u(($W, eu) => {
        var hn = function(e) {
            return e && e.Math == Math && e
        };
        eu.exports = hn(typeof globalThis == "object" && globalThis) || hn(typeof window == "object" && window) || hn(typeof self == "object" && self) || hn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var $t = u((QW, tu) => {
        tu.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var Ft = u((ZW, ru) => {
        var FI = $t();
        ru.exports = !FI(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var gn = u((JW, nu) => {
        var Rr = Function.prototype.call;
        nu.exports = Rr.bind ? Rr.bind(Rr) : function() {
            return Rr.apply(Rr, arguments)
        }
    });
    var su = u(au => {
        "use strict";
        var iu = {}.propertyIsEnumerable,
            ou = Object.getOwnPropertyDescriptor,
            GI = ou && !iu.call({
                1: 2
            }, 1);
        au.f = GI ? function(t) {
            var r = ou(this, t);
            return !!r && r.enumerable
        } : iu
    });
    var Yi = u((tB, uu) => {
        uu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var Je = u((rB, lu) => {
        var cu = Function.prototype,
            $i = cu.bind,
            Qi = cu.call,
            XI = $i && $i.bind(Qi);
        lu.exports = $i ? function(e) {
            return e && XI(Qi, e)
        } : function(e) {
            return e && function() {
                return Qi.apply(e, arguments)
            }
        }
    });
    var pu = u((nB, du) => {
        var fu = Je(),
            UI = fu({}.toString),
            VI = fu("".slice);
        du.exports = function(e) {
            return VI(UI(e), 8, -1)
        }
    });
    var hu = u((iB, vu) => {
        var WI = Ie(),
            BI = Je(),
            HI = $t(),
            kI = pu(),
            Zi = WI.Object,
            jI = BI("".split);
        vu.exports = HI(function() {
            return !Zi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return kI(e) == "String" ? jI(e, "") : Zi(e)
        } : Zi
    });
    var Ji = u((oB, gu) => {
        var KI = Ie(),
            zI = KI.TypeError;
        gu.exports = function(e) {
            if (e == null) throw zI("Can't call method on " + e);
            return e
        }
    });
    var Cr = u((aB, Eu) => {
        var YI = hu(),
            $I = Ji();
        Eu.exports = function(e) {
            return YI($I(e))
        }
    });
    var ut = u((sB, _u) => {
        _u.exports = function(e) {
            return typeof e == "function"
        }
    });
    var Qt = u((uB, yu) => {
        var QI = ut();
        yu.exports = function(e) {
            return typeof e == "object" ? e !== null : QI(e)
        }
    });
    var Nr = u((cB, Iu) => {
        var eo = Ie(),
            ZI = ut(),
            JI = function(e) {
                return ZI(e) ? e : void 0
            };
        Iu.exports = function(e, t) {
            return arguments.length < 2 ? JI(eo[e]) : eo[e] && eo[e][t]
        }
    });
    var Tu = u((lB, mu) => {
        var em = Je();
        mu.exports = em({}.isPrototypeOf)
    });
    var bu = u((fB, Ou) => {
        var tm = Nr();
        Ou.exports = tm("navigator", "userAgent") || ""
    });
    var Pu = u((dB, Nu) => {
        var Cu = Ie(),
            to = bu(),
            Au = Cu.process,
            Su = Cu.Deno,
            wu = Au && Au.versions || Su && Su.version,
            Ru = wu && wu.v8,
            et, En;
        Ru && (et = Ru.split("."), En = et[0] > 0 && et[0] < 4 ? 1 : +(et[0] + et[1]));
        !En && to && (et = to.match(/Edge\/(\d+)/), (!et || et[1] >= 74) && (et = to.match(/Chrome\/(\d+)/), et && (En = +et[1])));
        Nu.exports = En
    });
    var ro = u((pB, Lu) => {
        var qu = Pu(),
            rm = $t();
        Lu.exports = !!Object.getOwnPropertySymbols && !rm(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && qu && qu < 41
        })
    });
    var no = u((vB, xu) => {
        var nm = ro();
        xu.exports = nm && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var io = u((hB, Mu) => {
        var im = Ie(),
            om = Nr(),
            am = ut(),
            sm = Tu(),
            um = no(),
            cm = im.Object;
        Mu.exports = um ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = om("Symbol");
            return am(t) && sm(t.prototype, cm(e))
        }
    });
    var Fu = u((gB, Du) => {
        var lm = Ie(),
            fm = lm.String;
        Du.exports = function(e) {
            try {
                return fm(e)
            } catch {
                return "Object"
            }
        }
    });
    var Xu = u((EB, Gu) => {
        var dm = Ie(),
            pm = ut(),
            vm = Fu(),
            hm = dm.TypeError;
        Gu.exports = function(e) {
            if (pm(e)) return e;
            throw hm(vm(e) + " is not a function")
        }
    });
    var Vu = u((_B, Uu) => {
        var gm = Xu();
        Uu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : gm(r)
        }
    });
    var Bu = u((yB, Wu) => {
        var Em = Ie(),
            oo = gn(),
            ao = ut(),
            so = Qt(),
            _m = Em.TypeError;
        Wu.exports = function(e, t) {
            var r, n;
            if (t === "string" && ao(r = e.toString) && !so(n = oo(r, e)) || ao(r = e.valueOf) && !so(n = oo(r, e)) || t !== "string" && ao(r = e.toString) && !so(n = oo(r, e))) return n;
            throw _m("Can't convert object to primitive value")
        }
    });
    var ku = u((IB, Hu) => {
        Hu.exports = !1
    });
    var _n = u((mB, Ku) => {
        var ju = Ie(),
            ym = Object.defineProperty;
        Ku.exports = function(e, t) {
            try {
                ym(ju, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                ju[e] = t
            }
            return t
        }
    });
    var yn = u((TB, Yu) => {
        var Im = Ie(),
            mm = _n(),
            zu = "__core-js_shared__",
            Tm = Im[zu] || mm(zu, {});
        Yu.exports = Tm
    });
    var uo = u((OB, Qu) => {
        var Om = ku(),
            $u = yn();
        (Qu.exports = function(e, t) {
            return $u[e] || ($u[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: Om ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var Ju = u((bB, Zu) => {
        var bm = Ie(),
            Am = Ji(),
            Sm = bm.Object;
        Zu.exports = function(e) {
            return Sm(Am(e))
        }
    });
    var Ot = u((AB, ec) => {
        var wm = Je(),
            Rm = Ju(),
            Cm = wm({}.hasOwnProperty);
        ec.exports = Object.hasOwn || function(t, r) {
            return Cm(Rm(t), r)
        }
    });
    var co = u((SB, tc) => {
        var Nm = Je(),
            Pm = 0,
            qm = Math.random(),
            Lm = Nm(1.toString);
        tc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Lm(++Pm + qm, 36)
        }
    });
    var lo = u((wB, ac) => {
        var xm = Ie(),
            Mm = uo(),
            rc = Ot(),
            Dm = co(),
            nc = ro(),
            oc = no(),
            Zt = Mm("wks"),
            Gt = xm.Symbol,
            ic = Gt && Gt.for,
            Fm = oc ? Gt : Gt && Gt.withoutSetter || Dm;
        ac.exports = function(e) {
            if (!rc(Zt, e) || !(nc || typeof Zt[e] == "string")) {
                var t = "Symbol." + e;
                nc && rc(Gt, e) ? Zt[e] = Gt[e] : oc && ic ? Zt[e] = ic(t) : Zt[e] = Fm(t)
            }
            return Zt[e]
        }
    });
    var lc = u((RB, cc) => {
        var Gm = Ie(),
            Xm = gn(),
            sc = Qt(),
            uc = io(),
            Um = Vu(),
            Vm = Bu(),
            Wm = lo(),
            Bm = Gm.TypeError,
            Hm = Wm("toPrimitive");
        cc.exports = function(e, t) {
            if (!sc(e) || uc(e)) return e;
            var r = Um(e, Hm),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = Xm(r, e, t), !sc(n) || uc(n)) return n;
                throw Bm("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), Vm(e, t)
        }
    });
    var fo = u((CB, fc) => {
        var km = lc(),
            jm = io();
        fc.exports = function(e) {
            var t = km(e, "string");
            return jm(t) ? t : t + ""
        }
    });
    var vo = u((NB, pc) => {
        var Km = Ie(),
            dc = Qt(),
            po = Km.document,
            zm = dc(po) && dc(po.createElement);
        pc.exports = function(e) {
            return zm ? po.createElement(e) : {}
        }
    });
    var ho = u((PB, vc) => {
        var Ym = Ft(),
            $m = $t(),
            Qm = vo();
        vc.exports = !Ym && !$m(function() {
            return Object.defineProperty(Qm("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var go = u(gc => {
        var Zm = Ft(),
            Jm = gn(),
            eT = su(),
            tT = Yi(),
            rT = Cr(),
            nT = fo(),
            iT = Ot(),
            oT = ho(),
            hc = Object.getOwnPropertyDescriptor;
        gc.f = Zm ? hc : function(t, r) {
            if (t = rT(t), r = nT(r), oT) try {
                return hc(t, r)
            } catch {}
            if (iT(t, r)) return tT(!Jm(eT.f, t, r), t[r])
        }
    });
    var Pr = u((LB, _c) => {
        var Ec = Ie(),
            aT = Qt(),
            sT = Ec.String,
            uT = Ec.TypeError;
        _c.exports = function(e) {
            if (aT(e)) return e;
            throw uT(sT(e) + " is not an object")
        }
    });
    var qr = u(mc => {
        var cT = Ie(),
            lT = Ft(),
            fT = ho(),
            yc = Pr(),
            dT = fo(),
            pT = cT.TypeError,
            Ic = Object.defineProperty;
        mc.f = lT ? Ic : function(t, r, n) {
            if (yc(t), r = dT(r), yc(n), fT) try {
                return Ic(t, r, n)
            } catch {}
            if ("get" in n || "set" in n) throw pT("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var In = u((MB, Tc) => {
        var vT = Ft(),
            hT = qr(),
            gT = Yi();
        Tc.exports = vT ? function(e, t, r) {
            return hT.f(e, t, gT(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var _o = u((DB, Oc) => {
        var ET = Je(),
            _T = ut(),
            Eo = yn(),
            yT = ET(Function.toString);
        _T(Eo.inspectSource) || (Eo.inspectSource = function(e) {
            return yT(e)
        });
        Oc.exports = Eo.inspectSource
    });
    var Sc = u((FB, Ac) => {
        var IT = Ie(),
            mT = ut(),
            TT = _o(),
            bc = IT.WeakMap;
        Ac.exports = mT(bc) && /native code/.test(TT(bc))
    });
    var yo = u((GB, Rc) => {
        var OT = uo(),
            bT = co(),
            wc = OT("keys");
        Rc.exports = function(e) {
            return wc[e] || (wc[e] = bT(e))
        }
    });
    var mn = u((XB, Cc) => {
        Cc.exports = {}
    });
    var Mc = u((UB, xc) => {
        var AT = Sc(),
            Lc = Ie(),
            Io = Je(),
            ST = Qt(),
            wT = In(),
            mo = Ot(),
            To = yn(),
            RT = yo(),
            CT = mn(),
            Nc = "Object already initialized",
            bo = Lc.TypeError,
            NT = Lc.WeakMap,
            Tn, Lr, On, PT = function(e) {
                return On(e) ? Lr(e) : Tn(e, {})
            },
            qT = function(e) {
                return function(t) {
                    var r;
                    if (!ST(t) || (r = Lr(t)).type !== e) throw bo("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        AT || To.state ? (bt = To.state || (To.state = new NT), Pc = Io(bt.get), Oo = Io(bt.has), qc = Io(bt.set), Tn = function(e, t) {
            if (Oo(bt, e)) throw new bo(Nc);
            return t.facade = e, qc(bt, e, t), t
        }, Lr = function(e) {
            return Pc(bt, e) || {}
        }, On = function(e) {
            return Oo(bt, e)
        }) : (Xt = RT("state"), CT[Xt] = !0, Tn = function(e, t) {
            if (mo(e, Xt)) throw new bo(Nc);
            return t.facade = e, wT(e, Xt, t), t
        }, Lr = function(e) {
            return mo(e, Xt) ? e[Xt] : {}
        }, On = function(e) {
            return mo(e, Xt)
        });
        var bt, Pc, Oo, qc, Xt;
        xc.exports = {
            set: Tn,
            get: Lr,
            has: On,
            enforce: PT,
            getterFor: qT
        }
    });
    var Gc = u((VB, Fc) => {
        var Ao = Ft(),
            LT = Ot(),
            Dc = Function.prototype,
            xT = Ao && Object.getOwnPropertyDescriptor,
            So = LT(Dc, "name"),
            MT = So && function() {}.name === "something",
            DT = So && (!Ao || Ao && xT(Dc, "name").configurable);
        Fc.exports = {
            EXISTS: So,
            PROPER: MT,
            CONFIGURABLE: DT
        }
    });
    var Bc = u((WB, Wc) => {
        var FT = Ie(),
            Xc = ut(),
            GT = Ot(),
            Uc = In(),
            XT = _n(),
            UT = _o(),
            Vc = Mc(),
            VT = Gc().CONFIGURABLE,
            WT = Vc.get,
            BT = Vc.enforce,
            HT = String(String).split("String");
        (Wc.exports = function(e, t, r, n) {
            var o = n ? !!n.unsafe : !1,
                i = n ? !!n.enumerable : !1,
                a = n ? !!n.noTargetGet : !1,
                s = n && n.name !== void 0 ? n.name : t,
                c;
            if (Xc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!GT(r, "name") || VT && r.name !== s) && Uc(r, "name", s), c = BT(r), c.source || (c.source = HT.join(typeof s == "string" ? s : ""))), e === FT) {
                i ? e[t] = r : XT(t, r);
                return
            } else o ? !a && e[t] && (i = !0) : delete e[t];
            i ? e[t] = r : Uc(e, t, r)
        })(Function.prototype, "toString", function() {
            return Xc(this) && WT(this).source || UT(this)
        })
    });
    var wo = u((BB, Hc) => {
        var kT = Math.ceil,
            jT = Math.floor;
        Hc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? jT : kT)(t)
        }
    });
    var jc = u((HB, kc) => {
        var KT = wo(),
            zT = Math.max,
            YT = Math.min;
        kc.exports = function(e, t) {
            var r = KT(e);
            return r < 0 ? zT(r + t, 0) : YT(r, t)
        }
    });
    var zc = u((kB, Kc) => {
        var $T = wo(),
            QT = Math.min;
        Kc.exports = function(e) {
            return e > 0 ? QT($T(e), 9007199254740991) : 0
        }
    });
    var $c = u((jB, Yc) => {
        var ZT = zc();
        Yc.exports = function(e) {
            return ZT(e.length)
        }
    });
    var Ro = u((KB, Zc) => {
        var JT = Cr(),
            eO = jc(),
            tO = $c(),
            Qc = function(e) {
                return function(t, r, n) {
                    var o = JT(t),
                        i = tO(o),
                        a = eO(n, i),
                        s;
                    if (e && r != r) {
                        for (; i > a;)
                            if (s = o[a++], s != s) return !0
                    } else
                        for (; i > a; a++)
                            if ((e || a in o) && o[a] === r) return e || a || 0;
                    return !e && -1
                }
            };
        Zc.exports = {
            includes: Qc(!0),
            indexOf: Qc(!1)
        }
    });
    var No = u((zB, el) => {
        var rO = Je(),
            Co = Ot(),
            nO = Cr(),
            iO = Ro().indexOf,
            oO = mn(),
            Jc = rO([].push);
        el.exports = function(e, t) {
            var r = nO(e),
                n = 0,
                o = [],
                i;
            for (i in r) !Co(oO, i) && Co(r, i) && Jc(o, i);
            for (; t.length > n;) Co(r, i = t[n++]) && (~iO(o, i) || Jc(o, i));
            return o
        }
    });
    var bn = u((YB, tl) => {
        tl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var nl = u(rl => {
        var aO = No(),
            sO = bn(),
            uO = sO.concat("length", "prototype");
        rl.f = Object.getOwnPropertyNames || function(t) {
            return aO(t, uO)
        }
    });
    var ol = u(il => {
        il.f = Object.getOwnPropertySymbols
    });
    var sl = u((ZB, al) => {
        var cO = Nr(),
            lO = Je(),
            fO = nl(),
            dO = ol(),
            pO = Pr(),
            vO = lO([].concat);
        al.exports = cO("Reflect", "ownKeys") || function(t) {
            var r = fO.f(pO(t)),
                n = dO.f;
            return n ? vO(r, n(t)) : r
        }
    });
    var cl = u((JB, ul) => {
        var hO = Ot(),
            gO = sl(),
            EO = go(),
            _O = qr();
        ul.exports = function(e, t) {
            for (var r = gO(t), n = _O.f, o = EO.f, i = 0; i < r.length; i++) {
                var a = r[i];
                hO(e, a) || n(e, a, o(t, a))
            }
        }
    });
    var fl = u((eH, ll) => {
        var yO = $t(),
            IO = ut(),
            mO = /#|\.prototype\./,
            xr = function(e, t) {
                var r = OO[TO(e)];
                return r == AO ? !0 : r == bO ? !1 : IO(t) ? yO(t) : !!t
            },
            TO = xr.normalize = function(e) {
                return String(e).replace(mO, ".").toLowerCase()
            },
            OO = xr.data = {},
            bO = xr.NATIVE = "N",
            AO = xr.POLYFILL = "P";
        ll.exports = xr
    });
    var pl = u((tH, dl) => {
        var Po = Ie(),
            SO = go().f,
            wO = In(),
            RO = Bc(),
            CO = _n(),
            NO = cl(),
            PO = fl();
        dl.exports = function(e, t) {
            var r = e.target,
                n = e.global,
                o = e.stat,
                i, a, s, c, f, p;
            if (n ? a = Po : o ? a = Po[r] || CO(r, {}) : a = (Po[r] || {}).prototype, a)
                for (s in t) {
                    if (f = t[s], e.noTargetGet ? (p = SO(a, s), c = p && p.value) : c = a[s], i = PO(n ? s : r + (o ? "." : "#") + s, e.forced), !i && c !== void 0) {
                        if (typeof f == typeof c) continue;
                        NO(f, c)
                    }(e.sham || c && c.sham) && wO(f, "sham", !0), RO(a, s, f, e)
                }
        }
    });
    var hl = u((rH, vl) => {
        var qO = No(),
            LO = bn();
        vl.exports = Object.keys || function(t) {
            return qO(t, LO)
        }
    });
    var El = u((nH, gl) => {
        var xO = Ft(),
            MO = qr(),
            DO = Pr(),
            FO = Cr(),
            GO = hl();
        gl.exports = xO ? Object.defineProperties : function(t, r) {
            DO(t);
            for (var n = FO(r), o = GO(r), i = o.length, a = 0, s; i > a;) MO.f(t, s = o[a++], n[s]);
            return t
        }
    });
    var yl = u((iH, _l) => {
        var XO = Nr();
        _l.exports = XO("document", "documentElement")
    });
    var wl = u((oH, Sl) => {
        var UO = Pr(),
            VO = El(),
            Il = bn(),
            WO = mn(),
            BO = yl(),
            HO = vo(),
            kO = yo(),
            ml = ">",
            Tl = "<",
            Lo = "prototype",
            xo = "script",
            bl = kO("IE_PROTO"),
            qo = function() {},
            Al = function(e) {
                return Tl + xo + ml + e + Tl + "/" + xo + ml
            },
            Ol = function(e) {
                e.write(Al("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            jO = function() {
                var e = HO("iframe"),
                    t = "java" + xo + ":",
                    r;
                return e.style.display = "none", BO.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Al("document.F=Object")), r.close(), r.F
            },
            An, Sn = function() {
                try {
                    An = new ActiveXObject("htmlfile")
                } catch {}
                Sn = typeof document < "u" ? document.domain && An ? Ol(An) : jO() : Ol(An);
                for (var e = Il.length; e--;) delete Sn[Lo][Il[e]];
                return Sn()
            };
        WO[bl] = !0;
        Sl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (qo[Lo] = UO(t), n = new qo, qo[Lo] = null, n[bl] = t) : n = Sn(), r === void 0 ? n : VO(n, r)
        }
    });
    var Cl = u((aH, Rl) => {
        var KO = lo(),
            zO = wl(),
            YO = qr(),
            Mo = KO("unscopables"),
            Do = Array.prototype;
        Do[Mo] == null && YO.f(Do, Mo, {
            configurable: !0,
            value: zO(null)
        });
        Rl.exports = function(e) {
            Do[Mo][e] = !0
        }
    });
    var Nl = u(() => {
        "use strict";
        var $O = pl(),
            QO = Ro().includes,
            ZO = Cl();
        $O({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return QO(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        ZO("includes")
    });
    var ql = u((cH, Pl) => {
        var JO = Ie(),
            eb = Je();
        Pl.exports = function(e, t) {
            return eb(JO[e].prototype[t])
        }
    });
    var xl = u((lH, Ll) => {
        Nl();
        var tb = ql();
        Ll.exports = tb("Array", "includes")
    });
    var Dl = u((fH, Ml) => {
        var rb = xl();
        Ml.exports = rb
    });
    var Gl = u((dH, Fl) => {
        var nb = Dl();
        Fl.exports = nb
    });
    var Fo = u((pH, Xl) => {
        var ib = typeof global == "object" && global && global.Object === Object && global;
        Xl.exports = ib
    });
    var tt = u((vH, Ul) => {
        var ob = Fo(),
            ab = typeof self == "object" && self && self.Object === Object && self,
            sb = ob || ab || Function("return this")();
        Ul.exports = sb
    });
    var Jt = u((hH, Vl) => {
        var ub = tt(),
            cb = ub.Symbol;
        Vl.exports = cb
    });
    var kl = u((gH, Hl) => {
        var Wl = Jt(),
            Bl = Object.prototype,
            lb = Bl.hasOwnProperty,
            fb = Bl.toString,
            Mr = Wl ? Wl.toStringTag : void 0;

        function db(e) {
            var t = lb.call(e, Mr),
                r = e[Mr];
            try {
                e[Mr] = void 0;
                var n = !0
            } catch {}
            var o = fb.call(e);
            return n && (t ? e[Mr] = r : delete e[Mr]), o
        }
        Hl.exports = db
    });
    var Kl = u((EH, jl) => {
        var pb = Object.prototype,
            vb = pb.toString;

        function hb(e) {
            return vb.call(e)
        }
        jl.exports = hb
    });
    var At = u((_H, $l) => {
        var zl = Jt(),
            gb = kl(),
            Eb = Kl(),
            _b = "[object Null]",
            yb = "[object Undefined]",
            Yl = zl ? zl.toStringTag : void 0;

        function Ib(e) {
            return e == null ? e === void 0 ? yb : _b : Yl && Yl in Object(e) ? gb(e) : Eb(e)
        }
        $l.exports = Ib
    });
    var Go = u((yH, Ql) => {
        function mb(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        Ql.exports = mb
    });
    var Xo = u((IH, Zl) => {
        var Tb = Go(),
            Ob = Tb(Object.getPrototypeOf, Object);
        Zl.exports = Ob
    });
    var _t = u((mH, Jl) => {
        function bb(e) {
            return e != null && typeof e == "object"
        }
        Jl.exports = bb
    });
    var Uo = u((TH, tf) => {
        var Ab = At(),
            Sb = Xo(),
            wb = _t(),
            Rb = "[object Object]",
            Cb = Function.prototype,
            Nb = Object.prototype,
            ef = Cb.toString,
            Pb = Nb.hasOwnProperty,
            qb = ef.call(Object);

        function Lb(e) {
            if (!wb(e) || Ab(e) != Rb) return !1;
            var t = Sb(e);
            if (t === null) return !0;
            var r = Pb.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && ef.call(r) == qb
        }
        tf.exports = Lb
    });
    var rf = u(Vo => {
        "use strict";
        Object.defineProperty(Vo, "__esModule", {
            value: !0
        });
        Vo.default = xb;

        function xb(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var nf = u((Bo, Wo) => {
        "use strict";
        Object.defineProperty(Bo, "__esModule", {
            value: !0
        });
        var Mb = rf(),
            Db = Fb(Mb);

        function Fb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var er;
        typeof self < "u" ? er = self : typeof window < "u" ? er = window : typeof global < "u" ? er = global : typeof Wo < "u" ? er = Wo : er = Function("return this")();
        var Gb = (0, Db.default)(er);
        Bo.default = Gb
    });
    var Ho = u(Dr => {
        "use strict";
        Dr.__esModule = !0;
        Dr.ActionTypes = void 0;
        Dr.default = uf;
        var Xb = Uo(),
            Ub = sf(Xb),
            Vb = nf(),
            of = sf(Vb);

        function sf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var af = Dr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function uf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(uf)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var o = e,
                i = t,
                a = [],
                s = a,
                c = !1;

            function f() {
                s === a && (s = a.slice())
            }

            function p() {
                return i
            }

            function d(I) {
                if (typeof I != "function") throw new Error("Expected listener to be a function.");
                var x = !0;
                return f(), s.push(I),
                    function() {
                        if (x) {
                            x = !1, f();
                            var w = s.indexOf(I);
                            s.splice(w, 1)
                        }
                    }
            }

            function g(I) {
                if (!(0, Ub.default)(I)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof I.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (c) throw new Error("Reducers may not dispatch actions.");
                try {
                    c = !0, i = o(i, I)
                } finally {
                    c = !1
                }
                for (var x = a = s, S = 0; S < x.length; S++) x[S]();
                return I
            }

            function h(I) {
                if (typeof I != "function") throw new Error("Expected the nextReducer to be a function.");
                o = I, g({
                    type: af.INIT
                })
            }

            function y() {
                var I, x = d;
                return I = {
                    subscribe: function(w) {
                        if (typeof w != "object") throw new TypeError("Expected the observer to be an object.");

                        function O() {
                            w.next && w.next(p())
                        }
                        O();
                        var L = x(O);
                        return {
                            unsubscribe: L
                        }
                    }
                }, I[ of .default] = function() {
                    return this
                }, I
            }
            return g({
                type: af.INIT
            }), n = {
                dispatch: g,
                subscribe: d,
                getState: p,
                replaceReducer: h
            }, n[ of .default] = y, n
        }
    });
    var jo = u(ko => {
        "use strict";
        ko.__esModule = !0;
        ko.default = Wb;

        function Wb(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var ff = u(Ko => {
        "use strict";
        Ko.__esModule = !0;
        Ko.default = Kb;
        var cf = Ho(),
            Bb = Uo(),
            SH = lf(Bb),
            Hb = jo(),
            wH = lf(Hb);

        function lf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function kb(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function jb(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: cf.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: o
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + cf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function Kb(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                typeof e[o] == "function" && (r[o] = e[o])
            }
            var i = Object.keys(r);
            if (!1) var a;
            var s;
            try {
                jb(r)
            } catch (c) {
                s = c
            }
            return function() {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    p = arguments[1];
                if (s) throw s;
                if (!1) var d;
                for (var g = !1, h = {}, y = 0; y < i.length; y++) {
                    var I = i[y],
                        x = r[I],
                        S = f[I],
                        w = x(S, p);
                    if (typeof w > "u") {
                        var O = kb(I, p);
                        throw new Error(O)
                    }
                    h[I] = w, g = g || w !== S
                }
                return g ? h : f
            }
        }
    });
    var pf = u(zo => {
        "use strict";
        zo.__esModule = !0;
        zo.default = zb;

        function df(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function zb(e, t) {
            if (typeof e == "function") return df(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
                var i = r[o],
                    a = e[i];
                typeof a == "function" && (n[i] = df(a, t))
            }
            return n
        }
    });
    var $o = u(Yo => {
        "use strict";
        Yo.__esModule = !0;
        Yo.default = Yb;

        function Yb() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(i) {
                return i
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                o = t.slice(0, -1);
            return function() {
                return o.reduceRight(function(i, a) {
                    return a(i)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var vf = u(Qo => {
        "use strict";
        Qo.__esModule = !0;
        var $b = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        Qo.default = eA;
        var Qb = $o(),
            Zb = Jb(Qb);

        function Jb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function eA() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(o, i, a) {
                    var s = n(o, i, a),
                        c = s.dispatch,
                        f = [],
                        p = {
                            getState: s.getState,
                            dispatch: function(g) {
                                return c(g)
                            }
                        };
                    return f = t.map(function(d) {
                        return d(p)
                    }), c = Zb.default.apply(void 0, f)(s.dispatch), $b({}, s, {
                        dispatch: c
                    })
                }
            }
        }
    });
    var Zo = u(je => {
        "use strict";
        je.__esModule = !0;
        je.compose = je.applyMiddleware = je.bindActionCreators = je.combineReducers = je.createStore = void 0;
        var tA = Ho(),
            rA = tr(tA),
            nA = ff(),
            iA = tr(nA),
            oA = pf(),
            aA = tr(oA),
            sA = vf(),
            uA = tr(sA),
            cA = $o(),
            lA = tr(cA),
            fA = jo(),
            qH = tr(fA);

        function tr(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        je.createStore = rA.default;
        je.combineReducers = iA.default;
        je.bindActionCreators = aA.default;
        je.applyMiddleware = uA.default;
        je.compose = lA.default
    });
    var hf = u(Ne => {
        "use strict";
        Object.defineProperty(Ne, "__esModule", {
            value: !0
        });
        Ne.QuickEffectIds = Ne.QuickEffectDirectionConsts = Ne.EventTypeConsts = Ne.EventLimitAffectedElements = Ne.EventContinuousMouseAxes = Ne.EventBasedOn = Ne.EventAppliesTo = void 0;
        var dA = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        };
        Ne.EventTypeConsts = dA;
        var pA = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        };
        Ne.EventAppliesTo = pA;
        var vA = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        };
        Ne.EventBasedOn = vA;
        var hA = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        };
        Ne.EventContinuousMouseAxes = hA;
        var gA = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        };
        Ne.EventLimitAffectedElements = gA;
        var EA = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        };
        Ne.QuickEffectIds = EA;
        var _A = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        };
        Ne.QuickEffectDirectionConsts = _A
    });
    var Jo = u(rr => {
        "use strict";
        Object.defineProperty(rr, "__esModule", {
            value: !0
        });
        rr.ActionTypeConsts = rr.ActionAppliesTo = void 0;
        var yA = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        };
        rr.ActionTypeConsts = yA;
        var IA = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        };
        rr.ActionAppliesTo = IA
    });
    var gf = u(wn => {
        "use strict";
        Object.defineProperty(wn, "__esModule", {
            value: !0
        });
        wn.InteractionTypeConsts = void 0;
        var mA = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        };
        wn.InteractionTypeConsts = mA
    });
    var Ef = u(Rn => {
        "use strict";
        Object.defineProperty(Rn, "__esModule", {
            value: !0
        });
        Rn.ReducedMotionTypes = void 0;
        var TA = Jo(),
            {
                TRANSFORM_MOVE: OA,
                TRANSFORM_SCALE: bA,
                TRANSFORM_ROTATE: AA,
                TRANSFORM_SKEW: SA,
                STYLE_SIZE: wA,
                STYLE_FILTER: RA,
                STYLE_FONT_VARIATION: CA
            } = TA.ActionTypeConsts,
            NA = {
                [OA]: !0,
                [bA]: !0,
                [AA]: !0,
                [SA]: !0,
                [wA]: !0,
                [RA]: !0,
                [CA]: !0
            };
        Rn.ReducedMotionTypes = NA
    });
    var _f = u(se => {
        "use strict";
        Object.defineProperty(se, "__esModule", {
            value: !0
        });
        se.IX2_VIEWPORT_WIDTH_CHANGED = se.IX2_TEST_FRAME_RENDERED = se.IX2_STOP_REQUESTED = se.IX2_SESSION_STOPPED = se.IX2_SESSION_STARTED = se.IX2_SESSION_INITIALIZED = se.IX2_RAW_DATA_IMPORTED = se.IX2_PREVIEW_REQUESTED = se.IX2_PLAYBACK_REQUESTED = se.IX2_PARAMETER_CHANGED = se.IX2_MEDIA_QUERIES_DEFINED = se.IX2_INSTANCE_STARTED = se.IX2_INSTANCE_REMOVED = se.IX2_INSTANCE_ADDED = se.IX2_EVENT_STATE_CHANGED = se.IX2_EVENT_LISTENER_ADDED = se.IX2_ELEMENT_STATE_CHANGED = se.IX2_CLEAR_REQUESTED = se.IX2_ANIMATION_FRAME_CHANGED = se.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
        var PA = "IX2_RAW_DATA_IMPORTED";
        se.IX2_RAW_DATA_IMPORTED = PA;
        var qA = "IX2_SESSION_INITIALIZED";
        se.IX2_SESSION_INITIALIZED = qA;
        var LA = "IX2_SESSION_STARTED";
        se.IX2_SESSION_STARTED = LA;
        var xA = "IX2_SESSION_STOPPED";
        se.IX2_SESSION_STOPPED = xA;
        var MA = "IX2_PREVIEW_REQUESTED";
        se.IX2_PREVIEW_REQUESTED = MA;
        var DA = "IX2_PLAYBACK_REQUESTED";
        se.IX2_PLAYBACK_REQUESTED = DA;
        var FA = "IX2_STOP_REQUESTED";
        se.IX2_STOP_REQUESTED = FA;
        var GA = "IX2_CLEAR_REQUESTED";
        se.IX2_CLEAR_REQUESTED = GA;
        var XA = "IX2_EVENT_LISTENER_ADDED";
        se.IX2_EVENT_LISTENER_ADDED = XA;
        var UA = "IX2_EVENT_STATE_CHANGED";
        se.IX2_EVENT_STATE_CHANGED = UA;
        var VA = "IX2_ANIMATION_FRAME_CHANGED";
        se.IX2_ANIMATION_FRAME_CHANGED = VA;
        var WA = "IX2_PARAMETER_CHANGED";
        se.IX2_PARAMETER_CHANGED = WA;
        var BA = "IX2_INSTANCE_ADDED";
        se.IX2_INSTANCE_ADDED = BA;
        var HA = "IX2_INSTANCE_STARTED";
        se.IX2_INSTANCE_STARTED = HA;
        var kA = "IX2_INSTANCE_REMOVED";
        se.IX2_INSTANCE_REMOVED = kA;
        var jA = "IX2_ELEMENT_STATE_CHANGED";
        se.IX2_ELEMENT_STATE_CHANGED = jA;
        var KA = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
        se.IX2_ACTION_LIST_PLAYBACK_CHANGED = KA;
        var zA = "IX2_VIEWPORT_WIDTH_CHANGED";
        se.IX2_VIEWPORT_WIDTH_CHANGED = zA;
        var YA = "IX2_MEDIA_QUERIES_DEFINED";
        se.IX2_MEDIA_QUERIES_DEFINED = YA;
        var $A = "IX2_TEST_FRAME_RENDERED";
        se.IX2_TEST_FRAME_RENDERED = $A
    });
    var yf = u(R => {
        "use strict";
        Object.defineProperty(R, "__esModule", {
            value: !0
        });
        R.W_MOD_JS = R.W_MOD_IX = R.WILL_CHANGE = R.WIDTH = R.WF_PAGE = R.TRANSLATE_Z = R.TRANSLATE_Y = R.TRANSLATE_X = R.TRANSLATE_3D = R.TRANSFORM = R.SKEW_Y = R.SKEW_X = R.SKEW = R.SIBLINGS = R.SCALE_Z = R.SCALE_Y = R.SCALE_X = R.SCALE_3D = R.ROTATE_Z = R.ROTATE_Y = R.ROTATE_X = R.RENDER_TRANSFORM = R.RENDER_STYLE = R.RENDER_PLUGIN = R.RENDER_GENERAL = R.PRESERVE_3D = R.PLAIN_OBJECT = R.PARENT = R.OPACITY = R.IX2_ID_DELIMITER = R.IMMEDIATE_CHILDREN = R.HTML_ELEMENT = R.HEIGHT = R.FONT_VARIATION_SETTINGS = R.FLEX = R.FILTER = R.DISPLAY = R.CONFIG_Z_VALUE = R.CONFIG_Z_UNIT = R.CONFIG_Y_VALUE = R.CONFIG_Y_UNIT = R.CONFIG_X_VALUE = R.CONFIG_X_UNIT = R.CONFIG_VALUE = R.CONFIG_UNIT = R.COMMA_DELIMITER = R.COLOR = R.COLON_DELIMITER = R.CHILDREN = R.BOUNDARY_SELECTOR = R.BORDER_COLOR = R.BAR_DELIMITER = R.BACKGROUND_COLOR = R.BACKGROUND = R.AUTO = R.ABSTRACT_NODE = void 0;
        var QA = "|";
        R.IX2_ID_DELIMITER = QA;
        var ZA = "data-wf-page";
        R.WF_PAGE = ZA;
        var JA = "w-mod-js";
        R.W_MOD_JS = JA;
        var eS = "w-mod-ix";
        R.W_MOD_IX = eS;
        var tS = ".w-dyn-item";
        R.BOUNDARY_SELECTOR = tS;
        var rS = "xValue";
        R.CONFIG_X_VALUE = rS;
        var nS = "yValue";
        R.CONFIG_Y_VALUE = nS;
        var iS = "zValue";
        R.CONFIG_Z_VALUE = iS;
        var oS = "value";
        R.CONFIG_VALUE = oS;
        var aS = "xUnit";
        R.CONFIG_X_UNIT = aS;
        var sS = "yUnit";
        R.CONFIG_Y_UNIT = sS;
        var uS = "zUnit";
        R.CONFIG_Z_UNIT = uS;
        var cS = "unit";
        R.CONFIG_UNIT = cS;
        var lS = "transform";
        R.TRANSFORM = lS;
        var fS = "translateX";
        R.TRANSLATE_X = fS;
        var dS = "translateY";
        R.TRANSLATE_Y = dS;
        var pS = "translateZ";
        R.TRANSLATE_Z = pS;
        var vS = "translate3d";
        R.TRANSLATE_3D = vS;
        var hS = "scaleX";
        R.SCALE_X = hS;
        var gS = "scaleY";
        R.SCALE_Y = gS;
        var ES = "scaleZ";
        R.SCALE_Z = ES;
        var _S = "scale3d";
        R.SCALE_3D = _S;
        var yS = "rotateX";
        R.ROTATE_X = yS;
        var IS = "rotateY";
        R.ROTATE_Y = IS;
        var mS = "rotateZ";
        R.ROTATE_Z = mS;
        var TS = "skew";
        R.SKEW = TS;
        var OS = "skewX";
        R.SKEW_X = OS;
        var bS = "skewY";
        R.SKEW_Y = bS;
        var AS = "opacity";
        R.OPACITY = AS;
        var SS = "filter";
        R.FILTER = SS;
        var wS = "font-variation-settings";
        R.FONT_VARIATION_SETTINGS = wS;
        var RS = "width";
        R.WIDTH = RS;
        var CS = "height";
        R.HEIGHT = CS;
        var NS = "backgroundColor";
        R.BACKGROUND_COLOR = NS;
        var PS = "background";
        R.BACKGROUND = PS;
        var qS = "borderColor";
        R.BORDER_COLOR = qS;
        var LS = "color";
        R.COLOR = LS;
        var xS = "display";
        R.DISPLAY = xS;
        var MS = "flex";
        R.FLEX = MS;
        var DS = "willChange";
        R.WILL_CHANGE = DS;
        var FS = "AUTO";
        R.AUTO = FS;
        var GS = ",";
        R.COMMA_DELIMITER = GS;
        var XS = ":";
        R.COLON_DELIMITER = XS;
        var US = "|";
        R.BAR_DELIMITER = US;
        var VS = "CHILDREN";
        R.CHILDREN = VS;
        var WS = "IMMEDIATE_CHILDREN";
        R.IMMEDIATE_CHILDREN = WS;
        var BS = "SIBLINGS";
        R.SIBLINGS = BS;
        var HS = "PARENT";
        R.PARENT = HS;
        var kS = "preserve-3d";
        R.PRESERVE_3D = kS;
        var jS = "HTML_ELEMENT";
        R.HTML_ELEMENT = jS;
        var KS = "PLAIN_OBJECT";
        R.PLAIN_OBJECT = KS;
        var zS = "ABSTRACT_NODE";
        R.ABSTRACT_NODE = zS;
        var YS = "RENDER_TRANSFORM";
        R.RENDER_TRANSFORM = YS;
        var $S = "RENDER_GENERAL";
        R.RENDER_GENERAL = $S;
        var QS = "RENDER_STYLE";
        R.RENDER_STYLE = QS;
        var ZS = "RENDER_PLUGIN";
        R.RENDER_PLUGIN = ZS
    });
    var We = u(Se => {
        "use strict";
        var If = Dt().default;
        Object.defineProperty(Se, "__esModule", {
            value: !0
        });
        var Cn = {
            IX2EngineActionTypes: !0,
            IX2EngineConstants: !0
        };
        Se.IX2EngineConstants = Se.IX2EngineActionTypes = void 0;
        var ea = hf();
        Object.keys(ea).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Cn, e) || e in Se && Se[e] === ea[e] || Object.defineProperty(Se, e, {
                enumerable: !0,
                get: function() {
                    return ea[e]
                }
            })
        });
        var ta = Jo();
        Object.keys(ta).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Cn, e) || e in Se && Se[e] === ta[e] || Object.defineProperty(Se, e, {
                enumerable: !0,
                get: function() {
                    return ta[e]
                }
            })
        });
        var ra = gf();
        Object.keys(ra).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Cn, e) || e in Se && Se[e] === ra[e] || Object.defineProperty(Se, e, {
                enumerable: !0,
                get: function() {
                    return ra[e]
                }
            })
        });
        var na = Ef();
        Object.keys(na).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Cn, e) || e in Se && Se[e] === na[e] || Object.defineProperty(Se, e, {
                enumerable: !0,
                get: function() {
                    return na[e]
                }
            })
        });
        var JS = If(_f());
        Se.IX2EngineActionTypes = JS;
        var e0 = If(yf());
        Se.IX2EngineConstants = e0
    });
    var mf = u(Nn => {
        "use strict";
        Object.defineProperty(Nn, "__esModule", {
            value: !0
        });
        Nn.ixData = void 0;
        var t0 = We(),
            {
                IX2_RAW_DATA_IMPORTED: r0
            } = t0.IX2EngineActionTypes,
            n0 = (e = Object.freeze({}), t) => {
                switch (t.type) {
                    case r0:
                        return t.payload.ixData || Object.freeze({});
                    default:
                        return e
                }
            };
        Nn.ixData = n0
    });
    var nr = u((WH, yt) => {
        function ia() {
            return yt.exports = ia = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }, yt.exports.__esModule = !0, yt.exports.default = yt.exports, ia.apply(this, arguments)
        }
        yt.exports = ia, yt.exports.__esModule = !0, yt.exports.default = yt.exports
    });
    var ir = u(Te => {
        "use strict";
        Object.defineProperty(Te, "__esModule", {
            value: !0
        });
        var i0 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        Te.clone = qn;
        Te.addLast = bf;
        Te.addFirst = Af;
        Te.removeLast = Sf;
        Te.removeFirst = wf;
        Te.insert = Rf;
        Te.removeAt = Cf;
        Te.replaceAt = Nf;
        Te.getIn = Ln;
        Te.set = xn;
        Te.setIn = Mn;
        Te.update = qf;
        Te.updateIn = Lf;
        Te.merge = xf;
        Te.mergeDeep = Mf;
        Te.mergeIn = Df;
        Te.omit = Ff;
        Te.addDefaults = Gf;
        var Tf = "INVALID_ARGS";

        function Of(e) {
            throw new Error(e)
        }

        function oa(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var o0 = {}.hasOwnProperty;

        function qn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = oa(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                r[o] = e[o]
            }
            return r
        }

        function Be(e, t, r) {
            var n = r;
            n == null && Of(Tf);
            for (var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++) a[s - 3] = arguments[s];
            for (var c = 0; c < a.length; c++) {
                var f = a[c];
                if (f != null) {
                    var p = oa(f);
                    if (p.length)
                        for (var d = 0; d <= p.length; d++) {
                            var g = p[d];
                            if (!(e && n[g] !== void 0)) {
                                var h = f[g];
                                t && Pn(n[g]) && Pn(h) && (h = Be(e, t, n[g], h)), !(h === void 0 || h === n[g]) && (o || (o = !0, n = qn(n)), n[g] = h)
                            }
                        }
                }
            }
            return n
        }

        function Pn(e) {
            var t = typeof e > "u" ? "undefined" : i0(e);
            return e != null && (t === "object" || t === "function")
        }

        function bf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function Af(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Sf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function wf(e) {
            return e.length ? e.slice(1) : e
        }

        function Rf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function Cf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Nf(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
            return o[t] = r, o
        }

        function Ln(e, t) {
            if (!Array.isArray(t) && Of(Tf), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (r = r ? .[o], r === void 0) return r
                }
                return r
            }
        }

        function xn(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                o = e ? ? n;
            if (o[t] === r) return o;
            var i = qn(o);
            return i[t] = r, i
        }

        function Pf(e, t, r, n) {
            var o = void 0,
                i = t[n];
            if (n === t.length - 1) o = r;
            else {
                var a = Pn(e) && Pn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
                o = Pf(a, t, r, n + 1)
            }
            return xn(e, i, o)
        }

        function Mn(e, t, r) {
            return t.length ? Pf(e, t, r, 0) : r
        }

        function qf(e, t, r) {
            var n = e ? .[t],
                o = r(n);
            return xn(e, t, o)
        }

        function Lf(e, t, r) {
            var n = Ln(e, t),
                o = r(n);
            return Mn(e, t, o)
        }

        function xf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
            return s.length ? Be.call.apply(Be, [null, !1, !1, e, t, r, n, o, i].concat(s)) : Be(!1, !1, e, t, r, n, o, i)
        }

        function Mf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
            return s.length ? Be.call.apply(Be, [null, !1, !0, e, t, r, n, o, i].concat(s)) : Be(!1, !0, e, t, r, n, o, i)
        }

        function Df(e, t, r, n, o, i, a) {
            var s = Ln(e, t);
            s == null && (s = {});
            for (var c = void 0, f = arguments.length, p = Array(f > 7 ? f - 7 : 0), d = 7; d < f; d++) p[d - 7] = arguments[d];
            return p.length ? c = Be.call.apply(Be, [null, !1, !1, s, r, n, o, i, a].concat(p)) : c = Be(!1, !1, s, r, n, o, i, a), Mn(e, t, c)
        }

        function Ff(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
                if (o0.call(e, r[o])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var i = {}, a = oa(e), s = 0; s < a.length; s++) {
                var c = a[s];
                r.indexOf(c) >= 0 || (i[c] = e[c])
            }
            return i
        }

        function Gf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
            return s.length ? Be.call.apply(Be, [null, !0, !1, e, t, r, n, o, i].concat(s)) : Be(!0, !1, e, t, r, n, o, i)
        }
        var a0 = {
            clone: qn,
            addLast: bf,
            addFirst: Af,
            removeLast: Sf,
            removeFirst: wf,
            insert: Rf,
            removeAt: Cf,
            replaceAt: Nf,
            getIn: Ln,
            set: xn,
            setIn: Mn,
            update: qf,
            updateIn: Lf,
            merge: xf,
            mergeDeep: Mf,
            mergeIn: Df,
            omit: Ff,
            addDefaults: Gf
        };
        Te.default = a0
    });
    var Uf = u(Dn => {
        "use strict";
        var s0 = Ze().default;
        Object.defineProperty(Dn, "__esModule", {
            value: !0
        });
        Dn.ixRequest = void 0;
        var u0 = s0(nr()),
            c0 = We(),
            l0 = ir(),
            {
                IX2_PREVIEW_REQUESTED: f0,
                IX2_PLAYBACK_REQUESTED: d0,
                IX2_STOP_REQUESTED: p0,
                IX2_CLEAR_REQUESTED: v0
            } = c0.IX2EngineActionTypes,
            h0 = {
                preview: {},
                playback: {},
                stop: {},
                clear: {}
            },
            Xf = Object.create(null, {
                [f0]: {
                    value: "preview"
                },
                [d0]: {
                    value: "playback"
                },
                [p0]: {
                    value: "stop"
                },
                [v0]: {
                    value: "clear"
                }
            }),
            g0 = (e = h0, t) => {
                if (t.type in Xf) {
                    let r = [Xf[t.type]];
                    return (0, l0.setIn)(e, [r], (0, u0.default)({}, t.payload))
                }
                return e
            };
        Dn.ixRequest = g0
    });
    var Wf = u(Fn => {
        "use strict";
        Object.defineProperty(Fn, "__esModule", {
            value: !0
        });
        Fn.ixSession = void 0;
        var E0 = We(),
            ct = ir(),
            {
                IX2_SESSION_INITIALIZED: _0,
                IX2_SESSION_STARTED: y0,
                IX2_TEST_FRAME_RENDERED: I0,
                IX2_SESSION_STOPPED: m0,
                IX2_EVENT_LISTENER_ADDED: T0,
                IX2_EVENT_STATE_CHANGED: O0,
                IX2_ANIMATION_FRAME_CHANGED: b0,
                IX2_ACTION_LIST_PLAYBACK_CHANGED: A0,
                IX2_VIEWPORT_WIDTH_CHANGED: S0,
                IX2_MEDIA_QUERIES_DEFINED: w0
            } = E0.IX2EngineActionTypes,
            Vf = {
                active: !1,
                tick: 0,
                eventListeners: [],
                eventState: {},
                playbackState: {},
                viewportWidth: 0,
                mediaQueryKey: null,
                hasBoundaryNodes: !1,
                hasDefinedMediaQueries: !1,
                reducedMotion: !1
            },
            R0 = 20,
            C0 = (e = Vf, t) => {
                switch (t.type) {
                    case _0:
                        {
                            let {
                                hasBoundaryNodes: r,
                                reducedMotion: n
                            } = t.payload;
                            return (0, ct.merge)(e, {
                                hasBoundaryNodes: r,
                                reducedMotion: n
                            })
                        }
                    case y0:
                        return (0, ct.set)(e, "active", !0);
                    case I0:
                        {
                            let {
                                payload: {
                                    step: r = R0
                                }
                            } = t;
                            return (0, ct.set)(e, "tick", e.tick + r)
                        }
                    case m0:
                        return Vf;
                    case b0:
                        {
                            let {
                                payload: {
                                    now: r
                                }
                            } = t;
                            return (0, ct.set)(e, "tick", r)
                        }
                    case T0:
                        {
                            let r = (0, ct.addLast)(e.eventListeners, t.payload);
                            return (0, ct.set)(e, "eventListeners", r)
                        }
                    case O0:
                        {
                            let {
                                stateKey: r,
                                newState: n
                            } = t.payload;
                            return (0, ct.setIn)(e, ["eventState", r], n)
                        }
                    case A0:
                        {
                            let {
                                actionListId: r,
                                isPlaying: n
                            } = t.payload;
                            return (0, ct.setIn)(e, ["playbackState", r], n)
                        }
                    case S0:
                        {
                            let {
                                width: r,
                                mediaQueries: n
                            } = t.payload,
                            o = n.length,
                            i = null;
                            for (let a = 0; a < o; a++) {
                                let {
                                    key: s,
                                    min: c,
                                    max: f
                                } = n[a];
                                if (r >= c && r <= f) {
                                    i = s;
                                    break
                                }
                            }
                            return (0, ct.merge)(e, {
                                viewportWidth: r,
                                mediaQueryKey: i
                            })
                        }
                    case w0:
                        return (0, ct.set)(e, "hasDefinedMediaQueries", !0);
                    default:
                        return e
                }
            };
        Fn.ixSession = C0
    });
    var Hf = u((jH, Bf) => {
        function N0() {
            this.__data__ = [], this.size = 0
        }
        Bf.exports = N0
    });
    var Gn = u((KH, kf) => {
        function P0(e, t) {
            return e === t || e !== e && t !== t
        }
        kf.exports = P0
    });
    var Fr = u((zH, jf) => {
        var q0 = Gn();

        function L0(e, t) {
            for (var r = e.length; r--;)
                if (q0(e[r][0], t)) return r;
            return -1
        }
        jf.exports = L0
    });
    var zf = u((YH, Kf) => {
        var x0 = Fr(),
            M0 = Array.prototype,
            D0 = M0.splice;

        function F0(e) {
            var t = this.__data__,
                r = x0(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : D0.call(t, r, 1), --this.size, !0
        }
        Kf.exports = F0
    });
    var $f = u(($H, Yf) => {
        var G0 = Fr();

        function X0(e) {
            var t = this.__data__,
                r = G0(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        Yf.exports = X0
    });
    var Zf = u((QH, Qf) => {
        var U0 = Fr();

        function V0(e) {
            return U0(this.__data__, e) > -1
        }
        Qf.exports = V0
    });
    var ed = u((ZH, Jf) => {
        var W0 = Fr();

        function B0(e, t) {
            var r = this.__data__,
                n = W0(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        Jf.exports = B0
    });
    var Gr = u((JH, td) => {
        var H0 = Hf(),
            k0 = zf(),
            j0 = $f(),
            K0 = Zf(),
            z0 = ed();

        function or(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        or.prototype.clear = H0;
        or.prototype.delete = k0;
        or.prototype.get = j0;
        or.prototype.has = K0;
        or.prototype.set = z0;
        td.exports = or
    });
    var nd = u((e5, rd) => {
        var Y0 = Gr();

        function $0() {
            this.__data__ = new Y0, this.size = 0
        }
        rd.exports = $0
    });
    var od = u((t5, id) => {
        function Q0(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        id.exports = Q0
    });
    var sd = u((r5, ad) => {
        function Z0(e) {
            return this.__data__.get(e)
        }
        ad.exports = Z0
    });
    var cd = u((n5, ud) => {
        function J0(e) {
            return this.__data__.has(e)
        }
        ud.exports = J0
    });
    var lt = u((i5, ld) => {
        function ew(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        ld.exports = ew
    });
    var aa = u((o5, fd) => {
        var tw = At(),
            rw = lt(),
            nw = "[object AsyncFunction]",
            iw = "[object Function]",
            ow = "[object GeneratorFunction]",
            aw = "[object Proxy]";

        function sw(e) {
            if (!rw(e)) return !1;
            var t = tw(e);
            return t == iw || t == ow || t == nw || t == aw
        }
        fd.exports = sw
    });
    var pd = u((a5, dd) => {
        var uw = tt(),
            cw = uw["__core-js_shared__"];
        dd.exports = cw
    });
    var gd = u((s5, hd) => {
        var sa = pd(),
            vd = function() {
                var e = /[^.]+$/.exec(sa && sa.keys && sa.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function lw(e) {
            return !!vd && vd in e
        }
        hd.exports = lw
    });
    var ua = u((u5, Ed) => {
        var fw = Function.prototype,
            dw = fw.toString;

        function pw(e) {
            if (e != null) {
                try {
                    return dw.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Ed.exports = pw
    });
    var yd = u((c5, _d) => {
        var vw = aa(),
            hw = gd(),
            gw = lt(),
            Ew = ua(),
            _w = /[\\^$.*+?()[\]{}|]/g,
            yw = /^\[object .+?Constructor\]$/,
            Iw = Function.prototype,
            mw = Object.prototype,
            Tw = Iw.toString,
            Ow = mw.hasOwnProperty,
            bw = RegExp("^" + Tw.call(Ow).replace(_w, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function Aw(e) {
            if (!gw(e) || hw(e)) return !1;
            var t = vw(e) ? bw : yw;
            return t.test(Ew(e))
        }
        _d.exports = Aw
    });
    var md = u((l5, Id) => {
        function Sw(e, t) {
            return e ? .[t]
        }
        Id.exports = Sw
    });
    var St = u((f5, Td) => {
        var ww = yd(),
            Rw = md();

        function Cw(e, t) {
            var r = Rw(e, t);
            return ww(r) ? r : void 0
        }
        Td.exports = Cw
    });
    var Xn = u((d5, Od) => {
        var Nw = St(),
            Pw = tt(),
            qw = Nw(Pw, "Map");
        Od.exports = qw
    });
    var Xr = u((p5, bd) => {
        var Lw = St(),
            xw = Lw(Object, "create");
        bd.exports = xw
    });
    var wd = u((v5, Sd) => {
        var Ad = Xr();

        function Mw() {
            this.__data__ = Ad ? Ad(null) : {}, this.size = 0
        }
        Sd.exports = Mw
    });
    var Cd = u((h5, Rd) => {
        function Dw(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Rd.exports = Dw
    });
    var Pd = u((g5, Nd) => {
        var Fw = Xr(),
            Gw = "__lodash_hash_undefined__",
            Xw = Object.prototype,
            Uw = Xw.hasOwnProperty;

        function Vw(e) {
            var t = this.__data__;
            if (Fw) {
                var r = t[e];
                return r === Gw ? void 0 : r
            }
            return Uw.call(t, e) ? t[e] : void 0
        }
        Nd.exports = Vw
    });
    var Ld = u((E5, qd) => {
        var Ww = Xr(),
            Bw = Object.prototype,
            Hw = Bw.hasOwnProperty;

        function kw(e) {
            var t = this.__data__;
            return Ww ? t[e] !== void 0 : Hw.call(t, e)
        }
        qd.exports = kw
    });
    var Md = u((_5, xd) => {
        var jw = Xr(),
            Kw = "__lodash_hash_undefined__";

        function zw(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = jw && t === void 0 ? Kw : t, this
        }
        xd.exports = zw
    });
    var Fd = u((y5, Dd) => {
        var Yw = wd(),
            $w = Cd(),
            Qw = Pd(),
            Zw = Ld(),
            Jw = Md();

        function ar(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        ar.prototype.clear = Yw;
        ar.prototype.delete = $w;
        ar.prototype.get = Qw;
        ar.prototype.has = Zw;
        ar.prototype.set = Jw;
        Dd.exports = ar
    });
    var Ud = u((I5, Xd) => {
        var Gd = Fd(),
            eR = Gr(),
            tR = Xn();

        function rR() {
            this.size = 0, this.__data__ = {
                hash: new Gd,
                map: new(tR || eR),
                string: new Gd
            }
        }
        Xd.exports = rR
    });
    var Wd = u((m5, Vd) => {
        function nR(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Vd.exports = nR
    });
    var Ur = u((T5, Bd) => {
        var iR = Wd();

        function oR(e, t) {
            var r = e.__data__;
            return iR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Bd.exports = oR
    });
    var kd = u((O5, Hd) => {
        var aR = Ur();

        function sR(e) {
            var t = aR(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        Hd.exports = sR
    });
    var Kd = u((b5, jd) => {
        var uR = Ur();

        function cR(e) {
            return uR(this, e).get(e)
        }
        jd.exports = cR
    });
    var Yd = u((A5, zd) => {
        var lR = Ur();

        function fR(e) {
            return lR(this, e).has(e)
        }
        zd.exports = fR
    });
    var Qd = u((S5, $d) => {
        var dR = Ur();

        function pR(e, t) {
            var r = dR(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        $d.exports = pR
    });
    var Un = u((w5, Zd) => {
        var vR = Ud(),
            hR = kd(),
            gR = Kd(),
            ER = Yd(),
            _R = Qd();

        function sr(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        sr.prototype.clear = vR;
        sr.prototype.delete = hR;
        sr.prototype.get = gR;
        sr.prototype.has = ER;
        sr.prototype.set = _R;
        Zd.exports = sr
    });
    var ep = u((R5, Jd) => {
        var yR = Gr(),
            IR = Xn(),
            mR = Un(),
            TR = 200;

        function OR(e, t) {
            var r = this.__data__;
            if (r instanceof yR) {
                var n = r.__data__;
                if (!IR || n.length < TR - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new mR(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        Jd.exports = OR
    });
    var ca = u((C5, tp) => {
        var bR = Gr(),
            AR = nd(),
            SR = od(),
            wR = sd(),
            RR = cd(),
            CR = ep();

        function ur(e) {
            var t = this.__data__ = new bR(e);
            this.size = t.size
        }
        ur.prototype.clear = AR;
        ur.prototype.delete = SR;
        ur.prototype.get = wR;
        ur.prototype.has = RR;
        ur.prototype.set = CR;
        tp.exports = ur
    });
    var np = u((N5, rp) => {
        var NR = "__lodash_hash_undefined__";

        function PR(e) {
            return this.__data__.set(e, NR), this
        }
        rp.exports = PR
    });
    var op = u((P5, ip) => {
        function qR(e) {
            return this.__data__.has(e)
        }
        ip.exports = qR
    });
    var sp = u((q5, ap) => {
        var LR = Un(),
            xR = np(),
            MR = op();

        function Vn(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new LR; ++t < r;) this.add(e[t])
        }
        Vn.prototype.add = Vn.prototype.push = xR;
        Vn.prototype.has = MR;
        ap.exports = Vn
    });
    var cp = u((L5, up) => {
        function DR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        up.exports = DR
    });
    var fp = u((x5, lp) => {
        function FR(e, t) {
            return e.has(t)
        }
        lp.exports = FR
    });
    var la = u((M5, dp) => {
        var GR = sp(),
            XR = cp(),
            UR = fp(),
            VR = 1,
            WR = 2;

        function BR(e, t, r, n, o, i) {
            var a = r & VR,
                s = e.length,
                c = t.length;
            if (s != c && !(a && c > s)) return !1;
            var f = i.get(e),
                p = i.get(t);
            if (f && p) return f == t && p == e;
            var d = -1,
                g = !0,
                h = r & WR ? new GR : void 0;
            for (i.set(e, t), i.set(t, e); ++d < s;) {
                var y = e[d],
                    I = t[d];
                if (n) var x = a ? n(I, y, d, t, e, i) : n(y, I, d, e, t, i);
                if (x !== void 0) {
                    if (x) continue;
                    g = !1;
                    break
                }
                if (h) {
                    if (!XR(t, function(S, w) {
                            if (!UR(h, w) && (y === S || o(y, S, r, n, i))) return h.push(w)
                        })) {
                        g = !1;
                        break
                    }
                } else if (!(y === I || o(y, I, r, n, i))) {
                    g = !1;
                    break
                }
            }
            return i.delete(e), i.delete(t), g
        }
        dp.exports = BR
    });
    var vp = u((D5, pp) => {
        var HR = tt(),
            kR = HR.Uint8Array;
        pp.exports = kR
    });
    var gp = u((F5, hp) => {
        function jR(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, o) {
                r[++t] = [o, n]
            }), r
        }
        hp.exports = jR
    });
    var _p = u((G5, Ep) => {
        function KR(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        Ep.exports = KR
    });
    var Op = u((X5, Tp) => {
        var yp = Jt(),
            Ip = vp(),
            zR = Gn(),
            YR = la(),
            $R = gp(),
            QR = _p(),
            ZR = 1,
            JR = 2,
            eC = "[object Boolean]",
            tC = "[object Date]",
            rC = "[object Error]",
            nC = "[object Map]",
            iC = "[object Number]",
            oC = "[object RegExp]",
            aC = "[object Set]",
            sC = "[object String]",
            uC = "[object Symbol]",
            cC = "[object ArrayBuffer]",
            lC = "[object DataView]",
            mp = yp ? yp.prototype : void 0,
            fa = mp ? mp.valueOf : void 0;

        function fC(e, t, r, n, o, i, a) {
            switch (r) {
                case lC:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case cC:
                    return !(e.byteLength != t.byteLength || !i(new Ip(e), new Ip(t)));
                case eC:
                case tC:
                case iC:
                    return zR(+e, +t);
                case rC:
                    return e.name == t.name && e.message == t.message;
                case oC:
                case sC:
                    return e == t + "";
                case nC:
                    var s = $R;
                case aC:
                    var c = n & ZR;
                    if (s || (s = QR), e.size != t.size && !c) return !1;
                    var f = a.get(e);
                    if (f) return f == t;
                    n |= JR, a.set(e, t);
                    var p = YR(s(e), s(t), n, o, i, a);
                    return a.delete(e), p;
                case uC:
                    if (fa) return fa.call(e) == fa.call(t)
            }
            return !1
        }
        Tp.exports = fC
    });
    var Wn = u((U5, bp) => {
        function dC(e, t) {
            for (var r = -1, n = t.length, o = e.length; ++r < n;) e[o + r] = t[r];
            return e
        }
        bp.exports = dC
    });
    var Pe = u((V5, Ap) => {
        var pC = Array.isArray;
        Ap.exports = pC
    });
    var da = u((W5, Sp) => {
        var vC = Wn(),
            hC = Pe();

        function gC(e, t, r) {
            var n = t(e);
            return hC(e) ? n : vC(n, r(e))
        }
        Sp.exports = gC
    });
    var Rp = u((B5, wp) => {
        function EC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n;) {
                var a = e[r];
                t(a, r, e) && (i[o++] = a)
            }
            return i
        }
        wp.exports = EC
    });
    var pa = u((H5, Cp) => {
        function _C() {
            return []
        }
        Cp.exports = _C
    });
    var va = u((k5, Pp) => {
        var yC = Rp(),
            IC = pa(),
            mC = Object.prototype,
            TC = mC.propertyIsEnumerable,
            Np = Object.getOwnPropertySymbols,
            OC = Np ? function(e) {
                return e == null ? [] : (e = Object(e), yC(Np(e), function(t) {
                    return TC.call(e, t)
                }))
            } : IC;
        Pp.exports = OC
    });
    var Lp = u((j5, qp) => {
        function bC(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        qp.exports = bC
    });
    var Mp = u((K5, xp) => {
        var AC = At(),
            SC = _t(),
            wC = "[object Arguments]";

        function RC(e) {
            return SC(e) && AC(e) == wC
        }
        xp.exports = RC
    });
    var Vr = u((z5, Gp) => {
        var Dp = Mp(),
            CC = _t(),
            Fp = Object.prototype,
            NC = Fp.hasOwnProperty,
            PC = Fp.propertyIsEnumerable,
            qC = Dp(function() {
                return arguments
            }()) ? Dp : function(e) {
                return CC(e) && NC.call(e, "callee") && !PC.call(e, "callee")
            };
        Gp.exports = qC
    });
    var Up = u((Y5, Xp) => {
        function LC() {
            return !1
        }
        Xp.exports = LC
    });
    var Bn = u((Wr, cr) => {
        var xC = tt(),
            MC = Up(),
            Bp = typeof Wr == "object" && Wr && !Wr.nodeType && Wr,
            Vp = Bp && typeof cr == "object" && cr && !cr.nodeType && cr,
            DC = Vp && Vp.exports === Bp,
            Wp = DC ? xC.Buffer : void 0,
            FC = Wp ? Wp.isBuffer : void 0,
            GC = FC || MC;
        cr.exports = GC
    });
    var Hn = u(($5, Hp) => {
        var XC = 9007199254740991,
            UC = /^(?:0|[1-9]\d*)$/;

        function VC(e, t) {
            var r = typeof e;
            return t = t ? ? XC, !!t && (r == "number" || r != "symbol" && UC.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Hp.exports = VC
    });
    var kn = u((Q5, kp) => {
        var WC = 9007199254740991;

        function BC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= WC
        }
        kp.exports = BC
    });
    var Kp = u((Z5, jp) => {
        var HC = At(),
            kC = kn(),
            jC = _t(),
            KC = "[object Arguments]",
            zC = "[object Array]",
            YC = "[object Boolean]",
            $C = "[object Date]",
            QC = "[object Error]",
            ZC = "[object Function]",
            JC = "[object Map]",
            eN = "[object Number]",
            tN = "[object Object]",
            rN = "[object RegExp]",
            nN = "[object Set]",
            iN = "[object String]",
            oN = "[object WeakMap]",
            aN = "[object ArrayBuffer]",
            sN = "[object DataView]",
            uN = "[object Float32Array]",
            cN = "[object Float64Array]",
            lN = "[object Int8Array]",
            fN = "[object Int16Array]",
            dN = "[object Int32Array]",
            pN = "[object Uint8Array]",
            vN = "[object Uint8ClampedArray]",
            hN = "[object Uint16Array]",
            gN = "[object Uint32Array]",
            ye = {};
        ye[uN] = ye[cN] = ye[lN] = ye[fN] = ye[dN] = ye[pN] = ye[vN] = ye[hN] = ye[gN] = !0;
        ye[KC] = ye[zC] = ye[aN] = ye[YC] = ye[sN] = ye[$C] = ye[QC] = ye[ZC] = ye[JC] = ye[eN] = ye[tN] = ye[rN] = ye[nN] = ye[iN] = ye[oN] = !1;

        function EN(e) {
            return jC(e) && kC(e.length) && !!ye[HC(e)]
        }
        jp.exports = EN
    });
    var Yp = u((J5, zp) => {
        function _N(e) {
            return function(t) {
                return e(t)
            }
        }
        zp.exports = _N
    });
    var Qp = u((Br, lr) => {
        var yN = Fo(),
            $p = typeof Br == "object" && Br && !Br.nodeType && Br,
            Hr = $p && typeof lr == "object" && lr && !lr.nodeType && lr,
            IN = Hr && Hr.exports === $p,
            ha = IN && yN.process,
            mN = function() {
                try {
                    var e = Hr && Hr.require && Hr.require("util").types;
                    return e || ha && ha.binding && ha.binding("util")
                } catch {}
            }();
        lr.exports = mN
    });
    var jn = u((ek, ev) => {
        var TN = Kp(),
            ON = Yp(),
            Zp = Qp(),
            Jp = Zp && Zp.isTypedArray,
            bN = Jp ? ON(Jp) : TN;
        ev.exports = bN
    });
    var ga = u((tk, tv) => {
        var AN = Lp(),
            SN = Vr(),
            wN = Pe(),
            RN = Bn(),
            CN = Hn(),
            NN = jn(),
            PN = Object.prototype,
            qN = PN.hasOwnProperty;

        function LN(e, t) {
            var r = wN(e),
                n = !r && SN(e),
                o = !r && !n && RN(e),
                i = !r && !n && !o && NN(e),
                a = r || n || o || i,
                s = a ? AN(e.length, String) : [],
                c = s.length;
            for (var f in e)(t || qN.call(e, f)) && !(a && (f == "length" || o && (f == "offset" || f == "parent") || i && (f == "buffer" || f == "byteLength" || f == "byteOffset") || CN(f, c))) && s.push(f);
            return s
        }
        tv.exports = LN
    });
    var Kn = u((rk, rv) => {
        var xN = Object.prototype;

        function MN(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || xN;
            return e === r
        }
        rv.exports = MN
    });
    var iv = u((nk, nv) => {
        var DN = Go(),
            FN = DN(Object.keys, Object);
        nv.exports = FN
    });
    var zn = u((ik, ov) => {
        var GN = Kn(),
            XN = iv(),
            UN = Object.prototype,
            VN = UN.hasOwnProperty;

        function WN(e) {
            if (!GN(e)) return XN(e);
            var t = [];
            for (var r in Object(e)) VN.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        ov.exports = WN
    });
    var Ut = u((ok, av) => {
        var BN = aa(),
            HN = kn();

        function kN(e) {
            return e != null && HN(e.length) && !BN(e)
        }
        av.exports = kN
    });
    var kr = u((ak, sv) => {
        var jN = ga(),
            KN = zn(),
            zN = Ut();

        function YN(e) {
            return zN(e) ? jN(e) : KN(e)
        }
        sv.exports = YN
    });
    var cv = u((sk, uv) => {
        var $N = da(),
            QN = va(),
            ZN = kr();

        function JN(e) {
            return $N(e, ZN, QN)
        }
        uv.exports = JN
    });
    var dv = u((uk, fv) => {
        var lv = cv(),
            eP = 1,
            tP = Object.prototype,
            rP = tP.hasOwnProperty;

        function nP(e, t, r, n, o, i) {
            var a = r & eP,
                s = lv(e),
                c = s.length,
                f = lv(t),
                p = f.length;
            if (c != p && !a) return !1;
            for (var d = c; d--;) {
                var g = s[d];
                if (!(a ? g in t : rP.call(t, g))) return !1
            }
            var h = i.get(e),
                y = i.get(t);
            if (h && y) return h == t && y == e;
            var I = !0;
            i.set(e, t), i.set(t, e);
            for (var x = a; ++d < c;) {
                g = s[d];
                var S = e[g],
                    w = t[g];
                if (n) var O = a ? n(w, S, g, t, e, i) : n(S, w, g, e, t, i);
                if (!(O === void 0 ? S === w || o(S, w, r, n, i) : O)) {
                    I = !1;
                    break
                }
                x || (x = g == "constructor")
            }
            if (I && !x) {
                var L = e.constructor,
                    P = t.constructor;
                L != P && "constructor" in e && "constructor" in t && !(typeof L == "function" && L instanceof L && typeof P == "function" && P instanceof P) && (I = !1)
            }
            return i.delete(e), i.delete(t), I
        }
        fv.exports = nP
    });
    var vv = u((ck, pv) => {
        var iP = St(),
            oP = tt(),
            aP = iP(oP, "DataView");
        pv.exports = aP
    });
    var gv = u((lk, hv) => {
        var sP = St(),
            uP = tt(),
            cP = sP(uP, "Promise");
        hv.exports = cP
    });
    var _v = u((fk, Ev) => {
        var lP = St(),
            fP = tt(),
            dP = lP(fP, "Set");
        Ev.exports = dP
    });
    var Ea = u((dk, yv) => {
        var pP = St(),
            vP = tt(),
            hP = pP(vP, "WeakMap");
        yv.exports = hP
    });
    var Yn = u((pk, Sv) => {
        var _a = vv(),
            ya = Xn(),
            Ia = gv(),
            ma = _v(),
            Ta = Ea(),
            Av = At(),
            fr = ua(),
            Iv = "[object Map]",
            gP = "[object Object]",
            mv = "[object Promise]",
            Tv = "[object Set]",
            Ov = "[object WeakMap]",
            bv = "[object DataView]",
            EP = fr(_a),
            _P = fr(ya),
            yP = fr(Ia),
            IP = fr(ma),
            mP = fr(Ta),
            Vt = Av;
        (_a && Vt(new _a(new ArrayBuffer(1))) != bv || ya && Vt(new ya) != Iv || Ia && Vt(Ia.resolve()) != mv || ma && Vt(new ma) != Tv || Ta && Vt(new Ta) != Ov) && (Vt = function(e) {
            var t = Av(e),
                r = t == gP ? e.constructor : void 0,
                n = r ? fr(r) : "";
            if (n) switch (n) {
                case EP:
                    return bv;
                case _P:
                    return Iv;
                case yP:
                    return mv;
                case IP:
                    return Tv;
                case mP:
                    return Ov
            }
            return t
        });
        Sv.exports = Vt
    });
    var xv = u((vk, Lv) => {
        var Oa = ca(),
            TP = la(),
            OP = Op(),
            bP = dv(),
            wv = Yn(),
            Rv = Pe(),
            Cv = Bn(),
            AP = jn(),
            SP = 1,
            Nv = "[object Arguments]",
            Pv = "[object Array]",
            $n = "[object Object]",
            wP = Object.prototype,
            qv = wP.hasOwnProperty;

        function RP(e, t, r, n, o, i) {
            var a = Rv(e),
                s = Rv(t),
                c = a ? Pv : wv(e),
                f = s ? Pv : wv(t);
            c = c == Nv ? $n : c, f = f == Nv ? $n : f;
            var p = c == $n,
                d = f == $n,
                g = c == f;
            if (g && Cv(e)) {
                if (!Cv(t)) return !1;
                a = !0, p = !1
            }
            if (g && !p) return i || (i = new Oa), a || AP(e) ? TP(e, t, r, n, o, i) : OP(e, t, c, r, n, o, i);
            if (!(r & SP)) {
                var h = p && qv.call(e, "__wrapped__"),
                    y = d && qv.call(t, "__wrapped__");
                if (h || y) {
                    var I = h ? e.value() : e,
                        x = y ? t.value() : t;
                    return i || (i = new Oa), o(I, x, r, n, i)
                }
            }
            return g ? (i || (i = new Oa), bP(e, t, r, n, o, i)) : !1
        }
        Lv.exports = RP
    });
    var ba = u((hk, Fv) => {
        var CP = xv(),
            Mv = _t();

        function Dv(e, t, r, n, o) {
            return e === t ? !0 : e == null || t == null || !Mv(e) && !Mv(t) ? e !== e && t !== t : CP(e, t, r, n, Dv, o)
        }
        Fv.exports = Dv
    });
    var Xv = u((gk, Gv) => {
        var NP = ca(),
            PP = ba(),
            qP = 1,
            LP = 2;

        function xP(e, t, r, n) {
            var o = r.length,
                i = o,
                a = !n;
            if (e == null) return !i;
            for (e = Object(e); o--;) {
                var s = r[o];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
            }
            for (; ++o < i;) {
                s = r[o];
                var c = s[0],
                    f = e[c],
                    p = s[1];
                if (a && s[2]) {
                    if (f === void 0 && !(c in e)) return !1
                } else {
                    var d = new NP;
                    if (n) var g = n(f, p, c, e, t, d);
                    if (!(g === void 0 ? PP(p, f, qP | LP, n, d) : g)) return !1
                }
            }
            return !0
        }
        Gv.exports = xP
    });
    var Aa = u((Ek, Uv) => {
        var MP = lt();

        function DP(e) {
            return e === e && !MP(e)
        }
        Uv.exports = DP
    });
    var Wv = u((_k, Vv) => {
        var FP = Aa(),
            GP = kr();

        function XP(e) {
            for (var t = GP(e), r = t.length; r--;) {
                var n = t[r],
                    o = e[n];
                t[r] = [n, o, FP(o)]
            }
            return t
        }
        Vv.exports = XP
    });
    var Sa = u((yk, Bv) => {
        function UP(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Bv.exports = UP
    });
    var kv = u((Ik, Hv) => {
        var VP = Xv(),
            WP = Wv(),
            BP = Sa();

        function HP(e) {
            var t = WP(e);
            return t.length == 1 && t[0][2] ? BP(t[0][0], t[0][1]) : function(r) {
                return r === e || VP(r, e, t)
            }
        }
        Hv.exports = HP
    });
    var jr = u((mk, jv) => {
        var kP = At(),
            jP = _t(),
            KP = "[object Symbol]";

        function zP(e) {
            return typeof e == "symbol" || jP(e) && kP(e) == KP
        }
        jv.exports = zP
    });
    var Qn = u((Tk, Kv) => {
        var YP = Pe(),
            $P = jr(),
            QP = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            ZP = /^\w*$/;

        function JP(e, t) {
            if (YP(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || $P(e) ? !0 : ZP.test(e) || !QP.test(e) || t != null && e in Object(t)
        }
        Kv.exports = JP
    });
    var $v = u((Ok, Yv) => {
        var zv = Un(),
            eq = "Expected a function";

        function wa(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(eq);
            var r = function() {
                var n = arguments,
                    o = t ? t.apply(this, n) : n[0],
                    i = r.cache;
                if (i.has(o)) return i.get(o);
                var a = e.apply(this, n);
                return r.cache = i.set(o, a) || i, a
            };
            return r.cache = new(wa.Cache || zv), r
        }
        wa.Cache = zv;
        Yv.exports = wa
    });
    var Zv = u((bk, Qv) => {
        var tq = $v(),
            rq = 500;

        function nq(e) {
            var t = tq(e, function(n) {
                    return r.size === rq && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        Qv.exports = nq
    });
    var eh = u((Ak, Jv) => {
        var iq = Zv(),
            oq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            aq = /\\(\\)?/g,
            sq = iq(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(oq, function(r, n, o, i) {
                    t.push(o ? i.replace(aq, "$1") : n || r)
                }), t
            });
        Jv.exports = sq
    });
    var Ra = u((Sk, th) => {
        function uq(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
            return o
        }
        th.exports = uq
    });
    var sh = u((wk, ah) => {
        var rh = Jt(),
            cq = Ra(),
            lq = Pe(),
            fq = jr(),
            dq = 1 / 0,
            nh = rh ? rh.prototype : void 0,
            ih = nh ? nh.toString : void 0;

        function oh(e) {
            if (typeof e == "string") return e;
            if (lq(e)) return cq(e, oh) + "";
            if (fq(e)) return ih ? ih.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -dq ? "-0" : t
        }
        ah.exports = oh
    });
    var ch = u((Rk, uh) => {
        var pq = sh();

        function vq(e) {
            return e == null ? "" : pq(e)
        }
        uh.exports = vq
    });
    var Kr = u((Ck, lh) => {
        var hq = Pe(),
            gq = Qn(),
            Eq = eh(),
            _q = ch();

        function yq(e, t) {
            return hq(e) ? e : gq(e, t) ? [e] : Eq(_q(e))
        }
        lh.exports = yq
    });
    var dr = u((Nk, fh) => {
        var Iq = jr(),
            mq = 1 / 0;

        function Tq(e) {
            if (typeof e == "string" || Iq(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -mq ? "-0" : t
        }
        fh.exports = Tq
    });
    var Zn = u((Pk, dh) => {
        var Oq = Kr(),
            bq = dr();

        function Aq(e, t) {
            t = Oq(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[bq(t[r++])];
            return r && r == n ? e : void 0
        }
        dh.exports = Aq
    });
    var Jn = u((qk, ph) => {
        var Sq = Zn();

        function wq(e, t, r) {
            var n = e == null ? void 0 : Sq(e, t);
            return n === void 0 ? r : n
        }
        ph.exports = wq
    });
    var hh = u((Lk, vh) => {
        function Rq(e, t) {
            return e != null && t in Object(e)
        }
        vh.exports = Rq
    });
    var Eh = u((xk, gh) => {
        var Cq = Kr(),
            Nq = Vr(),
            Pq = Pe(),
            qq = Hn(),
            Lq = kn(),
            xq = dr();

        function Mq(e, t, r) {
            t = Cq(t, e);
            for (var n = -1, o = t.length, i = !1; ++n < o;) {
                var a = xq(t[n]);
                if (!(i = e != null && r(e, a))) break;
                e = e[a]
            }
            return i || ++n != o ? i : (o = e == null ? 0 : e.length, !!o && Lq(o) && qq(a, o) && (Pq(e) || Nq(e)))
        }
        gh.exports = Mq
    });
    var yh = u((Mk, _h) => {
        var Dq = hh(),
            Fq = Eh();

        function Gq(e, t) {
            return e != null && Fq(e, t, Dq)
        }
        _h.exports = Gq
    });
    var mh = u((Dk, Ih) => {
        var Xq = ba(),
            Uq = Jn(),
            Vq = yh(),
            Wq = Qn(),
            Bq = Aa(),
            Hq = Sa(),
            kq = dr(),
            jq = 1,
            Kq = 2;

        function zq(e, t) {
            return Wq(e) && Bq(t) ? Hq(kq(e), t) : function(r) {
                var n = Uq(r, e);
                return n === void 0 && n === t ? Vq(r, e) : Xq(t, n, jq | Kq)
            }
        }
        Ih.exports = zq
    });
    var ei = u((Fk, Th) => {
        function Yq(e) {
            return e
        }
        Th.exports = Yq
    });
    var Ca = u((Gk, Oh) => {
        function $q(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        Oh.exports = $q
    });
    var Ah = u((Xk, bh) => {
        var Qq = Zn();

        function Zq(e) {
            return function(t) {
                return Qq(t, e)
            }
        }
        bh.exports = Zq
    });
    var wh = u((Uk, Sh) => {
        var Jq = Ca(),
            eL = Ah(),
            tL = Qn(),
            rL = dr();

        function nL(e) {
            return tL(e) ? Jq(rL(e)) : eL(e)
        }
        Sh.exports = nL
    });
    var wt = u((Vk, Rh) => {
        var iL = kv(),
            oL = mh(),
            aL = ei(),
            sL = Pe(),
            uL = wh();

        function cL(e) {
            return typeof e == "function" ? e : e == null ? aL : typeof e == "object" ? sL(e) ? oL(e[0], e[1]) : iL(e) : uL(e)
        }
        Rh.exports = cL
    });
    var Na = u((Wk, Ch) => {
        var lL = wt(),
            fL = Ut(),
            dL = kr();

        function pL(e) {
            return function(t, r, n) {
                var o = Object(t);
                if (!fL(t)) {
                    var i = lL(r, 3);
                    t = dL(t), r = function(s) {
                        return i(o[s], s, o)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? o[i ? t[a] : a] : void 0
            }
        }
        Ch.exports = pL
    });
    var Pa = u((Bk, Nh) => {
        function vL(e, t, r, n) {
            for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o;)
                if (t(e[i], i, e)) return i;
            return -1
        }
        Nh.exports = vL
    });
    var qh = u((Hk, Ph) => {
        var hL = /\s/;

        function gL(e) {
            for (var t = e.length; t-- && hL.test(e.charAt(t)););
            return t
        }
        Ph.exports = gL
    });
    var xh = u((kk, Lh) => {
        var EL = qh(),
            _L = /^\s+/;

        function yL(e) {
            return e && e.slice(0, EL(e) + 1).replace(_L, "")
        }
        Lh.exports = yL
    });
    var ti = u((jk, Fh) => {
        var IL = xh(),
            Mh = lt(),
            mL = jr(),
            Dh = 0 / 0,
            TL = /^[-+]0x[0-9a-f]+$/i,
            OL = /^0b[01]+$/i,
            bL = /^0o[0-7]+$/i,
            AL = parseInt;

        function SL(e) {
            if (typeof e == "number") return e;
            if (mL(e)) return Dh;
            if (Mh(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Mh(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = IL(e);
            var r = OL.test(e);
            return r || bL.test(e) ? AL(e.slice(2), r ? 2 : 8) : TL.test(e) ? Dh : +e
        }
        Fh.exports = SL
    });
    var Uh = u((Kk, Xh) => {
        var wL = ti(),
            Gh = 1 / 0,
            RL = 17976931348623157e292;

        function CL(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = wL(e), e === Gh || e === -Gh) {
                var t = e < 0 ? -1 : 1;
                return t * RL
            }
            return e === e ? e : 0
        }
        Xh.exports = CL
    });
    var qa = u((zk, Vh) => {
        var NL = Uh();

        function PL(e) {
            var t = NL(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Vh.exports = PL
    });
    var Bh = u((Yk, Wh) => {
        var qL = Pa(),
            LL = wt(),
            xL = qa(),
            ML = Math.max;

        function DL(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var o = r == null ? 0 : xL(r);
            return o < 0 && (o = ML(n + o, 0)), qL(e, LL(t, 3), o)
        }
        Wh.exports = DL
    });
    var La = u(($k, Hh) => {
        var FL = Na(),
            GL = Bh(),
            XL = FL(GL);
        Hh.exports = XL
    });
    var ni = u(Ge => {
        "use strict";
        var UL = Ze().default;
        Object.defineProperty(Ge, "__esModule", {
            value: !0
        });
        Ge.withBrowser = Ge.TRANSFORM_STYLE_PREFIXED = Ge.TRANSFORM_PREFIXED = Ge.IS_BROWSER_ENV = Ge.FLEX_PREFIXED = Ge.ELEMENT_MATCHES = void 0;
        var VL = UL(La()),
            jh = typeof window < "u";
        Ge.IS_BROWSER_ENV = jh;
        var ri = (e, t) => jh ? e() : t;
        Ge.withBrowser = ri;
        var WL = ri(() => (0, VL.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype));
        Ge.ELEMENT_MATCHES = WL;
        var BL = ri(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o];
                    if (e.style.display = i, e.style.display === i) return i
                }
                return r
            } catch {
                return r
            }
        }, "flex");
        Ge.FLEX_PREFIXED = BL;
        var Kh = ri(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o] + r;
                    if (e.style[i] !== void 0) return i
                }
            }
            return "transform"
        }, "transform");
        Ge.TRANSFORM_PREFIXED = Kh;
        var kh = Kh.split("transform")[0],
            HL = kh ? kh + "TransformStyle" : "transformStyle";
        Ge.TRANSFORM_STYLE_PREFIXED = HL
    });
    var xa = u((Zk, Zh) => {
        var kL = 4,
            jL = .001,
            KL = 1e-7,
            zL = 10,
            zr = 11,
            ii = 1 / (zr - 1),
            YL = typeof Float32Array == "function";

        function zh(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function Yh(e, t) {
            return 3 * t - 6 * e
        }

        function $h(e) {
            return 3 * e
        }

        function oi(e, t, r) {
            return ((zh(t, r) * e + Yh(t, r)) * e + $h(t)) * e
        }

        function Qh(e, t, r) {
            return 3 * zh(t, r) * e * e + 2 * Yh(t, r) * e + $h(t)
        }

        function $L(e, t, r, n, o) {
            var i, a, s = 0;
            do a = t + (r - t) / 2, i = oi(a, n, o) - e, i > 0 ? r = a : t = a; while (Math.abs(i) > KL && ++s < zL);
            return a
        }

        function QL(e, t, r, n) {
            for (var o = 0; o < kL; ++o) {
                var i = Qh(t, r, n);
                if (i === 0) return t;
                var a = oi(t, r, n) - e;
                t -= a / i
            }
            return t
        }
        Zh.exports = function(t, r, n, o) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var i = YL ? new Float32Array(zr) : new Array(zr);
            if (t !== r || n !== o)
                for (var a = 0; a < zr; ++a) i[a] = oi(a * ii, t, n);

            function s(c) {
                for (var f = 0, p = 1, d = zr - 1; p !== d && i[p] <= c; ++p) f += ii;
                --p;
                var g = (c - i[p]) / (i[p + 1] - i[p]),
                    h = f + g * ii,
                    y = Qh(h, t, n);
                return y >= jL ? QL(c, h, t, n) : y === 0 ? h : $L(c, f, f + ii, t, n)
            }
            return function(f) {
                return t === r && n === o ? f : f === 0 ? 0 : f === 1 ? 1 : oi(s(f), r, o)
            }
        }
    });
    var Ma = u(ae => {
        "use strict";
        var ZL = Ze().default;
        Object.defineProperty(ae, "__esModule", {
            value: !0
        });
        ae.bounce = xx;
        ae.bouncePast = Mx;
        ae.easeOut = ae.easeInOut = ae.easeIn = ae.ease = void 0;
        ae.inBack = Ax;
        ae.inCirc = mx;
        ae.inCubic = ax;
        ae.inElastic = Rx;
        ae.inExpo = _x;
        ae.inOutBack = wx;
        ae.inOutCirc = Ox;
        ae.inOutCubic = ux;
        ae.inOutElastic = Nx;
        ae.inOutExpo = Ix;
        ae.inOutQuad = ox;
        ae.inOutQuart = fx;
        ae.inOutQuint = vx;
        ae.inOutSine = Ex;
        ae.inQuad = nx;
        ae.inQuart = cx;
        ae.inQuint = dx;
        ae.inSine = hx;
        ae.outBack = Sx;
        ae.outBounce = bx;
        ae.outCirc = Tx;
        ae.outCubic = sx;
        ae.outElastic = Cx;
        ae.outExpo = yx;
        ae.outQuad = ix;
        ae.outQuart = lx;
        ae.outQuint = px;
        ae.outSine = gx;
        ae.swingFrom = qx;
        ae.swingFromTo = Px;
        ae.swingTo = Lx;
        var ai = ZL(xa()),
            It = 1.70158,
            JL = (0, ai.default)(.25, .1, .25, 1);
        ae.ease = JL;
        var ex = (0, ai.default)(.42, 0, 1, 1);
        ae.easeIn = ex;
        var tx = (0, ai.default)(0, 0, .58, 1);
        ae.easeOut = tx;
        var rx = (0, ai.default)(.42, 0, .58, 1);
        ae.easeInOut = rx;

        function nx(e) {
            return Math.pow(e, 2)
        }

        function ix(e) {
            return -(Math.pow(e - 1, 2) - 1)
        }

        function ox(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
        }

        function ax(e) {
            return Math.pow(e, 3)
        }

        function sx(e) {
            return Math.pow(e - 1, 3) + 1
        }

        function ux(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
        }

        function cx(e) {
            return Math.pow(e, 4)
        }

        function lx(e) {
            return -(Math.pow(e - 1, 4) - 1)
        }

        function fx(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
        }

        function dx(e) {
            return Math.pow(e, 5)
        }

        function px(e) {
            return Math.pow(e - 1, 5) + 1
        }

        function vx(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
        }

        function hx(e) {
            return -Math.cos(e * (Math.PI / 2)) + 1
        }

        function gx(e) {
            return Math.sin(e * (Math.PI / 2))
        }

        function Ex(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        }

        function _x(e) {
            return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
        }

        function yx(e) {
            return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
        }

        function Ix(e) {
            return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
        }

        function mx(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }

        function Tx(e) {
            return Math.sqrt(1 - Math.pow(e - 1, 2))
        }

        function Ox(e) {
            return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }

        function bx(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }

        function Ax(e) {
            let t = It;
            return e * e * ((t + 1) * e - t)
        }

        function Sx(e) {
            let t = It;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }

        function wx(e) {
            let t = It;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }

        function Rx(e) {
            let t = It,
                r = 0,
                n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
        }

        function Cx(e) {
            let t = It,
                r = 0,
                n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
        }

        function Nx(e) {
            let t = It,
                r = 0,
                n = 1;
            return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
        }

        function Px(e) {
            let t = It;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }

        function qx(e) {
            let t = It;
            return e * e * ((t + 1) * e - t)
        }

        function Lx(e) {
            let t = It;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }

        function xx(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }

        function Mx(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }
    });
    var Fa = u(Yr => {
        "use strict";
        var Dx = Ze().default,
            Fx = Dt().default;
        Object.defineProperty(Yr, "__esModule", {
            value: !0
        });
        Yr.applyEasing = Ux;
        Yr.createBezierEasing = Xx;
        Yr.optimizeFloat = Da;
        var Jh = Fx(Ma()),
            Gx = Dx(xa());

        function Da(e, t = 5, r = 10) {
            let n = Math.pow(r, t),
                o = Number(Math.round(e * n) / n);
            return Math.abs(o) > 1e-4 ? o : 0
        }

        function Xx(e) {
            return (0, Gx.default)(...e)
        }

        function Ux(e, t, r) {
            return t === 0 ? 0 : t === 1 ? 1 : Da(r ? t > 0 ? r(t) : t : t > 0 && e && Jh[e] ? Jh[e](t) : t)
        }
    });
    var ng = u(pr => {
        "use strict";
        Object.defineProperty(pr, "__esModule", {
            value: !0
        });
        pr.createElementState = rg;
        pr.ixElements = void 0;
        pr.mergeActionState = Ga;
        var si = ir(),
            tg = We(),
            {
                HTML_ELEMENT: tj,
                PLAIN_OBJECT: Vx,
                ABSTRACT_NODE: rj,
                CONFIG_X_VALUE: Wx,
                CONFIG_Y_VALUE: Bx,
                CONFIG_Z_VALUE: Hx,
                CONFIG_VALUE: kx,
                CONFIG_X_UNIT: jx,
                CONFIG_Y_UNIT: Kx,
                CONFIG_Z_UNIT: zx,
                CONFIG_UNIT: Yx
            } = tg.IX2EngineConstants,
            {
                IX2_SESSION_STOPPED: $x,
                IX2_INSTANCE_ADDED: Qx,
                IX2_ELEMENT_STATE_CHANGED: Zx
            } = tg.IX2EngineActionTypes,
            eg = {},
            Jx = "refState",
            eM = (e = eg, t = {}) => {
                switch (t.type) {
                    case $x:
                        return eg;
                    case Qx:
                        {
                            let {
                                elementId: r,
                                element: n,
                                origin: o,
                                actionItem: i,
                                refType: a
                            } = t.payload,
                            {
                                actionTypeId: s
                            } = i,
                            c = e;
                            return (0, si.getIn)(c, [r, n]) !== n && (c = rg(c, n, a, r, i)),
                            Ga(c, r, s, o, i)
                        }
                    case Zx:
                        {
                            let {
                                elementId: r,
                                actionTypeId: n,
                                current: o,
                                actionItem: i
                            } = t.payload;
                            return Ga(e, r, n, o, i)
                        }
                    default:
                        return e
                }
            };
        pr.ixElements = eM;

        function rg(e, t, r, n, o) {
            let i = r === Vx ? (0, si.getIn)(o, ["config", "target", "objectId"]) : null;
            return (0, si.mergeIn)(e, [n], {
                id: n,
                ref: t,
                refId: i,
                refType: r
            })
        }

        function Ga(e, t, r, n, o) {
            let i = rM(o),
                a = [t, Jx, r];
            return (0, si.mergeIn)(e, a, n, i)
        }
        var tM = [
            [Wx, jx],
            [Bx, Kx],
            [Hx, zx],
            [kx, Yx]
        ];

        function rM(e) {
            let {
                config: t
            } = e;
            return tM.reduce((r, n) => {
                let o = n[0],
                    i = n[1],
                    a = t[o],
                    s = t[i];
                return a != null && s != null && (r[i] = s), r
            }, {})
        }
    });
    var ig = u(qe => {
        "use strict";
        Object.defineProperty(qe, "__esModule", {
            value: !0
        });
        qe.renderPlugin = qe.getPluginOrigin = qe.getPluginDuration = qe.getPluginDestination = qe.getPluginConfig = qe.createPluginInstance = qe.clearPlugin = void 0;
        var nM = e => e.value;
        qe.getPluginConfig = nM;
        var iM = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        qe.getPluginDuration = iM;
        var oM = e => e || {
            value: 0
        };
        qe.getPluginOrigin = oM;
        var aM = e => ({
            value: e.value
        });
        qe.getPluginDestination = aM;
        var sM = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        qe.createPluginInstance = sM;
        var uM = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        qe.renderPlugin = uM;
        var cM = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        qe.clearPlugin = cM
    });
    var ag = u(Le => {
        "use strict";
        Object.defineProperty(Le, "__esModule", {
            value: !0
        });
        Le.renderPlugin = Le.getPluginOrigin = Le.getPluginDuration = Le.getPluginDestination = Le.getPluginConfig = Le.createPluginInstance = Le.clearPlugin = void 0;
        var lM = e => document.querySelector(`[data-w-id="${e}"]`),
            fM = () => window.Webflow.require("spline"),
            dM = (e, t) => e.filter(r => !t.includes(r)),
            pM = (e, t) => e.value[t];
        Le.getPluginConfig = pM;
        var vM = () => null;
        Le.getPluginDuration = vM;
        var og = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            hM = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let i = Object.keys(e),
                        a = dM(n, i);
                    return a.length ? a.reduce((c, f) => (c[f] = og[f], c), e) : e
                }
                return n.reduce((i, a) => (i[a] = og[a], i), {})
            };
        Le.getPluginOrigin = hM;
        var gM = e => e.value;
        Le.getPluginDestination = gM;
        var EM = (e, t) => {
            var r, n;
            let o = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
            return o ? lM(o) : null
        };
        Le.createPluginInstance = EM;
        var _M = (e, t, r) => {
            let n = fM().getInstance(e),
                o = r.config.target.objectId;
            if (!n || !o) return;
            let i = n.spline.findObjectById(o);
            if (!i) return;
            let {
                PLUGIN_SPLINE: a
            } = t;
            a.positionX != null && (i.position.x = a.positionX), a.positionY != null && (i.position.y = a.positionY), a.positionZ != null && (i.position.z = a.positionZ), a.rotationX != null && (i.rotation.x = a.rotationX), a.rotationY != null && (i.rotation.y = a.rotationY), a.rotationZ != null && (i.rotation.z = a.rotationZ), a.scaleX != null && (i.scale.x = a.scaleX), a.scaleY != null && (i.scale.y = a.scaleY), a.scaleZ != null && (i.scale.z = a.scaleZ)
        };
        Le.renderPlugin = _M;
        var yM = () => null;
        Le.clearPlugin = yM
    });
    var ug = u(Re => {
        "use strict";
        Object.defineProperty(Re, "__esModule", {
            value: !0
        });
        Re.getPluginOrigin = Re.getPluginDuration = Re.getPluginDestination = Re.getPluginConfig = Re.createPluginInstance = Re.clearPlugin = void 0;
        Re.normalizeColor = sg;
        Re.renderPlugin = void 0;

        function sg(e) {
            let t, r, n, o = 1,
                i = e.replace(/\s/g, "").toLowerCase();
            if (i.startsWith("#")) {
                let a = i.substring(1);
                a.length === 3 ? (t = parseInt(a[0] + a[0], 16), r = parseInt(a[1] + a[1], 16), n = parseInt(a[2] + a[2], 16)) : a.length === 6 && (t = parseInt(a.substring(0, 2), 16), r = parseInt(a.substring(2, 4), 16), n = parseInt(a.substring(4, 6), 16))
            } else if (i.startsWith("rgba")) {
                let a = i.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10), r = parseInt(a[1], 10), n = parseInt(a[2], 10), o = parseFloat(a[3])
            } else if (i.startsWith("rgb")) {
                let a = i.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10), r = parseInt(a[1], 10), n = parseInt(a[2], 10)
            } else if (i.startsWith("hsla")) {
                let a = i.match(/hsla\(([^)]+)\)/)[1].split(","),
                    s = parseFloat(a[0]),
                    c = parseFloat(a[1].replace("%", "")) / 100,
                    f = parseFloat(a[2].replace("%", "")) / 100;
                o = parseFloat(a[3]);
                let p = (1 - Math.abs(2 * f - 1)) * c,
                    d = p * (1 - Math.abs(s / 60 % 2 - 1)),
                    g = f - p / 2,
                    h, y, I;
                s >= 0 && s < 60 ? (h = p, y = d, I = 0) : s >= 60 && s < 120 ? (h = d, y = p, I = 0) : s >= 120 && s < 180 ? (h = 0, y = p, I = d) : s >= 180 && s < 240 ? (h = 0, y = d, I = p) : s >= 240 && s < 300 ? (h = d, y = 0, I = p) : (h = p, y = 0, I = d), t = Math.round((h + g) * 255), r = Math.round((y + g) * 255), n = Math.round((I + g) * 255)
            } else if (i.startsWith("hsl")) {
                let a = i.match(/hsl\(([^)]+)\)/)[1].split(","),
                    s = parseFloat(a[0]),
                    c = parseFloat(a[1].replace("%", "")) / 100,
                    f = parseFloat(a[2].replace("%", "")) / 100,
                    p = (1 - Math.abs(2 * f - 1)) * c,
                    d = p * (1 - Math.abs(s / 60 % 2 - 1)),
                    g = f - p / 2,
                    h, y, I;
                s >= 0 && s < 60 ? (h = p, y = d, I = 0) : s >= 60 && s < 120 ? (h = d, y = p, I = 0) : s >= 120 && s < 180 ? (h = 0, y = p, I = d) : s >= 180 && s < 240 ? (h = 0, y = d, I = p) : s >= 240 && s < 300 ? (h = d, y = 0, I = p) : (h = p, y = 0, I = d), t = Math.round((h + g) * 255), r = Math.round((y + g) * 255), n = Math.round((I + g) * 255)
            }
            return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`, {
                red: t,
                green: r,
                blue: n,
                alpha: o
            }
        }
        var IM = (e, t) => e.value[t];
        Re.getPluginConfig = IM;
        var mM = () => null;
        Re.getPluginDuration = mM;
        var TM = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                o = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {
                size: parseInt(o, 10)
            };
            if (r.red != null && r.green != null && r.blue != null) return sg(o)
        };
        Re.getPluginOrigin = TM;
        var OM = e => e.value;
        Re.getPluginDestination = OM;
        var bM = () => null;
        Re.createPluginInstance = bM;
        var AM = (e, t, r) => {
            let n = r.config.target.objectId,
                o = r.config.value.unit,
                {
                    PLUGIN_VARIABLE: i
                } = t,
                {
                    size: a,
                    red: s,
                    green: c,
                    blue: f,
                    alpha: p
                } = i,
                d;
            a != null && (d = a + o), s != null && f != null && c != null && p != null && (d = `rgba(${s}, ${c}, ${f}, ${p})`), d != null && document.documentElement.style.setProperty(n, d)
        };
        Re.renderPlugin = AM;
        var SM = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        Re.clearPlugin = SM
    });
    var cg = u(ui => {
        "use strict";
        var Va = Dt().default,
            wM = Ze().default;
        Object.defineProperty(ui, "__esModule", {
            value: !0
        });
        ui.pluginMethodMap = void 0;
        var Xa = wM(nr()),
            Ua = We(),
            RM = Va(ig()),
            CM = Va(ag()),
            NM = Va(ug()),
            PM = new Map([
                [Ua.ActionTypeConsts.PLUGIN_LOTTIE, (0, Xa.default)({}, RM)],
                [Ua.ActionTypeConsts.PLUGIN_SPLINE, (0, Xa.default)({}, CM)],
                [Ua.ActionTypeConsts.PLUGIN_VARIABLE, (0, Xa.default)({}, NM)]
            ]);
        ui.pluginMethodMap = PM
    });
    var Wa = u(Ce => {
        "use strict";
        Object.defineProperty(Ce, "__esModule", {
            value: !0
        });
        Ce.getPluginOrigin = Ce.getPluginDuration = Ce.getPluginDestination = Ce.getPluginConfig = Ce.createPluginInstance = Ce.clearPlugin = void 0;
        Ce.isPluginType = LM;
        Ce.renderPlugin = void 0;
        var qM = ni(),
            lg = cg();

        function LM(e) {
            return lg.pluginMethodMap.has(e)
        }
        var Wt = e => t => {
                if (!qM.IS_BROWSER_ENV) return () => null;
                let r = lg.pluginMethodMap.get(t);
                if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
                let n = r[e];
                if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
                return n
            },
            xM = Wt("getPluginConfig");
        Ce.getPluginConfig = xM;
        var MM = Wt("getPluginOrigin");
        Ce.getPluginOrigin = MM;
        var DM = Wt("getPluginDuration");
        Ce.getPluginDuration = DM;
        var FM = Wt("getPluginDestination");
        Ce.getPluginDestination = FM;
        var GM = Wt("createPluginInstance");
        Ce.createPluginInstance = GM;
        var XM = Wt("renderPlugin");
        Ce.renderPlugin = XM;
        var UM = Wt("clearPlugin");
        Ce.clearPlugin = UM
    });
    var dg = u((cj, fg) => {
        function VM(e, t) {
            return e == null || e !== e ? t : e
        }
        fg.exports = VM
    });
    var vg = u((lj, pg) => {
        function WM(e, t, r, n) {
            var o = -1,
                i = e == null ? 0 : e.length;
            for (n && i && (r = e[++o]); ++o < i;) r = t(r, e[o], o, e);
            return r
        }
        pg.exports = WM
    });
    var gg = u((fj, hg) => {
        function BM(e) {
            return function(t, r, n) {
                for (var o = -1, i = Object(t), a = n(t), s = a.length; s--;) {
                    var c = a[e ? s : ++o];
                    if (r(i[c], c, i) === !1) break
                }
                return t
            }
        }
        hg.exports = BM
    });
    var _g = u((dj, Eg) => {
        var HM = gg(),
            kM = HM();
        Eg.exports = kM
    });
    var Ba = u((pj, yg) => {
        var jM = _g(),
            KM = kr();

        function zM(e, t) {
            return e && jM(e, t, KM)
        }
        yg.exports = zM
    });
    var mg = u((vj, Ig) => {
        var YM = Ut();

        function $M(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!YM(r)) return e(r, n);
                for (var o = r.length, i = t ? o : -1, a = Object(r);
                    (t ? i-- : ++i < o) && n(a[i], i, a) !== !1;);
                return r
            }
        }
        Ig.exports = $M
    });
    var Ha = u((hj, Tg) => {
        var QM = Ba(),
            ZM = mg(),
            JM = ZM(QM);
        Tg.exports = JM
    });
    var bg = u((gj, Og) => {
        function eD(e, t, r, n, o) {
            return o(e, function(i, a, s) {
                r = n ? (n = !1, i) : t(r, i, a, s)
            }), r
        }
        Og.exports = eD
    });
    var Sg = u((Ej, Ag) => {
        var tD = vg(),
            rD = Ha(),
            nD = wt(),
            iD = bg(),
            oD = Pe();

        function aD(e, t, r) {
            var n = oD(e) ? tD : iD,
                o = arguments.length < 3;
            return n(e, nD(t, 4), r, o, rD)
        }
        Ag.exports = aD
    });
    var Rg = u((_j, wg) => {
        var sD = Pa(),
            uD = wt(),
            cD = qa(),
            lD = Math.max,
            fD = Math.min;

        function dD(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var o = n - 1;
            return r !== void 0 && (o = cD(r), o = r < 0 ? lD(n + o, 0) : fD(o, n - 1)), sD(e, uD(t, 3), o, !0)
        }
        wg.exports = dD
    });
    var Ng = u((yj, Cg) => {
        var pD = Na(),
            vD = Rg(),
            hD = pD(vD);
        Cg.exports = hD
    });
    var qg = u(ci => {
        "use strict";
        Object.defineProperty(ci, "__esModule", {
            value: !0
        });
        ci.default = void 0;
        var gD = Object.prototype.hasOwnProperty;

        function Pg(e, t) {
            return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
        }

        function ED(e, t) {
            if (Pg(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            let r = Object.keys(e),
                n = Object.keys(t);
            if (r.length !== n.length) return !1;
            for (let o = 0; o < r.length; o++)
                if (!gD.call(t, r[o]) || !Pg(e[r[o]], t[r[o]])) return !1;
            return !0
        }
        var _D = ED;
        ci.default = _D
    });
    var Qg = u(he => {
        "use strict";
        var pi = Ze().default;
        Object.defineProperty(he, "__esModule", {
            value: !0
        });
        he.cleanupHTMLElement = g1;
        he.clearAllStyles = h1;
        he.clearObjectCache = DD;
        he.getActionListProgress = _1;
        he.getAffectedElements = Qa;
        he.getComputedStyle = HD;
        he.getDestinationValues = QD;
        he.getElementId = UD;
        he.getInstanceId = GD;
        he.getInstanceOrigin = KD;
        he.getItemConfigByKey = void 0;
        he.getMaxDurationItemIndex = $g;
        he.getNamespacedParameterId = m1;
        he.getRenderType = Kg;
        he.getStyleProp = ZD;
        he.mediaQueriesEqual = O1;
        he.observeStore = BD;
        he.reduceListToGroup = y1;
        he.reifyState = VD;
        he.renderHTMLElement = JD;
        Object.defineProperty(he, "shallowEqual", {
            enumerable: !0,
            get: function() {
                return Ug.default
            }
        });
        he.shouldAllowMediaQuery = T1;
        he.shouldNamespaceEventParameter = I1;
        he.stringifyTarget = b1;
        var Rt = pi(dg()),
            Ka = pi(Sg()),
            ja = pi(Ng()),
            Lg = ir(),
            Bt = We(),
            Ug = pi(qg()),
            yD = Fa(),
            pt = Wa(),
            Xe = ni(),
            {
                BACKGROUND: ID,
                TRANSFORM: mD,
                TRANSLATE_3D: TD,
                SCALE_3D: OD,
                ROTATE_X: bD,
                ROTATE_Y: AD,
                ROTATE_Z: SD,
                SKEW: wD,
                PRESERVE_3D: RD,
                FLEX: CD,
                OPACITY: fi,
                FILTER: $r,
                FONT_VARIATION_SETTINGS: Qr,
                WIDTH: ft,
                HEIGHT: dt,
                BACKGROUND_COLOR: Vg,
                BORDER_COLOR: ND,
                COLOR: PD,
                CHILDREN: xg,
                IMMEDIATE_CHILDREN: qD,
                SIBLINGS: Mg,
                PARENT: LD,
                DISPLAY: di,
                WILL_CHANGE: vr,
                AUTO: Ct,
                COMMA_DELIMITER: Zr,
                COLON_DELIMITER: xD,
                BAR_DELIMITER: ka,
                RENDER_TRANSFORM: Wg,
                RENDER_GENERAL: za,
                RENDER_STYLE: Ya,
                RENDER_PLUGIN: Bg
            } = Bt.IX2EngineConstants,
            {
                TRANSFORM_MOVE: hr,
                TRANSFORM_SCALE: gr,
                TRANSFORM_ROTATE: Er,
                TRANSFORM_SKEW: Jr,
                STYLE_OPACITY: Hg,
                STYLE_FILTER: en,
                STYLE_FONT_VARIATION: tn,
                STYLE_SIZE: _r,
                STYLE_BACKGROUND_COLOR: yr,
                STYLE_BORDER: Ir,
                STYLE_TEXT_COLOR: mr,
                GENERAL_DISPLAY: vi,
                OBJECT_VALUE: MD
            } = Bt.ActionTypeConsts,
            kg = e => e.trim(),
            $a = Object.freeze({
                [yr]: Vg,
                [Ir]: ND,
                [mr]: PD
            }),
            jg = Object.freeze({
                [Xe.TRANSFORM_PREFIXED]: mD,
                [Vg]: ID,
                [fi]: fi,
                [$r]: $r,
                [ft]: ft,
                [dt]: dt,
                [Qr]: Qr
            }),
            li = new Map;

        function DD() {
            li.clear()
        }
        var FD = 1;

        function GD() {
            return "i" + FD++
        }
        var XD = 1;

        function UD(e, t) {
            for (let r in e) {
                let n = e[r];
                if (n && n.ref === t) return n.id
            }
            return "e" + XD++
        }

        function VD({
            events: e,
            actionLists: t,
            site: r
        } = {}) {
            let n = (0, Ka.default)(e, (a, s) => {
                    let {
                        eventTypeId: c
                    } = s;
                    return a[c] || (a[c] = {}), a[c][s.id] = s, a
                }, {}),
                o = r && r.mediaQueries,
                i = [];
            return o ? i = o.map(a => a.key) : (o = [], console.warn("IX2 missing mediaQueries in site data")), {
                ixData: {
                    events: e,
                    actionLists: t,
                    eventTypeMap: n,
                    mediaQueries: o,
                    mediaQueryKeys: i
                }
            }
        }
        var WD = (e, t) => e === t;

        function BD({
            store: e,
            select: t,
            onChange: r,
            comparator: n = WD
        }) {
            let {
                getState: o,
                subscribe: i
            } = e, a = i(c), s = t(o());

            function c() {
                let f = t(o());
                if (f == null) {
                    a();
                    return
                }
                n(f, s) || (s = f, r(s, e))
            }
            return a
        }

        function Dg(e) {
            let t = typeof e;
            if (t === "string") return {
                id: e
            };
            if (e != null && t === "object") {
                let {
                    id: r,
                    objectId: n,
                    selector: o,
                    selectorGuids: i,
                    appliesTo: a,
                    useEventTarget: s
                } = e;
                return {
                    id: r,
                    objectId: n,
                    selector: o,
                    selectorGuids: i,
                    appliesTo: a,
                    useEventTarget: s
                }
            }
            return {}
        }

        function Qa({
            config: e,
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: o
        }) {
            var i, a, s;
            if (!o) throw new Error("IX2 missing elementApi");
            let {
                targets: c
            } = e;
            if (Array.isArray(c) && c.length > 0) return c.reduce((C, F) => C.concat(Qa({
                config: {
                    target: F
                },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: o
            })), []);
            let {
                getValidDocument: f,
                getQuerySelector: p,
                queryDocument: d,
                getChildElements: g,
                getSiblingElements: h,
                matchSelector: y,
                elementContains: I,
                isSiblingNode: x
            } = o, {
                target: S
            } = e;
            if (!S) return [];
            let {
                id: w,
                objectId: O,
                selector: L,
                selectorGuids: P,
                appliesTo: M,
                useEventTarget: X
            } = Dg(S);
            if (O) return [li.has(O) ? li.get(O) : li.set(O, {}).get(O)];
            if (M === Bt.EventAppliesTo.PAGE) {
                let C = f(w);
                return C ? [C] : []
            }
            let Y = ((i = t == null || (a = t.action) === null || a === void 0 || (s = a.config) === null || s === void 0 ? void 0 : s.affectedElements) !== null && i !== void 0 ? i : {})[w || L] || {},
                re = !!(Y.id || Y.selector),
                U, N, v, q = t && p(Dg(t.target));
            if (re ? (U = Y.limitAffectedElements, N = q, v = p(Y)) : N = v = p({
                    id: w,
                    selector: L,
                    selectorGuids: P
                }), t && X) {
                let C = r && (v || X === !0) ? [r] : d(q);
                if (v) {
                    if (X === LD) return d(v).filter(F => C.some($ => I(F, $)));
                    if (X === xg) return d(v).filter(F => C.some($ => I($, F)));
                    if (X === Mg) return d(v).filter(F => C.some($ => x($, F)))
                }
                return C
            }
            return N == null || v == null ? [] : Xe.IS_BROWSER_ENV && n ? d(v).filter(C => n.contains(C)) : U === xg ? d(N, v) : U === qD ? g(d(N)).filter(y(v)) : U === Mg ? h(d(N)).filter(y(v)) : d(v)
        }

        function HD({
            element: e,
            actionItem: t
        }) {
            if (!Xe.IS_BROWSER_ENV) return {};
            let {
                actionTypeId: r
            } = t;
            switch (r) {
                case _r:
                case yr:
                case Ir:
                case mr:
                case vi:
                    return window.getComputedStyle(e);
                default:
                    return {}
            }
        }
        var Fg = /px/,
            kD = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = e1[n.type]), r), e || {}),
            jD = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = t1[n.type] || n.defaultValue || 0), r), e || {});

        function KD(e, t = {}, r = {}, n, o) {
            let {
                getStyle: i
            } = o, {
                actionTypeId: a
            } = n;
            if ((0, pt.isPluginType)(a)) return (0, pt.getPluginOrigin)(a)(t[a], n);
            switch (n.actionTypeId) {
                case hr:
                case gr:
                case Er:
                case Jr:
                    return t[n.actionTypeId] || Za[n.actionTypeId];
                case en:
                    return kD(t[n.actionTypeId], n.config.filters);
                case tn:
                    return jD(t[n.actionTypeId], n.config.fontVariations);
                case Hg:
                    return {
                        value: (0, Rt.default)(parseFloat(i(e, fi)), 1)
                    };
                case _r:
                    {
                        let s = i(e, ft),
                            c = i(e, dt),
                            f, p;
                        return n.config.widthUnit === Ct ? f = Fg.test(s) ? parseFloat(s) : parseFloat(r.width) : f = (0, Rt.default)(parseFloat(s), parseFloat(r.width)),
                        n.config.heightUnit === Ct ? p = Fg.test(c) ? parseFloat(c) : parseFloat(r.height) : p = (0, Rt.default)(parseFloat(c), parseFloat(r.height)),
                        {
                            widthValue: f,
                            heightValue: p
                        }
                    }
                case yr:
                case Ir:
                case mr:
                    return d1({
                        element: e,
                        actionTypeId: n.actionTypeId,
                        computedStyle: r,
                        getStyle: i
                    });
                case vi:
                    return {
                        value: (0, Rt.default)(i(e, di), r.display)
                    };
                case MD:
                    return t[n.actionTypeId] || {
                        value: 0
                    };
                default:
                    return
            }
        }
        var zD = (e, t) => (t && (e[t.type] = t.value || 0), e),
            YD = (e, t) => (t && (e[t.type] = t.value || 0), e),
            $D = (e, t, r) => {
                if ((0, pt.isPluginType)(e)) return (0, pt.getPluginConfig)(e)(r, t);
                switch (e) {
                    case en:
                        {
                            let n = (0, ja.default)(r.filters, ({
                                type: o
                            }) => o === t);
                            return n ? n.value : 0
                        }
                    case tn:
                        {
                            let n = (0, ja.default)(r.fontVariations, ({
                                type: o
                            }) => o === t);
                            return n ? n.value : 0
                        }
                    default:
                        return r[t]
                }
            };
        he.getItemConfigByKey = $D;

        function QD({
            element: e,
            actionItem: t,
            elementApi: r
        }) {
            if ((0, pt.isPluginType)(t.actionTypeId)) return (0, pt.getPluginDestination)(t.actionTypeId)(t.config);
            switch (t.actionTypeId) {
                case hr:
                case gr:
                case Er:
                case Jr:
                    {
                        let {
                            xValue: n,
                            yValue: o,
                            zValue: i
                        } = t.config;
                        return {
                            xValue: n,
                            yValue: o,
                            zValue: i
                        }
                    }
                case _r:
                    {
                        let {
                            getStyle: n,
                            setStyle: o,
                            getProperty: i
                        } = r,
                        {
                            widthUnit: a,
                            heightUnit: s
                        } = t.config,
                        {
                            widthValue: c,
                            heightValue: f
                        } = t.config;
                        if (!Xe.IS_BROWSER_ENV) return {
                            widthValue: c,
                            heightValue: f
                        };
                        if (a === Ct) {
                            let p = n(e, ft);
                            o(e, ft, ""), c = i(e, "offsetWidth"), o(e, ft, p)
                        }
                        if (s === Ct) {
                            let p = n(e, dt);
                            o(e, dt, ""), f = i(e, "offsetHeight"), o(e, dt, p)
                        }
                        return {
                            widthValue: c,
                            heightValue: f
                        }
                    }
                case yr:
                case Ir:
                case mr:
                    {
                        let {
                            rValue: n,
                            gValue: o,
                            bValue: i,
                            aValue: a
                        } = t.config;
                        return {
                            rValue: n,
                            gValue: o,
                            bValue: i,
                            aValue: a
                        }
                    }
                case en:
                    return t.config.filters.reduce(zD, {});
                case tn:
                    return t.config.fontVariations.reduce(YD, {});
                default:
                    {
                        let {
                            value: n
                        } = t.config;
                        return {
                            value: n
                        }
                    }
            }
        }

        function Kg(e) {
            if (/^TRANSFORM_/.test(e)) return Wg;
            if (/^STYLE_/.test(e)) return Ya;
            if (/^GENERAL_/.test(e)) return za;
            if (/^PLUGIN_/.test(e)) return Bg
        }

        function ZD(e, t) {
            return e === Ya ? t.replace("STYLE_", "").toLowerCase() : null
        }

        function JD(e, t, r, n, o, i, a, s, c) {
            switch (s) {
                case Wg:
                    return i1(e, t, r, o, a);
                case Ya:
                    return p1(e, t, r, o, i, a);
                case za:
                    return v1(e, o, a);
                case Bg:
                    {
                        let {
                            actionTypeId: f
                        } = o;
                        if ((0, pt.isPluginType)(f)) return (0, pt.renderPlugin)(f)(c, t, o)
                    }
            }
        }
        var Za = {
                [hr]: Object.freeze({
                    xValue: 0,
                    yValue: 0,
                    zValue: 0
                }),
                [gr]: Object.freeze({
                    xValue: 1,
                    yValue: 1,
                    zValue: 1
                }),
                [Er]: Object.freeze({
                    xValue: 0,
                    yValue: 0,
                    zValue: 0
                }),
                [Jr]: Object.freeze({
                    xValue: 0,
                    yValue: 0
                })
            },
            e1 = Object.freeze({
                blur: 0,
                "hue-rotate": 0,
                invert: 0,
                grayscale: 0,
                saturate: 100,
                sepia: 0,
                contrast: 100,
                brightness: 100
            }),
            t1 = Object.freeze({
                wght: 0,
                opsz: 0,
                wdth: 0,
                slnt: 0
            }),
            r1 = (e, t) => {
                let r = (0, ja.default)(t.filters, ({
                    type: n
                }) => n === e);
                if (r && r.unit) return r.unit;
                switch (e) {
                    case "blur":
                        return "px";
                    case "hue-rotate":
                        return "deg";
                    default:
                        return "%"
                }
            },
            n1 = Object.keys(Za);

        function i1(e, t, r, n, o) {
            let i = n1.map(s => {
                    let c = Za[s],
                        {
                            xValue: f = c.xValue,
                            yValue: p = c.yValue,
                            zValue: d = c.zValue,
                            xUnit: g = "",
                            yUnit: h = "",
                            zUnit: y = ""
                        } = t[s] || {};
                    switch (s) {
                        case hr:
                            return `${TD}(${f}${g}, ${p}${h}, ${d}${y})`;
                        case gr:
                            return `${OD}(${f}${g}, ${p}${h}, ${d}${y})`;
                        case Er:
                            return `${bD}(${f}${g}) ${AD}(${p}${h}) ${SD}(${d}${y})`;
                        case Jr:
                            return `${wD}(${f}${g}, ${p}${h})`;
                        default:
                            return ""
                    }
                }).join(" "),
                {
                    setStyle: a
                } = o;
            Ht(e, Xe.TRANSFORM_PREFIXED, o), a(e, Xe.TRANSFORM_PREFIXED, i), s1(n, r) && a(e, Xe.TRANSFORM_STYLE_PREFIXED, RD)
        }

        function o1(e, t, r, n) {
            let o = (0, Ka.default)(t, (a, s, c) => `${a} ${c}(${s}${r1(c,r)})`, ""),
                {
                    setStyle: i
                } = n;
            Ht(e, $r, n), i(e, $r, o)
        }

        function a1(e, t, r, n) {
            let o = (0, Ka.default)(t, (a, s, c) => (a.push(`"${c}" ${s}`), a), []).join(", "),
                {
                    setStyle: i
                } = n;
            Ht(e, Qr, n), i(e, Qr, o)
        }

        function s1({
            actionTypeId: e
        }, {
            xValue: t,
            yValue: r,
            zValue: n
        }) {
            return e === hr && n !== void 0 || e === gr && n !== void 0 || e === Er && (t !== void 0 || r !== void 0)
        }
        var u1 = "\\(([^)]+)\\)",
            c1 = /^rgb/,
            l1 = RegExp(`rgba?${u1}`);

        function f1(e, t) {
            let r = e.exec(t);
            return r ? r[1] : ""
        }

        function d1({
            element: e,
            actionTypeId: t,
            computedStyle: r,
            getStyle: n
        }) {
            let o = $a[t],
                i = n(e, o),
                a = c1.test(i) ? i : r[o],
                s = f1(l1, a).split(Zr);
            return {
                rValue: (0, Rt.default)(parseInt(s[0], 10), 255),
                gValue: (0, Rt.default)(parseInt(s[1], 10), 255),
                bValue: (0, Rt.default)(parseInt(s[2], 10), 255),
                aValue: (0, Rt.default)(parseFloat(s[3]), 1)
            }
        }

        function p1(e, t, r, n, o, i) {
            let {
                setStyle: a
            } = i;
            switch (n.actionTypeId) {
                case _r:
                    {
                        let {
                            widthUnit: s = "",
                            heightUnit: c = ""
                        } = n.config,
                        {
                            widthValue: f,
                            heightValue: p
                        } = r;f !== void 0 && (s === Ct && (s = "px"), Ht(e, ft, i), a(e, ft, f + s)),
                        p !== void 0 && (c === Ct && (c = "px"), Ht(e, dt, i), a(e, dt, p + c));
                        break
                    }
                case en:
                    {
                        o1(e, r, n.config, i);
                        break
                    }
                case tn:
                    {
                        a1(e, r, n.config, i);
                        break
                    }
                case yr:
                case Ir:
                case mr:
                    {
                        let s = $a[n.actionTypeId],
                            c = Math.round(r.rValue),
                            f = Math.round(r.gValue),
                            p = Math.round(r.bValue),
                            d = r.aValue;Ht(e, s, i),
                        a(e, s, d >= 1 ? `rgb(${c},${f},${p})` : `rgba(${c},${f},${p},${d})`);
                        break
                    }
                default:
                    {
                        let {
                            unit: s = ""
                        } = n.config;Ht(e, o, i),
                        a(e, o, r.value + s);
                        break
                    }
            }
        }

        function v1(e, t, r) {
            let {
                setStyle: n
            } = r;
            switch (t.actionTypeId) {
                case vi:
                    {
                        let {
                            value: o
                        } = t.config;o === CD && Xe.IS_BROWSER_ENV ? n(e, di, Xe.FLEX_PREFIXED) : n(e, di, o);
                        return
                    }
            }
        }

        function Ht(e, t, r) {
            if (!Xe.IS_BROWSER_ENV) return;
            let n = jg[t];
            if (!n) return;
            let {
                getStyle: o,
                setStyle: i
            } = r, a = o(e, vr);
            if (!a) {
                i(e, vr, n);
                return
            }
            let s = a.split(Zr).map(kg);
            s.indexOf(n) === -1 && i(e, vr, s.concat(n).join(Zr))
        }

        function zg(e, t, r) {
            if (!Xe.IS_BROWSER_ENV) return;
            let n = jg[t];
            if (!n) return;
            let {
                getStyle: o,
                setStyle: i
            } = r, a = o(e, vr);
            !a || a.indexOf(n) === -1 || i(e, vr, a.split(Zr).map(kg).filter(s => s !== n).join(Zr))
        }

        function h1({
            store: e,
            elementApi: t
        }) {
            let {
                ixData: r
            } = e.getState(), {
                events: n = {},
                actionLists: o = {}
            } = r;
            Object.keys(n).forEach(i => {
                let a = n[i],
                    {
                        config: s
                    } = a.action,
                    {
                        actionListId: c
                    } = s,
                    f = o[c];
                f && Gg({
                    actionList: f,
                    event: a,
                    elementApi: t
                })
            }), Object.keys(o).forEach(i => {
                Gg({
                    actionList: o[i],
                    elementApi: t
                })
            })
        }

        function Gg({
            actionList: e = {},
            event: t,
            elementApi: r
        }) {
            let {
                actionItemGroups: n,
                continuousParameterGroups: o
            } = e;
            n && n.forEach(i => {
                Xg({
                    actionGroup: i,
                    event: t,
                    elementApi: r
                })
            }), o && o.forEach(i => {
                let {
                    continuousActionGroups: a
                } = i;
                a.forEach(s => {
                    Xg({
                        actionGroup: s,
                        event: t,
                        elementApi: r
                    })
                })
            })
        }

        function Xg({
            actionGroup: e,
            event: t,
            elementApi: r
        }) {
            let {
                actionItems: n
            } = e;
            n.forEach(o => {
                let {
                    actionTypeId: i,
                    config: a
                } = o, s;
                (0, pt.isPluginType)(i) ? s = c => (0, pt.clearPlugin)(i)(c, o): s = Yg({
                    effect: E1,
                    actionTypeId: i,
                    elementApi: r
                }), Qa({
                    config: a,
                    event: t,
                    elementApi: r
                }).forEach(s)
            })
        }

        function g1(e, t, r) {
            let {
                setStyle: n,
                getStyle: o
            } = r, {
                actionTypeId: i
            } = t;
            if (i === _r) {
                let {
                    config: a
                } = t;
                a.widthUnit === Ct && n(e, ft, ""), a.heightUnit === Ct && n(e, dt, "")
            }
            o(e, vr) && Yg({
                effect: zg,
                actionTypeId: i,
                elementApi: r
            })(e)
        }
        var Yg = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case hr:
                case gr:
                case Er:
                case Jr:
                    e(n, Xe.TRANSFORM_PREFIXED, r);
                    break;
                case en:
                    e(n, $r, r);
                    break;
                case tn:
                    e(n, Qr, r);
                    break;
                case Hg:
                    e(n, fi, r);
                    break;
                case _r:
                    e(n, ft, r), e(n, dt, r);
                    break;
                case yr:
                case Ir:
                case mr:
                    e(n, $a[t], r);
                    break;
                case vi:
                    e(n, di, r);
                    break
            }
        };

        function E1(e, t, r) {
            let {
                setStyle: n
            } = r;
            zg(e, t, r), n(e, t, ""), t === Xe.TRANSFORM_PREFIXED && n(e, Xe.TRANSFORM_STYLE_PREFIXED, "")
        }

        function $g(e) {
            let t = 0,
                r = 0;
            return e.forEach((n, o) => {
                let {
                    config: i
                } = n, a = i.delay + i.duration;
                a >= t && (t = a, r = o)
            }), r
        }

        function _1(e, t) {
            let {
                actionItemGroups: r,
                useFirstGroupAsInitialState: n
            } = e, {
                actionItem: o,
                verboseTimeElapsed: i = 0
            } = t, a = 0, s = 0;
            return r.forEach((c, f) => {
                if (n && f === 0) return;
                let {
                    actionItems: p
                } = c, d = p[$g(p)], {
                    config: g,
                    actionTypeId: h
                } = d;
                o.id === d.id && (s = a + i);
                let y = Kg(h) === za ? 0 : g.duration;
                a += g.delay + y
            }), a > 0 ? (0, yD.optimizeFloat)(s / a) : 0
        }

        function y1({
            actionList: e,
            actionItemId: t,
            rawData: r
        }) {
            let {
                actionItemGroups: n,
                continuousParameterGroups: o
            } = e, i = [], a = s => (i.push((0, Lg.mergeIn)(s, ["config"], {
                delay: 0,
                duration: 0
            })), s.id === t);
            return n && n.some(({
                actionItems: s
            }) => s.some(a)), o && o.some(s => {
                let {
                    continuousActionGroups: c
                } = s;
                return c.some(({
                    actionItems: f
                }) => f.some(a))
            }), (0, Lg.setIn)(r, ["actionLists"], {
                [e.id]: {
                    id: e.id,
                    actionItemGroups: [{
                        actionItems: i
                    }]
                }
            })
        }

        function I1(e, {
            basedOn: t
        }) {
            return e === Bt.EventTypeConsts.SCROLLING_IN_VIEW && (t === Bt.EventBasedOn.ELEMENT || t == null) || e === Bt.EventTypeConsts.MOUSE_MOVE && t === Bt.EventBasedOn.ELEMENT
        }

        function m1(e, t) {
            return e + xD + t
        }

        function T1(e, t) {
            return t == null ? !0 : e.indexOf(t) !== -1
        }

        function O1(e, t) {
            return (0, Ug.default)(e && e.sort(), t && t.sort())
        }

        function b1(e) {
            if (typeof e == "string") return e;
            if (e.pluginElement && e.objectId) return e.pluginElement + ka + e.objectId;
            if (e.objectId) return e.objectId;
            let {
                id: t = "",
                selector: r = "",
                useEventTarget: n = ""
            } = e;
            return t + ka + r + ka + n
        }
    });
    var kt = u(Ue => {
        "use strict";
        var Tr = Dt().default;
        Object.defineProperty(Ue, "__esModule", {
            value: !0
        });
        Ue.IX2VanillaUtils = Ue.IX2VanillaPlugins = Ue.IX2ElementsReducer = Ue.IX2Easings = Ue.IX2EasingUtils = Ue.IX2BrowserSupport = void 0;
        var A1 = Tr(ni());
        Ue.IX2BrowserSupport = A1;
        var S1 = Tr(Ma());
        Ue.IX2Easings = S1;
        var w1 = Tr(Fa());
        Ue.IX2EasingUtils = w1;
        var R1 = Tr(ng());
        Ue.IX2ElementsReducer = R1;
        var C1 = Tr(Wa());
        Ue.IX2VanillaPlugins = C1;
        var N1 = Tr(Qg());
        Ue.IX2VanillaUtils = N1
    });
    var tE = u(gi => {
        "use strict";
        Object.defineProperty(gi, "__esModule", {
            value: !0
        });
        gi.ixInstances = void 0;
        var Zg = We(),
            Jg = kt(),
            Or = ir(),
            {
                IX2_RAW_DATA_IMPORTED: P1,
                IX2_SESSION_STOPPED: q1,
                IX2_INSTANCE_ADDED: L1,
                IX2_INSTANCE_STARTED: x1,
                IX2_INSTANCE_REMOVED: M1,
                IX2_ANIMATION_FRAME_CHANGED: D1
            } = Zg.IX2EngineActionTypes,
            {
                optimizeFloat: hi,
                applyEasing: eE,
                createBezierEasing: F1
            } = Jg.IX2EasingUtils,
            {
                RENDER_GENERAL: G1
            } = Zg.IX2EngineConstants,
            {
                getItemConfigByKey: Ja,
                getRenderType: X1,
                getStyleProp: U1
            } = Jg.IX2VanillaUtils,
            V1 = (e, t) => {
                let {
                    position: r,
                    parameterId: n,
                    actionGroups: o,
                    destinationKeys: i,
                    smoothing: a,
                    restingValue: s,
                    actionTypeId: c,
                    customEasingFn: f,
                    skipMotion: p,
                    skipToValue: d
                } = e, {
                    parameters: g
                } = t.payload, h = Math.max(1 - a, .01), y = g[n];
                y == null && (h = 1, y = s);
                let I = Math.max(y, 0) || 0,
                    x = hi(I - r),
                    S = p ? d : hi(r + x * h),
                    w = S * 100;
                if (S === r && e.current) return e;
                let O, L, P, M;
                for (let z = 0, {
                        length: Y
                    } = o; z < Y; z++) {
                    let {
                        keyframe: re,
                        actionItems: U
                    } = o[z];
                    if (z === 0 && (O = U[0]), w >= re) {
                        O = U[0];
                        let N = o[z + 1],
                            v = N && w !== re;
                        L = v ? N.actionItems[0] : null, v && (P = re / 100, M = (N.keyframe - re) / 100)
                    }
                }
                let X = {};
                if (O && !L)
                    for (let z = 0, {
                            length: Y
                        } = i; z < Y; z++) {
                        let re = i[z];
                        X[re] = Ja(c, re, O.config)
                    } else if (O && L && P !== void 0 && M !== void 0) {
                        let z = (S - P) / M,
                            Y = O.config.easing,
                            re = eE(Y, z, f);
                        for (let U = 0, {
                                length: N
                            } = i; U < N; U++) {
                            let v = i[U],
                                q = Ja(c, v, O.config),
                                $ = (Ja(c, v, L.config) - q) * re + q;
                            X[v] = $
                        }
                    }
                return (0, Or.merge)(e, {
                    position: S,
                    current: X
                })
            },
            W1 = (e, t) => {
                let {
                    active: r,
                    origin: n,
                    start: o,
                    immediate: i,
                    renderType: a,
                    verbose: s,
                    actionItem: c,
                    destination: f,
                    destinationKeys: p,
                    pluginDuration: d,
                    instanceDelay: g,
                    customEasingFn: h,
                    skipMotion: y
                } = e, I = c.config.easing, {
                    duration: x,
                    delay: S
                } = c.config;
                d != null && (x = d), S = g ? ? S, a === G1 ? x = 0 : (i || y) && (x = S = 0);
                let {
                    now: w
                } = t.payload;
                if (r && n) {
                    let O = w - (o + S);
                    if (s) {
                        let z = w - o,
                            Y = x + S,
                            re = hi(Math.min(Math.max(0, z / Y), 1));
                        e = (0, Or.set)(e, "verboseTimeElapsed", Y * re)
                    }
                    if (O < 0) return e;
                    let L = hi(Math.min(Math.max(0, O / x), 1)),
                        P = eE(I, L, h),
                        M = {},
                        X = null;
                    return p.length && (X = p.reduce((z, Y) => {
                        let re = f[Y],
                            U = parseFloat(n[Y]) || 0,
                            v = (parseFloat(re) - U) * P + U;
                        return z[Y] = v, z
                    }, {})), M.current = X, M.position = L, L === 1 && (M.active = !1, M.complete = !0), (0, Or.merge)(e, M)
                }
                return e
            },
            B1 = (e = Object.freeze({}), t) => {
                switch (t.type) {
                    case P1:
                        return t.payload.ixInstances || Object.freeze({});
                    case q1:
                        return Object.freeze({});
                    case L1:
                        {
                            let {
                                instanceId: r,
                                elementId: n,
                                actionItem: o,
                                eventId: i,
                                eventTarget: a,
                                eventStateKey: s,
                                actionListId: c,
                                groupIndex: f,
                                isCarrier: p,
                                origin: d,
                                destination: g,
                                immediate: h,
                                verbose: y,
                                continuous: I,
                                parameterId: x,
                                actionGroups: S,
                                smoothing: w,
                                restingValue: O,
                                pluginInstance: L,
                                pluginDuration: P,
                                instanceDelay: M,
                                skipMotion: X,
                                skipToValue: z
                            } = t.payload,
                            {
                                actionTypeId: Y
                            } = o,
                            re = X1(Y),
                            U = U1(re, Y),
                            N = Object.keys(g).filter(q => g[q] != null && typeof g[q] != "string"),
                            {
                                easing: v
                            } = o.config;
                            return (0, Or.set)(e, r, {
                                id: r,
                                elementId: n,
                                active: !1,
                                position: 0,
                                start: 0,
                                origin: d,
                                destination: g,
                                destinationKeys: N,
                                immediate: h,
                                verbose: y,
                                current: null,
                                actionItem: o,
                                actionTypeId: Y,
                                eventId: i,
                                eventTarget: a,
                                eventStateKey: s,
                                actionListId: c,
                                groupIndex: f,
                                renderType: re,
                                isCarrier: p,
                                styleProp: U,
                                continuous: I,
                                parameterId: x,
                                actionGroups: S,
                                smoothing: w,
                                restingValue: O,
                                pluginInstance: L,
                                pluginDuration: P,
                                instanceDelay: M,
                                skipMotion: X,
                                skipToValue: z,
                                customEasingFn: Array.isArray(v) && v.length === 4 ? F1(v) : void 0
                            })
                        }
                    case x1:
                        {
                            let {
                                instanceId: r,
                                time: n
                            } = t.payload;
                            return (0, Or.mergeIn)(e, [r], {
                                active: !0,
                                complete: !1,
                                start: n
                            })
                        }
                    case M1:
                        {
                            let {
                                instanceId: r
                            } = t.payload;
                            if (!e[r]) return e;
                            let n = {},
                                o = Object.keys(e),
                                {
                                    length: i
                                } = o;
                            for (let a = 0; a < i; a++) {
                                let s = o[a];
                                s !== r && (n[s] = e[s])
                            }
                            return n
                        }
                    case D1:
                        {
                            let r = e,
                                n = Object.keys(e),
                                {
                                    length: o
                                } = n;
                            for (let i = 0; i < o; i++) {
                                let a = n[i],
                                    s = e[a],
                                    c = s.continuous ? V1 : W1;
                                r = (0, Or.set)(r, a, c(s, t))
                            }
                            return r
                        }
                    default:
                        return e
                }
            };
        gi.ixInstances = B1
    });
    var rE = u(Ei => {
        "use strict";
        Object.defineProperty(Ei, "__esModule", {
            value: !0
        });
        Ei.ixParameters = void 0;
        var H1 = We(),
            {
                IX2_RAW_DATA_IMPORTED: k1,
                IX2_SESSION_STOPPED: j1,
                IX2_PARAMETER_CHANGED: K1
            } = H1.IX2EngineActionTypes,
            z1 = (e = {}, t) => {
                switch (t.type) {
                    case k1:
                        return t.payload.ixParameters || {};
                    case j1:
                        return {};
                    case K1:
                        {
                            let {
                                key: r,
                                value: n
                            } = t.payload;
                            return e[r] = n,
                            e
                        }
                    default:
                        return e
                }
            };
        Ei.ixParameters = z1
    });
    var nE = u(_i => {
        "use strict";
        Object.defineProperty(_i, "__esModule", {
            value: !0
        });
        _i.default = void 0;
        var Y1 = Zo(),
            $1 = mf(),
            Q1 = Uf(),
            Z1 = Wf(),
            J1 = kt(),
            e2 = tE(),
            t2 = rE(),
            {
                ixElements: r2
            } = J1.IX2ElementsReducer,
            n2 = (0, Y1.combineReducers)({
                ixData: $1.ixData,
                ixRequest: Q1.ixRequest,
                ixSession: Z1.ixSession,
                ixElements: r2,
                ixInstances: e2.ixInstances,
                ixParameters: t2.ixParameters
            });
        _i.default = n2
    });
    var iE = u((Sj, rn) => {
        function i2(e, t) {
            if (e == null) return {};
            var r = {},
                n = Object.keys(e),
                o, i;
            for (i = 0; i < n.length; i++) o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
            return r
        }
        rn.exports = i2, rn.exports.__esModule = !0, rn.exports.default = rn.exports
    });
    var aE = u((wj, oE) => {
        var o2 = At(),
            a2 = Pe(),
            s2 = _t(),
            u2 = "[object String]";

        function c2(e) {
            return typeof e == "string" || !a2(e) && s2(e) && o2(e) == u2
        }
        oE.exports = c2
    });
    var uE = u((Rj, sE) => {
        var l2 = Ca(),
            f2 = l2("length");
        sE.exports = f2
    });
    var lE = u((Cj, cE) => {
        var d2 = "\\ud800-\\udfff",
            p2 = "\\u0300-\\u036f",
            v2 = "\\ufe20-\\ufe2f",
            h2 = "\\u20d0-\\u20ff",
            g2 = p2 + v2 + h2,
            E2 = "\\ufe0e\\ufe0f",
            _2 = "\\u200d",
            y2 = RegExp("[" + _2 + d2 + g2 + E2 + "]");

        function I2(e) {
            return y2.test(e)
        }
        cE.exports = I2
    });
    var yE = u((Nj, _E) => {
        var dE = "\\ud800-\\udfff",
            m2 = "\\u0300-\\u036f",
            T2 = "\\ufe20-\\ufe2f",
            O2 = "\\u20d0-\\u20ff",
            b2 = m2 + T2 + O2,
            A2 = "\\ufe0e\\ufe0f",
            S2 = "[" + dE + "]",
            es = "[" + b2 + "]",
            ts = "\\ud83c[\\udffb-\\udfff]",
            w2 = "(?:" + es + "|" + ts + ")",
            pE = "[^" + dE + "]",
            vE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            hE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            R2 = "\\u200d",
            gE = w2 + "?",
            EE = "[" + A2 + "]?",
            C2 = "(?:" + R2 + "(?:" + [pE, vE, hE].join("|") + ")" + EE + gE + ")*",
            N2 = EE + gE + C2,
            P2 = "(?:" + [pE + es + "?", es, vE, hE, S2].join("|") + ")",
            fE = RegExp(ts + "(?=" + ts + ")|" + P2 + N2, "g");

        function q2(e) {
            for (var t = fE.lastIndex = 0; fE.test(e);) ++t;
            return t
        }
        _E.exports = q2
    });
    var mE = u((Pj, IE) => {
        var L2 = uE(),
            x2 = lE(),
            M2 = yE();

        function D2(e) {
            return x2(e) ? M2(e) : L2(e)
        }
        IE.exports = D2
    });
    var OE = u((qj, TE) => {
        var F2 = zn(),
            G2 = Yn(),
            X2 = Ut(),
            U2 = aE(),
            V2 = mE(),
            W2 = "[object Map]",
            B2 = "[object Set]";

        function H2(e) {
            if (e == null) return 0;
            if (X2(e)) return U2(e) ? V2(e) : e.length;
            var t = G2(e);
            return t == W2 || t == B2 ? e.size : F2(e).length
        }
        TE.exports = H2
    });
    var AE = u((Lj, bE) => {
        var k2 = "Expected a function";

        function j2(e) {
            if (typeof e != "function") throw new TypeError(k2);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        bE.exports = j2
    });
    var rs = u((xj, SE) => {
        var K2 = St(),
            z2 = function() {
                try {
                    var e = K2(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        SE.exports = z2
    });
    var ns = u((Mj, RE) => {
        var wE = rs();

        function Y2(e, t, r) {
            t == "__proto__" && wE ? wE(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        RE.exports = Y2
    });
    var NE = u((Dj, CE) => {
        var $2 = ns(),
            Q2 = Gn(),
            Z2 = Object.prototype,
            J2 = Z2.hasOwnProperty;

        function eF(e, t, r) {
            var n = e[t];
            (!(J2.call(e, t) && Q2(n, r)) || r === void 0 && !(t in e)) && $2(e, t, r)
        }
        CE.exports = eF
    });
    var LE = u((Fj, qE) => {
        var tF = NE(),
            rF = Kr(),
            nF = Hn(),
            PE = lt(),
            iF = dr();

        function oF(e, t, r, n) {
            if (!PE(e)) return e;
            t = rF(t, e);
            for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i;) {
                var c = iF(t[o]),
                    f = r;
                if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
                if (o != a) {
                    var p = s[c];
                    f = n ? n(p, c, s) : void 0, f === void 0 && (f = PE(p) ? p : nF(t[o + 1]) ? [] : {})
                }
                tF(s, c, f), s = s[c]
            }
            return e
        }
        qE.exports = oF
    });
    var ME = u((Gj, xE) => {
        var aF = Zn(),
            sF = LE(),
            uF = Kr();

        function cF(e, t, r) {
            for (var n = -1, o = t.length, i = {}; ++n < o;) {
                var a = t[n],
                    s = aF(e, a);
                r(s, a) && sF(i, uF(a, e), s)
            }
            return i
        }
        xE.exports = cF
    });
    var FE = u((Xj, DE) => {
        var lF = Wn(),
            fF = Xo(),
            dF = va(),
            pF = pa(),
            vF = Object.getOwnPropertySymbols,
            hF = vF ? function(e) {
                for (var t = []; e;) lF(t, dF(e)), e = fF(e);
                return t
            } : pF;
        DE.exports = hF
    });
    var XE = u((Uj, GE) => {
        function gF(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        GE.exports = gF
    });
    var VE = u((Vj, UE) => {
        var EF = lt(),
            _F = Kn(),
            yF = XE(),
            IF = Object.prototype,
            mF = IF.hasOwnProperty;

        function TF(e) {
            if (!EF(e)) return yF(e);
            var t = _F(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !mF.call(e, n)) || r.push(n);
            return r
        }
        UE.exports = TF
    });
    var BE = u((Wj, WE) => {
        var OF = ga(),
            bF = VE(),
            AF = Ut();

        function SF(e) {
            return AF(e) ? OF(e, !0) : bF(e)
        }
        WE.exports = SF
    });
    var kE = u((Bj, HE) => {
        var wF = da(),
            RF = FE(),
            CF = BE();

        function NF(e) {
            return wF(e, CF, RF)
        }
        HE.exports = NF
    });
    var KE = u((Hj, jE) => {
        var PF = Ra(),
            qF = wt(),
            LF = ME(),
            xF = kE();

        function MF(e, t) {
            if (e == null) return {};
            var r = PF(xF(e), function(n) {
                return [n]
            });
            return t = qF(t), LF(e, r, function(n, o) {
                return t(n, o[0])
            })
        }
        jE.exports = MF
    });
    var YE = u((kj, zE) => {
        var DF = wt(),
            FF = AE(),
            GF = KE();

        function XF(e, t) {
            return GF(e, FF(DF(t)))
        }
        zE.exports = XF
    });
    var QE = u((jj, $E) => {
        var UF = zn(),
            VF = Yn(),
            WF = Vr(),
            BF = Pe(),
            HF = Ut(),
            kF = Bn(),
            jF = Kn(),
            KF = jn(),
            zF = "[object Map]",
            YF = "[object Set]",
            $F = Object.prototype,
            QF = $F.hasOwnProperty;

        function ZF(e) {
            if (e == null) return !0;
            if (HF(e) && (BF(e) || typeof e == "string" || typeof e.splice == "function" || kF(e) || KF(e) || WF(e))) return !e.length;
            var t = VF(e);
            if (t == zF || t == YF) return !e.size;
            if (jF(e)) return !UF(e).length;
            for (var r in e)
                if (QF.call(e, r)) return !1;
            return !0
        }
        $E.exports = ZF
    });
    var JE = u((Kj, ZE) => {
        var JF = ns(),
            eG = Ba(),
            tG = wt();

        function rG(e, t) {
            var r = {};
            return t = tG(t, 3), eG(e, function(n, o, i) {
                JF(r, o, t(n, o, i))
            }), r
        }
        ZE.exports = rG
    });
    var t_ = u((zj, e_) => {
        function nG(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        e_.exports = nG
    });
    var n_ = u((Yj, r_) => {
        var iG = ei();

        function oG(e) {
            return typeof e == "function" ? e : iG
        }
        r_.exports = oG
    });
    var o_ = u(($j, i_) => {
        var aG = t_(),
            sG = Ha(),
            uG = n_(),
            cG = Pe();

        function lG(e, t) {
            var r = cG(e) ? aG : sG;
            return r(e, uG(t))
        }
        i_.exports = lG
    });
    var s_ = u((Qj, a_) => {
        var fG = tt(),
            dG = function() {
                return fG.Date.now()
            };
        a_.exports = dG
    });
    var l_ = u((Zj, c_) => {
        var pG = lt(),
            is = s_(),
            u_ = ti(),
            vG = "Expected a function",
            hG = Math.max,
            gG = Math.min;

        function EG(e, t, r) {
            var n, o, i, a, s, c, f = 0,
                p = !1,
                d = !1,
                g = !0;
            if (typeof e != "function") throw new TypeError(vG);
            t = u_(t) || 0, pG(r) && (p = !!r.leading, d = "maxWait" in r, i = d ? hG(u_(r.maxWait) || 0, t) : i, g = "trailing" in r ? !!r.trailing : g);

            function h(M) {
                var X = n,
                    z = o;
                return n = o = void 0, f = M, a = e.apply(z, X), a
            }

            function y(M) {
                return f = M, s = setTimeout(S, t), p ? h(M) : a
            }

            function I(M) {
                var X = M - c,
                    z = M - f,
                    Y = t - X;
                return d ? gG(Y, i - z) : Y
            }

            function x(M) {
                var X = M - c,
                    z = M - f;
                return c === void 0 || X >= t || X < 0 || d && z >= i
            }

            function S() {
                var M = is();
                if (x(M)) return w(M);
                s = setTimeout(S, I(M))
            }

            function w(M) {
                return s = void 0, g && n ? h(M) : (n = o = void 0, a)
            }

            function O() {
                s !== void 0 && clearTimeout(s), f = 0, n = c = o = s = void 0
            }

            function L() {
                return s === void 0 ? a : w(is())
            }

            function P() {
                var M = is(),
                    X = x(M);
                if (n = arguments, o = this, c = M, X) {
                    if (s === void 0) return y(c);
                    if (d) return clearTimeout(s), s = setTimeout(S, t), h(c)
                }
                return s === void 0 && (s = setTimeout(S, t)), a
            }
            return P.cancel = O, P.flush = L, P
        }
        c_.exports = EG
    });
    var d_ = u((Jj, f_) => {
        var _G = l_(),
            yG = lt(),
            IG = "Expected a function";

        function mG(e, t, r) {
            var n = !0,
                o = !0;
            if (typeof e != "function") throw new TypeError(IG);
            return yG(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), _G(e, t, {
                leading: n,
                maxWait: t,
                trailing: o
            })
        }
        f_.exports = mG
    });
    var yi = u(ue => {
        "use strict";
        var TG = Ze().default;
        Object.defineProperty(ue, "__esModule", {
            value: !0
        });
        ue.viewportWidthChanged = ue.testFrameRendered = ue.stopRequested = ue.sessionStopped = ue.sessionStarted = ue.sessionInitialized = ue.rawDataImported = ue.previewRequested = ue.playbackRequested = ue.parameterChanged = ue.mediaQueriesDefined = ue.instanceStarted = ue.instanceRemoved = ue.instanceAdded = ue.eventStateChanged = ue.eventListenerAdded = ue.elementStateChanged = ue.clearRequested = ue.animationFrameChanged = ue.actionListPlaybackChanged = void 0;
        var p_ = TG(nr()),
            v_ = We(),
            OG = kt(),
            {
                IX2_RAW_DATA_IMPORTED: bG,
                IX2_SESSION_INITIALIZED: AG,
                IX2_SESSION_STARTED: SG,
                IX2_SESSION_STOPPED: wG,
                IX2_PREVIEW_REQUESTED: RG,
                IX2_PLAYBACK_REQUESTED: CG,
                IX2_STOP_REQUESTED: NG,
                IX2_CLEAR_REQUESTED: PG,
                IX2_EVENT_LISTENER_ADDED: qG,
                IX2_TEST_FRAME_RENDERED: LG,
                IX2_EVENT_STATE_CHANGED: xG,
                IX2_ANIMATION_FRAME_CHANGED: MG,
                IX2_PARAMETER_CHANGED: DG,
                IX2_INSTANCE_ADDED: FG,
                IX2_INSTANCE_STARTED: GG,
                IX2_INSTANCE_REMOVED: XG,
                IX2_ELEMENT_STATE_CHANGED: UG,
                IX2_ACTION_LIST_PLAYBACK_CHANGED: VG,
                IX2_VIEWPORT_WIDTH_CHANGED: WG,
                IX2_MEDIA_QUERIES_DEFINED: BG
            } = v_.IX2EngineActionTypes,
            {
                reifyState: HG
            } = OG.IX2VanillaUtils,
            kG = e => ({
                type: bG,
                payload: (0, p_.default)({}, HG(e))
            });
        ue.rawDataImported = kG;
        var jG = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: AG,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        });
        ue.sessionInitialized = jG;
        var KG = () => ({
            type: SG
        });
        ue.sessionStarted = KG;
        var zG = () => ({
            type: wG
        });
        ue.sessionStopped = zG;
        var YG = ({
            rawData: e,
            defer: t
        }) => ({
            type: RG,
            payload: {
                defer: t,
                rawData: e
            }
        });
        ue.previewRequested = YG;
        var $G = ({
            actionTypeId: e = v_.ActionTypeConsts.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: o,
            immediate: i,
            testManual: a,
            verbose: s,
            rawData: c
        }) => ({
            type: CG,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: o,
                immediate: i,
                verbose: s,
                rawData: c
            }
        });
        ue.playbackRequested = $G;
        var QG = e => ({
            type: NG,
            payload: {
                actionListId: e
            }
        });
        ue.stopRequested = QG;
        var ZG = () => ({
            type: PG
        });
        ue.clearRequested = ZG;
        var JG = (e, t) => ({
            type: qG,
            payload: {
                target: e,
                listenerParams: t
            }
        });
        ue.eventListenerAdded = JG;
        var eX = (e = 1) => ({
            type: LG,
            payload: {
                step: e
            }
        });
        ue.testFrameRendered = eX;
        var tX = (e, t) => ({
            type: xG,
            payload: {
                stateKey: e,
                newState: t
            }
        });
        ue.eventStateChanged = tX;
        var rX = (e, t) => ({
            type: MG,
            payload: {
                now: e,
                parameters: t
            }
        });
        ue.animationFrameChanged = rX;
        var nX = (e, t) => ({
            type: DG,
            payload: {
                key: e,
                value: t
            }
        });
        ue.parameterChanged = nX;
        var iX = e => ({
            type: FG,
            payload: (0, p_.default)({}, e)
        });
        ue.instanceAdded = iX;
        var oX = (e, t) => ({
            type: GG,
            payload: {
                instanceId: e,
                time: t
            }
        });
        ue.instanceStarted = oX;
        var aX = e => ({
            type: XG,
            payload: {
                instanceId: e
            }
        });
        ue.instanceRemoved = aX;
        var sX = (e, t, r, n) => ({
            type: UG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        });
        ue.elementStateChanged = sX;
        var uX = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: VG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        });
        ue.actionListPlaybackChanged = uX;
        var cX = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: WG,
            payload: {
                width: e,
                mediaQueries: t
            }
        });
        ue.viewportWidthChanged = cX;
        var lX = () => ({
            type: BG
        });
        ue.mediaQueriesDefined = lX
    });
    var E_ = u(xe => {
        "use strict";
        Object.defineProperty(xe, "__esModule", {
            value: !0
        });
        xe.elementContains = TX;
        xe.getChildElements = bX;
        xe.getClosestElement = void 0;
        xe.getProperty = EX;
        xe.getQuerySelector = yX;
        xe.getRefType = wX;
        xe.getSiblingElements = AX;
        xe.getStyle = gX;
        xe.getValidDocument = IX;
        xe.isSiblingNode = OX;
        xe.matchSelector = _X;
        xe.queryDocument = mX;
        xe.setStyle = hX;
        var fX = kt(),
            dX = We(),
            {
                ELEMENT_MATCHES: os
            } = fX.IX2BrowserSupport,
            {
                IX2_ID_DELIMITER: h_,
                HTML_ELEMENT: pX,
                PLAIN_OBJECT: vX,
                WF_PAGE: g_
            } = dX.IX2EngineConstants;

        function hX(e, t, r) {
            e.style[t] = r
        }

        function gX(e, t) {
            return e.style[t]
        }

        function EX(e, t) {
            return e[t]
        }

        function _X(e) {
            return t => t[os](e)
        }

        function yX({
            id: e,
            selector: t
        }) {
            if (e) {
                let r = e;
                if (e.indexOf(h_) !== -1) {
                    let n = e.split(h_),
                        o = n[0];
                    if (r = n[1], o !== document.documentElement.getAttribute(g_)) return null
                }
                return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
            }
            return t
        }

        function IX(e) {
            return e == null || e === document.documentElement.getAttribute(g_) ? document : null
        }

        function mX(e, t) {
            return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
        }

        function TX(e, t) {
            return e.contains(t)
        }

        function OX(e, t) {
            return e !== t && e.parentNode === t.parentNode
        }

        function bX(e) {
            let t = [];
            for (let r = 0, {
                    length: n
                } = e || []; r < n; r++) {
                let {
                    children: o
                } = e[r], {
                    length: i
                } = o;
                if (i)
                    for (let a = 0; a < i; a++) t.push(o[a])
            }
            return t
        }

        function AX(e = []) {
            let t = [],
                r = [];
            for (let n = 0, {
                    length: o
                } = e; n < o; n++) {
                let {
                    parentNode: i
                } = e[n];
                if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1) continue;
                r.push(i);
                let a = i.firstElementChild;
                for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
            }
            return t
        }
        var SX = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[os] && r[os](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        };
        xe.getClosestElement = SX;

        function wX(e) {
            return e != null && typeof e == "object" ? e instanceof Element ? pX : vX : null
        }
    });
    var as = u((rK, y_) => {
        var RX = lt(),
            __ = Object.create,
            CX = function() {
                function e() {}
                return function(t) {
                    if (!RX(t)) return {};
                    if (__) return __(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        y_.exports = CX
    });
    var Ii = u((nK, I_) => {
        function NX() {}
        I_.exports = NX
    });
    var Ti = u((iK, m_) => {
        var PX = as(),
            qX = Ii();

        function mi(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        mi.prototype = PX(qX.prototype);
        mi.prototype.constructor = mi;
        m_.exports = mi
    });
    var A_ = u((oK, b_) => {
        var T_ = Jt(),
            LX = Vr(),
            xX = Pe(),
            O_ = T_ ? T_.isConcatSpreadable : void 0;

        function MX(e) {
            return xX(e) || LX(e) || !!(O_ && e && e[O_])
        }
        b_.exports = MX
    });
    var R_ = u((aK, w_) => {
        var DX = Wn(),
            FX = A_();

        function S_(e, t, r, n, o) {
            var i = -1,
                a = e.length;
            for (r || (r = FX), o || (o = []); ++i < a;) {
                var s = e[i];
                t > 0 && r(s) ? t > 1 ? S_(s, t - 1, r, n, o) : DX(o, s) : n || (o[o.length] = s)
            }
            return o
        }
        w_.exports = S_
    });
    var N_ = u((sK, C_) => {
        var GX = R_();

        function XX(e) {
            var t = e == null ? 0 : e.length;
            return t ? GX(e, 1) : []
        }
        C_.exports = XX
    });
    var q_ = u((uK, P_) => {
        function UX(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        P_.exports = UX
    });
    var M_ = u((cK, x_) => {
        var VX = q_(),
            L_ = Math.max;

        function WX(e, t, r) {
            return t = L_(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, o = -1, i = L_(n.length - t, 0), a = Array(i); ++o < i;) a[o] = n[t + o];
                    o = -1;
                    for (var s = Array(t + 1); ++o < t;) s[o] = n[o];
                    return s[t] = r(a), VX(e, this, s)
                }
        }
        x_.exports = WX
    });
    var F_ = u((lK, D_) => {
        function BX(e) {
            return function() {
                return e
            }
        }
        D_.exports = BX
    });
    var U_ = u((fK, X_) => {
        var HX = F_(),
            G_ = rs(),
            kX = ei(),
            jX = G_ ? function(e, t) {
                return G_(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: HX(t),
                    writable: !0
                })
            } : kX;
        X_.exports = jX
    });
    var W_ = u((dK, V_) => {
        var KX = 800,
            zX = 16,
            YX = Date.now;

        function $X(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = YX(),
                    o = zX - (n - r);
                if (r = n, o > 0) {
                    if (++t >= KX) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        V_.exports = $X
    });
    var H_ = u((pK, B_) => {
        var QX = U_(),
            ZX = W_(),
            JX = ZX(QX);
        B_.exports = JX
    });
    var j_ = u((vK, k_) => {
        var eU = N_(),
            tU = M_(),
            rU = H_();

        function nU(e) {
            return rU(tU(e, void 0, eU), e + "")
        }
        k_.exports = nU
    });
    var Y_ = u((hK, z_) => {
        var K_ = Ea(),
            iU = K_ && new K_;
        z_.exports = iU
    });
    var Q_ = u((gK, $_) => {
        function oU() {}
        $_.exports = oU
    });
    var ss = u((EK, J_) => {
        var Z_ = Y_(),
            aU = Q_(),
            sU = Z_ ? function(e) {
                return Z_.get(e)
            } : aU;
        J_.exports = sU
    });
    var ty = u((_K, ey) => {
        var uU = {};
        ey.exports = uU
    });
    var us = u((yK, ny) => {
        var ry = ty(),
            cU = Object.prototype,
            lU = cU.hasOwnProperty;

        function fU(e) {
            for (var t = e.name + "", r = ry[t], n = lU.call(ry, t) ? r.length : 0; n--;) {
                var o = r[n],
                    i = o.func;
                if (i == null || i == e) return o.name
            }
            return t
        }
        ny.exports = fU
    });
    var bi = u((IK, iy) => {
        var dU = as(),
            pU = Ii(),
            vU = 4294967295;

        function Oi(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = vU, this.__views__ = []
        }
        Oi.prototype = dU(pU.prototype);
        Oi.prototype.constructor = Oi;
        iy.exports = Oi
    });
    var ay = u((mK, oy) => {
        function hU(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        oy.exports = hU
    });
    var uy = u((TK, sy) => {
        var gU = bi(),
            EU = Ti(),
            _U = ay();

        function yU(e) {
            if (e instanceof gU) return e.clone();
            var t = new EU(e.__wrapped__, e.__chain__);
            return t.__actions__ = _U(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        sy.exports = yU
    });
    var fy = u((OK, ly) => {
        var IU = bi(),
            cy = Ti(),
            mU = Ii(),
            TU = Pe(),
            OU = _t(),
            bU = uy(),
            AU = Object.prototype,
            SU = AU.hasOwnProperty;

        function Ai(e) {
            if (OU(e) && !TU(e) && !(e instanceof IU)) {
                if (e instanceof cy) return e;
                if (SU.call(e, "__wrapped__")) return bU(e)
            }
            return new cy(e)
        }
        Ai.prototype = mU.prototype;
        Ai.prototype.constructor = Ai;
        ly.exports = Ai
    });
    var py = u((bK, dy) => {
        var wU = bi(),
            RU = ss(),
            CU = us(),
            NU = fy();

        function PU(e) {
            var t = CU(e),
                r = NU[t];
            if (typeof r != "function" || !(t in wU.prototype)) return !1;
            if (e === r) return !0;
            var n = RU(r);
            return !!n && e === n[0]
        }
        dy.exports = PU
    });
    var Ey = u((AK, gy) => {
        var vy = Ti(),
            qU = j_(),
            LU = ss(),
            cs = us(),
            xU = Pe(),
            hy = py(),
            MU = "Expected a function",
            DU = 8,
            FU = 32,
            GU = 128,
            XU = 256;

        function UU(e) {
            return qU(function(t) {
                var r = t.length,
                    n = r,
                    o = vy.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var i = t[n];
                    if (typeof i != "function") throw new TypeError(MU);
                    if (o && !a && cs(i) == "wrapper") var a = new vy([], !0)
                }
                for (n = a ? n : r; ++n < r;) {
                    i = t[n];
                    var s = cs(i),
                        c = s == "wrapper" ? LU(i) : void 0;
                    c && hy(c[0]) && c[1] == (GU | DU | FU | XU) && !c[4].length && c[9] == 1 ? a = a[cs(c[0])].apply(a, c[3]) : a = i.length == 1 && hy(i) ? a[s]() : a.thru(i)
                }
                return function() {
                    var f = arguments,
                        p = f[0];
                    if (a && f.length == 1 && xU(p)) return a.plant(p).value();
                    for (var d = 0, g = r ? t[d].apply(this, f) : p; ++d < r;) g = t[d].call(this, g);
                    return g
                }
            })
        }
        gy.exports = UU
    });
    var yy = u((SK, _y) => {
        var VU = Ey(),
            WU = VU();
        _y.exports = WU
    });
    var my = u((wK, Iy) => {
        function BU(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        Iy.exports = BU
    });
    var Oy = u((RK, Ty) => {
        var HU = my(),
            ls = ti();

        function kU(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ls(r), r = r === r ? r : 0), t !== void 0 && (t = ls(t), t = t === t ? t : 0), HU(ls(e), t, r)
        }
        Ty.exports = kU
    });
    var Vy = u(Ni => {
        "use strict";
        var Ci = Ze().default;
        Object.defineProperty(Ni, "__esModule", {
            value: !0
        });
        Ni.default = void 0;
        var Ke = Ci(nr()),
            jU = Ci(yy()),
            KU = Ci(Jn()),
            zU = Ci(Oy()),
            jt = We(),
            fs = hs(),
            Si = yi(),
            YU = kt(),
            {
                MOUSE_CLICK: $U,
                MOUSE_SECOND_CLICK: QU,
                MOUSE_DOWN: ZU,
                MOUSE_UP: JU,
                MOUSE_OVER: eV,
                MOUSE_OUT: tV,
                DROPDOWN_CLOSE: rV,
                DROPDOWN_OPEN: nV,
                SLIDER_ACTIVE: iV,
                SLIDER_INACTIVE: oV,
                TAB_ACTIVE: aV,
                TAB_INACTIVE: sV,
                NAVBAR_CLOSE: uV,
                NAVBAR_OPEN: cV,
                MOUSE_MOVE: lV,
                PAGE_SCROLL_DOWN: qy,
                SCROLL_INTO_VIEW: Ly,
                SCROLL_OUT_OF_VIEW: fV,
                PAGE_SCROLL_UP: dV,
                SCROLLING_IN_VIEW: pV,
                PAGE_FINISH: xy,
                ECOMMERCE_CART_CLOSE: vV,
                ECOMMERCE_CART_OPEN: hV,
                PAGE_START: My,
                PAGE_SCROLL: gV
            } = jt.EventTypeConsts,
            ds = "COMPONENT_ACTIVE",
            Dy = "COMPONENT_INACTIVE",
            {
                COLON_DELIMITER: by
            } = jt.IX2EngineConstants,
            {
                getNamespacedParameterId: Ay
            } = YU.IX2VanillaUtils,
            Fy = e => t => typeof t == "object" && e(t) ? !0 : t,
            on = Fy(({
                element: e,
                nativeEvent: t
            }) => e === t.target),
            EV = Fy(({
                element: e,
                nativeEvent: t
            }) => e.contains(t.target)),
            vt = (0, jU.default)([on, EV]),
            Gy = (e, t) => {
                if (t) {
                    let {
                        ixData: r
                    } = e.getState(), {
                        events: n
                    } = r, o = n[t];
                    if (o && !yV[o.eventTypeId]) return o
                }
                return null
            },
            _V = ({
                store: e,
                event: t
            }) => {
                let {
                    action: r
                } = t, {
                    autoStopEventId: n
                } = r.config;
                return !!Gy(e, n)
            },
            He = ({
                store: e,
                event: t,
                element: r,
                eventStateKey: n
            }, o) => {
                let {
                    action: i,
                    id: a
                } = t, {
                    actionListId: s,
                    autoStopEventId: c
                } = i.config, f = Gy(e, c);
                return f && (0, fs.stopActionGroup)({
                    store: e,
                    eventId: c,
                    eventTarget: r,
                    eventStateKey: c + by + n.split(by)[1],
                    actionListId: (0, KU.default)(f, "action.config.actionListId")
                }), (0, fs.stopActionGroup)({
                    store: e,
                    eventId: a,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: s
                }), (0, fs.startActionGroup)({
                    store: e,
                    eventId: a,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: s
                }), o
            },
            rt = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
            an = {
                handler: rt(vt, He)
            },
            Xy = (0, Ke.default)({}, an, {
                types: [ds, Dy].join(" ")
            }),
            ps = [{
                target: window,
                types: "resize orientationchange",
                throttle: !0
            }, {
                target: document,
                types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                throttle: !0
            }],
            Sy = "mouseover mouseout",
            vs = {
                types: ps
            },
            yV = {
                PAGE_START: My,
                PAGE_FINISH: xy
            },
            nn = (() => {
                let e = window.pageXOffset !== void 0,
                    r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
                return () => ({
                    scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                    scrollTop: e ? window.pageYOffset : r.scrollTop,
                    stiffScrollTop: (0, zU.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                    scrollWidth: r.scrollWidth,
                    scrollHeight: r.scrollHeight,
                    clientWidth: r.clientWidth,
                    clientHeight: r.clientHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                })
            })(),
            IV = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
            mV = ({
                element: e,
                nativeEvent: t
            }) => {
                let {
                    type: r,
                    target: n,
                    relatedTarget: o
                } = t, i = e.contains(n);
                if (r === "mouseover" && i) return !0;
                let a = e.contains(o);
                return !!(r === "mouseout" && i && a)
            },
            TV = e => {
                let {
                    element: t,
                    event: {
                        config: r
                    }
                } = e, {
                    clientWidth: n,
                    clientHeight: o
                } = nn(), i = r.scrollOffsetValue, c = r.scrollOffsetUnit === "PX" ? i : o * (i || 0) / 100;
                return IV(t.getBoundingClientRect(), {
                    left: 0,
                    top: c,
                    right: n,
                    bottom: o - c
                })
            },
            Uy = e => (t, r) => {
                let {
                    type: n
                } = t.nativeEvent, o = [ds, Dy].indexOf(n) !== -1 ? n === ds : r.isActive, i = (0, Ke.default)({}, r, {
                    isActive: o
                });
                return (!r || i.isActive !== r.isActive) && e(t, i) || i
            },
            wy = e => (t, r) => {
                let n = {
                    elementHovered: mV(t)
                };
                return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
            },
            OV = e => (t, r) => {
                let n = (0, Ke.default)({}, r, {
                    elementVisible: TV(t)
                });
                return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
            },
            Ry = e => (t, r = {}) => {
                let {
                    stiffScrollTop: n,
                    scrollHeight: o,
                    innerHeight: i
                } = nn(), {
                    event: {
                        config: a,
                        eventTypeId: s
                    }
                } = t, {
                    scrollOffsetValue: c,
                    scrollOffsetUnit: f
                } = a, p = f === "PX", d = o - i, g = Number((n / d).toFixed(2));
                if (r && r.percentTop === g) return r;
                let h = (p ? c : i * (c || 0) / 100) / d,
                    y, I, x = 0;
                r && (y = g > r.percentTop, I = r.scrollingDown !== y, x = I ? g : r.anchorTop);
                let S = s === qy ? g >= x + h : g <= x - h,
                    w = (0, Ke.default)({}, r, {
                        percentTop: g,
                        inBounds: S,
                        anchorTop: x,
                        scrollingDown: y
                    });
                return r && S && (I || w.inBounds !== r.inBounds) && e(t, w) || w
            },
            bV = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
            AV = e => (t, r) => {
                let n = {
                    finished: document.readyState === "complete"
                };
                return n.finished && !(r && r.finshed) && e(t), n
            },
            SV = e => (t, r) => {
                let n = {
                    started: !0
                };
                return r || e(t), n
            },
            Cy = e => (t, r = {
                clickCount: 0
            }) => {
                let n = {
                    clickCount: r.clickCount % 2 + 1
                };
                return n.clickCount !== r.clickCount && e(t, n) || n
            },
            wi = (e = !0) => (0, Ke.default)({}, Xy, {
                handler: rt(e ? vt : on, Uy((t, r) => r.isActive ? an.handler(t, r) : r))
            }),
            Ri = (e = !0) => (0, Ke.default)({}, Xy, {
                handler: rt(e ? vt : on, Uy((t, r) => r.isActive ? r : an.handler(t, r)))
            }),
            Ny = (0, Ke.default)({}, vs, {
                handler: OV((e, t) => {
                    let {
                        elementVisible: r
                    } = t, {
                        event: n,
                        store: o
                    } = e, {
                        ixData: i
                    } = o.getState(), {
                        events: a
                    } = i;
                    return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Ly === r ? (He(e), (0, Ke.default)({}, t, {
                        triggered: !0
                    })) : t
                })
            }),
            Py = .05,
            wV = {
                [iV]: wi(),
                [oV]: Ri(),
                [nV]: wi(),
                [rV]: Ri(),
                [cV]: wi(!1),
                [uV]: Ri(!1),
                [aV]: wi(),
                [sV]: Ri(),
                [hV]: {
                    types: "ecommerce-cart-open",
                    handler: rt(vt, He)
                },
                [vV]: {
                    types: "ecommerce-cart-close",
                    handler: rt(vt, He)
                },
                [$U]: {
                    types: "click",
                    handler: rt(vt, Cy((e, {
                        clickCount: t
                    }) => {
                        _V(e) ? t === 1 && He(e) : He(e)
                    }))
                },
                [QU]: {
                    types: "click",
                    handler: rt(vt, Cy((e, {
                        clickCount: t
                    }) => {
                        t === 2 && He(e)
                    }))
                },
                [ZU]: (0, Ke.default)({}, an, {
                    types: "mousedown"
                }),
                [JU]: (0, Ke.default)({}, an, {
                    types: "mouseup"
                }),
                [eV]: {
                    types: Sy,
                    handler: rt(vt, wy((e, t) => {
                        t.elementHovered && He(e)
                    }))
                },
                [tV]: {
                    types: Sy,
                    handler: rt(vt, wy((e, t) => {
                        t.elementHovered || He(e)
                    }))
                },
                [lV]: {
                    types: "mousemove mouseout scroll",
                    handler: ({
                        store: e,
                        element: t,
                        eventConfig: r,
                        nativeEvent: n,
                        eventStateKey: o
                    }, i = {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    }) => {
                        let {
                            basedOn: a,
                            selectedAxis: s,
                            continuousParameterGroupId: c,
                            reverse: f,
                            restingState: p = 0
                        } = r, {
                            clientX: d = i.clientX,
                            clientY: g = i.clientY,
                            pageX: h = i.pageX,
                            pageY: y = i.pageY
                        } = n, I = s === "X_AXIS", x = n.type === "mouseout", S = p / 100, w = c, O = !1;
                        switch (a) {
                            case jt.EventBasedOn.VIEWPORT:
                                {
                                    S = I ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
                                    break
                                }
                            case jt.EventBasedOn.PAGE:
                                {
                                    let {
                                        scrollLeft: L,
                                        scrollTop: P,
                                        scrollWidth: M,
                                        scrollHeight: X
                                    } = nn();S = I ? Math.min(L + h, M) / M : Math.min(P + y, X) / X;
                                    break
                                }
                            case jt.EventBasedOn.ELEMENT:
                            default:
                                {
                                    w = Ay(o, c);
                                    let L = n.type.indexOf("mouse") === 0;
                                    if (L && vt({
                                            element: t,
                                            nativeEvent: n
                                        }) !== !0) break;
                                    let P = t.getBoundingClientRect(),
                                        {
                                            left: M,
                                            top: X,
                                            width: z,
                                            height: Y
                                        } = P;
                                    if (!L && !bV({
                                            left: d,
                                            top: g
                                        }, P)) break;O = !0,
                                    S = I ? (d - M) / z : (g - X) / Y;
                                    break
                                }
                        }
                        return x && (S > 1 - Py || S < Py) && (S = Math.round(S)), (a !== jt.EventBasedOn.ELEMENT || O || O !== i.elementHovered) && (S = f ? 1 - S : S, e.dispatch((0, Si.parameterChanged)(w, S))), {
                            elementHovered: O,
                            clientX: d,
                            clientY: g,
                            pageX: h,
                            pageY: y
                        }
                    }
                },
                [gV]: {
                    types: ps,
                    handler: ({
                        store: e,
                        eventConfig: t
                    }) => {
                        let {
                            continuousParameterGroupId: r,
                            reverse: n
                        } = t, {
                            scrollTop: o,
                            scrollHeight: i,
                            clientHeight: a
                        } = nn(), s = o / (i - a);
                        s = n ? 1 - s : s, e.dispatch((0, Si.parameterChanged)(r, s))
                    }
                },
                [pV]: {
                    types: ps,
                    handler: ({
                        element: e,
                        store: t,
                        eventConfig: r,
                        eventStateKey: n
                    }, o = {
                        scrollPercent: 0
                    }) => {
                        let {
                            scrollLeft: i,
                            scrollTop: a,
                            scrollWidth: s,
                            scrollHeight: c,
                            clientHeight: f
                        } = nn(), {
                            basedOn: p,
                            selectedAxis: d,
                            continuousParameterGroupId: g,
                            startsEntering: h,
                            startsExiting: y,
                            addEndOffset: I,
                            addStartOffset: x,
                            addOffsetValue: S = 0,
                            endOffsetValue: w = 0
                        } = r, O = d === "X_AXIS";
                        if (p === jt.EventBasedOn.VIEWPORT) {
                            let L = O ? i / s : a / c;
                            return L !== o.scrollPercent && t.dispatch((0, Si.parameterChanged)(g, L)), {
                                scrollPercent: L
                            }
                        } else {
                            let L = Ay(n, g),
                                P = e.getBoundingClientRect(),
                                M = (x ? S : 0) / 100,
                                X = (I ? w : 0) / 100;
                            M = h ? M : 1 - M, X = y ? X : 1 - X;
                            let z = P.top + Math.min(P.height * M, f),
                                re = P.top + P.height * X - z,
                                U = Math.min(f + re, c),
                                v = Math.min(Math.max(0, f - z), U) / U;
                            return v !== o.scrollPercent && t.dispatch((0, Si.parameterChanged)(L, v)), {
                                scrollPercent: v
                            }
                        }
                    }
                },
                [Ly]: Ny,
                [fV]: Ny,
                [qy]: (0, Ke.default)({}, vs, {
                    handler: Ry((e, t) => {
                        t.scrollingDown && He(e)
                    })
                }),
                [dV]: (0, Ke.default)({}, vs, {
                    handler: Ry((e, t) => {
                        t.scrollingDown || He(e)
                    })
                }),
                [xy]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: rt(on, AV(He))
                },
                [My]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: rt(on, SV(He))
                }
            };
        Ni.default = wV
    });
    var hs = u(Pt => {
        "use strict";
        var it = Ze().default,
            RV = Dt().default;
        Object.defineProperty(Pt, "__esModule", {
            value: !0
        });
        Pt.observeRequests = iW;
        Pt.startActionGroup = ms;
        Pt.startEngine = Mi;
        Pt.stopActionGroup = Is;
        Pt.stopAllActionGroups = $y;
        Pt.stopEngine = Di;
        var CV = it(nr()),
            NV = it(iE()),
            PV = it(La()),
            Nt = it(Jn()),
            qV = it(OE()),
            LV = it(YE()),
            xV = it(QE()),
            MV = it(JE()),
            sn = it(o_()),
            DV = it(d_()),
            nt = We(),
            Hy = kt(),
            Oe = yi(),
            we = RV(E_()),
            FV = it(Vy()),
            GV = ["store", "computedStyle"],
            XV = Object.keys(nt.QuickEffectIds),
            gs = e => XV.includes(e),
            {
                COLON_DELIMITER: Es,
                BOUNDARY_SELECTOR: Pi,
                HTML_ELEMENT: ky,
                RENDER_GENERAL: UV,
                W_MOD_IX: Wy
            } = nt.IX2EngineConstants,
            {
                getAffectedElements: qi,
                getElementId: VV,
                getDestinationValues: _s,
                observeStore: Kt,
                getInstanceId: WV,
                renderHTMLElement: BV,
                clearAllStyles: jy,
                getMaxDurationItemIndex: HV,
                getComputedStyle: kV,
                getInstanceOrigin: jV,
                reduceListToGroup: KV,
                shouldNamespaceEventParameter: zV,
                getNamespacedParameterId: YV,
                shouldAllowMediaQuery: Li,
                cleanupHTMLElement: $V,
                clearObjectCache: QV,
                stringifyTarget: ZV,
                mediaQueriesEqual: JV,
                shallowEqual: eW
            } = Hy.IX2VanillaUtils,
            {
                isPluginType: xi,
                createPluginInstance: ys,
                getPluginDuration: tW
            } = Hy.IX2VanillaPlugins,
            By = navigator.userAgent,
            rW = By.match(/iPad/i) || By.match(/iPhone/),
            nW = 12;

        function iW(e) {
            Kt({
                store: e,
                select: ({
                    ixRequest: t
                }) => t.preview,
                onChange: sW
            }), Kt({
                store: e,
                select: ({
                    ixRequest: t
                }) => t.playback,
                onChange: uW
            }), Kt({
                store: e,
                select: ({
                    ixRequest: t
                }) => t.stop,
                onChange: cW
            }), Kt({
                store: e,
                select: ({
                    ixRequest: t
                }) => t.clear,
                onChange: lW
            })
        }

        function oW(e) {
            Kt({
                store: e,
                select: ({
                    ixSession: t
                }) => t.mediaQueryKey,
                onChange: () => {
                    Di(e), jy({
                        store: e,
                        elementApi: we
                    }), Mi({
                        store: e,
                        allowEvents: !0
                    }), Ky()
                }
            })
        }

        function aW(e, t) {
            let r = Kt({
                store: e,
                select: ({
                    ixSession: n
                }) => n.tick,
                onChange: n => {
                    t(n), r()
                }
            })
        }

        function sW({
            rawData: e,
            defer: t
        }, r) {
            let n = () => {
                Mi({
                    store: r,
                    rawData: e,
                    allowEvents: !0
                }), Ky()
            };
            t ? setTimeout(n, 0) : n()
        }

        function Ky() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
        }

        function uW(e, t) {
            let {
                actionTypeId: r,
                actionListId: n,
                actionItemId: o,
                eventId: i,
                allowEvents: a,
                immediate: s,
                testManual: c,
                verbose: f = !0
            } = e, {
                rawData: p
            } = e;
            if (n && o && p && s) {
                let d = p.actionLists[n];
                d && (p = KV({
                    actionList: d,
                    actionItemId: o,
                    rawData: p
                }))
            }
            if (Mi({
                    store: t,
                    rawData: p,
                    allowEvents: a,
                    testManual: c
                }), n && r === nt.ActionTypeConsts.GENERAL_START_ACTION || gs(r)) {
                Is({
                    store: t,
                    actionListId: n
                }), Yy({
                    store: t,
                    actionListId: n,
                    eventId: i
                });
                let d = ms({
                    store: t,
                    eventId: i,
                    actionListId: n,
                    immediate: s,
                    verbose: f
                });
                f && d && t.dispatch((0, Oe.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !s
                }))
            }
        }

        function cW({
            actionListId: e
        }, t) {
            e ? Is({
                store: t,
                actionListId: e
            }) : $y({
                store: t
            }), Di(t)
        }

        function lW(e, t) {
            Di(t), jy({
                store: t,
                elementApi: we
            })
        }

        function Mi({
            store: e,
            rawData: t,
            allowEvents: r,
            testManual: n
        }) {
            let {
                ixSession: o
            } = e.getState();
            t && e.dispatch((0, Oe.rawDataImported)(t)), o.active || (e.dispatch((0, Oe.sessionInitialized)({
                hasBoundaryNodes: !!document.querySelector(Pi),
                reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
            })), r && (gW(e), fW(), e.getState().ixSession.hasDefinedMediaQueries && oW(e)), e.dispatch((0, Oe.sessionStarted)()), dW(e, n))
        }

        function fW() {
            let {
                documentElement: e
            } = document;
            e.className.indexOf(Wy) === -1 && (e.className += ` ${Wy}`)
        }

        function dW(e, t) {
            let r = n => {
                let {
                    ixSession: o,
                    ixParameters: i
                } = e.getState();
                o.active && (e.dispatch((0, Oe.animationFrameChanged)(n, i)), t ? aW(e, r) : requestAnimationFrame(r))
            };
            r(window.performance.now())
        }

        function Di(e) {
            let {
                ixSession: t
            } = e.getState();
            if (t.active) {
                let {
                    eventListeners: r
                } = t;
                r.forEach(pW), QV(), e.dispatch((0, Oe.sessionStopped)())
            }
        }

        function pW({
            target: e,
            listenerParams: t
        }) {
            e.removeEventListener.apply(e, t)
        }

        function vW({
            store: e,
            eventStateKey: t,
            eventTarget: r,
            eventId: n,
            eventConfig: o,
            actionListId: i,
            parameterGroup: a,
            smoothing: s,
            restingValue: c
        }) {
            let {
                ixData: f,
                ixSession: p
            } = e.getState(), {
                events: d
            } = f, g = d[n], {
                eventTypeId: h
            } = g, y = {}, I = {}, x = [], {
                continuousActionGroups: S
            } = a, {
                id: w
            } = a;
            zV(h, o) && (w = YV(t, w));
            let O = p.hasBoundaryNodes && r ? we.getClosestElement(r, Pi) : null;
            S.forEach(L => {
                let {
                    keyframe: P,
                    actionItems: M
                } = L;
                M.forEach(X => {
                    let {
                        actionTypeId: z
                    } = X, {
                        target: Y
                    } = X.config;
                    if (!Y) return;
                    let re = Y.boundaryMode ? O : null,
                        U = ZV(Y) + Es + z;
                    if (I[U] = hW(I[U], P, X), !y[U]) {
                        y[U] = !0;
                        let {
                            config: N
                        } = X;
                        qi({
                            config: N,
                            event: g,
                            eventTarget: r,
                            elementRoot: re,
                            elementApi: we
                        }).forEach(v => {
                            x.push({
                                element: v,
                                key: U
                            })
                        })
                    }
                })
            }), x.forEach(({
                element: L,
                key: P
            }) => {
                let M = I[P],
                    X = (0, Nt.default)(M, "[0].actionItems[0]", {}),
                    {
                        actionTypeId: z
                    } = X,
                    Y = xi(z) ? ys(z)(L, X) : null,
                    re = _s({
                        element: L,
                        actionItem: X,
                        elementApi: we
                    }, Y);
                Ts({
                    store: e,
                    element: L,
                    eventId: n,
                    actionListId: i,
                    actionItem: X,
                    destination: re,
                    continuous: !0,
                    parameterId: w,
                    actionGroups: M,
                    smoothing: s,
                    restingValue: c,
                    pluginInstance: Y
                })
            })
        }

        function hW(e = [], t, r) {
            let n = [...e],
                o;
            return n.some((i, a) => i.keyframe === t ? (o = a, !0) : !1), o == null && (o = n.length, n.push({
                keyframe: t,
                actionItems: []
            })), n[o].actionItems.push(r), n
        }

        function gW(e) {
            let {
                ixData: t
            } = e.getState(), {
                eventTypeMap: r
            } = t;
            zy(e), (0, sn.default)(r, (o, i) => {
                let a = FV.default[i];
                if (!a) {
                    console.warn(`IX2 event type not configured: ${i}`);
                    return
                }
                TW({
                    logic: a,
                    store: e,
                    events: o
                })
            });
            let {
                ixSession: n
            } = e.getState();
            n.eventListeners.length && _W(e)
        }
        var EW = ["resize", "orientationchange"];

        function _W(e) {
            let t = () => {
                zy(e)
            };
            EW.forEach(r => {
                window.addEventListener(r, t), e.dispatch((0, Oe.eventListenerAdded)(window, [r, t]))
            }), t()
        }

        function zy(e) {
            let {
                ixSession: t,
                ixData: r
            } = e.getState(), n = window.innerWidth;
            if (n !== t.viewportWidth) {
                let {
                    mediaQueries: o
                } = r;
                e.dispatch((0, Oe.viewportWidthChanged)({
                    width: n,
                    mediaQueries: o
                }))
            }
        }
        var yW = (e, t) => (0, LV.default)((0, MV.default)(e, t), xV.default),
            IW = (e, t) => {
                (0, sn.default)(e, (r, n) => {
                    r.forEach((o, i) => {
                        let a = n + Es + i;
                        t(o, n, a)
                    })
                })
            },
            mW = e => {
                let t = {
                    target: e.target,
                    targets: e.targets
                };
                return qi({
                    config: t,
                    elementApi: we
                })
            };

        function TW({
            logic: e,
            store: t,
            events: r
        }) {
            OW(r);
            let {
                types: n,
                handler: o
            } = e, {
                ixData: i
            } = t.getState(), {
                actionLists: a
            } = i, s = yW(r, mW);
            if (!(0, qV.default)(s)) return;
            (0, sn.default)(s, (d, g) => {
                let h = r[g],
                    {
                        action: y,
                        id: I,
                        mediaQueries: x = i.mediaQueryKeys
                    } = h,
                    {
                        actionListId: S
                    } = y.config;
                JV(x, i.mediaQueryKeys) || t.dispatch((0, Oe.mediaQueriesDefined)()), y.actionTypeId === nt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(h.config) ? h.config : [h.config]).forEach(O => {
                    let {
                        continuousParameterGroupId: L
                    } = O, P = (0, Nt.default)(a, `${S}.continuousParameterGroups`, []), M = (0, PV.default)(P, ({
                        id: Y
                    }) => Y === L), X = (O.smoothing || 0) / 100, z = (O.restingState || 0) / 100;
                    M && d.forEach((Y, re) => {
                        let U = I + Es + re;
                        vW({
                            store: t,
                            eventStateKey: U,
                            eventTarget: Y,
                            eventId: I,
                            eventConfig: O,
                            actionListId: S,
                            parameterGroup: M,
                            smoothing: X,
                            restingValue: z
                        })
                    })
                }), (y.actionTypeId === nt.ActionTypeConsts.GENERAL_START_ACTION || gs(y.actionTypeId)) && Yy({
                    store: t,
                    actionListId: S,
                    eventId: I
                })
            });
            let c = d => {
                    let {
                        ixSession: g
                    } = t.getState();
                    IW(s, (h, y, I) => {
                        let x = r[y],
                            S = g.eventState[I],
                            {
                                action: w,
                                mediaQueries: O = i.mediaQueryKeys
                            } = x;
                        if (!Li(O, g.mediaQueryKey)) return;
                        let L = (P = {}) => {
                            let M = o({
                                store: t,
                                element: h,
                                event: x,
                                eventConfig: P,
                                nativeEvent: d,
                                eventStateKey: I
                            }, S);
                            eW(M, S) || t.dispatch((0, Oe.eventStateChanged)(I, M))
                        };
                        w.actionTypeId === nt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(x.config) ? x.config : [x.config]).forEach(L) : L()
                    })
                },
                f = (0, DV.default)(c, nW),
                p = ({
                    target: d = document,
                    types: g,
                    throttle: h
                }) => {
                    g.split(" ").filter(Boolean).forEach(y => {
                        let I = h ? f : c;
                        d.addEventListener(y, I), t.dispatch((0, Oe.eventListenerAdded)(d, [y, I]))
                    })
                };
            Array.isArray(n) ? n.forEach(p) : typeof n == "string" && p(e)
        }

        function OW(e) {
            if (!rW) return;
            let t = {},
                r = "";
            for (let n in e) {
                let {
                    eventTypeId: o,
                    target: i
                } = e[n], a = we.getQuerySelector(i);
                t[a] || (o === nt.EventTypeConsts.MOUSE_CLICK || o === nt.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
            }
            if (r) {
                let n = document.createElement("style");
                n.textContent = r, document.body.appendChild(n)
            }
        }

        function Yy({
            store: e,
            actionListId: t,
            eventId: r
        }) {
            let {
                ixData: n,
                ixSession: o
            } = e.getState(), {
                actionLists: i,
                events: a
            } = n, s = a[r], c = i[t];
            if (c && c.useFirstGroupAsInitialState) {
                let f = (0, Nt.default)(c, "actionItemGroups[0].actionItems", []),
                    p = (0, Nt.default)(s, "mediaQueries", n.mediaQueryKeys);
                if (!Li(p, o.mediaQueryKey)) return;
                f.forEach(d => {
                    var g;
                    let {
                        config: h,
                        actionTypeId: y
                    } = d, I = (h == null || (g = h.target) === null || g === void 0 ? void 0 : g.useEventTarget) === !0 ? {
                        target: s.target,
                        targets: s.targets
                    } : h, x = qi({
                        config: I,
                        event: s,
                        elementApi: we
                    }), S = xi(y);
                    x.forEach(w => {
                        let O = S ? ys(y)(w, d) : null;
                        Ts({
                            destination: _s({
                                element: w,
                                actionItem: d,
                                elementApi: we
                            }, O),
                            immediate: !0,
                            store: e,
                            element: w,
                            eventId: r,
                            actionItem: d,
                            actionListId: t,
                            pluginInstance: O
                        })
                    })
                })
            }
        }

        function $y({
            store: e
        }) {
            let {
                ixInstances: t
            } = e.getState();
            (0, sn.default)(t, r => {
                if (!r.continuous) {
                    let {
                        actionListId: n,
                        verbose: o
                    } = r;
                    Os(r, e), o && e.dispatch((0, Oe.actionListPlaybackChanged)({
                        actionListId: n,
                        isPlaying: !1
                    }))
                }
            })
        }

        function Is({
            store: e,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: o
        }) {
            let {
                ixInstances: i,
                ixSession: a
            } = e.getState(), s = a.hasBoundaryNodes && r ? we.getClosestElement(r, Pi) : null;
            (0, sn.default)(i, c => {
                let f = (0, Nt.default)(c, "actionItem.config.target.boundaryMode"),
                    p = n ? c.eventStateKey === n : !0;
                if (c.actionListId === o && c.eventId === t && p) {
                    if (s && f && !we.elementContains(s, c.element)) return;
                    Os(c, e), c.verbose && e.dispatch((0, Oe.actionListPlaybackChanged)({
                        actionListId: o,
                        isPlaying: !1
                    }))
                }
            })
        }

        function ms({
            store: e,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: o,
            groupIndex: i = 0,
            immediate: a,
            verbose: s
        }) {
            var c;
            let {
                ixData: f,
                ixSession: p
            } = e.getState(), {
                events: d
            } = f, g = d[t] || {}, {
                mediaQueries: h = f.mediaQueryKeys
            } = g, y = (0, Nt.default)(f, `actionLists.${o}`, {}), {
                actionItemGroups: I,
                useFirstGroupAsInitialState: x
            } = y;
            if (!I || !I.length) return !1;
            i >= I.length && (0, Nt.default)(g, "config.loop") && (i = 0), i === 0 && x && i++;
            let w = (i === 0 || i === 1 && x) && gs((c = g.action) === null || c === void 0 ? void 0 : c.actionTypeId) ? g.config.delay : void 0,
                O = (0, Nt.default)(I, [i, "actionItems"], []);
            if (!O.length || !Li(h, p.mediaQueryKey)) return !1;
            let L = p.hasBoundaryNodes && r ? we.getClosestElement(r, Pi) : null,
                P = HV(O),
                M = !1;
            return O.forEach((X, z) => {
                let {
                    config: Y,
                    actionTypeId: re
                } = X, U = xi(re), {
                    target: N
                } = Y;
                if (!N) return;
                let v = N.boundaryMode ? L : null;
                qi({
                    config: Y,
                    event: g,
                    eventTarget: r,
                    elementRoot: v,
                    elementApi: we
                }).forEach((C, F) => {
                    let $ = U ? ys(re)(C, X) : null,
                        J = U ? tW(re)(C, X) : null;
                    M = !0;
                    let D = P === z && F === 0,
                        W = kV({
                            element: C,
                            actionItem: X
                        }),
                        K = _s({
                            element: C,
                            actionItem: X,
                            elementApi: we
                        }, $);
                    Ts({
                        store: e,
                        element: C,
                        actionItem: X,
                        eventId: t,
                        eventTarget: r,
                        eventStateKey: n,
                        actionListId: o,
                        groupIndex: i,
                        isCarrier: D,
                        computedStyle: W,
                        destination: K,
                        immediate: a,
                        verbose: s,
                        pluginInstance: $,
                        pluginDuration: J,
                        instanceDelay: w
                    })
                })
            }), M
        }

        function Ts(e) {
            var t;
            let {
                store: r,
                computedStyle: n
            } = e, o = (0, NV.default)(e, GV), {
                element: i,
                actionItem: a,
                immediate: s,
                pluginInstance: c,
                continuous: f,
                restingValue: p,
                eventId: d
            } = o, g = !f, h = WV(), {
                ixElements: y,
                ixSession: I,
                ixData: x
            } = r.getState(), S = VV(y, i), {
                refState: w
            } = y[S] || {}, O = we.getRefType(i), L = I.reducedMotion && nt.ReducedMotionTypes[a.actionTypeId], P;
            if (L && f) switch ((t = x.events[d]) === null || t === void 0 ? void 0 : t.eventTypeId) {
                case nt.EventTypeConsts.MOUSE_MOVE:
                case nt.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                    P = p;
                    break;
                default:
                    P = .5;
                    break
            }
            let M = jV(i, w, n, a, we, c);
            if (r.dispatch((0, Oe.instanceAdded)((0, CV.default)({
                    instanceId: h,
                    elementId: S,
                    origin: M,
                    refType: O,
                    skipMotion: L,
                    skipToValue: P
                }, o))), Qy(document.body, "ix2-animation-started", h), s) {
                bW(r, h);
                return
            }
            Kt({
                store: r,
                select: ({
                    ixInstances: X
                }) => X[h],
                onChange: Zy
            }), g && r.dispatch((0, Oe.instanceStarted)(h, I.tick))
        }

        function Os(e, t) {
            Qy(document.body, "ix2-animation-stopping", {
                instanceId: e.id,
                state: t.getState()
            });
            let {
                elementId: r,
                actionItem: n
            } = e, {
                ixElements: o
            } = t.getState(), {
                ref: i,
                refType: a
            } = o[r] || {};
            a === ky && $V(i, n, we), t.dispatch((0, Oe.instanceRemoved)(e.id))
        }

        function Qy(e, t, r) {
            let n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
        }

        function bW(e, t) {
            let {
                ixParameters: r
            } = e.getState();
            e.dispatch((0, Oe.instanceStarted)(t, 0)), e.dispatch((0, Oe.animationFrameChanged)(performance.now(), r));
            let {
                ixInstances: n
            } = e.getState();
            Zy(n[t], e)
        }

        function Zy(e, t) {
            let {
                active: r,
                continuous: n,
                complete: o,
                elementId: i,
                actionItem: a,
                actionTypeId: s,
                renderType: c,
                current: f,
                groupIndex: p,
                eventId: d,
                eventTarget: g,
                eventStateKey: h,
                actionListId: y,
                isCarrier: I,
                styleProp: x,
                verbose: S,
                pluginInstance: w
            } = e, {
                ixData: O,
                ixSession: L
            } = t.getState(), {
                events: P
            } = O, M = P[d] || {}, {
                mediaQueries: X = O.mediaQueryKeys
            } = M;
            if (Li(X, L.mediaQueryKey) && (n || r || o)) {
                if (f || c === UV && o) {
                    t.dispatch((0, Oe.elementStateChanged)(i, s, f, a));
                    let {
                        ixElements: z
                    } = t.getState(), {
                        ref: Y,
                        refType: re,
                        refState: U
                    } = z[i] || {}, N = U && U[s];
                    (re === ky || xi(s)) && BV(Y, U, N, d, a, x, we, c, w)
                }
                if (o) {
                    if (I) {
                        let z = ms({
                            store: t,
                            eventId: d,
                            eventTarget: g,
                            eventStateKey: h,
                            actionListId: y,
                            groupIndex: p + 1,
                            verbose: S
                        });
                        S && !z && t.dispatch((0, Oe.actionListPlaybackChanged)({
                            actionListId: y,
                            isPlaying: !1
                        }))
                    }
                    Os(e, t)
                }
            }
        }
    });
    var eI = u(mt => {
        "use strict";
        var AW = Dt().default,
            SW = Ze().default;
        Object.defineProperty(mt, "__esModule", {
            value: !0
        });
        mt.actions = void 0;
        mt.destroy = Jy;
        mt.init = PW;
        mt.setEnv = NW;
        mt.store = void 0;
        Gl();
        var wW = Zo(),
            RW = SW(nE()),
            bs = hs(),
            CW = AW(yi());
        mt.actions = CW;
        var Fi = (0, wW.createStore)(RW.default);
        mt.store = Fi;

        function NW(e) {
            e() && (0, bs.observeRequests)(Fi)
        }

        function PW(e) {
            Jy(), (0, bs.startEngine)({
                store: Fi,
                rawData: e,
                allowEvents: !0
            })
        }

        function Jy() {
            (0, bs.stopEngine)(Fi)
        }
    });
    var iI = u((qK, nI) => {
        var tI = ke(),
            rI = eI();
        rI.setEnv(tI.env);
        tI.define("ix2", nI.exports = function() {
            return rI
        })
    });
    var aI = u((LK, oI) => {
        var br = ke();
        br.define("links", oI.exports = function(e, t) {
            var r = {},
                n = e(window),
                o, i = br.env(),
                a = window.location,
                s = document.createElement("a"),
                c = "w--current",
                f = /index\.(html|php)$/,
                p = /\/$/,
                d, g;
            r.ready = r.design = r.preview = h;

            function h() {
                o = i && br.env("design"), g = br.env("slug") || a.pathname || "", br.scroll.off(I), d = [];
                for (var S = document.links, w = 0; w < S.length; ++w) y(S[w]);
                d.length && (br.scroll.on(I), I())
            }

            function y(S) {
                var w = o && S.getAttribute("href-disabled") || S.getAttribute("href");
                if (s.href = w, !(w.indexOf(":") >= 0)) {
                    var O = e(S);
                    if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                        var L = e(s.hash);
                        L.length && d.push({
                            link: O,
                            sec: L,
                            active: !1
                        });
                        return
                    }
                    if (!(w === "#" || w === "")) {
                        var P = s.href === a.href || w === g || f.test(w) && p.test(g);
                        x(O, c, P)
                    }
                }
            }

            function I() {
                var S = n.scrollTop(),
                    w = n.height();
                t.each(d, function(O) {
                    var L = O.link,
                        P = O.sec,
                        M = P.offset().top,
                        X = P.outerHeight(),
                        z = w * .5,
                        Y = P.is(":visible") && M + X - z >= S && M + z <= S + w;
                    O.active !== Y && (O.active = Y, x(L, c, Y))
                })
            }

            function x(S, w, O) {
                var L = S.hasClass(w);
                O && L || !O && !L || (O ? S.addClass(w) : S.removeClass(w))
            }
            return r
        })
    });
    var uI = u((xK, sI) => {
        var Gi = ke();
        Gi.define("scroll", sI.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = y() ? null : window.history,
                o = e(window),
                i = e(document),
                a = e(document.body),
                s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(N) {
                    window.setTimeout(N, 15)
                },
                c = Gi.env("editor") ? ".w-editor-body" : "body",
                f = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])",
                p = 'a[href="#"]',
                d = 'a[href*="#"]:not(.w-tab-link):not(' + p + ")",
                g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                h = document.createElement("style");
            h.appendChild(document.createTextNode(g));

            function y() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var I = /^#[a-zA-Z0-9][\w:.-]*$/;

            function x(N) {
                return I.test(N.hash) && N.host + N.pathname === r.host + r.pathname
            }
            let S = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function w() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || S.matches
            }

            function O(N, v) {
                var q;
                switch (v) {
                    case "add":
                        q = N.attr("tabindex"), q ? N.attr("data-wf-tabindex-swap", q) : N.attr("tabindex", "-1");
                        break;
                    case "remove":
                        q = N.attr("data-wf-tabindex-swap"), q ? (N.attr("tabindex", q), N.removeAttr("data-wf-tabindex-swap")) : N.removeAttr("tabindex");
                        break
                }
                N.toggleClass("wf-force-outline-none", v === "add")
            }

            function L(N) {
                var v = N.currentTarget;
                if (!(Gi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(v.className))) {
                    var q = x(v) ? v.hash : "";
                    if (q !== "") {
                        var C = e(q);
                        C.length && (N && (N.preventDefault(), N.stopPropagation()), P(q, N), window.setTimeout(function() {
                            M(C, function() {
                                O(C, "add"), C.get(0).focus({
                                    preventScroll: !0
                                }), O(C, "remove")
                            })
                        }, N ? 0 : 300))
                    }
                }
            }

            function P(N) {
                if (r.hash !== N && n && n.pushState && !(Gi.env.chrome && r.protocol === "file:")) {
                    var v = n.state && n.state.hash;
                    v !== N && n.pushState({
                        hash: N
                    }, "", N)
                }
            }

            function M(N, v) {
                var q = o.scrollTop(),
                    C = X(N);
                if (q !== C) {
                    var F = z(N, q, C),
                        $ = Date.now(),
                        J = function() {
                            var D = Date.now() - $;
                            window.scroll(0, Y(q, C, D, F)), D <= F ? s(J) : typeof v == "function" && v()
                        };
                    s(J)
                }
            }

            function X(N) {
                var v = e(f),
                    q = v.css("position") === "fixed" ? v.outerHeight() : 0,
                    C = N.offset().top - q;
                if (N.data("scroll") === "mid") {
                    var F = o.height() - q,
                        $ = N.outerHeight();
                    $ < F && (C -= Math.round((F - $) / 2))
                }
                return C
            }

            function z(N, v, q) {
                if (w()) return 0;
                var C = 1;
                return a.add(N).each(function(F, $) {
                    var J = parseFloat($.getAttribute("data-scroll-time"));
                    !isNaN(J) && J >= 0 && (C = J)
                }), (472.143 * Math.log(Math.abs(v - q) + 125) - 2e3) * C
            }

            function Y(N, v, q, C) {
                return q > C ? v : N + (v - N) * re(q / C)
            }

            function re(N) {
                return N < .5 ? 4 * N * N * N : (N - 1) * (2 * N - 2) * (2 * N - 2) + 1
            }

            function U() {
                var {
                    WF_CLICK_EMPTY: N,
                    WF_CLICK_SCROLL: v
                } = t;
                i.on(v, d, L), i.on(N, p, function(q) {
                    q.preventDefault()
                }), document.head.insertBefore(h, document.head.firstChild)
            }
            return {
                ready: U
            }
        })
    });
    var lI = u((MK, cI) => {
        var qW = ke();
        qW.define("touch", cI.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(i) {
                return i = typeof i == "string" ? e(i).get(0) : i, i ? new n(i) : null
            };

            function n(i) {
                var a = !1,
                    s = !1,
                    c = Math.min(Math.round(window.innerWidth * .04), 40),
                    f, p;
                i.addEventListener("touchstart", d, !1), i.addEventListener("touchmove", g, !1), i.addEventListener("touchend", h, !1), i.addEventListener("touchcancel", y, !1), i.addEventListener("mousedown", d, !1), i.addEventListener("mousemove", g, !1), i.addEventListener("mouseup", h, !1), i.addEventListener("mouseout", y, !1);

                function d(x) {
                    var S = x.touches;
                    S && S.length > 1 || (a = !0, S ? (s = !0, f = S[0].clientX) : f = x.clientX, p = f)
                }

                function g(x) {
                    if (a) {
                        if (s && x.type === "mousemove") {
                            x.preventDefault(), x.stopPropagation();
                            return
                        }
                        var S = x.touches,
                            w = S ? S[0].clientX : x.clientX,
                            O = w - p;
                        p = w, Math.abs(O) > c && r && String(r()) === "" && (o("swipe", x, {
                            direction: O > 0 ? "right" : "left"
                        }), y())
                    }
                }

                function h(x) {
                    if (a && (a = !1, s && x.type === "mouseup")) {
                        x.preventDefault(), x.stopPropagation(), s = !1;
                        return
                    }
                }

                function y() {
                    a = !1
                }

                function I() {
                    i.removeEventListener("touchstart", d, !1), i.removeEventListener("touchmove", g, !1), i.removeEventListener("touchend", h, !1), i.removeEventListener("touchcancel", y, !1), i.removeEventListener("mousedown", d, !1), i.removeEventListener("mousemove", g, !1), i.removeEventListener("mouseup", h, !1), i.removeEventListener("mouseout", y, !1), i = null
                }
                this.destroy = I
            }

            function o(i, a, s) {
                var c = e.Event(i, {
                    originalEvent: a
                });
                e(a.target).trigger(c, s)
            }
            return t.instance = t.init(document), t
        })
    });
    var fI = u(As => {
        "use strict";
        Object.defineProperty(As, "__esModule", {
            value: !0
        });
        As.default = LW;

        function LW(e, t, r, n, o, i, a, s, c, f, p, d, g) {
            return function(h) {
                e(h);
                var y = h.form,
                    I = {
                        name: y.attr("data-name") || y.attr("name") || "Untitled Form",
                        pageId: y.attr("data-wf-page-id") || "",
                        elementId: y.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(y.html()),
                        trackingCookies: n()
                    };
                let x = y.attr("data-wf-flow");
                x && (I.wfFlow = x), o(h);
                var S = i(y, I.fields);
                if (S) return a(S);
                if (I.fileUploads = s(y), c(h), !f) {
                    p(h);
                    return
                }
                d.ajax({
                    url: g,
                    type: "POST",
                    data: I,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(w) {
                    w && w.code === 200 && (h.success = !0), p(h)
                }).fail(function() {
                    p(h)
                })
            }
        }
    });
    var pI = u((FK, dI) => {
        var Xi = ke();
        Xi.define("forms", dI.exports = function(e, t) {
            var r = {},
                n = e(document),
                o, i = window.location,
                a = window.XDomainRequest && !window.atob,
                s = ".w-form",
                c, f = /e(-)?mail/i,
                p = /^\S+@\S+$/,
                d = window.alert,
                g = Xi.env(),
                h, y, I, x = /list-manage[1-9]?.com/i,
                S = t.debounce(function() {
                    d("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                w(), !g && !h && L()
            };

            function w() {
                c = e("html").attr("data-wf-site"), y = "https://webflow.com/api/v1/form/" + c, a && y.indexOf("https://webflow.com") >= 0 && (y = y.replace("https://webflow.com", "https://formdata.webflow.com")), I = `${y}/signFile`, o = e(s + " form"), o.length && o.each(O)
            }

            function O(D, W) {
                var K = e(W),
                    V = e.data(W, s);
                V || (V = e.data(W, s, {
                    form: K
                })), P(V);
                var G = K.closest("div.w-form");
                V.done = G.find("> .w-form-done"), V.fail = G.find("> .w-form-fail"), V.fileUploads = G.find(".w-file-upload"), V.fileUploads.each(function(ie) {
                    F(ie, V)
                });
                var j = V.form.attr("aria-label") || V.form.attr("data-name") || "Form";
                V.done.attr("aria-label") || V.form.attr("aria-label", j), V.done.attr("tabindex", "-1"), V.done.attr("role", "region"), V.done.attr("aria-label") || V.done.attr("aria-label", j + " success"), V.fail.attr("tabindex", "-1"), V.fail.attr("role", "region"), V.fail.attr("aria-label") || V.fail.attr("aria-label", j + " failure");
                var oe = V.action = K.attr("action");
                if (V.handler = null, V.redirect = K.attr("data-redirect"), x.test(oe)) {
                    V.handler = v;
                    return
                }
                if (!oe) {
                    if (c) {
                        V.handler = (() => {
                            let ie = fI().default;
                            return ie(P, i, Xi, re, C, X, d, z, M, c, q, e, y)
                        })();
                        return
                    }
                    S()
                }
            }

            function L() {
                h = !0, n.on("submit", s + " form", function(ie) {
                    var te = e.data(this, s);
                    te.handler && (te.evt = ie, te.handler(te))
                });
                let D = ".w-checkbox-input",
                    W = ".w-radio-input",
                    K = "w--redirected-checked",
                    V = "w--redirected-focus",
                    G = "w--redirected-focus-visible",
                    j = ":focus-visible, [data-wf-focus-visible]",
                    oe = [
                        ["checkbox", D],
                        ["radio", W]
                    ];
                n.on("change", s + ' form input[type="checkbox"]:not(' + D + ")", ie => {
                    e(ie.target).siblings(D).toggleClass(K)
                }), n.on("change", s + ' form input[type="radio"]', ie => {
                    e(`input[name="${ie.target.name}"]:not(${D})`).map((ge, ht) => e(ht).siblings(W).removeClass(K));
                    let te = e(ie.target);
                    te.hasClass("w-radio-input") || te.siblings(W).addClass(K)
                }), oe.forEach(([ie, te]) => {
                    n.on("focus", s + ` form input[type="${ie}"]:not(` + te + ")", ge => {
                        e(ge.target).siblings(te).addClass(V), e(ge.target).filter(j).siblings(te).addClass(G)
                    }), n.on("blur", s + ` form input[type="${ie}"]:not(` + te + ")", ge => {
                        e(ge.target).siblings(te).removeClass(`${V} ${G}`)
                    })
                })
            }

            function P(D) {
                var W = D.btn = D.form.find(':input[type="submit"]');
                D.wait = D.btn.attr("data-wait") || null, D.success = !1, W.prop("disabled", !1), D.label && W.val(D.label)
            }

            function M(D) {
                var W = D.btn,
                    K = D.wait;
                W.prop("disabled", !0), K && (D.label = W.val(), W.val(K))
            }

            function X(D, W) {
                var K = null;
                return W = W || {}, D.find(':input:not([type="submit"]):not([type="file"])').each(function(V, G) {
                    var j = e(G),
                        oe = j.attr("type"),
                        ie = j.attr("data-name") || j.attr("name") || "Field " + (V + 1),
                        te = j.val();
                    if (oe === "checkbox") te = j.is(":checked");
                    else if (oe === "radio") {
                        if (W[ie] === null || typeof W[ie] == "string") return;
                        te = D.find('input[name="' + j.attr("name") + '"]:checked').val() || null
                    }
                    typeof te == "string" && (te = e.trim(te)), W[ie] = te, K = K || U(j, oe, ie, te)
                }), K
            }

            function z(D) {
                var W = {};
                return D.find(':input[type="file"]').each(function(K, V) {
                    var G = e(V),
                        j = G.attr("data-name") || G.attr("name") || "File " + (K + 1),
                        oe = G.attr("data-value");
                    typeof oe == "string" && (oe = e.trim(oe)), W[j] = oe
                }), W
            }
            let Y = {
                _mkto_trk: "marketo"
            };

            function re() {
                return document.cookie.split("; ").reduce(function(W, K) {
                    let V = K.split("="),
                        G = V[0];
                    if (G in Y) {
                        let j = Y[G],
                            oe = V.slice(1).join("=");
                        W[j] = oe
                    }
                    return W
                }, {})
            }

            function U(D, W, K, V) {
                var G = null;
                return W === "password" ? G = "Passwords cannot be submitted." : D.attr("required") ? V ? f.test(D.attr("type")) && (p.test(V) || (G = "Please enter a valid email address for: " + K)) : G = "Please fill out the required field: " + K : K === "g-recaptcha-response" && !V && (G = "Please confirm you\u2019re not a robot."), G
            }

            function N(D) {
                C(D), q(D)
            }

            function v(D) {
                P(D);
                var W = D.form,
                    K = {};
                if (/^https/.test(i.href) && !/^https/.test(D.action)) {
                    W.attr("method", "post");
                    return
                }
                C(D);
                var V = X(W, K);
                if (V) return d(V);
                M(D);
                var G;
                t.each(K, function(te, ge) {
                    f.test(ge) && (K.EMAIL = te), /^((full[ _-]?)?name)$/i.test(ge) && (G = te), /^(first[ _-]?name)$/i.test(ge) && (K.FNAME = te), /^(last[ _-]?name)$/i.test(ge) && (K.LNAME = te)
                }), G && !K.FNAME && (G = G.split(" "), K.FNAME = G[0], K.LNAME = K.LNAME || G[1]);
                var j = D.action.replace("/post?", "/post-json?") + "&c=?",
                    oe = j.indexOf("u=") + 2;
                oe = j.substring(oe, j.indexOf("&", oe));
                var ie = j.indexOf("id=") + 3;
                ie = j.substring(ie, j.indexOf("&", ie)), K["b_" + oe + "_" + ie] = "", e.ajax({
                    url: j,
                    data: K,
                    dataType: "jsonp"
                }).done(function(te) {
                    D.success = te.result === "success" || /already/.test(te.msg), D.success || console.info("MailChimp error: " + te.msg), q(D)
                }).fail(function() {
                    q(D)
                })
            }

            function q(D) {
                var W = D.form,
                    K = D.redirect,
                    V = D.success;
                if (V && K) {
                    Xi.location(K);
                    return
                }
                D.done.toggle(V), D.fail.toggle(!V), V ? D.done.focus() : D.fail.focus(), W.toggle(!V), P(D)
            }

            function C(D) {
                D.evt && D.evt.preventDefault(), D.evt = null
            }

            function F(D, W) {
                if (!W.fileUploads || !W.fileUploads[D]) return;
                var K, V = e(W.fileUploads[D]),
                    G = V.find("> .w-file-upload-default"),
                    j = V.find("> .w-file-upload-uploading"),
                    oe = V.find("> .w-file-upload-success"),
                    ie = V.find("> .w-file-upload-error"),
                    te = G.find(".w-file-upload-input"),
                    ge = G.find(".w-file-upload-label"),
                    ht = ge.children(),
                    de = ie.find(".w-file-upload-error-msg"),
                    E = oe.find(".w-file-upload-file"),
                    B = oe.find(".w-file-remove-link"),
                    Q = E.find(".w-file-upload-file-name"),
                    k = de.attr("data-w-size-error"),
                    _e = de.attr("data-w-type-error"),
                    xt = de.attr("data-w-generic-error");
                if (g || ge.on("click keydown", function(m) {
                        m.type === "keydown" && m.which !== 13 && m.which !== 32 || (m.preventDefault(), te.click())
                    }), ge.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), g) te.on("click", function(m) {
                    m.preventDefault()
                }), ge.on("click", function(m) {
                    m.preventDefault()
                }), ht.on("click", function(m) {
                    m.preventDefault()
                });
                else {
                    B.on("click keydown", function(m) {
                        if (m.type === "keydown") {
                            if (m.which !== 13 && m.which !== 32) return;
                            m.preventDefault()
                        }
                        te.removeAttr("data-value"), te.val(""), Q.html(""), G.toggle(!0), oe.toggle(!1), ge.focus()
                    }), te.on("change", function(m) {
                        K = m.target && m.target.files && m.target.files[0], K && (G.toggle(!1), ie.toggle(!1), j.toggle(!0), j.focus(), Q.text(K.name), b() || M(W), W.fileUploads[D].uploading = !0, $(K, _))
                    });
                    var gt = ge.outerHeight();
                    te.height(gt), te.width(1)
                }

                function l(m) {
                    var A = m.responseJSON && m.responseJSON.msg,
                        Z = xt;
                    typeof A == "string" && A.indexOf("InvalidFileTypeError") === 0 ? Z = _e : typeof A == "string" && A.indexOf("MaxFileSizeError") === 0 && (Z = k), de.text(Z), te.removeAttr("data-value"), te.val(""), j.toggle(!1), G.toggle(!0), ie.toggle(!0), ie.focus(), W.fileUploads[D].uploading = !1, b() || P(W)
                }

                function _(m, A) {
                    if (m) return l(m);
                    var Z = A.fileName,
                        ne = A.postData,
                        Ee = A.fileId,
                        H = A.s3Url;
                    te.attr("data-value", Ee), J(H, ne, K, Z, T)
                }

                function T(m) {
                    if (m) return l(m);
                    j.toggle(!1), oe.css("display", "inline-block"), oe.focus(), W.fileUploads[D].uploading = !1, b() || P(W)
                }

                function b() {
                    var m = W.fileUploads && W.fileUploads.toArray() || [];
                    return m.some(function(A) {
                        return A.uploading
                    })
                }
            }

            function $(D, W) {
                var K = new URLSearchParams({
                    name: D.name,
                    size: D.size
                });
                e.ajax({
                    type: "GET",
                    url: `${I}?${K}`,
                    crossDomain: !0
                }).done(function(V) {
                    W(null, V)
                }).fail(function(V) {
                    W(V)
                })
            }

            function J(D, W, K, V, G) {
                var j = new FormData;
                for (var oe in W) j.append(oe, W[oe]);
                j.append("file", K, V), e.ajax({
                    type: "POST",
                    url: D,
                    data: j,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    G(null)
                }).fail(function(ie) {
                    G(ie)
                })
            }
            return r
        })
    });
    var hI = u((GK, vI) => {
        var qt = ke(),
            xW = vn(),
            Me = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        qt.define("navbar", vI.exports = function(e, t) {
            var r = {},
                n = e.tram,
                o = e(window),
                i = e(document),
                a = t.debounce,
                s, c, f, p, d = qt.env(),
                g = '<div class="w-nav-overlay" data-wf-ignore />',
                h = ".w-nav",
                y = "w--open",
                I = "w--nav-dropdown-open",
                x = "w--nav-dropdown-toggle-open",
                S = "w--nav-dropdown-list-open",
                w = "w--nav-link-open",
                O = xW.triggers,
                L = e();
            r.ready = r.design = r.preview = P, r.destroy = function() {
                L = e(), M(), c && c.length && c.each(re)
            };

            function P() {
                f = d && qt.env("design"), p = qt.env("editor"), s = e(document.body), c = i.find(h), c.length && (c.each(Y), M(), X())
            }

            function M() {
                qt.resize.off(z)
            }

            function X() {
                qt.resize.on(z)
            }

            function z() {
                c.each(G)
            }

            function Y(E, B) {
                var Q = e(B),
                    k = e.data(B, h);
                k || (k = e.data(B, h, {
                    open: !1,
                    el: Q,
                    config: {},
                    selectedIdx: -1
                })), k.menu = Q.find(".w-nav-menu"), k.links = k.menu.find(".w-nav-link"), k.dropdowns = k.menu.find(".w-dropdown"), k.dropdownToggle = k.menu.find(".w-dropdown-toggle"), k.dropdownList = k.menu.find(".w-dropdown-list"), k.button = Q.find(".w-nav-button"), k.container = Q.find(".w-container"), k.overlayContainerId = "w-nav-overlay-" + E, k.outside = K(k);
                var _e = Q.find(".w-nav-brand");
                _e && _e.attr("href") === "/" && _e.attr("aria-label") == null && _e.attr("aria-label", "home"), k.button.attr("style", "-webkit-user-select: text;"), k.button.attr("aria-label") == null && k.button.attr("aria-label", "menu"), k.button.attr("role", "button"), k.button.attr("tabindex", "0"), k.button.attr("aria-controls", k.overlayContainerId), k.button.attr("aria-haspopup", "menu"), k.button.attr("aria-expanded", "false"), k.el.off(h), k.button.off(h), k.menu.off(h), v(k), f ? (U(k), k.el.on("setting" + h, q(k))) : (N(k), k.button.on("click" + h, D(k)), k.menu.on("click" + h, "a", W(k)), k.button.on("keydown" + h, C(k)), k.el.on("keydown" + h, F(k))), G(E, B)
            }

            function re(E, B) {
                var Q = e.data(B, h);
                Q && (U(Q), e.removeData(B, h))
            }

            function U(E) {
                E.overlay && (de(E, !0), E.overlay.remove(), E.overlay = null)
            }

            function N(E) {
                E.overlay || (E.overlay = e(g).appendTo(E.el), E.overlay.attr("id", E.overlayContainerId), E.parent = E.menu.parent(), de(E, !0))
            }

            function v(E) {
                var B = {},
                    Q = E.config || {},
                    k = B.animation = E.el.attr("data-animation") || "default";
                B.animOver = /^over/.test(k), B.animDirect = /left$/.test(k) ? -1 : 1, Q.animation !== k && E.open && t.defer(J, E), B.easing = E.el.attr("data-easing") || "ease", B.easing2 = E.el.attr("data-easing2") || "ease";
                var _e = E.el.attr("data-duration");
                B.duration = _e != null ? Number(_e) : 400, B.docHeight = E.el.attr("data-doc-height"), E.config = B
            }

            function q(E) {
                return function(B, Q) {
                    Q = Q || {};
                    var k = o.width();
                    v(E), Q.open === !0 && ge(E, !0), Q.open === !1 && de(E, !0), E.open && t.defer(function() {
                        k !== o.width() && J(E)
                    })
                }
            }

            function C(E) {
                return function(B) {
                    switch (B.keyCode) {
                        case Me.SPACE:
                        case Me.ENTER:
                            return D(E)(), B.preventDefault(), B.stopPropagation();
                        case Me.ESCAPE:
                            return de(E), B.preventDefault(), B.stopPropagation();
                        case Me.ARROW_RIGHT:
                        case Me.ARROW_DOWN:
                        case Me.HOME:
                        case Me.END:
                            return E.open ? (B.keyCode === Me.END ? E.selectedIdx = E.links.length - 1 : E.selectedIdx = 0, $(E), B.preventDefault(), B.stopPropagation()) : (B.preventDefault(), B.stopPropagation())
                    }
                }
            }

            function F(E) {
                return function(B) {
                    if (E.open) switch (E.selectedIdx = E.links.index(document.activeElement), B.keyCode) {
                        case Me.HOME:
                        case Me.END:
                            return B.keyCode === Me.END ? E.selectedIdx = E.links.length - 1 : E.selectedIdx = 0, $(E), B.preventDefault(), B.stopPropagation();
                        case Me.ESCAPE:
                            return de(E), E.button.focus(), B.preventDefault(), B.stopPropagation();
                        case Me.ARROW_LEFT:
                        case Me.ARROW_UP:
                            return E.selectedIdx = Math.max(-1, E.selectedIdx - 1), $(E), B.preventDefault(), B.stopPropagation();
                        case Me.ARROW_RIGHT:
                        case Me.ARROW_DOWN:
                            return E.selectedIdx = Math.min(E.links.length - 1, E.selectedIdx + 1), $(E), B.preventDefault(), B.stopPropagation()
                    }
                }
            }

            function $(E) {
                if (E.links[E.selectedIdx]) {
                    var B = E.links[E.selectedIdx];
                    B.focus(), W(B)
                }
            }

            function J(E) {
                E.open && (de(E, !0), ge(E, !0))
            }

            function D(E) {
                return a(function() {
                    E.open ? de(E) : ge(E)
                })
            }

            function W(E) {
                return function(B) {
                    var Q = e(this),
                        k = Q.attr("href");
                    if (!qt.validClick(B.currentTarget)) {
                        B.preventDefault();
                        return
                    }
                    k && k.indexOf("#") === 0 && E.open && de(E)
                }
            }

            function K(E) {
                return E.outside && i.off("click" + h, E.outside),
                    function(B) {
                        var Q = e(B.target);
                        p && Q.closest(".w-editor-bem-EditorOverlay").length || V(E, Q)
                    }
            }
            var V = a(function(E, B) {
                if (E.open) {
                    var Q = B.closest(".w-nav-menu");
                    E.menu.is(Q) || de(E)
                }
            });

            function G(E, B) {
                var Q = e.data(B, h),
                    k = Q.collapsed = Q.button.css("display") !== "none";
                if (Q.open && !k && !f && de(Q, !0), Q.container.length) {
                    var _e = oe(Q);
                    Q.links.each(_e), Q.dropdowns.each(_e)
                }
                Q.open && ht(Q)
            }
            var j = "max-width";

            function oe(E) {
                var B = E.container.css(j);
                return B === "none" && (B = ""),
                    function(Q, k) {
                        k = e(k), k.css(j, ""), k.css(j) === "none" && k.css(j, B)
                    }
            }

            function ie(E, B) {
                B.setAttribute("data-nav-menu-open", "")
            }

            function te(E, B) {
                B.removeAttribute("data-nav-menu-open")
            }

            function ge(E, B) {
                if (E.open) return;
                E.open = !0, E.menu.each(ie), E.links.addClass(w), E.dropdowns.addClass(I), E.dropdownToggle.addClass(x), E.dropdownList.addClass(S), E.button.addClass(y);
                var Q = E.config,
                    k = Q.animation;
                (k === "none" || !n.support.transform || Q.duration <= 0) && (B = !0);
                var _e = ht(E),
                    xt = E.menu.outerHeight(!0),
                    gt = E.menu.outerWidth(!0),
                    l = E.el.height(),
                    _ = E.el[0];
                if (G(0, _), O.intro(0, _), qt.redraw.up(), f || i.on("click" + h, E.outside), B) {
                    m();
                    return
                }
                var T = "transform " + Q.duration + "ms " + Q.easing;
                if (E.overlay && (L = E.menu.prev(), E.overlay.show().append(E.menu)), Q.animOver) {
                    n(E.menu).add(T).set({
                        x: Q.animDirect * gt,
                        height: _e
                    }).start({
                        x: 0
                    }).then(m), E.overlay && E.overlay.width(gt);
                    return
                }
                var b = l + xt;
                n(E.menu).add(T).set({
                    y: -b
                }).start({
                    y: 0
                }).then(m);

                function m() {
                    E.button.attr("aria-expanded", "true")
                }
            }

            function ht(E) {
                var B = E.config,
                    Q = B.docHeight ? i.height() : s.height();
                return B.animOver ? E.menu.height(Q) : E.el.css("position") !== "fixed" && (Q -= E.el.outerHeight(!0)), E.overlay && E.overlay.height(Q), Q
            }

            function de(E, B) {
                if (!E.open) return;
                E.open = !1, E.button.removeClass(y);
                var Q = E.config;
                if ((Q.animation === "none" || !n.support.transform || Q.duration <= 0) && (B = !0), O.outro(0, E.el[0]), i.off("click" + h, E.outside), B) {
                    n(E.menu).stop(), _();
                    return
                }
                var k = "transform " + Q.duration + "ms " + Q.easing2,
                    _e = E.menu.outerHeight(!0),
                    xt = E.menu.outerWidth(!0),
                    gt = E.el.height();
                if (Q.animOver) {
                    n(E.menu).add(k).start({
                        x: xt * Q.animDirect
                    }).then(_);
                    return
                }
                var l = gt + _e;
                n(E.menu).add(k).start({
                    y: -l
                }).then(_);

                function _() {
                    E.menu.height(""), n(E.menu).set({
                        x: 0,
                        y: 0
                    }), E.menu.each(te), E.links.removeClass(w), E.dropdowns.removeClass(I), E.dropdownToggle.removeClass(x), E.dropdownList.removeClass(S), E.overlay && E.overlay.children().length && (L.length ? E.menu.insertAfter(L) : E.menu.prependTo(E.parent), E.overlay.attr("style", "").hide()), E.el.triggerHandler("w-close"), E.button.attr("aria-expanded", "false")
                }
            }
            return r
        })
    });
    var EI = u((XK, gI) => {
        var Lt = ke(),
            MW = vn();
        Lt.define("tabs", gI.exports = function(e) {
            var t = {},
                r = e.tram,
                n = e(document),
                o, i, a = Lt.env,
                s = a.safari,
                c = a(),
                f = "data-w-tab",
                p = "data-w-pane",
                d = ".w-tabs",
                g = "w--current",
                h = "w--tab-active",
                y = MW.triggers,
                I = !1;
            t.ready = t.design = t.preview = x, t.redraw = function() {
                I = !0, x(), I = !1
            }, t.destroy = function() {
                o = n.find(d), o.length && (o.each(O), S())
            };

            function x() {
                i = c && Lt.env("design"), o = n.find(d), o.length && (o.each(L), Lt.env("preview") && !I && o.each(O), S(), w())
            }

            function S() {
                Lt.redraw.off(t.redraw)
            }

            function w() {
                Lt.redraw.on(t.redraw)
            }

            function O(U, N) {
                var v = e.data(N, d);
                v && (v.links && v.links.each(y.reset), v.panes && v.panes.each(y.reset))
            }

            function L(U, N) {
                var v = d.substr(1) + "-" + U,
                    q = e(N),
                    C = e.data(N, d);
                if (C || (C = e.data(N, d, {
                        el: q,
                        config: {}
                    })), C.current = null, C.tabIdentifier = v + "-" + f, C.paneIdentifier = v + "-" + p, C.menu = q.children(".w-tab-menu"), C.links = C.menu.children(".w-tab-link"), C.content = q.children(".w-tab-content"), C.panes = C.content.children(".w-tab-pane"), C.el.off(d), C.links.off(d), C.menu.attr("role", "tablist"), C.links.attr("tabindex", "-1"), P(C), !i) {
                    C.links.on("click" + d, X(C)), C.links.on("keydown" + d, z(C));
                    var F = C.links.filter("." + g),
                        $ = F.attr(f);
                    $ && Y(C, {
                        tab: $,
                        immediate: !0
                    })
                }
            }

            function P(U) {
                var N = {};
                N.easing = U.el.attr("data-easing") || "ease";
                var v = parseInt(U.el.attr("data-duration-in"), 10);
                v = N.intro = v === v ? v : 0;
                var q = parseInt(U.el.attr("data-duration-out"), 10);
                q = N.outro = q === q ? q : 0, N.immediate = !v && !q, U.config = N
            }

            function M(U) {
                var N = U.current;
                return Array.prototype.findIndex.call(U.links, v => v.getAttribute(f) === N, null)
            }

            function X(U) {
                return function(N) {
                    N.preventDefault();
                    var v = N.currentTarget.getAttribute(f);
                    v && Y(U, {
                        tab: v
                    })
                }
            }

            function z(U) {
                return function(N) {
                    var v = M(U),
                        q = N.key,
                        C = {
                            ArrowLeft: v - 1,
                            ArrowUp: v - 1,
                            ArrowRight: v + 1,
                            ArrowDown: v + 1,
                            End: U.links.length - 1,
                            Home: 0
                        };
                    if (q in C) {
                        N.preventDefault();
                        var F = C[q];
                        F === -1 && (F = U.links.length - 1), F === U.links.length && (F = 0);
                        var $ = U.links[F],
                            J = $.getAttribute(f);
                        J && Y(U, {
                            tab: J
                        })
                    }
                }
            }

            function Y(U, N) {
                N = N || {};
                var v = U.config,
                    q = v.easing,
                    C = N.tab;
                if (C !== U.current) {
                    U.current = C;
                    var F;
                    U.links.each(function(G, j) {
                        var oe = e(j);
                        if (N.immediate || v.immediate) {
                            var ie = U.panes[G];
                            j.id || (j.id = U.tabIdentifier + "-" + G), ie.id || (ie.id = U.paneIdentifier + "-" + G), j.href = "#" + ie.id, j.setAttribute("role", "tab"), j.setAttribute("aria-controls", ie.id), j.setAttribute("aria-selected", "false"), ie.setAttribute("role", "tabpanel"), ie.setAttribute("aria-labelledby", j.id)
                        }
                        j.getAttribute(f) === C ? (F = j, oe.addClass(g).removeAttr("tabindex").attr({
                            "aria-selected": "true"
                        }).each(y.intro)) : oe.hasClass(g) && oe.removeClass(g).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(y.outro)
                    });
                    var $ = [],
                        J = [];
                    U.panes.each(function(G, j) {
                        var oe = e(j);
                        j.getAttribute(f) === C ? $.push(j) : oe.hasClass(h) && J.push(j)
                    });
                    var D = e($),
                        W = e(J);
                    if (N.immediate || v.immediate) {
                        D.addClass(h).each(y.intro), W.removeClass(h), I || Lt.redraw.up();
                        return
                    } else {
                        var K = window.scrollX,
                            V = window.scrollY;
                        F.focus(), window.scrollTo(K, V)
                    }
                    W.length && v.outro ? (W.each(y.outro), r(W).add("opacity " + v.outro + "ms " + q, {
                        fallback: s
                    }).start({
                        opacity: 0
                    }).then(() => re(v, W, D))) : re(v, W, D)
                }
            }

            function re(U, N, v) {
                if (N.removeClass(h).css({
                        opacity: "",
                        transition: "",
                        transform: "",
                        width: "",
                        height: ""
                    }), v.addClass(h).each(y.intro), Lt.redraw.up(), !U.intro) return r(v).set({
                    opacity: 1
                });
                r(v).set({
                    opacity: 0
                }).redraw().add("opacity " + U.intro + "ms " + U.easing, {
                    fallback: s
                }).start({
                    opacity: 1
                })
            }
            return t
        })
    });
    Gs();
    Us();
    Ws();
    ks();
    vn();
    iI();
    aI();
    uI();
    lI();
    pI();
    hI();
    EI();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|5b3a7f6a-e930-5022-431c-e5e0a5011031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|5b3a7f6a-e930-5022-431c-e5e0a5011031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1621520535859
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|5fbdbfa2-41db-3a2e-88f8-cc3759dc6c42",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|5fbdbfa2-41db-3a2e-88f8-cc3759dc6c42",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 33,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1621520602085
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d41651b35c19",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }],
            "createdOn": 1621530334152
        },
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d41651b35c19",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-2-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1621532066784
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-8"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".sticky__card",
                "originalId": "61d560b08f65d41651b35c19|2e227708-98ac-7417-311d-55585f9f3329",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".sticky__card",
                "originalId": "61d560b08f65d41651b35c19|2e227708-98ac-7417-311d-55585f9f3329",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 10,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1621934540951
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|c39b8302-e700-a9e4-fab6-23bb5f7e671b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|c39b8302-e700-a9e4-fab6-23bb5f7e671b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1621934660327
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-12"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|21726c5b-d5c5-3d98-c213-dad11f592605",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|21726c5b-d5c5-3d98-c213-dad11f592605",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 1,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1621934942600
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|bedc8f21-2c9d-c825-b1a6-e31f5fae5ec8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|bedc8f21-2c9d-c825-b1a6-e31f5fae5ec8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1621934968319
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-16"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|78545281-c8cb-57ac-21a1-46865ef175c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|78545281-c8cb-57ac-21a1-46865ef175c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1621934983462
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-18"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|56b8c415-b563-b14b-e3e4-ed33922e80e1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|56b8c415-b563-b14b-e3e4-ed33922e80e1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1621935006782
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|d45fab1e-3380-1034-f14f-33a538527ffa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|d45fab1e-3380-1034-f14f-33a538527ffa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 10,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1621935214969
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|b970fa7b-b728-1df3-ad55-61a5853e96c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|b970fa7b-b728-1df3-ad55-61a5853e96c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 17,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1621935250449
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|6e7645dc-45de-10a1-04a2-c61279457364",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|6e7645dc-45de-10a1-04a2-c61279457364",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1621935594455
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|ac2071a7-abc2-6361-a57c-1767033932c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|ac2071a7-abc2-6361-a57c-1767033932c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1621935628287
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|06ffcf9b-b752-5263-a3dc-c5c5df0a39b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|06ffcf9b-b752-5263-a3dc-c5c5df0a39b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1621935659926
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|18dea82a-4daa-b602-05ee-7c343b96e655",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|18dea82a-4daa-b602-05ee-7c343b96e655",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1621935840641
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|e4c5ccf0-0d6e-2038-74ae-4b66b8370b51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|e4c5ccf0-0d6e-2038-74ae-4b66b8370b51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1621935875807
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-44"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|684a929e-b5fa-8373-4b73-b70b58f952ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|684a929e-b5fa-8373-4b73-b70b58f952ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1622449060481
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|684a929e-b5fa-8373-4b73-b70b58f952ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|684a929e-b5fa-8373-4b73-b70b58f952ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1622449060484
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|c57f3605-9589-3e26-c97c-dd096a6e0955",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|c57f3605-9589-3e26-c97c-dd096a6e0955",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622486131159
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d4ea53b35c1f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4ea53b35c1f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-2-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1622546648591
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d4ea53b35c1f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4ea53b35c1f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }],
            "createdOn": 1622546706198
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4ea53b35c1f|1d0c950f-dfc2-9775-3d63-f551cd873972",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4ea53b35c1f|1d0c950f-dfc2-9775-3d63-f551cd873972",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622548068228
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-54"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4ea53b35c1f|1d0c950f-dfc2-9775-3d63-f551cd873974",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4ea53b35c1f|1d0c950f-dfc2-9775-3d63-f551cd873974",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622548068228
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4ea53b35c1f|dd427e96-20d7-2b37-ba28-c7a6a52bb0aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4ea53b35c1f|dd427e96-20d7-2b37-ba28-c7a6a52bb0aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622583622518
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4ea53b35c1f|6d7797ef-8ea9-e222-71c4-cc6a934f2b4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4ea53b35c1f|6d7797ef-8ea9-e222-71c4-cc6a934f2b4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622583651129
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4ea53b35c1f|a9c86c95-c087-6fd3-1f64-564837bd84cb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4ea53b35c1f|a9c86c95-c087-6fd3-1f64-564837bd84cb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622583737057
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4ea53b35c1f|74038e43-ab1e-d2f1-8c64-5bedfa5af8eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4ea53b35c1f|74038e43-ab1e-d2f1-8c64-5bedfa5af8eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 21,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622583815652
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4ea53b35c1f|1e1bfcf3-3ae2-861d-22bf-516719ebe3cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4ea53b35c1f|1e1bfcf3-3ae2-861d-22bf-516719ebe3cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622583893688
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4ea53b35c1f|dccb9c53-d71c-ed3c-23b8-37624204b27a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4ea53b35c1f|dccb9c53-d71c-ed3c-23b8-37624204b27a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622583919103
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4ea53b35c1f|dccb9c53-d71c-ed3c-23b8-37624204b284",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4ea53b35c1f|dccb9c53-d71c-ed3c-23b8-37624204b284",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622583945817
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-2-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1622637978896
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1622638005221
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|78353a0f-95b0-d7d7-ece8-8a3ccb4bc185",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|78353a0f-95b0-d7d7-ece8-8a3ccb4bc185",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622700506748
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|78353a0f-95b0-d7d7-ece8-8a3ccb4bc18a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|78353a0f-95b0-d7d7-ece8-8a3ccb4bc18a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622700506748
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|78353a0f-95b0-d7d7-ece8-8a3ccb4bc197",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|78353a0f-95b0-d7d7-ece8-8a3ccb4bc197",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622700506748
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41815b35c24|f66d0bdc-a6bf-904f-01ad-8c9dc51060a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41815b35c24|f66d0bdc-a6bf-904f-01ad-8c9dc51060a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622730858839
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41815b35c24|f66d0bdc-a6bf-904f-01ad-8c9dc51060b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41815b35c24|f66d0bdc-a6bf-904f-01ad-8c9dc51060b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622730858839
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41815b35c24|70d8181d-9c85-d57f-abad-64e3f07acd4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41815b35c24|70d8181d-9c85-d57f-abad-64e3f07acd4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622731013689
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41815b35c24|70d8181d-9c85-d57f-abad-64e3f07acd4e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41815b35c24|70d8181d-9c85-d57f-abad-64e3f07acd4e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622731013689
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d41815b35c24",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41815b35c24",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-2-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }],
            "createdOn": 1622786560284
        },
        "e-96": {
            "id": "e-96",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d41815b35c24",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41815b35c24",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1622786582007
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|ec116b70-b81a-2a9f-0b07-fe884fd05b32",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|ec116b70-b81a-2a9f-0b07-fe884fd05b32",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622797103576
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|977fa15a-2e2e-0d79-4790-da1eb9e52e0f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|977fa15a-2e2e-0d79-4790-da1eb9e52e0f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622797119200
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|0a5d73e7-74d0-cf4c-ebde-7e2af9fb85e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|0a5d73e7-74d0-cf4c-ebde-7e2af9fb85e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622797135852
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|44f7154e-99dd-ba7d-6d4e-b4944383cce2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|44f7154e-99dd-ba7d-6d4e-b4944383cce2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622797238539
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|d4e19646-878e-179d-5b2c-54bc37574bf0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|d4e19646-878e-179d-5b2c-54bc37574bf0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1622797607128
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|58011005-4480-a436-fdba-5ea72b3d6991",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|58011005-4480-a436-fdba-5ea72b3d6991",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1622797649761
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|dc06b4e1-0b40-682a-bd04-bd654e23509e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|dc06b4e1-0b40-682a-bd04-bd654e23509e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1622797837456
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-120"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|052eaaa0-e385-08aa-abbd-bce31b444635",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|052eaaa0-e385-08aa-abbd-bce31b444635",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1622797878751
        },
        "e-121": {
            "id": "e-121",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-122"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "selector": ".small-card-wrp",
                "originalId": "61d560b08f65d4be2cb35c23|d4e19646-878e-179d-5b2c-54bc37574bf0",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".small-card-wrp",
                "originalId": "61d560b08f65d4be2cb35c23|d4e19646-878e-179d-5b2c-54bc37574bf0",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1622798003249
        },
        "e-125": {
            "id": "e-125",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-126"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|36a64d9b-0715-abfb-3d69-9c002ec28a93",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|36a64d9b-0715-abfb-3d69-9c002ec28a93",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622798120729
        },
        "e-127": {
            "id": "e-127",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-128"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "selector": ".social-info__item",
                "originalId": "61d560b08f65d4be2cb35c23|2e9bdc8b-7cfe-5759-b463-9519718e5317",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".social-info__item",
                "originalId": "61d560b08f65d4be2cb35c23|2e9bdc8b-7cfe-5759-b463-9519718e5317",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1622798144240
        },
        "e-131": {
            "id": "e-131",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-132"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41815b35c24|f448a46b-1c11-3d3d-af90-334ac02defd1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41815b35c24|f448a46b-1c11-3d3d-af90-334ac02defd1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622798265615
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-134"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|2e9bdc8b-7cfe-5759-b463-9519718e5317",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|2e9bdc8b-7cfe-5759-b463-9519718e5317",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1622798342711
        },
        "e-135": {
            "id": "e-135",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-136"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|61619ef0-8360-ee14-a259-aa5688c9ef24",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|61619ef0-8360-ee14-a259-aa5688c9ef24",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1622798376977
        },
        "e-137": {
            "id": "e-137",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-138"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|23113ec6-af8d-4845-ea25-3a8f24dc3364",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|23113ec6-af8d-4845-ea25-3a8f24dc3364",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1622798428395
        },
        "e-139": {
            "id": "e-139",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-140"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|7681dbaa-add9-c3dc-3dfa-55813424016f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|7681dbaa-add9-c3dc-3dfa-55813424016f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 800,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1622798479170
        },
        "e-141": {
            "id": "e-141",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-142"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41815b35c24|1da64db4-b21f-da9c-1f95-b46668f97bee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41815b35c24|1da64db4-b21f-da9c-1f95-b46668f97bee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622798595330
        },
        "e-143": {
            "id": "e-143",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-144"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41815b35c24|81447674-42ea-1019-2597-85c0225cab3e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41815b35c24|81447674-42ea-1019-2597-85c0225cab3e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1622798628680
        },
        "e-151": {
            "id": "e-151",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-152"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|e2182fe2-a877-b3ca-d405-93e5d1621978",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|e2182fe2-a877-b3ca-d405-93e5d1621978",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1623048902938
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-154"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4be2cb35c23|4b70f25e-3177-150a-6000-5721702566f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be2cb35c23|4b70f25e-3177-150a-6000-5721702566f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 33,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1623048932127
        },
        "e-155": {
            "id": "e-155",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-156"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4fdfcb35c1d|5b3a7f6a-e930-5022-431c-e5e0a5011031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4fdfcb35c1d|5b3a7f6a-e930-5022-431c-e5e0a5011031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1623401828366
        },
        "e-159": {
            "id": "e-159",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d4fdfcb35c1d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4fdfcb35c1d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }],
            "createdOn": 1623401828366
        },
        "e-160": {
            "id": "e-160",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d4fdfcb35c1d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4fdfcb35c1d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-2-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1623401828366
        },
        "e-173": {
            "id": "e-173",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-174"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4fdfcb35c1d|b970fa7b-b728-1df3-ad55-61a5853e96c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4fdfcb35c1d|b970fa7b-b728-1df3-ad55-61a5853e96c7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 17,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1623401828366
        },
        "e-175": {
            "id": "e-175",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-176"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4fdfcb35c1d|6e7645dc-45de-10a1-04a2-c61279457364",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4fdfcb35c1d|6e7645dc-45de-10a1-04a2-c61279457364",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1623401828366
        },
        "e-177": {
            "id": "e-177",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-178"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4fdfcb35c1d|ac2071a7-abc2-6361-a57c-1767033932c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4fdfcb35c1d|ac2071a7-abc2-6361-a57c-1767033932c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1623401828366
        },
        "e-179": {
            "id": "e-179",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-180"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4fdfcb35c1d|06ffcf9b-b752-5263-a3dc-c5c5df0a39b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4fdfcb35c1d|06ffcf9b-b752-5263-a3dc-c5c5df0a39b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1623401828366
        },
        "e-187": {
            "id": "e-187",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-188"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4fdfcb35c1d|684a929e-b5fa-8373-4b73-b70b58f952ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4fdfcb35c1d|684a929e-b5fa-8373-4b73-b70b58f952ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1623401828366
        },
        "e-188": {
            "id": "e-188",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-187"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4fdfcb35c1d|684a929e-b5fa-8373-4b73-b70b58f952ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4fdfcb35c1d|684a929e-b5fa-8373-4b73-b70b58f952ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1623401828366
        },
        "e-189": {
            "id": "e-189",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-190"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "61d560b08f65d4fdfcb35c1d|c57f3605-9589-3e26-c97c-dd096a6e0955",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4fdfcb35c1d|c57f3605-9589-3e26-c97c-dd096a6e0955",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1623401828366
        },
        "e-191": {
            "id": "e-191",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-192"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4fdfcb35c1d|c719388c-d7c3-2fbf-da51-3ad298c365dc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4fdfcb35c1d|c719388c-d7c3-2fbf-da51-3ad298c365dc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1623846753056
        },
        "e-197": {
            "id": "e-197",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-198"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4fdfcb35c1d|b7bb4ed0-51ef-c0e5-0263-2b0aa4d03e3d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4fdfcb35c1d|b7bb4ed0-51ef-c0e5-0263-2b0aa4d03e3d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1623849182546
        },
        "e-199": {
            "id": "e-199",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-200"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4fdfcb35c1d|b7bb4ed0-51ef-c0e5-0263-2b0aa4d03e40",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4fdfcb35c1d|b7bb4ed0-51ef-c0e5-0263-2b0aa4d03e40",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1623849182546
        },
        "e-201": {
            "id": "e-201",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-202"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4fdfcb35c1d|3107a1ce-2e03-ebd7-8ea5-b24ef4be7d4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4fdfcb35c1d|3107a1ce-2e03-ebd7-8ea5-b24ef4be7d4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1623849443955
        },
        "e-203": {
            "id": "e-203",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-204"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4fdfcb35c1d|3107a1ce-2e03-ebd7-8ea5-b24ef4be7d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4fdfcb35c1d|3107a1ce-2e03-ebd7-8ea5-b24ef4be7d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1623849443955
        },
        "e-205": {
            "id": "e-205",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-206"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d47658b35c25|5b3a7f6a-e930-5022-431c-e5e0a5011031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d47658b35c25|5b3a7f6a-e930-5022-431c-e5e0a5011031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1624459643455
        },
        "e-227": {
            "id": "e-227",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-228"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d47658b35c25|6d75bdbf-9430-1beb-5641-d96ac123b231",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d47658b35c25|6d75bdbf-9430-1beb-5641-d96ac123b231",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1624459840062
        },
        "e-229": {
            "id": "e-229",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-230"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d47658b35c25|6d75bdbf-9430-1beb-5641-d96ac123b237",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d47658b35c25|6d75bdbf-9430-1beb-5641-d96ac123b237",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 1,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1624459840062
        },
        "e-231": {
            "id": "e-231",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-232"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d47658b35c25|6d75bdbf-9430-1beb-5641-d96ac123b23c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d47658b35c25|6d75bdbf-9430-1beb-5641-d96ac123b23c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1624459840062
        },
        "e-233": {
            "id": "e-233",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-234"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d47658b35c25|6d75bdbf-9430-1beb-5641-d96ac123b241",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d47658b35c25|6d75bdbf-9430-1beb-5641-d96ac123b241",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1624459840062
        },
        "e-235": {
            "id": "e-235",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-236"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d47658b35c25|6d75bdbf-9430-1beb-5641-d96ac123b246",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d47658b35c25|6d75bdbf-9430-1beb-5641-d96ac123b246",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1624459840062
        },
        "e-239": {
            "id": "e-239",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-240"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d47658b35c25|9b89193b-98fb-16c5-3147-2d8eae89b1bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d47658b35c25|9b89193b-98fb-16c5-3147-2d8eae89b1bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1624461338861
        },
        "e-241": {
            "id": "e-241",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d47658b35c25",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d47658b35c25",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }],
            "createdOn": 1624604577050
        },
        "e-242": {
            "id": "e-242",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d47658b35c25",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d47658b35c25",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-2-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1624604619424
        },
        "e-243": {
            "id": "e-243",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-244"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d45b6cb35c1e|5b3a7f6a-e930-5022-431c-e5e0a5011031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d45b6cb35c1e|5b3a7f6a-e930-5022-431c-e5e0a5011031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1624616541068
        },
        "e-245": {
            "id": "e-245",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-246"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d45b6cb35c1e|5fbdbfa2-41db-3a2e-88f8-cc3759dc6c42",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d45b6cb35c1e|5fbdbfa2-41db-3a2e-88f8-cc3759dc6c42",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 33,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1624616541068
        },
        "e-247": {
            "id": "e-247",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d45b6cb35c1e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d45b6cb35c1e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }],
            "createdOn": 1624616541068
        },
        "e-248": {
            "id": "e-248",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d45b6cb35c1e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d45b6cb35c1e",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-2-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1624616541068
        },
        "e-275": {
            "id": "e-275",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-276"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "61d560b08f65d45b6cb35c1e|9c396d50-097c-70d8-e165-fe6fdf341a66",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d45b6cb35c1e|9c396d50-097c-70d8-e165-fe6fdf341a66",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1624617046547
        },
        "e-277": {
            "id": "e-277",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-278"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "61d560b08f65d45b6cb35c1e|9c396d50-097c-70d8-e165-fe6fdf341a6e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d45b6cb35c1e|9c396d50-097c-70d8-e165-fe6fdf341a6e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1624617046547
        },
        "e-279": {
            "id": "e-279",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-280"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "61d560b08f65d45b6cb35c1e|9c396d50-097c-70d8-e165-fe6fdf341a76",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d45b6cb35c1e|9c396d50-097c-70d8-e165-fe6fdf341a76",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1624617046547
        },
        "e-281": {
            "id": "e-281",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-282"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d45b6cb35c1e|9c396d50-097c-70d8-e165-fe6fdf341a7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d45b6cb35c1e|9c396d50-097c-70d8-e165-fe6fdf341a7e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 800,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1624617046547
        },
        "e-297": {
            "id": "e-297",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-298"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d42b6cb35c26|5b3a7f6a-e930-5022-431c-e5e0a5011031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d42b6cb35c26|5b3a7f6a-e930-5022-431c-e5e0a5011031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1625488526328
        },
        "e-299": {
            "id": "e-299",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-300"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d42b6cb35c26|5fbdbfa2-41db-3a2e-88f8-cc3759dc6c42",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d42b6cb35c26|5fbdbfa2-41db-3a2e-88f8-cc3759dc6c42",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 33,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1625488526328
        },
        "e-301": {
            "id": "e-301",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d42b6cb35c26",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d42b6cb35c26",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }],
            "createdOn": 1625488526328
        },
        "e-302": {
            "id": "e-302",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d42b6cb35c26",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d42b6cb35c26",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-2-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1625488526328
        },
        "e-303": {
            "id": "e-303",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-304"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d40fbdb35c1c|5b3a7f6a-e930-5022-431c-e5e0a5011031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d40fbdb35c1c|5b3a7f6a-e930-5022-431c-e5e0a5011031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1625490471979
        },
        "e-305": {
            "id": "e-305",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-306"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d40fbdb35c1c|5fbdbfa2-41db-3a2e-88f8-cc3759dc6c42",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d40fbdb35c1c|5fbdbfa2-41db-3a2e-88f8-cc3759dc6c42",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 33,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1625490471979
        },
        "e-307": {
            "id": "e-307",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d40fbdb35c1c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d40fbdb35c1c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }],
            "createdOn": 1625490471979
        },
        "e-308": {
            "id": "e-308",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d40fbdb35c1c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d40fbdb35c1c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-2-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1625490471979
        },
        "e-309": {
            "id": "e-309",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d47658b35c25",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d47658b35c25",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-18-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 95,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-18-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 95,
                "restingState": 50
            }],
            "createdOn": 1626609678540
        },
        "e-312": {
            "id": "e-312",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|88688efd-aed8-8b60-ae42-5951d0a77f66",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|88688efd-aed8-8b60-ae42-5951d0a77f66",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-19-p",
                "smoothing": 61,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1628164471324
        },
        "e-313": {
            "id": "e-313",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|2ce138d4-871a-a347-9ec5-b06f4c6b46f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|2ce138d4-871a-a347-9ec5-b06f4c6b46f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1628165777601
        },
        "e-314": {
            "id": "e-314",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|efbd8f81-d4cd-eacb-3f22-550eeeed9820",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|efbd8f81-d4cd-eacb-3f22-550eeeed9820",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-21-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1628166427507
        },
        "e-315": {
            "id": "e-315",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|931d94cb-91e9-928f-de69-faa379bfe014",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|931d94cb-91e9-928f-de69-faa379bfe014",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-22-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1628166694937
        },
        "e-316": {
            "id": "e-316",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-317"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4a244b35c22|5b3a7f6a-e930-5022-431c-e5e0a5011031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4a244b35c22|5b3a7f6a-e930-5022-431c-e5e0a5011031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1628844121928
        },
        "e-318": {
            "id": "e-318",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-319"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4a244b35c22|5fbdbfa2-41db-3a2e-88f8-cc3759dc6c42",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4a244b35c22|5fbdbfa2-41db-3a2e-88f8-cc3759dc6c42",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 33,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1628844121928
        },
        "e-320": {
            "id": "e-320",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d4a244b35c22",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4a244b35c22",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }],
            "createdOn": 1628844121928
        },
        "e-321": {
            "id": "e-321",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d4a244b35c22",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4a244b35c22",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-2-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1628844121928
        },
        "e-322": {
            "id": "e-322",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-323"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d415dab35c20|5b3a7f6a-e930-5022-431c-e5e0a5011031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d415dab35c20|5b3a7f6a-e930-5022-431c-e5e0a5011031",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1628844174846
        },
        "e-324": {
            "id": "e-324",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-325"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d415dab35c20|5fbdbfa2-41db-3a2e-88f8-cc3759dc6c42",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d415dab35c20|5fbdbfa2-41db-3a2e-88f8-cc3759dc6c42",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 33,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1628844174846
        },
        "e-326": {
            "id": "e-326",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d415dab35c20",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d415dab35c20",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 70,
                "restingState": 50
            }],
            "createdOn": 1628844174846
        },
        "e-327": {
            "id": "e-327",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d415dab35c20",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d415dab35c20",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-2-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1628844174846
        },
        "e-330": {
            "id": "e-330",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-331"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "5ee37778-7e3e-27f2-1937-f419a20cb439",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5ee37778-7e3e-27f2-1937-f419a20cb439",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1629288314298
        },
        "e-331": {
            "id": "e-331",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-330"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "5ee37778-7e3e-27f2-1937-f419a20cb439",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5ee37778-7e3e-27f2-1937-f419a20cb439",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1629288314314
        },
        "e-332": {
            "id": "e-332",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-333"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5ee37778-7e3e-27f2-1937-f419a20cb439",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5ee37778-7e3e-27f2-1937-f419a20cb439",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1629288348926
        },
        "e-333": {
            "id": "e-333",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-332"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5ee37778-7e3e-27f2-1937-f419a20cb439",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5ee37778-7e3e-27f2-1937-f419a20cb439",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1629288348938
        },
        "e-334": {
            "id": "e-334",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d4be62b35c1b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be62b35c1b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-2-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-2-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1629299675961
        },
        "e-335": {
            "id": "e-335",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "61d560b08f65d4be62b35c1b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4be62b35c1b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1629299690536
        },
        "e-336": {
            "id": "e-336",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "61d560b08f65d41651b35c19|7736306f-870c-4532-b3fd-f8c130cc9840",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|7736306f-870c-4532-b3fd-f8c130cc9840",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-23-p",
                "smoothing": 80,
                "startsEntering": false,
                "addStartOffset": true,
                "addOffsetValue": 79,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1636614392433
        },
        "e-337": {
            "id": "e-337",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "61d560b08f65d41651b35c19|7736306f-870c-4532-b3fd-f8c130cc9840",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d41651b35c19|7736306f-870c-4532-b3fd-f8c130cc9840",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-24-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1636619767970
        },
        "e-338": {
            "id": "e-338",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-339"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "61d560b08f65d4ea53b35c1f|4e780452-7c18-6843-c463-ff88d2bf6b07",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "61d560b08f65d4ea53b35c1f|4e780452-7c18-6843-c463-ff88d2bf6b07",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1637838900176
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "cursor",
            "continuousParameterGroups": [{
                "id": "a-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor-border",
                                "selectorGuids": ["c54bfcd5-a5e2-ffd1-e634-736f4b5b9196"]
                            },
                            "xValue": -50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor-border",
                                "selectorGuids": ["c54bfcd5-a5e2-ffd1-e634-736f4b5b9196"]
                            },
                            "xValue": 50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor-border",
                                "selectorGuids": ["c54bfcd5-a5e2-ffd1-e634-736f4b5b9196"]
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor-border",
                                "selectorGuids": ["c54bfcd5-a5e2-ffd1-e634-736f4b5b9196"]
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1621530361501
        },
        "a-2": {
            "id": "a-2",
            "title": "cursorDot",
            "continuousParameterGroups": [{
                "id": "a-2-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-2-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor-dot",
                                "selectorGuids": ["03b4ae2a-1409-437e-303e-af9f97591c5b"]
                            },
                            "xValue": -50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-2-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor-dot",
                                "selectorGuids": ["03b4ae2a-1409-437e-303e-af9f97591c5b"]
                            },
                            "xValue": 50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-2-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-2-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor-dot",
                                "selectorGuids": ["03b4ae2a-1409-437e-303e-af9f97591c5b"]
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-2-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor-dot",
                                "selectorGuids": ["03b4ae2a-1409-437e-303e-af9f97591c5b"]
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1621531937808
        },
        "a-9": {
            "id": "a-9",
            "title": "sectionHide",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".section",
                            "selectorGuids": ["216f8069-7d20-9ec6-bd0c-49139ec0bea6"]
                        },
                        "xValue": 100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1622449084614
        },
        "a-10": {
            "id": "a-10",
            "title": "sectionAppear",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".section",
                            "selectorGuids": ["216f8069-7d20-9ec6-bd0c-49139ec0bea6"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1622449203873
        },
        "a-18": {
            "id": "a-18",
            "title": "circleButton",
            "continuousParameterGroups": [{
                "id": "a-18-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-18-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d47658b35c25|a4cfbc51-49cd-400a-6139-3314a63d5e21"
                            },
                            "xValue": 80,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-18-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d47658b35c25|a4cfbc51-49cd-400a-6139-3314a63d5e21"
                            },
                            "xValue": -80,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-18-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-18-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d47658b35c25|a4cfbc51-49cd-400a-6139-3314a63d5e21"
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-18-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d47658b35c25|a4cfbc51-49cd-400a-6139-3314a63d5e21"
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1626439081775
        },
        "a-19": {
            "id": "a-19",
            "title": "letter-R-first",
            "continuousParameterGroups": [{
                "id": "a-19-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-19-n",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|88688efd-aed8-8b60-ae42-5951d0a77f66"
                            },
                            "zValue": -45,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-19-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|88688efd-aed8-8b60-ae42-5951d0a77f66"
                            },
                            "xValue": -69,
                            "yValue": -69,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 40,
                    "actionItems": [{
                        "id": "a-19-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|88688efd-aed8-8b60-ae42-5951d0a77f66"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-19-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|88688efd-aed8-8b60-ae42-5951d0a77f66"
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }]
            }],
            "createdOn": 1628164558847
        },
        "a-20": {
            "id": "a-20",
            "title": "razor-letter-A",
            "continuousParameterGroups": [{
                "id": "a-20-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-20-n",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|2ce138d4-871a-a347-9ec5-b06f4c6b46f3"
                            },
                            "zValue": -32,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-20-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|2ce138d4-871a-a347-9ec5-b06f4c6b46f3"
                            },
                            "xValue": -69,
                            "yValue": 69,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 40,
                    "actionItems": [{
                        "id": "a-20-n-3",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|2ce138d4-871a-a347-9ec5-b06f4c6b46f3"
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-20-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|2ce138d4-871a-a347-9ec5-b06f4c6b46f3"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-20-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|2ce138d4-871a-a347-9ec5-b06f4c6b46f3"
                            },
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1628165783126
        },
        "a-21": {
            "id": "a-21",
            "title": "letter-R-second",
            "continuousParameterGroups": [{
                "id": "a-21-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-21-n",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|efbd8f81-d4cd-eacb-3f22-550eeeed9820"
                            },
                            "zValue": 38,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-21-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|efbd8f81-d4cd-eacb-3f22-550eeeed9820"
                            },
                            "xValue": 70,
                            "yValue": 70,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 40,
                    "actionItems": [{
                        "id": "a-21-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|efbd8f81-d4cd-eacb-3f22-550eeeed9820"
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-21-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|efbd8f81-d4cd-eacb-3f22-550eeeed9820"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1628166277149
        },
        "a-22": {
            "id": "a-22",
            "title": "letter-O",
            "continuousParameterGroups": [{
                "id": "a-22-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-22-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|931d94cb-91e9-928f-de69-faa379bfe014"
                            },
                            "xValue": 69,
                            "yValue": -69,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 40,
                    "actionItems": [{
                        "id": "a-22-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|931d94cb-91e9-928f-de69-faa379bfe014"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1628166737964
        },
        "a-12": {
            "id": "a-12",
            "title": "pkMenuOpen 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-header-word",
                            "selectorGuids": ["b48cce73-ccc6-2d47-1b65-b4767ea6eb53"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ee37778-7e3e-27f2-1937-f419a20cb49e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ee37778-7e3e-27f2-1937-f419a20cb49f"
                        },
                        "xValue": null,
                        "yValue": null,
                        "zValue": -45,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-12-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ee37778-7e3e-27f2-1937-f419a20cb49d"
                        },
                        "xValue": null,
                        "zValue": 45,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-12-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ee37778-7e3e-27f2-1937-f419a20cb49d"
                        },
                        "xValue": null,
                        "yValue": 7,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ee37778-7e3e-27f2-1937-f419a20cb49f"
                        },
                        "yValue": -7,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1622188315892
        },
        "a-13": {
            "id": "a-13",
            "title": "pkMenuClose 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-header-word",
                            "selectorGuids": ["b48cce73-ccc6-2d47-1b65-b4767ea6eb53"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ee37778-7e3e-27f2-1937-f419a20cb49f"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-13-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ee37778-7e3e-27f2-1937-f419a20cb49f"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ee37778-7e3e-27f2-1937-f419a20cb49d"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ee37778-7e3e-27f2-1937-f419a20cb49d"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-13-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "5ee37778-7e3e-27f2-1937-f419a20cb49e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1622188371595
        },
        "a-14": {
            "id": "a-14",
            "title": "sectionHide 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".accent-bg",
                            "selectorGuids": ["8ccc6f4b-0390-39f6-2d01-218685debd4a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-14-n-5",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".three-js-embed",
                            "selectorGuids": ["596d722b-6996-4620-d769-ca476046cf66"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "cc9b",
                            "value": 20,
                            "unit": "px"
                        }]
                    }
                }, {
                    "id": "a-14-n-4",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".section.footer",
                            "selectorGuids": ["216f8069-7d20-9ec6-bd0c-49139ec0bea6", "7a2c3d10-9145-889f-f25b-ae5bf207c075"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "f083",
                            "value": 20,
                            "unit": "px"
                        }]
                    }
                }, {
                    "id": "a-14-n-2",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".main",
                            "selectorGuids": ["f6ac62e8-ba09-3892-2b43-ce1fb503bbee"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "ecac",
                            "value": 20,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1622449084614
        },
        "a-15": {
            "id": "a-15",
            "title": "sectionAppear 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".accent-bg",
                            "selectorGuids": ["8ccc6f4b-0390-39f6-2d01-218685debd4a"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-5",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".three-js-embed",
                            "selectorGuids": ["596d722b-6996-4620-d769-ca476046cf66"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "230d",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }, {
                    "id": "a-15-n-4",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".main",
                            "selectorGuids": ["f6ac62e8-ba09-3892-2b43-ce1fb503bbee"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "c516",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }, {
                    "id": "a-15-n-2",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".section.footer",
                            "selectorGuids": ["216f8069-7d20-9ec6-bd0c-49139ec0bea6", "7a2c3d10-9145-889f-f25b-ae5bf207c075"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "5a5c",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1622449203873
        },
        "a-23": {
            "id": "a-23",
            "title": "Razor-Moving-PK",
            "continuousParameterGroups": [{
                "id": "a-23-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 13,
                    "actionItems": [{
                        "id": "a-23-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|7736306f-870c-4532-b3fd-f8c130cc9840"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-23-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|7736306f-870c-4532-b3fd-f8c130cc9840"
                            },
                            "yValue": 203,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1636614446978
        },
        "a-24": {
            "id": "a-24",
            "title": "Razor-Moving-Mob",
            "continuousParameterGroups": [{
                "id": "a-24-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 25,
                    "actionItems": [{
                        "id": "a-24-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|7736306f-870c-4532-b3fd-f8c130cc9840"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 65,
                    "actionItems": [{
                        "id": "a-24-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "61d560b08f65d41651b35c19|7736306f-870c-4532-b3fd-f8c130cc9840"
                            },
                            "yValue": 90,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1636619497110
        },
        "slideInBottom": {
            "id": "slideInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideInLeft": {
            "id": "slideInLeft",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideInRight": {
            "id": "slideInRight",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});