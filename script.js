const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

gsap.from(".nav-link", {
    stagger: 0.15,
    y: -50,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
});

gsap.from(".anim2", {
    stagger: 0.15,
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
});

Shery.imageEffect(".sheryImg1 img", {
    style: 5, //Select Style
    // debug: true, // Debug Panel
    config: {
        a: { value: 3.21, range: [0, 30] },
        b: { value: 0.5, range: [-1, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 0.7180616534616804 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.5, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: false },
        infiniteGooey: { value: false },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 1 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0.002, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
    },
});

Shery.imageEffect(".sheryImg2 img", {
    style: 3, //Select Style
    // debug: true, // Debug Panel
    config: {
        uFrequencyX: { value: 21.37, range: [0, 100] },
        uFrequencyY: { value: 7.63, range: [0, 100] },
        uFrequencyZ: { value: 29.01, range: [0, 100] },
        geoVertex: { range: [1, 64], value: 1 },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 0.75 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0.11 } },
        shapeScale: { value: { x: 0.52, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: false },
        infiniteGooey: { value: false },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1, range: [1, 5] },
        scrollType: { value: 0 },
        noEffectGooey: { value: true },
        onMouse: { value: 1 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0.002, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
        a: { value: 3.21, range: [0, 30] },
        b: { value: 0.5, range: [-1, 1] },
    },
});

Shery.imageEffect("#banner-left", {
    style: 4,
    // debug: true,
    config: { "uColor": { "value": false }, "uSpeed": { "value": 0.27, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 1.5, "range": [0, 5] }, "uFrequency": { "value": 3.5, "range": [0, 10] }, "geoVertex": { "range": [1, 64], "value": 32 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.051629805285769 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.31, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 1.76, "range": [0, 10] }, "metaball": { "value": 0.18, "range": [0, 2] }, "discard_threshold": { "value": 0.32, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.27, "range": [0, 2] }, "noise_scale": { "value": 7.63, "range": [0, 100] } },
    gooey: true
});

function futureVideoEffect() {
    document.querySelector("#ftext button").addEventListener("mouseover", function () {
        gsap.to("#future video", {
            opacity: 1,
            duration: 1,
            ease: "power3.out",
        });
    });

    document.querySelector("#ftext button").addEventListener("mouseleave", function () {
        gsap.to("#future video", {
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });
    });
}
futureVideoEffect()