const pxToRem = (px, base = 16) => `${px / base}rem`
module.exports = {
    purge: {
        content: [
            "./src/**/*.{html,js,svelte,ts,scss}"
        ]
    },
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem',
                md: '4.5rem',
                xl: '7rem',
                '2xl': '7rem',
            },
        },
        extend: {
            colors: {
                blue: {
                    1: '#C7F4F4',
                    2: '#96D5F6',
                    3: '#64A9D1',
                    4: '#2D7AA0',
                    5: '#E5E5E5',
                    6: '#002645',
                },
                green: {
                    1: '#DBE4DA',
                    2: '#C3D5C2',
                    3: '#3CB878',
                    4: '#00874C',
                    5: '#005923',
                    6: '#002E00',
                },
                grey: {
                    1: '#E0E0E0',
                    2: '#9E9E9E',
                    3: '#616161',
                    4: '#424242',
                    5: '#212121',
                    6: '#000000',
                },
            },
            fontSize: {
                13: pxToRem(13),
                14: pxToRem(14),
                15: pxToRem(15),
                16: pxToRem(16),
                18: pxToRem(18),
                20: pxToRem(20),
                22: pxToRem(22),
                24: pxToRem(24),
                28: pxToRem(28),
                32: pxToRem(32),
                40: pxToRem(40),
                48: pxToRem(48),
                54: pxToRem(54),
                56: pxToRem(56),
                64: pxToRem(64),
            },
            lineHeight: {
                100: '100%',
                110: '110%',
                120: '120%',
                125: '125%',
                130: '130%',
                140: '140%',
                150: '150%',
                160: '160%',
            },
            letterSpacing: {
                0.02: '0.02em',
                0.04: '0.04em'
            },
        }
    },
    variants: {
        extend: {
            backgroundColor: ["odd", "even"],
            margin: ["last"]
        }
    },
    plugins: []
};