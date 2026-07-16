var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1969x1108": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "745",
                    "DialogWidth": "912"
                },
                "/General": {
                    "changedPositions": "{}",
                    "lastResolution": "1969x1108",
                    "positions": "{\"1969x1108\":[\"3\",\"18\",\"desktop:/OnlyOffice.desktop.lock\",\"0\",\"2\",\"desktop:/systemsettings.desktop\",\"0\",\"1\",\"desktop:/org.onlyoffice.desktopeditors.desktop\",\"2\",\"0\",\"desktop:/steam.desktop\",\"3\",\"0\",\"desktop:/OnlyOffice\",\"2\",\"0\",\"desktop:/465.8G Disk 1 (ST3500418AS).desktop\",\"2\",\"0\",\"desktop:/com.jetbrains.IntelliJ-IDEA-Community.desktop\",\"4\",\"0\",\"desktop:/OneDrive\",\"1\",\"0\",\"desktop:/trash:⁄.desktop\",\"0\",\"0\"]}",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/droy/Pictures/wallpapers/Windows XP Wallpapers/spencer-demera-XSTopfGtx_A-unsplash.jpg",
                    "SlidePaths": "/home/droy/.local/share/wallpapers/,/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "popupHeight": "518",
                            "popupWidth": "681"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "launchers": "preferred://filemanager,preferred://browser,applications:net.thunderbird.Thunderbird.desktop,applications:discord.desktop,applications:steam.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "451",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "use24hFormat": "2"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.minimizeall"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 2.5555555555555554,
            "hiding": "normal",
            "lengthMode": "fill",
            "location": "bottom",
            "maximumLength": 109.38888888888889,
            "minimumLength": 109.38888888888889,
            "offset": 0,
            "opacity": "adaptive"
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
