(function(J, A) {
    "object" === typeof exports && "undefined" !== typeof module ? module.exports = A(require("core-js/modules/es.array.for-each"), require("core-js/modules/web.dom-collections.for-each"), require("core-js/modules/es.array.filter"), require("core-js/modules/es.array.iterator"), require("core-js/modules/es.object.assign"), require("core-js/modules/es.object.to-string"), require("core-js/modules/es.parse-int"), require("core-js/modules/es.string.iterator"), require("core-js/modules/es.weak-map"), require("core-js/modules/web.dom-collections.iterator"),
        require("core-js/modules/es.array.reduce"), require("core-js/modules/es.function.name"), require("core-js/modules/es.regexp.exec"), require("core-js/modules/es.string.match"), require("core-js/modules/es.string.replace")) : "function" === typeof define && define.amd ? define("core-js/modules/es.array.for-each core-js/modules/web.dom-collections.for-each core-js/modules/es.array.filter core-js/modules/es.array.iterator core-js/modules/es.object.assign core-js/modules/es.object.to-string core-js/modules/es.parse-int core-js/modules/es.string.iterator core-js/modules/es.weak-map core-js/modules/web.dom-collections.iterator core-js/modules/es.array.reduce core-js/modules/es.function.name core-js/modules/es.regexp.exec core-js/modules/es.string.match core-js/modules/es.string.replace".split(" "),
        A) : (J = J || self, J.asp_SimpleBar = A())
})(this, function() {
    function J(a, c, b) {
        function e(g) {
            var t = m,
                w = p;
            m = p = void 0;
            r = g;
            return u = a.apply(w, t)
        }

        function d(g) {
            var t = g - n;
            g -= r;
            return void 0 === n || t >= c || 0 > t || y && g >= C
        }

        function f() {
            var g = W.Date.now();
            if (d(g)) return h(g);
            var t = setTimeout;
            var w = g - r;
            g = c - (g - n);
            w = y ? Ja(g, C - w) : g;
            l = t(f, w)
        }

        function h(g) {
            l = void 0;
            if (D && m) return e(g);
            m = p = void 0;
            return u
        }

        function k() {
            var g = W.Date.now(),
                t = d(g);
            m = arguments;
            p = this;
            n = g;
            if (t) {
                if (void 0 === l) return r = g = n, l = setTimeout(f, c), z ? e(g) : u;
                if (y) return l =
                    setTimeout(f, c), e(n)
            }
            void 0 === l && (l = setTimeout(f, c));
            return u
        }
        var m, p, u, l, n, r = 0,
            z = !1,
            y = !1,
            D = !0;
        if ("function" != typeof a) throw new TypeError("Expected a function");
        c = ha(c) || 0;
        if (A(b)) {
            z = !!b.leading;
            var C = (y = "maxWait" in b) ? Ka(ha(b.maxWait) || 0, c) : C;
            D = "trailing" in b ? !!b.trailing : D
        }
        k.cancel = function() {
            void 0 !== l && clearTimeout(l);
            r = 0;
            m = n = p = l = void 0
        };
        k.flush = function() {
            return void 0 === l ? u : h(W.Date.now())
        };
        return k
    }

    function A(a) {
        var c = typeof a;
        return !!a && ("object" == c || "function" == c)
    }

    function ha(a) {
        if ("number" ==
            typeof a) return a;
        var c = a;
        if ("symbol" == typeof c || c && "object" == typeof c && "[object Symbol]" == La.call(c)) return ia;
        A(a) && (a = "function" == typeof a.valueOf ? a.valueOf() : a, a = A(a) ? a + "" : a);
        if ("string" != typeof a) return 0 === a ? a : +a;
        a = a.replace(Ma, "");
        return (c = Na.test(a)) || Oa.test(a) ? Pa(a.slice(2), c ? 2 : 8) : Qa.test(a) ? ia : +a
    }

    function X(a) {
        var c = typeof a;
        return !!a && ("object" == c || "function" == c)
    }

    function ja(a) {
        if ("number" == typeof a) return a;
        var c = a;
        if ("symbol" == typeof c || c && "object" == typeof c && "[object Symbol]" == Ra.call(c)) return ka;
        X(a) && (a = "function" == typeof a.valueOf ? a.valueOf() : a, a = X(a) ? a + "" : a);
        if ("string" != typeof a) return 0 === a ? a : +a;
        a = a.replace(Sa, "");
        return (c = Ta.test(a)) || Ua.test(a) ? Va(a.slice(2), c ? 2 : 8) : Wa.test(a) ? ka : +a
    }

    function E(a) {
        var c = -1,
            b = a ? a.length : 0;
        for (this.clear(); ++c < b;) {
            var e = a[c];
            this.set(e[0], e[1])
        }
    }

    function H(a) {
        var c = -1,
            b = a ? a.length : 0;
        for (this.clear(); ++c < b;) {
            var e = a[c];
            this.set(e[0], e[1])
        }
    }

    function F(a) {
        var c = -1,
            b = a ? a.length : 0;
        for (this.clear(); ++c < b;) {
            var e = a[c];
            this.set(e[0], e[1])
        }
    }

    function O(a, c) {
        for (var b =
                a.length; b--;) {
            var e = a[b][0];
            if (e === c || e !== e && c !== c) return b
        }
        return -1
    }

    function P(a, c) {
        a = a.__data__;
        var b = typeof c;
        return ("string" == b || "number" == b || "symbol" == b || "boolean" == b ? "__proto__" !== c : null === c) ? a["string" == typeof c ? "string" : "hash"] : a.map
    }

    function la(a, c) {
        a = null == a ? void 0 : a[c];
        if (!ma(a) || na && na in a) var b = !1;
        else {
            b: if (null != a) {
                try {
                    b = oa.call(a);
                    break b
                } catch (e) {}
                b = a + ""
            } else b = "";c = ma(a) ? Xa.call(a) : "";
            if (!(c = "[object Function]" == c || "[object GeneratorFunction]" == c) && (c = !1, null != a && "function" != typeof a.toString)) try {
                c = !!(a + "")
            } catch (e) {}
            b = (c ? Ya : Za).test(b)
        }
        return b ? a : void 0
    }

    function Y(a, c) {
        if ("function" != typeof a || c && "function" != typeof c) throw new TypeError("Expected a function");
        var b = function() {
            var e = arguments,
                d = c ? c.apply(this, e) : e[0],
                f = b.cache;
            if (f.has(d)) return f.get(d);
            e = a.apply(this, e);
            b.cache = f.set(d, e);
            return e
        };
        b.cache = new(Y.Cache || F);
        return b
    }

    function ma(a) {
        var c = typeof a;
        return !!a && ("object" == c || "function" == c)
    }

    function B(a) {
        return a && a.ownerDocument && a.ownerDocument.defaultView ? a.ownerDocument.defaultView :
            window
    }

    function Q(a) {
        return a && a.ownerDocument ? a.ownerDocument : document
    }

    function pa(a) {
        if (null === K) {
            var c = Q(a);
            if ("undefined" === typeof c) return K = 0;
            a = c.body;
            c = c.createElement("div");
            c.classList.add("asp_simplebar-hide-scrollbar");
            a.appendChild(c);
            var b = c.getBoundingClientRect().right;
            a.removeChild(c);
            K = b
        }
        return K
    }
    var v = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {},
        ia = 0 / 0,
        Ma = /^\s+|\s+$/g,
        Qa = /^[-+]0x[0-9a-f]+$/i,
        Na = /^0b[01]+$/i,
        Oa = /^0o[0-7]+$/i,
        Pa = parseInt,
        $a = "object" == typeof self && self && self.Object === Object && self,
        W = "object" == typeof v && v && v.Object === Object && v || $a || Function("return this")(),
        La = Object.prototype.toString,
        Ka = Math.max,
        Ja = Math.min,
        qa = function(a, c, b) {
            var e = !0,
                d = !0;
            if ("function" != typeof a) throw new TypeError("Expected a function");
            A(b) && (e = "leading" in b ? !!b.leading : e, d = "trailing" in b ? !!b.trailing : d);
            return J(a, c, {
                leading: e,
                maxWait: c,
                trailing: d
            })
        },
        ka = 0 / 0,
        Sa = /^\s+|\s+$/g,
        Wa = /^[-+]0x[0-9a-f]+$/i,
        Ta =
        /^0b[01]+$/i,
        Ua = /^0o[0-7]+$/i,
        Va = parseInt,
        ab = "object" == typeof self && self && self.Object === Object && self,
        Z = "object" == typeof v && v && v.Object === Object && v || ab || Function("return this")(),
        Ra = Object.prototype.toString,
        bb = Math.max,
        cb = Math.min,
        ra = function(a, c, b) {
            function e(g) {
                var t = m,
                    w = p;
                m = p = void 0;
                r = g;
                return u = a.apply(w, t)
            }

            function d(g) {
                var t = g - n;
                g -= r;
                return void 0 === n || t >= c || 0 > t || y && g >= C
            }

            function f() {
                var g = Z.Date.now();
                if (d(g)) return h(g);
                var t = setTimeout;
                var w = g - r;
                g = c - (g - n);
                w = y ? cb(g, C - w) : g;
                l = t(f, w)
            }

            function h(g) {
                l =
                    void 0;
                if (D && m) return e(g);
                m = p = void 0;
                return u
            }

            function k() {
                var g = Z.Date.now(),
                    t = d(g);
                m = arguments;
                p = this;
                n = g;
                if (t) {
                    if (void 0 === l) return r = g = n, l = setTimeout(f, c), z ? e(g) : u;
                    if (y) return l = setTimeout(f, c), e(n)
                }
                void 0 === l && (l = setTimeout(f, c));
                return u
            }
            var m, p, u, l, n, r = 0,
                z = !1,
                y = !1,
                D = !0;
            if ("function" != typeof a) throw new TypeError("Expected a function");
            c = ja(c) || 0;
            if (X(b)) {
                z = !!b.leading;
                var C = (y = "maxWait" in b) ? bb(ja(b.maxWait) || 0, c) : C;
                D = "trailing" in b ? !!b.trailing : D
            }
            k.cancel = function() {
                void 0 !== l && clearTimeout(l);
                r = 0;
                m = n = p = l = void 0
            };
            k.flush = function() {
                return void 0 === l ? u : h(Z.Date.now())
            };
            return k
        },
        Za = /^\[object .+?Constructor\]$/,
        db = "object" == typeof self && self && self.Object === Object && self,
        sa = "object" == typeof v && v && v.Object === Object && v || db || Function("return this")(),
        eb = Array.prototype,
        fb = Function.prototype,
        ta = Object.prototype,
        aa = sa["__core-js_shared__"],
        na = function() {
            var a = /[^.]+$/.exec(aa && aa.keys && aa.keys.IE_PROTO || "");
            return a ? "Symbol(src)_1." + a : ""
        }(),
        oa = fb.toString,
        ba = ta.hasOwnProperty,
        Xa = ta.toString,
        Ya =
        RegExp("^" + oa.call(ba).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        gb = eb.splice,
        hb = la(sa, "Map"),
        L = la(Object, "create");
    E.prototype.clear = function() {
        this.__data__ = L ? L(null) : {}
    };
    E.prototype["delete"] = function(a) {
        return this.has(a) && delete this.__data__[a]
    };
    E.prototype.get = function(a) {
        var c = this.__data__;
        return L ? (a = c[a], "__lodash_hash_undefined__" === a ? void 0 : a) : ba.call(c, a) ? c[a] : void 0
    };
    E.prototype.has = function(a) {
        var c = this.__data__;
        return L ? void 0 !== c[a] : ba.call(c, a)
    };
    E.prototype.set = function(a, c) {
        this.__data__[a] = L && void 0 === c ? "__lodash_hash_undefined__" : c;
        return this
    };
    H.prototype.clear = function() {
        this.__data__ = []
    };
    H.prototype["delete"] = function(a) {
        var c = this.__data__;
        a = O(c, a);
        if (0 > a) return !1;
        a == c.length - 1 ? c.pop() : gb.call(c, a, 1);
        return !0
    };
    H.prototype.get = function(a) {
        var c = this.__data__;
        a = O(c, a);
        return 0 > a ? void 0 : c[a][1]
    };
    H.prototype.has = function(a) {
        return -1 < O(this.__data__, a)
    };
    H.prototype.set = function(a, c) {
        var b = this.__data__,
            e = O(b, a);
        0 > e ? b.push([a, c]) : b[e][1] = c;
        return this
    };
    F.prototype.clear = function() {
        this.__data__ = {
            hash: new E,
            map: new(hb || H),
            string: new E
        }
    };
    F.prototype["delete"] = function(a) {
        return P(this, a)["delete"](a)
    };
    F.prototype.get = function(a) {
        return P(this, a).get(a)
    };
    F.prototype.has = function(a) {
        return P(this, a).has(a)
    };
    F.prototype.set = function(a, c) {
        P(this, a).set(a, c);
        return this
    };
    Y.Cache = F;
    var G = [],
        ib = function() {
            return G.some(function(a) {
                return 0 < a.activeTargets.length
            })
        },
        jb = function() {
            return G.some(function(a) {
                return 0 <
                    a.skippedTargets.length
            })
        },
        M;
    (function(a) {
        a.BORDER_BOX = "border-box";
        a.CONTENT_BOX = "content-box";
        a.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
    })(M || (M = {}));
    var kb = function() {
            return function(a, c) {
                this.inlineSize = a;
                this.blockSize = c;
                Object.freeze(this)
            }
        }(),
        ua = function() {
            function a(c, b, e, d) {
                this.x = c;
                this.y = b;
                this.width = e;
                this.height = d;
                this.top = this.y;
                this.left = this.x;
                this.bottom = this.top + this.height;
                this.right = this.left + this.width;
                return Object.freeze(this)
            }
            a.prototype.toJSON = function() {
                return {
                    x: this.x,
                    y: this.y,
                    top: this.top,
                    right: this.right,
                    bottom: this.bottom,
                    left: this.left,
                    width: this.width,
                    height: this.height
                }
            };
            a.fromRect = function(c) {
                return new a(c.x, c.y, c.width, c.height)
            };
            return a
        }(),
        ca = function(a) {
            return a instanceof SVGElement && "getBBox" in a
        },
        va = function(a) {
            if (ca(a)) {
                a = a.getBBox();
                var c = a.height;
                return !a.width && !c
            }
            c = a.offsetHeight;
            return !(a.offsetWidth || c || a.getClientRects().length)
        },
        wa = function(a) {
            var c;
            if (a instanceof Element) return !0;
            var b = null === (c = null === a || void 0 === a ? void 0 : a.ownerDocument) ||
                void 0 === c ? void 0 : c.defaultView;
            return !!(b && a instanceof b.Element)
        },
        N = "undefined" !== typeof window ? window : {},
        R = new WeakMap,
        xa = /auto|scroll/,
        lb = /^tb|vertical/,
        mb = /msie|trident/i.test(N.navigator && N.navigator.userAgent),
        x = function(a) {
            return parseFloat(a || "0")
        },
        I = function(a, c, b) {
            void 0 === a && (a = 0);
            void 0 === c && (c = 0);
            void 0 === b && (b = !1);
            return new kb((b ? c : a) || 0, (b ? a : c) || 0)
        },
        ya = Object.freeze({
            devicePixelContentBoxSize: I(),
            borderBoxSize: I(),
            contentBoxSize: I(),
            contentRect: new ua(0, 0, 0, 0)
        }),
        za = function(a, c) {
            void 0 ===
                c && (c = !1);
            if (R.has(a) && !c) return R.get(a);
            if (va(a)) return R.set(a, ya), ya;
            var b = getComputedStyle(a),
                e = ca(a) && a.ownerSVGElement && a.getBBox(),
                d = !mb && "border-box" === b.boxSizing;
            c = lb.test(b.writingMode || "");
            var f = !e && xa.test(b.overflowY || ""),
                h = !e && xa.test(b.overflowX || ""),
                k = e ? 0 : x(b.paddingTop),
                m = e ? 0 : x(b.paddingRight),
                p = e ? 0 : x(b.paddingBottom),
                u = e ? 0 : x(b.paddingLeft),
                l = e ? 0 : x(b.borderTopWidth),
                n = e ? 0 : x(b.borderRightWidth),
                r = e ? 0 : x(b.borderBottomWidth),
                z = e ? 0 : x(b.borderLeftWidth);
            m = u + m;
            p = k + p;
            n = z + n;
            l += r;
            h = h ? a.offsetHeight -
                l - a.clientHeight : 0;
            f = f ? a.offsetWidth - n - a.clientWidth : 0;
            r = d ? m + n : 0;
            z = d ? p + l : 0;
            d = e ? e.width : x(b.width) - r - f;
            b = e ? e.height : x(b.height) - z - h;
            e = d + m + f + n;
            m = b + p + h + l;
            c = Object.freeze({
                devicePixelContentBoxSize: I(Math.round(d * devicePixelRatio), Math.round(b * devicePixelRatio), c),
                borderBoxSize: I(e, m, c),
                contentBoxSize: I(d, b, c),
                contentRect: new ua(u, k, d, b)
            });
            R.set(a, c);
            return c
        },
        Aa = function(a, c, b) {
            var e = za(a, b);
            a = e.borderBoxSize;
            b = e.contentBoxSize;
            e = e.devicePixelContentBoxSize;
            switch (c) {
                case M.DEVICE_PIXEL_CONTENT_BOX:
                    return e;
                case M.BORDER_BOX:
                    return a;
                default:
                    return b
            }
        },
        nb = function() {
            return function(a) {
                var c = za(a);
                this.target = a;
                this.contentRect = c.contentRect;
                this.borderBoxSize = Object.freeze([c.borderBoxSize]);
                this.contentBoxSize = Object.freeze([c.contentBoxSize]);
                this.devicePixelContentBoxSize = Object.freeze([c.devicePixelContentBoxSize])
            }
        }(),
        Ba = function(a) {
            if (va(a)) return Infinity;
            var c = 0;
            for (a = a.parentNode; a;) c += 1, a = a.parentNode;
            return c
        },
        ob = function() {
            var a = Infinity,
                c = [];
            G.forEach(function(e) {
                if (0 !== e.activeTargets.length) {
                    var d = [];
                    e.activeTargets.forEach(function(f) {
                        var h = new nb(f.target),
                            k = Ba(f.target);
                        d.push(h);
                        f.lastReportedSize = Aa(f.target, f.observedBox);
                        k < a && (a = k)
                    });
                    c.push(function() {
                        e.callback.call(e.observer, d, e.observer)
                    });
                    e.activeTargets.splice(0, e.activeTargets.length)
                }
            });
            for (var b = 0; b < c.length; b++)(0, c[b])();
            return a
        },
        Ca = function(a) {
            G.forEach(function(c) {
                c.activeTargets.splice(0, c.activeTargets.length);
                c.skippedTargets.splice(0, c.skippedTargets.length);
                c.observationTargets.forEach(function(b) {
                    b.isActive() && (Ba(b.target) >
                        a ? c.activeTargets.push(b) : c.skippedTargets.push(b))
                })
            })
        },
        da, Da = [],
        pb = function() {
            return Da.splice(0).forEach(function(a) {
                return a()
            })
        },
        qb = function(a) {
            if (!da) {
                var c = 0,
                    b = document.createTextNode("");
                (new MutationObserver(function() {
                    return pb()
                })).observe(b, {
                    characterData: !0
                });
                da = function() {
                    b.textContent = "" + (c ? c-- : c++)
                }
            }
            Da.push(a);
            da()
        },
        rb = function(a) {
            qb(function() {
                requestAnimationFrame(a)
            })
        },
        S = 0,
        sb = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0
        },
        Ea = "resize load transitionend animationend animationstart animationiteration keyup keydown mouseup mousedown mouseover mouseout blur focus".split(" "),
        Fa = function(a) {
            void 0 === a && (a = 0);
            return Date.now() + a
        },
        ea = !1,
        fa = new(function() {
            function a() {
                var c = this;
                this.stopped = !0;
                this.listener = function() {
                    return c.schedule()
                }
            }
            a.prototype.run = function(c) {
                var b = this;
                void 0 === c && (c = 250);
                if (!ea) {
                    ea = !0;
                    var e = Fa(c);
                    rb(function() {
                        var d = !1;
                        try {
                            var f = 0;
                            for (Ca(f); ib();) f = ob(), Ca(f);
                            if (jb()) {
                                if ("function" === typeof ErrorEvent) var h = new ErrorEvent("error", {
                                    message: "ResizeObserver loop completed with undelivered notifications."
                                });
                                else h = document.createEvent("Event"), h.initEvent("error", !1, !1), h.message = "ResizeObserver loop completed with undelivered notifications.";
                                window.dispatchEvent(h)
                            }
                            d = 0 < f
                        } finally {
                            ea = !1;
                            c = e - Fa();
                            if (!S) return;
                            d ? b.run(1E3) : 0 < c ? b.run(c) : b.start()
                        }
                    })
                }
            };
            a.prototype.schedule = function() {
                this.stop();
                this.run()
            };
            a.prototype.observe = function() {
                var c = this,
                    b = function() {
                        return c.observer && c.observer.observe(document.body, sb)
                    };
                document.body ? b() : N.addEventListener("DOMContentLoaded", b)
            };
            a.prototype.start = function() {
                var c = this;
                this.stopped && (this.stopped = !1, this.observer =
                    new MutationObserver(this.listener), this.observe(), Ea.forEach(function(b) {
                        return N.addEventListener(b, c.listener, !0)
                    }))
            };
            a.prototype.stop = function() {
                var c = this;
                this.stopped || (this.observer && this.observer.disconnect(), Ea.forEach(function(b) {
                    return N.removeEventListener(b, c.listener, !0)
                }), this.stopped = !0)
            };
            return a
        }()),
        Ga = function(a) {
            !S && 0 < a && fa.start();
            S += a;
            !S && fa.stop()
        },
        tb = function() {
            function a(c, b) {
                this.target = c;
                this.observedBox = b || M.CONTENT_BOX;
                this.lastReportedSize = {
                    inlineSize: 0,
                    blockSize: 0
                }
            }
            a.prototype.isActive = function() {
                var c = Aa(this.target, this.observedBox, !0),
                    b = this.target,
                    e;
                if (e = !ca(b)) {
                    a: {
                        switch (b.tagName) {
                            case "INPUT":
                                if ("image" !== b.type) break;
                            case "VIDEO":
                            case "AUDIO":
                            case "EMBED":
                            case "OBJECT":
                            case "CANVAS":
                            case "IFRAME":
                            case "IMG":
                                e = !0;
                                break a
                        }
                        e = !1
                    }
                    e = !e
                }
                e && "inline" === getComputedStyle(b).display && (this.lastReportedSize = c);
                return this.lastReportedSize.inlineSize !== c.inlineSize || this.lastReportedSize.blockSize !== c.blockSize ? !0 : !1
            };
            return a
        }(),
        ub = function() {
            return function(a, c) {
                this.activeTargets = [];
                this.skippedTargets = [];
                this.observationTargets = [];
                this.observer = a;
                this.callback = c
            }
        }(),
        T = new WeakMap,
        Ha = function(a, c) {
            for (var b = 0; b < a.length; b += 1)
                if (a[b].target === c) return b;
            return -1
        },
        U = function() {
            function a() {}
            a.connect = function(c, b) {
                b = new ub(c, b);
                T.set(c, b)
            };
            a.observe = function(c, b, e) {
                c = T.get(c);
                var d = 0 === c.observationTargets.length;
                0 > Ha(c.observationTargets, b) && (d && G.push(c), c.observationTargets.push(new tb(b, e && e.box)), Ga(1), fa.schedule())
            };
            a.unobserve = function(c, b) {
                c = T.get(c);
                b = Ha(c.observationTargets,
                    b);
                var e = 1 === c.observationTargets.length;
                0 <= b && (e && G.splice(G.indexOf(c), 1), c.observationTargets.splice(b, 1), Ga(-1))
            };
            a.disconnect = function(c) {
                var b = this,
                    e = T.get(c);
                e.observationTargets.slice().forEach(function(d) {
                    return b.unobserve(c, d.target)
                });
                e.activeTargets.splice(0, e.activeTargets.length)
            };
            return a
        }(),
        vb = function() {
            function a(c) {
                if (0 === arguments.length) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                if ("function" !== typeof c) throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                U.connect(this, c)
            }
            a.prototype.observe = function(c, b) {
                if (0 === arguments.length) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!wa(c)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                U.observe(this, c, b)
            };
            a.prototype.unobserve = function(c) {
                if (0 === arguments.length) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!wa(c)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                U.unobserve(this, c)
            };
            a.prototype.disconnect = function() {
                U.disconnect(this)
            };
            a.toString = function() {
                return "function ResizeObserver () { [polyfill code] }"
            };
            return a
        }(),
        V = function(a) {
            return Array.prototype.reduce.call(a, function(c, b) {
                var e = b.name.match(/data-asp_simplebar-(.+)/);
                if (e) switch (e = e[1].replace(/\W+(.)/g, function(d, f) {
                    return f.toUpperCase()
                }), b.value) {
                    case "true":
                        c[e] = !0;
                        break;
                    case "false":
                        c[e] = !1;
                        break;
                    case void 0:
                        c[e] = !0;
                        break;
                    default:
                        c[e] = b.value
                }
                return c
            }, {})
        },
        K = null,
        Ia = null;
    window.addEventListener("resize", function() {
        Ia !== window.devicePixelRatio && (Ia = window.devicePixelRatio, K = null)
    });
    var q = function() {
        function a(b, e) {
            var d = this;
            this.onScroll = function() {
                var f = B(d.el);
                d.scrollXTicking || (f.requestAnimationFrame(d.scrollX), d.scrollXTicking = !0);
                d.scrollYTicking || (f.requestAnimationFrame(d.scrollY), d.scrollYTicking = !0)
            };
            this.scrollX = function() {
                d.axis.x.isOverflowing &&
                    (d.showScrollbar("x"), d.positionScrollbar("x"));
                d.scrollXTicking = !1
            };
            this.scrollY = function() {
                d.axis.y.isOverflowing && (d.showScrollbar("y"), d.positionScrollbar("y"));
                d.scrollYTicking = !1
            };
            this.onMouseEnter = function() {
                d.showScrollbar("x");
                d.showScrollbar("y")
            };
            this.onMouseMove = function(f) {
                d.mouseX = f.clientX;
                d.mouseY = f.clientY;
                if (d.axis.x.isOverflowing || d.axis.x.forceVisible) d.onMouseMoveForAxis("x");
                if (d.axis.y.isOverflowing || d.axis.y.forceVisible) d.onMouseMoveForAxis("y")
            };
            this.onMouseLeave = function() {
                d.onMouseMove.cancel();
                if (d.axis.x.isOverflowing || d.axis.x.forceVisible) d.onMouseLeaveForAxis("x");
                if (d.axis.y.isOverflowing || d.axis.y.forceVisible) d.onMouseLeaveForAxis("y");
                d.mouseX = -1;
                d.mouseY = -1
            };
            this.onWindowResize = function() {
                d.scrollbarWidth = d.getScrollbarWidth();
                d.hideNativeScrollbar()
            };
            this.hideScrollbars = function() {
                d.axis.x.track.rect = d.axis.x.track.el.getBoundingClientRect();
                d.axis.y.track.rect = d.axis.y.track.el.getBoundingClientRect();
                d.isWithinBounds(d.axis.y.track.rect) || (d.axis.y.scrollbar.el.classList.remove(d.classNames.visible),
                    d.axis.y.isVisible = !1);
                d.isWithinBounds(d.axis.x.track.rect) || (d.axis.x.scrollbar.el.classList.remove(d.classNames.visible), d.axis.x.isVisible = !1)
            };
            this.onPointerEvent = function(f) {
                d.axis.x.track.rect = d.axis.x.track.el.getBoundingClientRect();
                d.axis.y.track.rect = d.axis.y.track.el.getBoundingClientRect();
                if (d.axis.x.isOverflowing || d.axis.x.forceVisible) var h = d.isWithinBounds(d.axis.x.track.rect);
                if (d.axis.y.isOverflowing || d.axis.y.forceVisible) var k = d.isWithinBounds(d.axis.y.track.rect);
                if (h || k)
                    if (f.preventDefault(),
                        f.stopPropagation(), "mousedown" === f.type) {
                        if (h)
                            if (d.axis.x.scrollbar.rect = d.axis.x.scrollbar.el.getBoundingClientRect(), d.isWithinBounds(d.axis.x.scrollbar.rect)) d.onDragStart(f, "x");
                            else d.onTrackClick(f, "x");
                        if (k)
                            if (d.axis.y.scrollbar.rect = d.axis.y.scrollbar.el.getBoundingClientRect(), d.isWithinBounds(d.axis.y.scrollbar.rect)) d.onDragStart(f, "y");
                            else d.onTrackClick(f, "y")
                    }
            };
            this.drag = function(f) {
                var h = d.axis[d.draggedAxis].track,
                    k = h.rect[d.axis[d.draggedAxis].sizeAttr],
                    m = d.axis[d.draggedAxis].scrollbar,
                    p = d.contentWrapperEl[d.axis[d.draggedAxis].scrollSizeAttr],
                    u = parseInt(d.elStyles[d.axis[d.draggedAxis].sizeAttr], 10);
                f.preventDefault();
                f.stopPropagation();
                f = (("y" === d.draggedAxis ? f.pageY : f.pageX) - h.rect[d.axis[d.draggedAxis].offsetAttr] - d.axis[d.draggedAxis].dragOffset) / (k - m.size) * (p - u);
                "x" === d.draggedAxis && (f = d.isRtl && a.getRtlHelpers().isRtlScrollbarInverted ? f - (k + m.size) : f, f = d.isRtl && a.getRtlHelpers().isRtlScrollingInverted ? -f : f);
                d.contentWrapperEl[d.axis[d.draggedAxis].scrollOffsetAttr] = f
            };
            this.onEndDrag =
                function(f) {
                    var h = Q(d.el),
                        k = B(d.el);
                    f.preventDefault();
                    f.stopPropagation();
                    d.el.classList.remove(d.classNames.dragging);
                    h.removeEventListener("mousemove", d.drag, !0);
                    h.removeEventListener("mouseup", d.onEndDrag, !0);
                    d.removePreventClickId = k.setTimeout(function() {
                        h.removeEventListener("click", d.preventClick, !0);
                        h.removeEventListener("dblclick", d.preventClick, !0);
                        d.removePreventClickId = null
                    })
                };
            this.preventClick = function(f) {
                f.preventDefault();
                f.stopPropagation()
            };
            this.el = b;
            this.minScrollbarWidth = 20;
            this.options =
                Object.assign({}, a.defaultOptions, {}, e);
            this.classNames = Object.assign({}, a.defaultOptions.classNames, {}, this.options.classNames);
            this.axis = {
                x: {
                    scrollOffsetAttr: "scrollLeft",
                    sizeAttr: "width",
                    scrollSizeAttr: "scrollWidth",
                    offsetSizeAttr: "offsetWidth",
                    offsetAttr: "left",
                    overflowAttr: "overflowX",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                },
                y: {
                    scrollOffsetAttr: "scrollTop",
                    sizeAttr: "height",
                    scrollSizeAttr: "scrollHeight",
                    offsetSizeAttr: "offsetHeight",
                    offsetAttr: "top",
                    overflowAttr: "overflowY",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                }
            };
            this.removePreventClickId = null;
            a.instances.has(this.el) || (this.recalculate = qa(this.recalculate.bind(this), 64), this.onMouseMove = qa(this.onMouseMove.bind(this), 64), this.hideScrollbars = ra(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = ra(this.onWindowResize.bind(this), 64, {
                leading: !0
            }), a.getRtlHelpers = Y(a.getRtlHelpers), this.init())
        }
        a.getRtlHelpers = function() {
            var b = document.createElement("div");
            b.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
            var e = b.firstElementChild;
            document.body.appendChild(e);
            var d = e.firstElementChild;
            e.scrollLeft = 0;
            b = a.getOffset(e);
            var f = a.getOffset(d);
            e.scrollLeft = 999;
            e = a.getOffset(d);
            return {
                isRtlScrollingInverted: b.left !== f.left && 0 !== f.left - e.left,
                isRtlScrollbarInverted: b.left !== f.left
            }
        };
        a.getOffset = function(b) {
            var e = b.getBoundingClientRect(),
                d = Q(b);
            b = B(b);
            return {
                top: e.top + (b.pageYOffset || d.documentElement.scrollTop),
                left: e.left + (b.pageXOffset || d.documentElement.scrollLeft)
            }
        };
        var c = a.prototype;
        c.init = function() {
            a.instances.set(this.el, this);
            this.initDOM();
            this.scrollbarWidth = this.getScrollbarWidth();
            this.recalculate();
            this.initListeners()
        };
        c.initDOM = function() {
            var b = this;
            if (Array.prototype.filter.call(this.el.children, function(f) {
                    return f.classList.contains(b.classNames.wrapper)
                }).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." +
                    this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl),
                this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
            else {
                this.wrapperEl = document.createElement("div");
                this.contentWrapperEl = document.createElement("div");
                this.offsetEl = document.createElement("div");
                this.maskEl = document.createElement("div");
                this.contentEl = document.createElement("div");
                this.placeholderEl = document.createElement("div");
                this.heightAutoObserverWrapperEl =
                    document.createElement("div");
                this.heightAutoObserverEl = document.createElement("div");
                this.wrapperEl.classList.add(this.classNames.wrapper);
                this.contentWrapperEl.classList.add(this.classNames.contentWrapper);
                this.offsetEl.classList.add(this.classNames.offset);
                this.maskEl.classList.add(this.classNames.mask);
                this.contentEl.classList.add(this.classNames.contentEl);
                this.placeholderEl.classList.add(this.classNames.placeholder);
                this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);
                for (this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                this.contentWrapperEl.appendChild(this.contentEl);
                this.offsetEl.appendChild(this.contentWrapperEl);
                this.maskEl.appendChild(this.offsetEl);
                this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
                this.wrapperEl.appendChild(this.maskEl);
                this.wrapperEl.appendChild(this.placeholderEl);
                this.el.appendChild(this.wrapperEl)
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
                var e = document.createElement("div"),
                    d = document.createElement("div");
                e.classList.add(this.classNames.track);
                d.classList.add(this.classNames.scrollbar);
                e.appendChild(d);
                this.axis.x.track.el = e.cloneNode(!0);
                this.axis.x.track.el.classList.add(this.classNames.horizontal);
                this.axis.y.track.el = e.cloneNode(!0);
                this.axis.y.track.el.classList.add(this.classNames.vertical);
                this.el.appendChild(this.axis.x.track.el);
                this.el.appendChild(this.axis.y.track.el)
            }
            this.axis.x.scrollbar.el =
                this.axis.x.track.el.querySelector("." + this.classNames.scrollbar);
            this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar);
            this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible));
            this.el.setAttribute("data-asp_simplebar", "init")
        };
        c.initListeners = function() {
            var b = this,
                e = B(this.el);
            this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter);
            ["mousedown",
                "click", "dblclick"
            ].forEach(function(f) {
                b.el.addEventListener(f, b.onPointerEvent, !0)
            });
            ["touchstart", "touchend", "touchmove"].forEach(function(f) {
                b.el.addEventListener(f, b.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            });
            this.el.addEventListener("mousemove", this.onMouseMove);
            this.el.addEventListener("mouseleave", this.onMouseLeave);
            this.contentWrapperEl.addEventListener("scroll", this.onScroll);
            e.addEventListener("resize", this.onWindowResize);
            var d = !1;
            this.resizeObserver = new(e.ResizeObserver || vb)(function() {
                d &&
                    b.recalculate()
            });
            this.resizeObserver.observe(this.el);
            this.resizeObserver.observe(this.contentEl);
            e.requestAnimationFrame(function() {
                d = !0
            });
            this.mutationObserver = new e.MutationObserver(this.recalculate);
            this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0
            })
        };
        c.recalculate = function() {
            this.elStyles = B(this.el).getComputedStyle(this.el);
            this.isRtl = "rtl" === this.elStyles.direction;
            var b = 1 >= this.heightAutoObserverEl.offsetHeight,
                e = 1 >= this.heightAutoObserverEl.offsetWidth,
                d = this.contentEl.offsetWidth,
                f = this.contentWrapperEl.offsetWidth,
                h = this.elStyles.overflowX,
                k = this.elStyles.overflowY;
            this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft;
            this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
            var m = this.contentEl.scrollHeight,
                p = this.contentEl.scrollWidth;
            this.contentWrapperEl.style.height =
                b ? "auto" : "100%";
            this.placeholderEl.style.width = e ? d + "px" : "auto";
            this.placeholderEl.style.height = m + "px";
            b = this.contentWrapperEl.offsetHeight;
            this.axis.x.isOverflowing = p > d;
            this.axis.y.isOverflowing = m > b;
            this.axis.x.isOverflowing = "hidden" === h ? !1 : this.axis.x.isOverflowing;
            this.axis.y.isOverflowing = "hidden" === k ? !1 : this.axis.y.isOverflowing;
            this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible;
            this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible;
            this.hideNativeScrollbar();
            d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
            h = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            this.axis.x.isOverflowing = this.axis.x.isOverflowing && p > f - h;
            this.axis.y.isOverflowing = this.axis.y.isOverflowing && m > b - d;
            this.axis.x.scrollbar.size = this.getScrollbarSize("x");
            this.axis.y.scrollbar.size = this.getScrollbarSize("y");
            this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px";
            this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px";
            this.positionScrollbar("x");
            this.positionScrollbar("y");
            this.toggleTrackVisibility("x");
            this.toggleTrackVisibility("y")
        };
        c.getScrollbarSize = function(b) {
            void 0 === b && (b = "y");
            if (!this.axis[b].isOverflowing) return 0;
            var e = this.axis[b].track.el[this.axis[b].offsetSizeAttr];
            b = Math.max(~~(e / this.contentEl[this.axis[b].scrollSizeAttr] * e), this.options.scrollbarMinSize);
            this.options.scrollbarMaxSize && (b = Math.min(b, this.options.scrollbarMaxSize));
            return b
        };
        c.positionScrollbar = function(b) {
            void 0 === b && (b = "y");
            if (this.axis[b].isOverflowing) {
                var e =
                    this.contentWrapperEl[this.axis[b].scrollSizeAttr],
                    d = this.axis[b].track.el[this.axis[b].offsetSizeAttr],
                    f = parseInt(this.elStyles[this.axis[b].sizeAttr], 10),
                    h = this.axis[b].scrollbar,
                    k = this.contentWrapperEl[this.axis[b].scrollOffsetAttr];
                k = "x" === b && this.isRtl && a.getRtlHelpers().isRtlScrollingInverted ? -k : k;
                e = ~~(k / (e - f) * (d - h.size));
                e = "x" === b && this.isRtl && a.getRtlHelpers().isRtlScrollbarInverted ? e + (d - h.size) : e;
                h.el.style.transform = "x" === b ? "translate3d(" + e + "px, 0, 0)" : "translate3d(0, " + e + "px, 0)"
            }
        };
        c.toggleTrackVisibility =
            function(b) {
                void 0 === b && (b = "y");
                var e = this.axis[b].track.el,
                    d = this.axis[b].scrollbar.el;
                this.axis[b].isOverflowing || this.axis[b].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[b].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[b].overflowAttr] = "hidden");
                d.style.display = this.axis[b].isOverflowing ? "block" : "none"
            };
        c.hideNativeScrollbar = function() {
            this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ?
                "-" + this.scrollbarWidth + "px" : 0;
            this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0
        };
        c.onMouseMoveForAxis = function(b) {
            void 0 === b && (b = "y");
            this.axis[b].track.rect = this.axis[b].track.el.getBoundingClientRect();
            this.axis[b].scrollbar.rect = this.axis[b].scrollbar.el.getBoundingClientRect();
            this.isWithinBounds(this.axis[b].scrollbar.rect) ? this.axis[b].scrollbar.el.classList.add(this.classNames.hover) : this.axis[b].scrollbar.el.classList.remove(this.classNames.hover);
            this.isWithinBounds(this.axis[b].track.rect) ? (this.showScrollbar(b), this.axis[b].track.el.classList.add(this.classNames.hover)) : this.axis[b].track.el.classList.remove(this.classNames.hover)
        };
        c.onMouseLeaveForAxis = function(b) {
            void 0 === b && (b = "y");
            this.axis[b].track.el.classList.remove(this.classNames.hover);
            this.axis[b].scrollbar.el.classList.remove(this.classNames.hover)
        };
        c.showScrollbar = function(b) {
            void 0 === b && (b = "y");
            var e = this.axis[b].scrollbar.el;
            this.axis[b].isVisible || (e.classList.add(this.classNames.visible),
                this.axis[b].isVisible = !0);
            this.options.autoHide && this.hideScrollbars()
        };
        c.onDragStart = function(b, e) {
            void 0 === e && (e = "y");
            var d = Q(this.el),
                f = B(this.el);
            this.axis[e].dragOffset = ("y" === e ? b.pageY : b.pageX) - this.axis[e].scrollbar.rect[this.axis[e].offsetAttr];
            this.draggedAxis = e;
            this.el.classList.add(this.classNames.dragging);
            d.addEventListener("mousemove", this.drag, !0);
            d.addEventListener("mouseup", this.onEndDrag, !0);
            null === this.removePreventClickId ? (d.addEventListener("click", this.preventClick, !0), d.addEventListener("dblclick",
                this.preventClick, !0)) : (f.clearTimeout(this.removePreventClickId), this.removePreventClickId = null)
        };
        c.onTrackClick = function(b, e) {
            var d = this;
            void 0 === e && (e = "y");
            if (this.options.clickOnTrack) {
                var f = B(this.el);
                this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect();
                b = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr];
                var h = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                    k = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                    m = 0 > ("y" === e ? this.mouseY - b : this.mouseX - b) ? -1 : 1,
                    p = -1 ===
                    m ? k - h : k + h;
                (function l() {
                    if (-1 === m) {
                        if (k > p) {
                            var n;
                            k -= d.options.clickOnTrackSpeed;
                            d.contentWrapperEl.scrollTo((n = {}, n[d.axis[e].offsetAttr] = k, n));
                            f.requestAnimationFrame(l)
                        }
                    } else if (k < p) {
                        var r;
                        k += d.options.clickOnTrackSpeed;
                        d.contentWrapperEl.scrollTo((r = {}, r[d.axis[e].offsetAttr] = k, r));
                        f.requestAnimationFrame(l)
                    }
                })()
            }
        };
        c.getContentElement = function() {
            return this.contentEl
        };
        c.getScrollElement = function() {
            return this.contentWrapperEl
        };
        c.getScrollbarWidth = function() {
            try {
                return "none" === getComputedStyle(this.contentWrapperEl,
                    "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : pa(this.el)
            } catch (b) {
                return pa(this.el)
            }
        };
        c.removeListeners = function() {
            var b = this,
                e = B(this.el);
            this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter);
            ["mousedown", "click", "dblclick"].forEach(function(d) {
                b.el.removeEventListener(d, b.onPointerEvent, !0)
            });
            ["touchstart", "touchend", "touchmove"].forEach(function(d) {
                b.el.removeEventListener(d,
                    b.onPointerEvent, {
                        capture: !0,
                        passive: !0
                    })
            });
            this.el.removeEventListener("mousemove", this.onMouseMove);
            this.el.removeEventListener("mouseleave", this.onMouseLeave);
            this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll);
            e.removeEventListener("resize", this.onWindowResize);
            this.mutationObserver && this.mutationObserver.disconnect();
            this.resizeObserver && this.resizeObserver.disconnect();
            this.recalculate.cancel();
            this.onMouseMove.cancel();
            this.hideScrollbars.cancel();
            this.onWindowResize.cancel()
        };
        c.unMount = function() {
            this.removeListeners();
            a.instances.delete(this.el)
        };
        c.isWithinBounds = function(b) {
            return this.mouseX >= b.left && this.mouseX <= b.left + b.width && this.mouseY >= b.top && this.mouseY <= b.top + b.height
        };
        c.findChild = function(b, e) {
            var d = b.matches || b.webkitMatchesSelector || b.mozMatchesSelector || b.msMatchesSelector;
            return Array.prototype.filter.call(b.children, function(f) {
                return d.call(f, e)
            })[0]
        };
        return a
    }();
    q.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        clickOnTrackSpeed: 40,
        classNames: {
            contentEl: "asp_simplebar-content",
            contentWrapper: "asp_simplebar-content-wrapper",
            offset: "asp_simplebar-offset",
            mask: "asp_simplebar-mask",
            wrapper: "asp_simplebar-wrapper",
            placeholder: "asp_simplebar-placeholder",
            scrollbar: "asp_simplebar-scrollbar",
            track: "asp_simplebar-track",
            heightAutoObserverWrapperEl: "asp_simplebar-height-auto-observer-wrapper",
            heightAutoObserverEl: "asp_simplebar-height-auto-observer",
            visible: "asp_simplebar-visible",
            horizontal: "asp_simplebar-horizontal",
            vertical: "asp_simplebar-vertical",
            hover: "asp_simplebar-hover",
            dragging: "asp_simplebar-dragging"
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1E3
    };
    q.instances = new WeakMap;
    q.initDOMLoadedElements = function() {
        document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements);
        window.removeEventListener("load", this.initDOMLoadedElements);
        Array.prototype.forEach.call(document.querySelectorAll("[data-asp_simplebar]"), function(a) {
            "init" === a.getAttribute("data-asp_simplebar") || q.instances.has(a) || new q(a, V(a.attributes))
        })
    };
    q.removeObserver = function() {
        this.globalObserver.disconnect()
    };
    q.initHtmlApi = function() {
        this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this);
        "undefined" !== typeof MutationObserver && (this.globalObserver = new MutationObserver(q.handleMutations), this.globalObserver.observe(document, {
            childList: !0,
            subtree: !0
        }));
        "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load",
            this.initDOMLoadedElements))
    };
    q.handleMutations = function(a) {
        a.forEach(function(c) {
            Array.prototype.forEach.call(c.addedNodes, function(b) {
                1 === b.nodeType && (b.hasAttribute("data-asp_simplebar") ? !q.instances.has(b) && document.documentElement.contains(b) && new q(b, V(b.attributes)) : Array.prototype.forEach.call(b.querySelectorAll("[data-asp_simplebar]"), function(e) {
                    "init" !== e.getAttribute("data-asp_simplebar") && !q.instances.has(e) && document.documentElement.contains(e) && new q(e, V(e.attributes))
                }))
            });
            Array.prototype.forEach.call(c.removedNodes,
                function(b) {
                    1 === b.nodeType && ("init" === b.getAttribute("data-asp_simplebar") ? q.instances.has(b) && !document.documentElement.contains(b) && q.instances.get(b).unMount() : Array.prototype.forEach.call(b.querySelectorAll('[data-asp_simplebar="init"]'), function(e) {
                        q.instances.has(e) && !document.documentElement.contains(e) && q.instances.get(e).unMount()
                    }))
                })
        })
    };
    q.getOptions = V;
    q.initHtmlApi();
    return q
});