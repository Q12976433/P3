"use strict";
exports.id = 11;
exports.ids = [11];
exports.modules = {

/***/ 5011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9784);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8125);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5168);
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1567);
/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_icons_material_Upload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6198);
/* harmony import */ var _mui_icons_material_Upload__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Upload__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7752);
/* harmony import */ var _mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_16__);



















function Navbar({ isFixed , color ="#FFFFFF"  }) {
    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // api/editProfile/me => res: avatar => setAvatar => avatar => src={avatar}
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");
        if (accessToken !== null) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);
    const removeToken = ()=>{
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setIsLoggedIn(false);
    };
    const [fix, setFix] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const setFixed = ()=>{
        if (window.scrollY >= 410) {
            setFix(true);
        } else {
            setFix(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isFixed && "undefined" !== "undefined") {}
        return ()=>{
            if (isFixed && "undefined" !== "undefined") {}
        };
    }, [
        isFixed
    ]);
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleProfileMenuOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = ()=>{
        setMobileMoreAnchorEl(null);
    };
    const handleMenuClose = ()=>{
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleMobileMenuOpen = (event)=>{
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = "primary-search-account-menu";
    const handleLogout = ()=>{
        removeToken();
        handleMenuClose();
    };
    const renderMenu = /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_9___default()), {
        anchorEl: anchorEl,
        anchorOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        id: menuId,
        keepMounted: true,
        transformOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        open: isMenuOpen,
        onClose: handleMenuClose,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                onClick: handleMenuClose,
                children: "My Gallery"
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                onClick: handleMenuClose,
                children: "My Collections"
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                onClick: handleMenuClose,
                children: "Edit Profile"
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                onClick: handleLogout,
                children: "Logout"
            })
        ]
    });
    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_9___default()), {
        anchorEl: mobileMoreAnchorEl,
        anchorOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        id: mobileMenuId,
        keepMounted: true,
        transformOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        open: isMobileMenuOpen,
        onClose: handleMobileMenuClose,
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                        size: "large",
                        color: "inherit",
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Badge__WEBPACK_IMPORTED_MODULE_11___default()), {
                            badgeContent: 1,
                            color: "error",
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_12___default()), {})
                        })
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Notifications"
                    })
                ]
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                onClick: handleProfileMenuOpen,
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_16___default()), {
                        alt: "Avatar",
                        src: "/profile.png",
                        onClick: handleProfileMenuOpen,
                        sx: {
                            width: 40,
                            height: 40
                        }
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Profile"
                    })
                ]
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                        size: "large",
                        color: "inherit",
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Upload__WEBPACK_IMPORTED_MODULE_14___default()), {})
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Upload"
                    })
                ]
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                        size: "large",
                        color: "inherit",
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_15___default()), {})
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Log In"
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
        sx: {
            flexGrow: 1
        },
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default()), {
                color: "transparent",
                elevation: 0,
                sx: {
                    position: fix ? "fixed" : "relative",
                    bgcolor: fix ? "#FFFFFF" : ""
                },
                children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .C, {
                            href: "/",
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/logo.jpg",
                                style: {
                                    borderRadius: 10
                                },
                                alt: "Fotopie_Logo",
                                width: 45,
                                height: 45
                            })
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                            variant: "h6",
                            component: "div",
                            sx: {
                                flexGrow: 1,
                                ml: 2
                            },
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .C, {
                                variant: "h6",
                                underline: "none",
                                href: "/",
                                sx: {
                                    fontSize: 24,
                                    fontFamily: "inherit",
                                    color: fix ? "#000000" : color
                                },
                                children: "FotoPie"
                            })
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                flexGrow: 1
                            }
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                display: {
                                    xs: "none",
                                    md: "flex"
                                },
                                flexGrow: 0.05,
                                justifyContent: "space-between"
                            },
                            children: isLoggedIn ? /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                                sx: {
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    },
                                    flexGrow: 1,
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        size: "large",
                                        color: "inherit",
                                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Badge__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            badgeContent: 1,
                                            color: "error",
                                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_12___default()), {})
                                        })
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_16___default()), {
                                        alt: "Avatar",
                                        src: "/profile.png",
                                        onClick: handleProfileMenuOpen,
                                        sx: {
                                            width: 40,
                                            height: 40
                                        }
                                    }),
                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        variant: "contained",
                                        href: "upload",
                                        sx: {
                                            bgcolor: fix ? "primary.main" : "gray"
                                        },
                                        children: "Upload"
                                    })
                                ]
                            }) : /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                                variant: "contained",
                                color: "success",
                                sx: {
                                    bgcolor: fix ? "#3CB371" : "white"
                                },
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .C, {
                                    href: "login",
                                    children: "Log In"
                                })
                            })
                        }),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                display: {
                                    xs: "flex",
                                    md: "none"
                                }
                            },
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                                size: "large",
                                "aria-label": "show more",
                                "aria-controls": mobileMenuId,
                                "aria-haspopup": "true",
                                onClick: handleMobileMenuOpen,
                                color: "inherit",
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_13___default()), {})
                            })
                        })
                    ]
                })
            }),
            renderMobileMenu,
            renderMenu
        ]
    });
}


/***/ })

};
;