"use strict";

$(document).ready(function() {
	var config = {
			activeSlideRatio: {
				min: .4,
				max: 1.35
			}
		},
		observers = {
			resize: [],
			scroll: [],
			activeSlideUpdated: [],
			visibleSlidesUpdated: [],
		},
		documentElement = $(document),
		bodyElement = $("body"),
		components = {
			main: {
				element: $(".clc-main")
			},
			slideA: {
				logo: {
					element: $(".clc-slide-a-logo")
				},
				content: {
					background: {
						element: $(".clc-slide-a-content-background"),
						video: {
							element: $(".clc-slide-a-content-background-video")
						}
					}
				},
				coverA: {
					element: $(".clc-slide-a-cover-a"),
					content: {
						element: $(".clc-slide-a-cover-a-content"),
					},
					logo: {
						x: {
							a: {
								element: $(".clc-slide-a-cover-a-logo-x-a"),
							},
							b: {
								element: $(".clc-slide-a-cover-a-logo-x-b"),
							},
						}
					}
				},
				coverB: {
					element: $(".clc-slide-a-cover-b"),
					content: {
						element: $(".clc-slide-a-cover-b-content"),
					},
				},
				footer: {
					button: {
						element: $(".clc-slide-a-footer-button"),
						edge: {
							element: $(".clc-slide-a-footer-button-edge"),
						},
						text: {
							element: $(".clc-slide-a-footer-button-text"),
						}
					}
				},
				signinButton: {
					element: $(".clc-slide-a-signin-button"),
					text: {
						element: $(".clc-slide-a-signin-button-text")
					},
					background: {
						element: $(".clc-slide-a-signin-button-background")
					},
					outline: {
						line: {
							element: $(".clc-slide-a-signin-button-outline-line")
						}
					}
				},
				signupButton: {
					element: $(".clc-slide-a-signup-button"),
					text: {
						element: $(".clc-slide-a-signup-button-text")
					},
					background: {
						element: $(".clc-slide-a-signup-button-background")
					},
					outline: {
						line: {
							element: $(".clc-slide-a-signup-button-outline-line")
						}
					}
				}
			},
			slideB: {
				cloud: {
					element: $(".clc-slide-b-cloud"),
					a: {
						element: $(".clc-slide-b-cloud-a")
					},
					b: {
						element: $(".clc-slide-b-cloud-b")
					},
					c: {
						element: $(".clc-slide-b-cloud-c")
					}
				},
			},
			slideC: {
				headache: {
					element: $(".clc-slide-c-headache"),
					wrapper: {
						element: $(".clc-slide-c-headache-wrapper"),
					},
					head: {
						element: $(".clc-slide-c-headache-head"),
					},
					earShading: {
						element: $(".clc-slide-c-headache-ear-shading"),
					},
					noseShading: {
						element: $(".clc-slide-c-headache-nose-shading"),
					},
					lipShading: {
						element: $(".clc-slide-c-headache-lip-shading"),
					},
					boltA: {
						element: $(".clc-slide-c-headache-bolt-a"),
					},
					boltB: {
						element: $(".clc-slide-c-headache-bolt-b"),
					},
					boltC: {
						element: $(".clc-slide-c-headache-bolt-c"),
					},
				}
			},
			slideD: {
				background: {
					light: {
						element: $(".clc-slide-d-background-light")
					}
				},
				slouch: {
					element: $(".clc-slide-d-slouch"),
					laptopLight: {
						element: $(".clc-slide-d-slouch-laptop-light")
					},
				}
			},
			slideE: {
				fog: {
					element: $(".clc-slide-e-fog"),
					fill: {element: $(".clc-slide-e-fog-fill")},
					cloud: {
						a: {element: $(".clc-slide-e-fog-cloud-a")},
						b: {element: $(".clc-slide-e-fog-cloud-b")},
						c: {element: $(".clc-slide-e-fog-cloud-c")},
						e: {element: $(".clc-slide-e-fog-cloud-e")},
						d: {element: $(".clc-slide-e-fog-cloud-d")},
						e: {element: $(".clc-slide-e-fog-cloud-e")},
						f: {element: $(".clc-slide-e-fog-cloud-f")},
						g: {element: $(".clc-slide-e-fog-cloud-g")},
						h: {element: $(".clc-slide-e-fog-cloud-h")},
						i: {element: $(".clc-slide-e-fog-cloud-i")},
						j: {element: $(".clc-slide-e-fog-cloud-j")},
						k: {element: $(".clc-slide-e-fog-cloud-k")},
						l: {element: $(".clc-slide-e-fog-cloud-l")},
						m: {element: $(".clc-slide-e-fog-cloud-m")},
						n: {element: $(".clc-slide-e-fog-cloud-n")},
					}
				},
				city: {
					wrapper: {
						element: $(".clc-slide-e-city-wrapper"),
					}, 
					complete: {
						element: $(".clc-slide-e-city-complete"),
					},
					reflection: {
						element: $(".clc-slide-e-city-reflection"),
					},
					water: {
						waveA: {
							element: $(".clc-slide-e-city-water-wave-a")
						},
						waveB: {
							element: $(".clc-slide-e-city-water-wave-b")
						},
						waveC: {
							element: $(".clc-slide-e-city-water-wave-c")
						},
						waveD: {
							element: $(".clc-slide-e-city-water-wave-d")
						}
					},
					sky: {
						section: [
							{element: $(".clc-slide-e-city-sky-section-0")},	
							{element: $(".clc-slide-e-city-sky-section-1")},	
							{element: $(".clc-slide-e-city-sky-section-2")},	
							{element: $(".clc-slide-e-city-sky-section-3")},	
							{element: $(".clc-slide-e-city-sky-section-4")},	
							{element: $(".clc-slide-e-city-sky-section-5")},	
							{element: $(".clc-slide-e-city-sky-section-6")},	
							{element: $(".clc-slide-e-city-sky-section-7")},	
							{element: $(".clc-slide-e-city-sky-section-8")},	
						],
					},
					boat: {
						a: {element: $(".clc-slide-e-city-boat-a")}, 
						b: {element: $(".clc-slide-e-city-boat-b")}, 
						c: {element: $(".clc-slide-e-city-boat-c")}, 
						d: {element: $(".clc-slide-e-city-boat-d")}, 
						f: {element: $(".clc-slide-e-city-boat-f")}, 
						g: {element: $(".clc-slide-e-city-boat-g")}, 
						h: {element: $(".clc-slide-e-city-boat-h")}, 
					},
					balloon: {
						element: $(".clc-slide-e-city-balloon"), 
					}
				}
			},
			slideF: {
				element: $(".clc-slide-f"),
				sky: {
					element: $(".clc-slide-f-sky"),
				},
				mountains: {
					element: $(".clc-slide-f-mountains"),
					wrapper: {
						element: $(".clc-slide-f-mountains-wrapper"),
					}
				},
				wanderingMan: {
					element: $(".clc-slide-f-wandering-man"),
				}
			},
			slideG: {
				element: $(".clc-slide-g"),
				foreground: {
					element: $(".clc-slide-g-foreground"),
					wrapper: {element: $(".clc-slide-g-foreground-wrapper")},
				},
				workfloor: {
					element: $(".clc-slide-g-workfloor"),
				},
				hand: {
					element: $(".clc-slide-g-hand"),
				},
				box: {
					element: $(".clc-slide-g-box"),
					shadow: {
						element: $(".clc-slide-g-box-shadow"),
					},
				},
			},
			slideH: {
				element: $(".clc-slide-h"),
				sky: {
					element: $(".clc-slide-h-sky")
				},
				storescape: {
					element: $(".clc-slide-h-storescape"),
					wrapper: {
						element: $(".clc-slide-h-storescape-wrapper"),
					}
				},
				product: {
					element: $(".clc-slide-h-product"),
				},
				overlayEffects: {
					element: $(".clc-slide-h-overlay-effects"),
				},
				underlayEffects: {
					element: $(".clc-slide-h-underlay-effects"),
				}
			},
			slideI: {
				message: {
					words: {
						element: $(".clc-slide-i-content-message-word")
					}
				},
				divider: {
					element: $(".clc-slide-i-content-divider")
				},
				form: {
					element: $(".clc-slide-i-content-form"),
					input: {
						element: $(".clc-slide-i-content-form-input"),
						input: {
							element: $(".clc-slide-i-content-form-input-input"),
						},
						placeholder: {
							element: $(".clc-slide-i-content-form-input-placeholder"),
						},
					},
					button: {
						element: $(".clc-slide-i-content-form-button")
					}
				}
			}
		},
		screen = {
			slideCount: $(".clc-slide").length,
			visibleSlides: {},
		};

	setupScreen();

	setupScrolling();

	setupEntryCover();

	setupSlideA();

	setupSlideB();

	setupSlideC();

	setupSlideD();

	setupSlideE();

	setupSlideF();

	setupSlideG();

	setupSlideH();

	setupSlideI();

	function setupScreen() {
		$(window).on("resize", updateScreen);

		components.slideA.logo.bcr = components.slideA.logo.element[0].getBoundingClientRect();

		updateScreen();

		function updateScreen() {
			screen.width = components.main.element.width();

			screen.height = components.main.element.height();

			if (screen.width > screen.height) {
				screen.lesser = screen.height;
				
				screen.greater = screen.width;
			}
			else {
				screen.lesser = screen.width;
				
				screen.greater = screen.height;
			}

			screen.vmin = screen.lesser / 100;

			screen.vmax = screen.greater / 100;

			notifyObservers("resize");
		}
	}

	function setupEntryCover() {
		var playing;

		if (screen.scrollPosition == 0) {
			playing = true;

			enter(true);
		}
		else if (screen.visibleSlides["0"]) {
			playing = true;

			enter();
		}
		else {
			components.slideA.coverA.element.remove();

			components.slideA.coverB.element.remove();
		}

		observers["scroll"].push(updateVideo);

		function updateVideo() {
			if (screen.visibleSlides["0"]) {
				if (!playing) {
					playing = true;

					components.slideA.content.background.video.element[0].play();
				}
			}
			else {
				if (playing) {
					playing = false;

					components.slideA.content.background.video.element[0].pause();

					components.slideA.content.background.video.element[0].currentTime = 0;
				}
			}
		}

		function enter(lock) {
			var pointsA = [
					[{ratio: .19, delta: 0}, {ratio: .28, delta: 0}],
					[{ratio: .19, delta: 0}, {ratio: .26, delta: 0}],
					[{ratio: .22, delta: 0}, {ratio: .24, delta: 0}],
					[{ratio: .3, delta: 0}, {ratio: .44, delta: 0}],
					[{ratio: .14, delta: 0}, {ratio: .5, delta: 0}],
					[{ratio: .07, delta: 0}, {ratio: .22, delta: 0}],
					[{ratio: .2, delta: 0}, {ratio: .1, delta: 0}],
					[components.slideA.logo.bcr.left + components.slideA.logo.bcr.width * 0.7751875336731734, components.slideA.logo.bcr.top + components.slideA.logo.bcr.height * 0.061725184221933245],
					// [components.slideA.logo.bcr.left + components.slideA.logo.bcr.width * 0.8812839321977703, components.slideA.logo.bcr.top + components.slideA.logo.bcr.height * 0.5000433463372345],
					[components.slideA.logo.bcr.left + components.slideA.logo.bcr.width * 0.9834017157776949, components.slideA.logo.bcr.top + components.slideA.logo.bcr.height * 0.9328131772865192],
					[{ratio: .84, delta: 0}, {ratio: .86, delta: 0}],
					// [{ratio: .9, delta: 0}, {ratio: .1, delta: 0}],
					[{ratio: .92, delta: 0}, {ratio: .83, delta: 0}],
					[{ratio: .9, delta: 0}, {ratio: .72, delta: 0}],
					[{ratio: .84, delta: 0}, {ratio: .75, delta: 0}],
					[{ratio: .85, delta: 0}, {ratio: .79, delta: 0}],
					[{ratio: .86, delta: 0}, {ratio: .79, delta: 0}],
				], 
				pointsB = [
					[{ratio: .19, delta: 0}, {ratio: .72, delta: 0}],
					[{ratio: .19, delta: 0}, {ratio: .74, delta: 0}],
					[{ratio: .22, delta: 0}, {ratio: .76, delta: 0}],
					[{ratio: .3, delta: 0}, {ratio: .56, delta: 0}],
					[{ratio: .14, delta: 0}, {ratio: .5, delta: 0}],
					[{ratio: .07, delta: 0}, {ratio: .78, delta: 0}],
					[{ratio: .2, delta: 0}, {ratio: .9, delta: 0}],
					[components.slideA.logo.bcr.left + components.slideA.logo.bcr.width * 0.7751875336731734, components.slideA.logo.bcr.top + components.slideA.logo.bcr.height * 0.9328131772865192],
					// [components.slideA.logo.bcr.left + components.slideA.logo.bcr.width * 0.7804923535994033, components.slideA.logo.bcr.top + components.slideA.logo.bcr.height * 0.911174685739055],
					// [components.slideA.logo.bcr.left + components.slideA.logo.bcr.width * 0.785797173525633, components.slideA.logo.bcr.top + components.slideA.logo.bcr.height * 0.8895361941915908],
					// [components.slideA.logo.bcr.left + components.slideA.logo.bcr.width * 0.8812839321977703, components.slideA.logo.bcr.top + components.slideA.logo.bcr.height * 0.5000433463372345],
					[components.slideA.logo.bcr.left + components.slideA.logo.bcr.width * 0.9834017157776949, components.slideA.logo.bcr.top + components.slideA.logo.bcr.height * 0.061725184221933245],
					[{ratio: .84, delta: 0}, {ratio: .14, delta: 0}],
					// [{ratio: .9, delta: 0}, {ratio: .1, delta: 0}],
					[{ratio: .92, delta: 0}, {ratio: .17, delta: 0}],
					[{ratio: .9, delta: 0}, {ratio: .28, delta: 0}],
					[{ratio: .84, delta: 0}, {ratio: .25, delta: 0}],
					[{ratio: .85, delta: 0}, {ratio: .21, delta: 0}],
					[{ratio: .86, delta: 0}, {ratio: .21, delta: 0}],
				],
				entryTimeline = new TimelineMax({paused: true, delay: .34, onComplete: function() {
					components.slideA.coverA.element.remove();

					components.slideA.coverB.element.remove();
				}}),
				strokeWidth = components.slideA.logo.bcr.width * .07,
				bDelay = .14;

			// console.log((1559 - components.slideA.logo.bcr.left) / components.slideA.logo.bcr.width);
			// console.log((652 - components.slideA.logo.bcr.top) / components.slideA.logo.bcr.height);

			components.slideA.coverA.lines = {
				element: $(
					"<svg class='clc-slide-a-cover-a-lines' width='" + screen.width + "' height='" + screen.height +"' viewBox='0 0 " + screen.width + " " + screen.height +"'>" +
						parsePointsIntoLine(pointsA, "a") +
						parsePointsIntoLine(pointsB, "b") +
					"</svg>"
				),
			};

			components.slideA.coverA.lines.a = {
				element: components.slideA.coverA.lines.element.find(".clc-slide-a-cover-a-line-a")
			};

			components.slideA.coverA.lines.b = {
				element: components.slideA.coverA.lines.element.find(".clc-slide-a-cover-a-line-b")
			};

			// TweenMax.set([components.slideA.coverA.lines.a.element], {strokeWidth: components.slideA.logo.bcr.width * .07})

			entryTimeline.fromTo(components.slideA.coverA.lines.a.element, .8, {
				strokeWidth: 0,
			}, {
				strokeWidth: strokeWidth,
				ease: Power2.easeIn
			}, 0);

			entryTimeline.fromTo(components.slideA.coverA.lines.a.element, 1.1, {
				drawSVG: "0 0",
			}, {
				drawSVG: "52% 78%",
				ease: Power3.easeIn
			}, 0);

			entryTimeline.to(components.slideA.coverA.logo.x.a.element, 0, {
				opacity: 1
			}, 1.05);

			entryTimeline.to(components.slideA.coverA.lines.a.element, .7, {
				drawSVG: "100% 100%",
				ease: Power3.easeOut
			}, 1.02);

			entryTimeline.to(components.slideA.coverA.lines.a.element, .5, {
				strokeWidth: 0,
				ease: Power2.easeOut
			}, 1.02);

			entryTimeline.fromTo(components.slideA.coverA.lines.b.element, .8, {
				strokeWidth: 0,
			}, {
				strokeWidth: strokeWidth,
				ease: Power2.easeIn
			}, 0 + bDelay);

			entryTimeline.fromTo(components.slideA.coverA.lines.b.element, 1.1, {
				drawSVG: "0 0",
			}, {
				drawSVG: "52% 78%",
				ease: Power3.easeIn
			}, 0 + bDelay);

			entryTimeline.to(components.slideA.coverA.logo.x.b.element, 0, {
				opacity: 1
			}, 1.05 + bDelay);

			entryTimeline.to(components.slideA.coverA.lines.b.element, .7, {
				drawSVG: "100% 100%",
				ease: Power3.easeOut
			}, 1.02 + bDelay);

			entryTimeline.to(components.slideA.coverA.lines.b.element, .5, {
				strokeWidth: 0,
				ease: Power2.easeOut
			}, 1.02 + bDelay);

			entryTimeline.to(components.slideA.coverA.element, .64, {
				xPercent: 100,
				ease: Power2.easeOut
			}, 1.26);

			entryTimeline.to(components.slideA.coverA.content.element, .64, {
				xPercent: -100,
				ease: Power2.easeOut
			}, 1.26);

			entryTimeline.addCallback(function() {
				if (playing) components.slideA.content.background.video.element[0].play();
			}, 1.4);

			entryTimeline.to(components.slideA.coverB.element, .6, {
				yPercent: 100,
				y: -68,
				ease: Power2.easeOut
			}, 1.5);

			entryTimeline.to(components.slideA.coverB.content.element, .6, {
				yPercent: -100,
				y: 68,
				ease: Power2.easeOut
			}, 1.5);

			entryTimeline.from(components.slideA.footer.button.element, .44, {
				y: 68,
				ease: Power2.easeOut
			}, 1.8);

			entryTimeline.from(components.slideA.footer.button.element, .12, {
				opacity: 0,
			}, 1.8);

			entryTimeline.from(components.slideA.signinButton.outline.line.element, 1.18, {
				drawSVG: "0 0",
				ease: Power2.easeOut
			}, 1.7);

			entryTimeline.from(components.slideA.signinButton.text.element, .48, {
				opacity: 0,
			}, 2);

			entryTimeline.from(components.slideA.signupButton.outline.line.element, 1.18, {
				drawSVG: "0 0",
				ease: Power2.easeOut
			}, 2);

			entryTimeline.from(components.slideA.signupButton.text.element, .48, {
				opacity: 0,
			}, 2.3);

			entryTimeline.from(components.slideA.content.background.element, .6, {
				opacity: .35,
			}, 1.8);

			components.slideA.coverA.content.element.append(components.slideA.coverA.lines.element);

			entryTimeline.play();

			function lockScroll() {
				window.scrollTo(0, 0);
			}
		}

		function parsePointsIntoLine(points, tag) {
			var x, y,
				point,
				spotterElement,
				linePoints = [],
				bezierData,
				d,
				curviness = .25;

			for (var idx = 0, len = points.length; idx < len; idx++) {
				point = points[idx];

				spotterElement = $("<div class='clc-slide-a-cover-a-spotter'></div>");

				if ($.isPlainObject(point[0])) {
					x = point[0].ratio * screen.width + point[0].delta;
				}
				else {
					x = point[0];
				}

				if ($.isPlainObject(point[1])) {
					y = point[1].ratio * screen.height + point[1].delta;
				}
				else {
					y = point[1];
				}

				TweenMax.set(spotterElement, {
					x: x,
					y: y
				});

				linePoints.push({x: x, y: y, scaleX: 12});

				// components.slideA.coverA.element.append(spotterElement);
			}

			bezierData = BezierPlugin.bezierThrough(linePoints, curviness);

			d = "M" + bezierData.x[0].a + "," + bezierData.y[0].a + " C" + segmentToString(bezierData.x[0], bezierData.y[0]);

			for (var idx = 1, len = bezierData.x.length; idx < len; idx++) {
				d += "," + segmentToString(bezierData.x[idx], bezierData.y[idx]);
			}

			return "<path class='clc-slide-a-cover-a-line-" + tag + "' d='" + d + "'></path>";
		}

		function segmentToString(x, y) {
			return [x.b.toFixed(2), y.b.toFixed(2), x.c.toFixed(2), y.c.toFixed(2), x.d.toFixed(2), y.d.toFixed(2)].join(",");
		}
	}

	function setupScrolling() {
		documentElement.on("scroll", _.throttle(function() {
			window.requestAnimationFrame(checkScroll);
		}, 50));

		checkScroll();

		function checkScroll() {
			var scrollPosition = documentElement.scrollTop(),
				potentialSlideNumber,
				selectedSlideNumber,
				remainingOffset,
				slideData;

			remainingOffset = scrollPosition % screen.height;

			potentialSlideNumber = Math.floor(scrollPosition / screen.height);

			if (remainingOffset < (config.activeSlideRatio.max - 1) * screen.height) {
				selectedSlideNumber = potentialSlideNumber;
			}
			else if (remainingOffset > config.activeSlideRatio.min * screen.height) {
				selectedSlideNumber = potentialSlideNumber + 1;
			}

			screen.scrollPosition = scrollPosition;

			notifyObservers("scroll", scrollPosition);

			if (selectedSlideNumber != null) updateActiveSlide(selectedSlideNumber);

			if (remainingOffset > 10 && potentialSlideNumber < screen.slideCount - 1) {
				updateVisibleSlides([potentialSlideNumber, potentialSlideNumber + 1]);
			}
			else {
				updateVisibleSlides([potentialSlideNumber]);
			}
		}

		function updateActiveSlide(slideNumber) {
			if (screen.activeSlide && slideNumber == screen.activeSlide.number) return;

			screen.activeSlide = {
				number: slideNumber,
				letter: String.fromCharCode(97 + slideNumber)
			};

			notifyObservers("activeSlideUpdated", screen.activeSlide);
		}

		function updateVisibleSlides(slideNumbers) {
			var changeMade = false,
				slideNumber;

			for (var key in screen.visibleSlides) {
				if (slideNumbers.indexOf(parseInt(key)) == -1) {
					if (screen.visibleSlides[key]) {
						screen.visibleSlides[key] = false;

						changeMade = true;
					}
				}
			}

			for (var idx = 0, len = slideNumbers.length; idx < len; idx++) {
				slideNumber = slideNumbers[idx];

				if (!screen.visibleSlides[slideNumber]) {
					screen.visibleSlides[slideNumber] = true;

					changeMade = true;
				}
			}

			if (changeMade) {
				notifyObservers("visibleSlidesUpdated", screen.visibleSlides);
			}
		}
	}

	function setupSlideA() {
		setupFooterButton();

		setupSignInButton();

		setupSignUpButton();

		// setupTagline();

		function setupFooterButton() {
			components.slideA.footer.button.element.on({
				mouseenter: function() {
					TweenMax.to(components.slideA.footer.button.element, .24, {
						className: "+=clc-slide-a-footer-button-hovered"
					});

					TweenMax.to(components.slideA.footer.button.edge.element, .24, {
						className: "+=clc-slide-a-footer-button-edge-hovered"
					});
				},
				mouseleave: function() {
					TweenMax.to(components.slideA.footer.button.element, .24, {
						className: "-=clc-slide-a-footer-button-hovered"
					});

					TweenMax.to(components.slideA.footer.button.edge.element, .24, {
						className: "-=clc-slide-a-footer-button-edge-hovered"
					});

					unclick();
				},
				mousedown: function() {
					TweenMax.killTweensOf(components.slideA.footer.button.edge.element, {scaleY: true});

					TweenMax.killTweensOf(components.slideA.footer.button.text.element, {y: true});

					TweenMax.to(components.slideA.footer.button.edge.element, .08, {
						scaleY: 0,
						transformOrigin: "50% 100%"
					});

					TweenMax.to(components.slideA.footer.button.text.element, .08, {
						y: 1.5
					});
				},
				mouseup: function() {
					unclick();
				},
				click: function() {
					TweenMax.to(bodyElement, .86, {
						scrollTo: {y: screen.height},
						ease: Power2.easeInOut
					});
				}
			});

			function unclick() {
				TweenMax.killTweensOf(components.slideA.footer.button.edge.element, {scaleY: true});

				TweenMax.killTweensOf(components.slideA.footer.button.text.element, {y: true});

				TweenMax.to(components.slideA.footer.button.edge.element, .08, {
					scaleY: 1,
					transformOrigin: "50% 100%"
				});

				TweenMax.to(components.slideA.footer.button.text.element, .08, {
					y: 0
				});
			}
		}

		function setupSignInButton() {
			components.slideA.signinButton.element.on({
				mouseenter: function() {
					TweenMax.killTweensOf(components.slideA.signinButton.background.element, {opacity: true});

					TweenMax.to(components.slideA.signinButton.text.element, .24, {
						className: "+=clc-slide-a-signin-button-text-hovered"
					});

					TweenMax.to(components.slideA.signinButton.background.element, .24, {
						opacity: 1
					});
				},
				mouseleave: function() {
					TweenMax.killTweensOf(components.slideA.signinButton.background.element, {opacity: true});
					
					TweenMax.to(components.slideA.signinButton.text.element, .24, { 
						className: "-=clc-slide-a-signin-button-text-hovered"
					});

					TweenMax.to(components.slideA.signinButton.background.element, .24, {
						opacity: 0
					});
				}
			});
		}

		function setupSignUpButton() {
			components.slideA.signupButton.element.on({
				mouseenter: function() {
					TweenMax.killTweensOf(components.slideA.signupButton.background.element, {opacity: true});

					TweenMax.to(components.slideA.signupButton.text.element, .24, {
						className: "+=clc-slide-a-signup-button-text-hovered"
					});

					TweenMax.to(components.slideA.signupButton.background.element, .24, {
						opacity: 1
					});
				},
				mouseleave: function() {
					TweenMax.killTweensOf(components.slideA.signupButton.background.element, {opacity: true});
					
					TweenMax.to(components.slideA.signupButton.text.element, .24, {
						className: "-=clc-slide-a-signup-button-text-hovered"
					});

					TweenMax.to(components.slideA.signupButton.background.element, .24, {
						opacity: 0
					});
				},
				click: function() {
					var position = screen.height * (screen.slideCount - 1);

					TweenMax.to(bodyElement, 1, {
						scrollTo: {y: position},
						ease: Power2.easeInOut
					});
				}
			});
		}

		function setupTagline() {
			var activeTagline = 1,
				totalItems = components.slideA.tagline.items.element.length;

			TweenMax.set(components.slideA.tagline.items.element, {visibility: "hidden"});

			TweenMax.set(components.slideA.tagline.element.find(".clc-slide-a-tagline-item-" + activeTagline), {visibility: ""});

			components.slideA.tagline.element.on({
				click: function() {
					activeTagline++;

					if (activeTagline > totalItems) activeTagline = 0;

					TweenMax.set(components.slideA.tagline.items.element, {visibility: "hidden"});

					TweenMax.set(components.slideA.tagline.element.find(".clc-slide-a-tagline-item-" + activeTagline), {visibility: ""});
				}
			});
		}
	}

	function setupSlideB() {
		var cloudTimelines,
			cloudOffset,
			tieTimeline;

		observers["visibleSlidesUpdated"].push(updateActivation);

		observers["scroll"].push(updateParallax);

		observers["resize"].push(updateParallax);

		updateActivation();

		updateParallax(0, true);

		function updateActivation() {
			if (screen.visibleSlides["1"]) {
				activate();
			}
			else {
				deactivate();
			}
		}

		function updateParallax(value, force) {
			var offsetRange,
				screenDeltaRange,
				scrollRatio,
				newOffset,
				duration = force ? 0 : .2;

			if (!cloudTimelines && !force) return;

			screenDeltaRange = [screen.height * .5, screen.height * 1.5]

			offsetRange = screen.height * -.2;

			scrollRatio = (screen.scrollPosition - screenDeltaRange[0]) / (screenDeltaRange[1] - screenDeltaRange[0]);

			scrollRatio = Math.max(Math.min((scrollRatio - .5) * 2, 1), -1);

			newOffset = Math.round(scrollRatio * offsetRange);

			if (newOffset == cloudOffset) return;

			cloudOffset = newOffset;

			TweenMax.to(components.slideB.cloud.element, duration, {y: cloudOffset});
		}

		function activate() {
			if (cloudTimelines) return;

			cloudTimelines = [];

			cloudTimelines.push(new TimelineMax({paused: true, delay: .1, repeat: -1}));
			cloudTimelines.push(new TimelineMax({paused: true, delay: .26, repeat: -1}));
			cloudTimelines.push(new TimelineMax({paused: true, delay: .42, repeat: -1}));

			cloudTimelines[0].fromTo(components.slideB.cloud.a.element, .48, {
				opacity: 0
			}, {
				opacity: 1
			}, 0);

			cloudTimelines[0].from(components.slideB.cloud.a.element, .72, {
				x: 12 + screen.width * .032,
				ease: Power1.easeOut
			}, 0);

			cloudTimelines[0].to(components.slideB.cloud.a.element, 12, {
				x: -36 - screen.width * .096,
				overwrite: false,
				ease: Power0.easeNone
			}, .7);

			cloudTimelines[0].to(components.slideB.cloud.a.element, 1, {
				opacity: 0
			}, 11.7);

			cloudTimelines[1].fromTo(components.slideB.cloud.b.element, .48, {
				opacity: 0
			}, {
				opacity: 1
			}, 0);

			cloudTimelines[1].from(components.slideB.cloud.b.element, .64, {
				x: 18 + screen.width * .048,
				ease: Power1.easeOut
			}, 0);

			cloudTimelines[1].to(components.slideB.cloud.b.element, 8.4, {
				x: -54 - screen.width * .144,
				overwrite: false,
				ease: Power0.easeNone
			}, .58);

			cloudTimelines[1].to(components.slideB.cloud.b.element, 1, {
				opacity: 0
			}, 7.98);

			cloudTimelines[2].fromTo(components.slideB.cloud.c.element, .48, {
				opacity: 0
			}, {
				opacity: 1
			}, 0);

			cloudTimelines[2].fromTo(components.slideB.cloud.c.element, .56, {
				x: 24 + screen.width * .054,
			}, {
				x: 0,
				ease: Power1.easeOut
			}, 0);

			cloudTimelines[2].to(components.slideB.cloud.c.element, 4.8, {
				x: -72 - screen.width * .162,
				ease: Power0.easeNone,
				overwrite: false
			}, .5);

			cloudTimelines[2].to(components.slideB.cloud.c.element, 1, {
				opacity: 0
			}, 4.3);

			cloudTimelines[0].play();

			cloudTimelines[1].play();

			cloudTimelines[2].play();
		}

		function deactivate() {
			if (!cloudTimelines) return;

			for (var idx = 0, len = cloudTimelines.length; idx < len; idx++) {
				cloudTimelines[idx].remove();
			}

			TweenMax.set(components.slideB.cloud.element, {opacity: 0, x: 0});

			cloudTimelines = null;
		}
	}

	function setupSlideC() {
		var headacheTimeline,
			headacheOffset,
			headacheActivated;

		observers["visibleSlidesUpdated"].push(updateActivation);

		observers["activeSlideUpdated"].push(updateActivation);

		observers["scroll"].push(updateParallax);

		observers["resize"].push(updateParallax);

		updateActivation();

		updateParallax(0, true);

		function updateActivation() {
			if (screen.activeSlide.number == 2) {
				activate();
			}
			else if (!screen.visibleSlides["2"]) {
				deactivate();
			}
		}

		function updateParallax(value, force) {
			var offsetRange,
				screenDeltaRange,
				scrollRatio,
				newOffset,
				duration = force ? 0 : .2;

			if (!screen.visibleSlides["2"] && !force) return;

			screenDeltaRange = [screen.height * 1, screen.height * 3]

			offsetRange = screen.height * .5;

			scrollRatio = (screen.scrollPosition - screenDeltaRange[0]) / (screenDeltaRange[1] - screenDeltaRange[0]);

			scrollRatio = Math.max(Math.min((scrollRatio - .5) * 2, 1), -1);

			newOffset = Math.round(scrollRatio * offsetRange);

			if (newOffset == headacheOffset) return;

			headacheOffset = newOffset;
				
			TweenMax.to(components.slideC.headache.element, duration, {y: headacheOffset});
		}

		function activate() {
			if (headacheActivated) return;

			headacheActivated = true;
			
			if (!headacheTimeline) {
				TweenMax.set([
					components.slideC.headache.boltC.element,
					components.slideC.headache.boltB.element,
					components.slideC.headache.boltA.element,
				], {
					scale: .8
				});

				headacheTimeline = new TimelineMax({paused: true, delay: .4, repeat: -1, repeatDelay: .1});

				headacheTimeline.to(components.slideC.headache.boltC.element, .2, {
					x: -17,
					y: 34,
					ease: Back.easeOut.config(1.48)
				}, 0);

				headacheTimeline.to(components.slideC.headache.boltC.element, .2, {
					opacity: 1,
				}, 0);

				headacheTimeline.fromTo(components.slideC.headache.wrapper.element, .025, {
					x: -1,
				}, {
					x: 1,
					ease: RoughEase.ease.config({
						strength: 8,
						points: 2,
						template: Linear.easeNone,
						randomize: false
					}),
					clearProps: "x"
				}, .1);

				headacheTimeline.fromTo(components.slideC.headache.wrapper.element, .025, {
					y: -1,
				}, {
					y: 1,
					ease: RoughEase.ease.config({
						strength: 8,
						points: 2,
						template: Linear.easeNone,
						randomize: false
					}),
					clearProps: "y"
				}, .1);

				headacheTimeline.to(components.slideC.headache.boltB.element, .2, {
					x: 2,
					y: 34,
					ease: Back.easeOut.config(1.48)
				}, .1);

				headacheTimeline.to(components.slideC.headache.boltB.element, .2, {
					opacity: 1,
				}, .1);

				headacheTimeline.fromTo(components.slideC.headache.wrapper.element, .025, {
					x: -1,
				}, {
					x: 1,
					ease: RoughEase.ease.config({
						strength: 8,
						points: 2,
						template: Linear.easeNone,
						randomize: false
					}),
					clearProps: "x"
				}, .2);

				headacheTimeline.fromTo(components.slideC.headache.wrapper.element, .025, {
					y: -1,
				}, {
					y: 1,
					ease: RoughEase.ease.config({
						strength: 8,
						points: 2,
						template: Linear.easeNone,
						randomize: false
					}),
					clearProps: "y"
				}, .2);

				headacheTimeline.to(components.slideC.headache.boltA.element, .2, {
					x: 12,
					y: 32,
					ease: Back.easeOut.config(1.48)
				}, .2);

				headacheTimeline.to(components.slideC.headache.boltA.element, .2, {
					opacity: 1,
				}, .2);

				headacheTimeline.fromTo(components.slideC.headache.wrapper.element, .025, {
					x: -1,
				}, {
					x: 1,
					ease: RoughEase.ease.config({
						strength: 8,
						points: 2,
						template: Linear.easeNone,
						randomize: false
					}),
					clearProps: "x"
				}, .3);

				headacheTimeline.fromTo(components.slideC.headache.wrapper.element, .025, {
					y: -1,
				}, {
					y: 1,
					ease: RoughEase.ease.config({
						strength: 8,
						points: 2,
						template: Linear.easeNone,
						randomize: false
					}),
					clearProps: "y"
				}, .3);

				headacheTimeline.fromTo(components.slideC.headache.wrapper.element, .52, {
					y: -1,
				}, {
					y: 1,
					ease: RoughEase.ease.config({
						strength: 16,
						points: 24,
						template: Linear.easeNone,
						randomize: true
					}),
					clearProps: "y"
				}, .84);

				headacheTimeline.fromTo(components.slideC.headache.wrapper.element, .52, {
					x: 1,
				}, {
					x: -1,
					ease: RoughEase.ease.config({
						strength: 16,
						points: 24,
						template: Linear.easeNone,
						randomize: true
					}),
					clearProps: "x"
				}, .84);

				headacheTimeline.to([
					components.slideC.headache.boltC.element,
				], .34, {
					x: 0,
					y: 0,
					scale: 1,
					ease: Back.easeInOut.config(3.4)
				}, .98);

				headacheTimeline.to([
					components.slideC.headache.boltB.element,
				], .38, {
					x: 0,
					y: 0,
					scale: 1,
					ease: Back.easeInOut.config(3.4)
				}, .98);

				headacheTimeline.to([
					components.slideC.headache.boltA.element,
				], .36, {
					x: 0,
					y: 0,
					scale: 1,
					ease: Back.easeInOut.config(3.4)
				}, .98);

				headacheTimeline.to([
					components.slideC.headache.boltC.element,
					components.slideC.headache.boltB.element,
					components.slideC.headache.boltA.element,
				], .28, {
					opacity: 0,
				}, 2.2);
			}

			headacheTimeline.play();

			function pulse(timescale, skip) {
				var pulseTimeline = new TimelineMax({paused: true});

				if (timescale) pulseTimeline.timeScale(timescale);

				pulseTimeline.to(components.slideC.heart.element, .14, {
					scale: .88,
					ease: Power1.easeInOut
				}, 0);

				pulseTimeline.to(components.slideC.heart.element, .32, {
					scale: 1.1,
					ease: Power3.easeInOut
				}, .12);

				if (!skip) {
					pulseTimeline.to(components.slideC.heart.element, .2, {
						scale: .92,
						ease: Power2.easeInOut
					}, .4);

					pulseTimeline.to(components.slideC.heart.element, .14, {
						scale: 1,
						ease: Power2.easeInOut
					}, .56);
				}

				pulseTimeline.play();
			}
		}

		function deactivate() {
			if (!headacheActivated) return;

			headacheTimeline.pause(0);

			headacheActivated = false;
		}
	}

	function setupSlideD() {
		var flickerActivated,
			slouchOffset;

		observers["visibleSlidesUpdated"].push(updateActivation);

		observers["scroll"].push(updateParallax);

		observers["resize"].push(updateParallax);

		updateActivation();

		updateParallax(0, true);

		function updateActivation() {
			if (screen.visibleSlides["3"]) {
				activate();
			}
			else {
				deactivate();
			}
		}

		function updateParallax(value, force) {
			var offsetRange,
				screenDeltaRange,
				scrollRatio,
				newOffset,
				duration = force ? 0 : .2;

			if (!flickerActivated && !force) return;

			screenDeltaRange = [screen.height * 2.5, screen.height * 3.5]

			offsetRange = screen.height * .1;

			scrollRatio = (screen.scrollPosition - screenDeltaRange[0]) / (screenDeltaRange[1] - screenDeltaRange[0]);

			scrollRatio = Math.max(Math.min((scrollRatio - .5) * 2, 1), -1);

			newOffset = Math.round(scrollRatio * offsetRange);

			if (newOffset == slouchOffset) return;

			slouchOffset = newOffset;

			TweenMax.to(components.slideD.slouch.element, duration, {y: slouchOffset});
		}

		function activate() {
			if (flickerActivated) return;

			flickerActivated = true;

			TweenMax.delayedCall(Math.random() * .2, flicker);

			function flicker() {
				var lightDuration;

				if (!flickerActivated) return;

				lightDuration = Math.random() * .75;

				TweenMax.to([components.slideD.slouch.laptopLight.element, components.slideD.background.light.element], .1, {opacity: 1});

				TweenMax.delayedCall(lightDuration, function() {
					TweenMax.to([components.slideD.slouch.laptopLight.element, components.slideD.background.light.element], .1, {opacity: 0});

					if (flickerActivated) TweenMax.delayedCall(Math.random() * 1.5 + .1, flicker);
				});
			}
		}

		function deactivate() {
			if (!flickerActivated) return;

			flickerActivated = false;
		}
	}

	function setupSlideE() {
		var parallaxHandler,
			slideActive = false,
			fogTimeline,
			cityOffset,
			boatCalls = [];

		observers["scroll"].push(updateActivation);

		observers["scroll"].push(updateParallax);

		observers["resize"].push(updateParallax);

		updateActivation();

		updateParallax(0, true);

		function updateParallax(value, force) {
			var offsetRange,
				screenDeltaRange,
				scrollRatio,
				newOffset,
				duration = force ? 0 : .2;

			if (!slideActive && !force) return;

			screenDeltaRange = [screen.height * 3, screen.height * 5]

			offsetRange = screen.height * .12;

			scrollRatio = (screen.scrollPosition - screenDeltaRange[0]) / (screenDeltaRange[1] - screenDeltaRange[0]);

			scrollRatio = Math.max(Math.min((scrollRatio - .5) * 2, 1), -1);

			newOffset = Math.round(scrollRatio * offsetRange);

			if (newOffset == cityOffset) return;

			cityOffset = newOffset;

			TweenMax.to(components.slideE.city.wrapper.element, duration, {y: cityOffset});
		}

		function updateActivation() {
			if (screen.visibleSlides["4"]) {
				if (!slideActive && screen.scrollPosition > screen.height * 3.2) activate();
			}
			else {
				deactivate();
			}
		}

		// update water and sky animations on resaize

		function activate() {
			if (slideActive) return;

			slideActive = true;

			clearFog();

			activateWater();
			
			activateSky();

			activateBoats();

			activateBalloon();

			// activateCameraShake(); // Silly

			// activateMouseParallax(); // To expensive performance wise

			function clearFog() {
				if (!fogTimeline) {
					fogTimeline = new TimelineMax({paused: true, delay: 0, 
						onComplete: function() {
							TweenMax.set(components.slideE.fog.element, {display: "none"});
						}
					});

					fogTimeline.fromTo(components.slideE.fog.fill.element, 1.4, {
						opacity: 1
					}, {
						opacity: 0,
						ease: Power1.easeInOut
					}, .8);

					fogTimeline.to(components.slideE.fog.cloud.a.element, 1.2, {
						x: "+=" + (.4 * screen.height),
						y: 20,
					}, 0);

					fogTimeline.to(components.slideE.fog.cloud.a.element, .6, {
						opacity: 0,
					}, .6);

					fogTimeline.to(components.slideE.fog.cloud.b.element, 1.6, {
						x: "+=" + (.5333 * screen.height),
						y: -12,
					}, .1);

					fogTimeline.to(components.slideE.fog.cloud.b.element, .6, {
						opacity: 0,
					}, 1.1);

					fogTimeline.to(components.slideE.fog.cloud.c.element, 1.32, {
						x: "+=" + (.2222 * screen.height),
						y: 6,
					}, .05);

					fogTimeline.to(components.slideE.fog.cloud.c.element, .8, {
						opacity: 0,
					}, .57);

					fogTimeline.to(components.slideE.fog.cloud.d.element, 1.4, {
						x: "+=" + (.2933 * screen.height),
						y: 6,
					}, .16);

					fogTimeline.to(components.slideE.fog.cloud.d.element, .48, {
						opacity: 0,
					}, 1.08);

					fogTimeline.to(components.slideE.fog.cloud.e.element, 1.94, {
						x: "+=" + (.6888 * screen.height),
						y: -14,
					}, 0);

					fogTimeline.to(components.slideE.fog.cloud.e.element, .8, {
						opacity: 0,
					}, 1.02);

					fogTimeline.to(components.slideE.fog.cloud.f.element, 1.28, {
						x: "+=" + (.2177 * screen.height),
						y: -14,
					}, .04);

					fogTimeline.to(components.slideE.fog.cloud.f.element, .54, {
						opacity: 0,
					}, .78);

					fogTimeline.to(components.slideE.fog.cloud.g.element, 1.4, {
						x: "+=" + (.2177 * screen.height),
						y: -14,
					}, .08);

					fogTimeline.to(components.slideE.fog.cloud.g.element, .68, {
						opacity: 0,
					}, .8);

					fogTimeline.to(components.slideE.fog.cloud.h.element, 1.64, {
						x: "+=" + (.48 * screen.height),
						y: 8,
					}, .0);

					fogTimeline.to(components.slideE.fog.cloud.h.element, .6, {
						opacity: 0,
					}, 1.04);

					fogTimeline.to(components.slideE.fog.cloud.i.element, 1.44, {
						x: "+=" + (.4088 * screen.height),
						y: 8,
					}, .1);

					fogTimeline.to(components.slideE.fog.cloud.i.element, .72, {
						opacity: 0,
					}, .82);

					fogTimeline.to(components.slideE.fog.cloud.j.element, 1.88, {
						x: "+=" + (.6422 * screen.height),
						y: 12,
					}, 0);

					fogTimeline.to(components.slideE.fog.cloud.j.element, .8, {
						opacity: 0,
					}, 1.08);

					fogTimeline.to(components.slideE.fog.cloud.k.element, 1.28, {
						x: "+=" + (.1977 * screen.height),
						y: 4,
					}, .12);

					fogTimeline.to(components.slideE.fog.cloud.k.element, .6, {
						opacity: 0,
					}, .8);

					fogTimeline.to(components.slideE.fog.cloud.l.element, 1.72, {
						x: "+=" + (.5688 * screen.height),
						y: -18,
					}, 0);

					fogTimeline.to(components.slideE.fog.cloud.l.element, .74, {
						opacity: 0,
					}, .98);

					fogTimeline.to(components.slideE.fog.cloud.m.element, 1.36, {
						x: "+=" + (.6 * screen.height),
						y: -18,
					}, 0);

					fogTimeline.to(components.slideE.fog.cloud.m.element, .6, {
						opacity: 0,
					}, .76);

					fogTimeline.to(components.slideE.fog.cloud.n.element, 2, {
						x: "+=" + (.5422 * screen.height),
						y: -18,
					}, .06);

					fogTimeline.to(components.slideE.fog.cloud.n.element, .88, {
						opacity: 0,
					}, 1.18);
				}

				fogTimeline.play();
			}

			function activateWater() {
				var baseTime = screen.width * .0625;

				TweenMax.fromTo(components.slideE.city.water.waveA.element, baseTime, {
					xPercent: 0,
				}, {
					xPercent: 50,
					repeat: -1,
					ease: Power0.easeNone
				});

				TweenMax.fromTo(components.slideE.city.water.waveB.element, baseTime * .8, {
					xPercent: 50,
				}, {
					xPercent: 0,
					repeat: -1,
					ease: Power0.easeNone
				});

				TweenMax.to(components.slideE.city.water.waveC.element, baseTime * .9, {
					xPercent: 50,
					repeat: -1,
					ease: Power0.easeNone
				});

				TweenMax.fromTo(components.slideE.city.water.waveD.element, baseTime * .65, {
					xPercent: 50,
				}, {
					xPercent: 0,
					repeat: -1,
					ease: Power0.easeNone
				});
			}

			function activateSky() {
				var layerCTime = 60,
					layerBTime = 0.833333333 * layerCTime,
					layerATime = 0.666666667 * layerCTime,
					fadeOutTime = 6,
					fadeInTime = 4.5,
					repeats = {};

				repeats.section6 = function() {
					var duration = layerCTime * 2;

					if (!slideActive) return;

					TweenMax.set(components.slideE.city.sky.section[6].element, {xPercent: -36});

					TweenMax.to(components.slideE.city.sky.section[6].element, duration, {xPercent: 32, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[6].element, fadeInTime, {opacity: 1, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[6].element, fadeOutTime, {
						opacity: 0,
						ease: Power0.easeNone,
						onComplete: repeats.section6,
						delay: duration - fadeOutTime
					});
				}

				TweenMax.to(components.slideE.city.sky.section[6].element, layerCTime, {
					xPercent: 32,
					ease: Power0.easeNone,
				});

				TweenMax.to(components.slideE.city.sky.section[6].element, fadeOutTime, {
					opacity: 0,
					ease: Power0.easeNone,
					onComplete: repeats.section6,
					delay: layerCTime - fadeOutTime,
				});

				repeats.section7 = function() {
					var duration = layerCTime * .48;

					if (!slideActive) return;

					TweenMax.set(components.slideE.city.sky.section[7].element, {xPercent: -80});

					TweenMax.to(components.slideE.city.sky.section[7].element, duration, {xPercent: 4, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[7].element, fadeInTime, {opacity: 1, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[7].element, fadeOutTime, {
						opacity: 0,
						ease: Power0.easeNone,
						onComplete: repeats.section7,
						delay: duration - fadeOutTime
					});
				}

				TweenMax.to(components.slideE.city.sky.section[7].element, layerCTime * .2, {
					xPercent: 28,
					ease: Power0.easeNone,
				});

				TweenMax.to(components.slideE.city.sky.section[7].element, fadeOutTime, {
					opacity: 0,
					ease: Power0.easeNone,
					onComplete: repeats.section7,
					delay: layerCTime * .2 - fadeOutTime,
				});

				repeats.section8 = function() {
					var duration = layerCTime * 1.3;

					if (!slideActive) return;

					TweenMax.set(components.slideE.city.sky.section[8].element, {xPercent: -24});

					TweenMax.to(components.slideE.city.sky.section[8].element, duration, {xPercent: 30, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[8].element, fadeInTime, {opacity: 1, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[8].element, fadeOutTime, {
						opacity: 0,
						ease: Power0.easeNone,
						onComplete: repeats.section8,
						delay: duration - fadeOutTime
					});
				}

				TweenMax.to(components.slideE.city.sky.section[8].element, layerCTime * .72, {
					xPercent: 30,
					ease: Power0.easeNone,
				});

				TweenMax.to(components.slideE.city.sky.section[8].element, fadeOutTime, {
					opacity: 0,
					ease: Power0.easeNone,
					onComplete: repeats.section8,
					delay: layerCTime * .72 - fadeOutTime,
				});

				// == Layer B

				repeats.section3 = function() {
					var duration = layerBTime * .64;

					if (!slideActive) return;

					TweenMax.set(components.slideE.city.sky.section[3].element, {xPercent: -14});

					TweenMax.to(components.slideE.city.sky.section[3].element, duration, {xPercent: 26, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[3].element, fadeInTime, {opacity: 1, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[3].element, fadeOutTime, {
						opacity: 0,
						ease: Power0.easeNone,
						onComplete: repeats.section3,
						delay: duration - fadeOutTime
					});
				}

				TweenMax.to(components.slideE.city.sky.section[3].element, layerBTime * .54, {
					xPercent: 26,
					ease: Power0.easeNone,
				});

				TweenMax.to(components.slideE.city.sky.section[3].element, fadeOutTime, {
					opacity: 0,
					ease: Power0.easeNone,
					onComplete: repeats.section3,
					delay: layerBTime * .54 - fadeOutTime,
				});

				repeats.section4 = function() {
					var duration = layerBTime * .64;

					if (!slideActive) return;

					TweenMax.set(components.slideE.city.sky.section[4].element, {xPercent: -14});

					TweenMax.to(components.slideE.city.sky.section[4].element, duration, {xPercent: 26, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[4].element, fadeInTime, {opacity: 1, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[4].element, fadeOutTime, {
						opacity: 0,
						ease: Power0.easeNone,
						onComplete: repeats.section4,
						delay: duration - fadeOutTime
					});
				}

				TweenMax.to(components.slideE.city.sky.section[4].element, layerBTime * .3, {
					xPercent: 20,
					ease: Power0.easeNone,
				});

				TweenMax.to(components.slideE.city.sky.section[4].element, fadeOutTime, {
					opacity: 0,
					ease: Power0.easeNone,
					onComplete: repeats.section4,
					delay: layerBTime * .3 - fadeOutTime,
				});

				repeats.section5 = function() {
					var duration = layerBTime;

					if (!slideActive) return;

					TweenMax.set(components.slideE.city.sky.section[5].element, {xPercent: -22});

					TweenMax.to(components.slideE.city.sky.section[5].element, duration, {xPercent: 26, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[5].element, fadeInTime, {opacity: 1, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[5].element, fadeOutTime, {
						opacity: 0,
						ease: Power0.easeNone,
						onComplete: repeats.section5,
						delay: duration - fadeOutTime
					});
				}

				TweenMax.to(components.slideE.city.sky.section[5].element, layerBTime * .54, {
					xPercent: 14,
					ease: Power0.easeNone,
				});

				TweenMax.to(components.slideE.city.sky.section[5].element, fadeOutTime, {
					opacity: 0,
					ease: Power0.easeNone,
					onComplete: repeats.section5,
					delay: layerBTime * .54 - fadeOutTime,
				});

				// == Layer A

				repeats.section0 = function() {
					var duration = layerATime * 1.76;

					if (!slideActive) return;

					TweenMax.set(components.slideE.city.sky.section[0].element, {xPercent: -32});

					TweenMax.to(components.slideE.city.sky.section[0].element, duration, {xPercent: 24, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[0].element, fadeInTime, {opacity: 1, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[0].element, fadeOutTime, {
						opacity: 0,
						ease: Power0.easeNone,
						onComplete: repeats.section0,
						delay: duration - fadeOutTime
					});
				}

				TweenMax.to(components.slideE.city.sky.section[0].element, layerATime * .82, {
					xPercent: 24,
					ease: Power0.easeNone,
				});

				TweenMax.to(components.slideE.city.sky.section[0].element, fadeOutTime, {
					opacity: 0,
					ease: Power0.easeNone,
					onComplete: repeats.section0,
					delay: layerATime * .82 - fadeOutTime,
				});

				repeats.section1 = function() {
					var duration = layerATime * 1.56;

					if (!slideActive) return;

					TweenMax.set(components.slideE.city.sky.section[1].element, {xPercent: -48});

					TweenMax.to(components.slideE.city.sky.section[1].element, duration, {xPercent: 26, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[1].element, fadeInTime, {opacity: 1, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[1].element, fadeOutTime, {
						opacity: 0,
						ease: Power0.easeNone,
						onComplete: repeats.section1,
						delay: duration - fadeOutTime
					});
				}

				TweenMax.to(components.slideE.city.sky.section[1].element, layerATime * .62, {
					xPercent: 26,
					ease: Power0.easeNone,
				});

				TweenMax.to(components.slideE.city.sky.section[1].element, fadeOutTime, {
					opacity: 0,
					ease: Power0.easeNone,
					onComplete: repeats.section1,
					delay: layerATime * .62 - fadeOutTime,
				});

				repeats.section2 = function() {
					var duration = layerATime * 1.1;

					if (!slideActive) return;

					TweenMax.set(components.slideE.city.sky.section[2].element, {xPercent: -4});

					TweenMax.to(components.slideE.city.sky.section[2].element, duration, {xPercent: 20, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[2].element, fadeInTime, {opacity: 1, ease: Power0.easeNone});

					TweenMax.to(components.slideE.city.sky.section[2].element, fadeOutTime, {
						opacity: 0,
						ease: Power0.easeNone,
						onComplete: repeats.section2,
						delay: duration - fadeOutTime
					});
				}

				TweenMax.to(components.slideE.city.sky.section[2].element, layerATime * 1.04, {
					xPercent: 20,
					ease: Power0.easeNone,
				});

				TweenMax.to(components.slideE.city.sky.section[2].element, fadeOutTime, {
					opacity: 0,
					ease: Power0.easeNone,
					onComplete: repeats.section2,
					delay: layerATime * 1.04 - fadeOutTime,
				});
			}

			function activateBoats() {
				var baseBoatSpeed = screen.height * .2, // base boat speed on height
					repeats = {},
					leftEnd = -60,
					rightEnd = 10;

				repeats.boatA = function() {
					addBoatCall(Math.random() * 12, function() {
						if (!slideActive) return;

						TweenMax.fromTo(components.slideE.city.boat.a.element, baseBoatSpeed * 1.2, {
							x: screen.width + rightEnd,
						}, {
							x: leftEnd,
							ease: Power0.easeNone,
							onComplete: repeats.boatA,
						});
					});
				}

				TweenMax.fromTo(components.slideE.city.boat.a.element, baseBoatSpeed, {
					x: screen.width * .92,
				}, {
					x: leftEnd,
					ease: Power0.easeNone,
					onComplete: repeats.boatA,
				});

				repeats.boatB = function() {
					addBoatCall(Math.random() * 12, function() {
						if (!slideActive) return;

						TweenMax.fromTo(components.slideE.city.boat.b.element, baseBoatSpeed * 1, {
							x: screen.width + rightEnd,
						}, {
							x: leftEnd,
							ease: Power0.easeNone,
							onComplete: repeats.boatB,
						});
					});
				}

				TweenMax.fromTo(components.slideE.city.boat.b.element, baseBoatSpeed * .92, {
					x: screen.width * .025,
				}, {
					x: screen.width + rightEnd,
					ease: Power0.easeNone,
					onComplete: repeats.boatB,
				});

				repeats.boatC = function() {
					addBoatCall(4 + Math.random() * 10, function() {
						if (!slideActive) return;

						TweenMax.fromTo(components.slideE.city.boat.c.element, baseBoatSpeed * .58, {
							x: leftEnd,
						}, {
							x: screen.width + rightEnd,
							ease: Power0.easeNone,
							onComplete: repeats.boatC,
						});
					});
				}

				repeats.boatC();

				repeats.boatD = function() {
					addBoatCall(4 + Math.random() * 24, function() {
						if (!slideActive) return;

						TweenMax.fromTo(components.slideE.city.boat.d.element, baseBoatSpeed * .96, {
							x: leftEnd,
						}, {
							x: screen.width + rightEnd,
							ease: Power0.easeNone,
							onComplete: repeats.boatD,
						});
					});
				}

				repeats.boatD();

				repeats.boatF = function() {
					addBoatCall(18 + Math.random() * 32, function() {
						if (!slideActive) return;

						TweenMax.fromTo(components.slideE.city.boat.f.element, baseBoatSpeed * .74, {
							x: screen.width + rightEnd,
						}, {
							x: leftEnd,
							ease: Power0.easeNone,
							onComplete: repeats.boatF,
						});
					});
				}

				repeats.boatF();

				repeats.boatG = function() {
					addBoatCall(6 + Math.random() * 8, function() {
						if (!slideActive) return;

						TweenMax.fromTo(components.slideE.city.boat.g.element, baseBoatSpeed * .86, {
							x: leftEnd,
						}, {
							x: screen.width + rightEnd,
							ease: Power0.easeNone,
							onComplete: repeats.boatG,
						});
					});
				}

				repeats.boatG();

				repeats.boatH = function() {
					addBoatCall(14 + Math.random() * 60, function() {
						if (!slideActive) return;

						TweenMax.fromTo(components.slideE.city.boat.h.element, baseBoatSpeed * .18, {
							x: screen.width + rightEnd,
						}, {
							x: leftEnd,
							ease: Power0.easeNone,
							onComplete: repeats.boatH,
						});
					});
				}

				repeats.boatH();

				function addBoatCall(delay, call) {
					TweenMax.delayedCall(delay, call);

					boatCalls.push(call);
				}
			}

			function activateBalloon() {
				var baseTime = 60; // base balloon speed on height

				TweenMax.fromTo(components.slideE.city.balloon.element, baseTime, {
					x: screen.width * .56,
					y: 0,
				}, {
					x: screen.width + 20,
					y: -132,
					ease: Power0.easeNone,
					onComplete: repeatBalloon
				});

				function repeatBalloon() {
					TweenMax.delayedCall(1 + Math.random() + 6, function() {
						if (!slideActive) return;

						TweenMax.fromTo(components.slideE.city.balloon.element, baseTime * 2.2, {
							x: -20,
							y: Math.random() * 240 + -120,
						}, {
							x: screen.width + 20,
							y: Math.random() * 240 + -120,
							ease: Power0.easeNone,
							onComplete: repeatBalloon
						});
					});
				}
			}

			function activateMouseParallax() {
				var targetOffset;

				parallaxHandler = _.throttle(function(event) {
					var maxDelta = 80, // make screen.width relative
						halfPoint = screen.width / 2,
						offset = Math.round(((event.clientX - halfPoint) / halfPoint) * maxDelta);

					if (offset == targetOffset) return;

					targetOffset = offset;

					TweenMax.to([
						components.slideE.city.complete.element,
						components.slideE.city.reflection.element,
					], .2, {
						x: targetOffset,
					});
				}, 50);

				bodyElement.on("mousemove", parallaxHandler);
			}
		}

		function deactivate() {
			if (!slideActive) return;

			if (fogTimeline) fogTimeline.pause(0);

			fogTimeline = null;

			while (boatCalls.length) {
				TweenMax.killDelayedCallsTo(boatCalls.shift());
			}

			for (var key in components.slideE.city.boat) {
				TweenMax.killTweensOf(components.slideE.city.boat[key].element, {x: true});

				TweenMax.set(components.slideE.city.boat[key].element, {x: -50});
			}

			TweenMax.set(components.slideE.fog.element, {display: ""});

			TweenMax.killTweensOf([
				components.slideE.city.water.waveA.element,
				components.slideE.city.water.waveB.element,
				components.slideE.city.water.waveC.element,
				components.slideE.city.water.waveD.element,
			], {xPercent: true});


			for (var idx = 0, len = components.slideE.city.sky.section.length; idx < len; idx++) {
				TweenMax.killTweensOf(components.slideE.city.sky.section[idx].element, {xPercent: true, opacity: true});

				TweenMax.set(components.slideE.city.sky.section[idx].element, {xPercent: 0, opacity: 1});
			}

			TweenMax.killTweensOf(components.slideE.city.balloon.element, {x: true, y: true});

			slideActive = false;
		}
	}

	function setupSlideF() {
		var stars = [],
			parallaxHandler,
			slideActive,
			scrollOffsets = {};

		observers["scroll"].push(updateActivation);

		observers["scroll"].push(updateParallax);

		observers["resize"].push(function() {
			updateParallax();

			regenerateStars();
		});

		updateActivation();

		updateParallax(0, true);

		function updateParallax(value, force) {
			var offsetRanges = {
					wanderingMan: screen.height * .1,
					mountains: screen.height * .16,
					sky: screen.height * .32,
				},
				screenDeltaRange,
				scrollRatio,
				newOffsets = {},
				duration = force ? 0 : .2;

			if (!slideActive && !force) return;

			screenDeltaRange = [screen.height * 4, screen.height * 6]

			scrollRatio = (screen.scrollPosition - screenDeltaRange[0]) / (screenDeltaRange[1] - screenDeltaRange[0]);

			scrollRatio = Math.max(Math.min((scrollRatio - .5) * 2, 1), -1);

			for (var key in offsetRanges) {
				newOffsets[key] = Math.round(scrollRatio * offsetRanges[key]);

				if (newOffsets[key] != scrollOffsets[key]) {
					scrollOffsets[key] = newOffsets[key];

					if (key == "mountains") {
						TweenMax.to(components.slideF.mountains.wrapper.element, duration, {y: scrollOffsets[key]});
					}
					else if (key == "sky") {
						TweenMax.to(components.slideF.sky.element, duration, {y: scrollOffsets[key]});
					}
					else if (key == "wanderingMan") {
						TweenMax.to(components.slideF.wanderingMan.element, duration, {y: scrollOffsets[key]});
					} 
				}
			}
		}

		function updateActivation() {
			if (screen.visibleSlides["5"]) {
				activate();
			}
			else {
				deactivate();
			}
		}

		function activate() {
			if (slideActive) return;

			slideActive = true;

			generateStars();

			activateMouseParallax();
		}

		function deactivate() {
			if (!slideActive) return;

			TweenMax.killDelayedCallsTo(twinkle);

			while (stars.length) {
				stars.shift().element.remove();
			}

			if (parallaxHandler) {
				components.slideF.element.off("mousemove", parallaxHandler);

				parallaxHandler = null;
			}
			else {
				console.warn("Parallax handler is missing.")
			}

			slideActive = false;
		}

		function generateStars() {
			var starCount = 0.00021637867 * screen.width * screen.height; // make this width & height based

			for (var idx = 0; idx < starCount; idx++) {
				generateStar();
			}

			function generateStar() {
				var starElement = $("<div class='clc-slide-f-sky-star'></div>");

				TweenMax.set(starElement, {
					x: Math.random() * screen.width * 1.05,
					y: Math.random() * Math.random() * screen.height,
					scale: (Math.random() * Math.random() * .9) + .1,
				});

				stars.push({
					element: starElement
				});

				components.slideF.sky.element.append(starElement);
			}

			twinkle();
		}

		function activateMouseParallax() {
			var targetOffsets = {},
				offsets = {};

			parallaxHandler = _.throttle(function(event) {
				var maxDeltas = {
						mountains: -400,
						sky: -200,
						wanderingMan: 200,
					},
					halfPoint = screen.width / 2,
					offsetRatio = ((event.clientX - halfPoint) / halfPoint);

				for (var key in maxDeltas) {
					offsets[key] = Math.round(offsetRatio * maxDeltas[key]);

					if (offsets[key] != targetOffsets[key]) {
						targetOffsets[key] = offsets[key];

						if (key == "mountains") {
							TweenMax.to(components.slideF.mountains.wrapper.element, .2, {
								xPercent: targetOffsets.mountains / 100,
							});
						}
						else if (key == "sky") {
							TweenMax.to(components.slideF.sky.element, .2, {
								xPercent: targetOffsets.sky / 100,
							});
						}
						else if (key == "wanderingMan") {
							TweenMax.to(components.slideF.wanderingMan.element, .2, {
								xPercent: targetOffsets.wanderingMan / 100,
							});
						}
					}
				}
			}, 50);

			components.slideF.element.on("mousemove", parallaxHandler);
		}

		function regenerateStars() {
			TweenMax.killDelayedCallsTo(twinkle);

			while (stars.length) {
				stars.shift().element.remove();
			}

			generateStars();
		}

		function twinkle() {
			var star;

			if (!slideActive) return;

			star = stars[Math.round(Math.random() * (stars.length - 1))];

			TweenMax.to(star.element, Math.random() * .72 + .2, {
				opacity: 0,
				onComplete: function() {
					TweenMax.to(star.element, Math.random() * .72 + .2, {opacity: 1});
				}
			});

			TweenMax.delayedCall(Math.pow(Math.random(), 3) * .0001, twinkle);
		}
	}

	function setupSlideG() {
		var parallaxHandler,
			slideActive,
			scrollOffsets = {},
			boxDropTimeline;

		observers["scroll"].push(updateActivation);

		observers["scroll"].push(updateParallax);

		observers["resize"].push(updateParallax);

		updateActivation();

		updateParallax(0, true);

		function updateActivation() {
			if (screen.visibleSlides["6"]) {
				activate();
			}
			else {
				deactivate();
			}
		}

		function activate() {
			if (slideActive) return;

			TweenMax.set([
				components.slideG.hand.element,
				components.slideG.box.element,
				components.slideG.box.shadow.element
			], {visibility: "visible"});

			slideActive = true;

			activateBoxDrop();

			activateMouseParallax();
		}

		function deactivate() {
			if (!slideActive) return;

			slideActive = false;

			boxDropTimeline.pause(0);

			boxDropTimeline = null;

			TweenMax.set([
				components.slideG.hand.element,
				components.slideG.box.element,
				components.slideG.box.shadow.element
			], {visibility: ""});

			if (parallaxHandler) {
				components.slideF.element.off("mousemove", parallaxHandler);

				parallaxHandler = null;
			}
			else {
				console.warn("Parallax handler is missing.")
			}
		}

		function updateParallax(value, force) {
			var offsetRanges = {
					foreground: screen.height * .36,
					workfloor: screen.height * .14,
				},
				screenDeltaRange,
				scrollRatio,
				newOffsets = {},
				duration = force ? 0 : .2;

			if (!screen.visibleSlides["6"] && !force) return;

			screenDeltaRange = [screen.height * 5, screen.height * 7]

			scrollRatio = (screen.scrollPosition - screenDeltaRange[0]) / (screenDeltaRange[1] - screenDeltaRange[0]);

			scrollRatio = Math.max(Math.min((scrollRatio - .5) * 2, 1), -1);

			for (var key in offsetRanges) {
				newOffsets[key] = Math.round(scrollRatio * offsetRanges[key]);

				if (newOffsets[key] != scrollOffsets[key]) {
					scrollOffsets[key] = newOffsets[key];

					if (key == "foreground") {
						TweenMax.to(components.slideG.foreground.wrapper.element, duration, {y: scrollOffsets[key]});
					}
					else {
						TweenMax.to(components.slideG[key].element, duration, {y: scrollOffsets[key]});
					}
				}
			}
		}

		function activateBoxDrop() {
			boxDropTimeline = new TimelineMax({paused: true, delay: .4, repeat: -1, repeatDelay: .8});

			boxDropTimeline.fromTo(components.slideG.hand.element, .56, {
				x: screen.height * .84333333333333,
				y: screen.height * -.50172222222222,
			}, {
				x: 0,
				y: 0,
				ease: Back.easeOut.config(.5)
			}, 0);

			boxDropTimeline.fromTo(components.slideG.box.element, .4, {
				y: screen.height * -.6,
			}, {
				y: 0,
				ease: Back.easeOut.config(.6)
			}, .36);

			boxDropTimeline.from(components.slideG.box.shadow.element, .3, {
				opacity: 0,
				scale: .8
			}, .46);

			boxDropTimeline.to(components.slideG.hand.element, .08, {
				y: 0.00222222222 * screen.height + 2,
			}, .61);

			boxDropTimeline.to(components.slideG.hand.element, .12, {
				y: 0,
			}, .69);

			boxDropTimeline.to([
				components.slideG.hand.element,
				components.slideG.box.element,
				components.slideG.box.shadow.element,
			], .4, {
				x: screen.height * .84333333333333,
				y: screen.height * -.50172222222222,
				ease: Power1.easeIn
			}, 1.8);


			boxDropTimeline.play();
		}

		function activateMouseParallax() {
			var targetOffsets = {},
				offsets = {};

			parallaxHandler = _.throttle(function(event) {
				var maxDeltas = {
						workfloor: -120,
						foreground: 50,
					},
					halfPoint = screen.width / 2,
					offsetRatio = ((event.clientX - halfPoint) / halfPoint);

				for (var key in maxDeltas) {
					offsets[key] = Math.round(offsetRatio * maxDeltas[key]);

					if (offsets[key] != targetOffsets[key]) {
						targetOffsets[key] = offsets[key];

						TweenMax.to(components.slideG[key].element, .2, {
							x: targetOffsets[key],
							y: targetOffsets[key] * .575,
						});
					}
				}
			}, 50);

			components.slideG.element.on("mousemove", parallaxHandler);
		}
	}

	function setupSlideH() {
		var activeCar,
			itemTypes = [
				"gas-canister", "map", "binoculars", "hot-chocolate", "milkshake", "shake", "sodas", "sandwich", "bread", "book", "turkey", 
				// "dead-fish",
				"car-battery", "batteries", "hats", "cat-a", "cat-b", "snacks", "lunch"
			],
			pickedSets = [
				["gas-canister", "map", "lunch"],
				["cat-a", "cat-b", "dead-fish"],
				["car-battery", "tire", "sodas"],
				["batteries", "hats", "shake"],
				["tire", "gas-canister", "car-battery"],
				["book", "binoculars", "lunch"],
				// ["dead-fish", "dead-fish", "dead-fish"],
				["gas-canister", "hot-chocolate", "batteries"],
				["map", "binoculars", "lunch"],
			],
			carTypes = ["stationwagon", "suv", "yellow-truck", "blue-truck", "striped-car"],
			previousCarIndex,
			slideActive,
			parallaxHandler,
			scrollOffsets = {},
			startingCloudTimeline;

		observers["scroll"].push(updateActivation);

		observers["scroll"].push(updateParallax);

		observers["resize"].push(updateParallax);

		generateStartingClouds();

		updateActivation();

		updateParallax(0, true);

		function updateActivation() {
			if (screen.visibleSlides["7"]) {
				if (!slideActive && screen.scrollPosition > screen.height * 6.2) activate();
			}
			else {
				deactivate();
			}
		}

		function activate() {
			if (slideActive) return;

			slideActive = true;

			activateCars();

			activateMouseParallax();

			generateClouds();
		}

		function deactivate() {
			if (!slideActive) return;

			slideActive = false;

			TweenMax.killDelayedCallsTo(autogenerateCar);

			TweenMax.killDelayedCallsTo(autogenerateCloud);

			if (startingCloudTimeline) {
				startingCloudTimeline.kill();

				startingCloudTimeline = null;

				components.slideH.sky.element.empty();

				generateStartingClouds();
			}
			else {
				console.warn("Missing starting cloud timeline.")
			}

			if (activeCar) {
				console.log("hit");
				activeCar.timeline.progress(1, false);
			}

			if (parallaxHandler) {
				components.slideF.element.off("mousemove", parallaxHandler);

				parallaxHandler = null;
			}
			else {
				console.warn("Parallax handler is missing.")
			}
		}

		function updateParallax(value, force) {
			var offsetRanges = {
					storescape: screen.height * .24,
					sky: screen.height * .14,
				},
				screenDeltaRange,
				scrollRatio,
				newOffsets = {},
				duration = force ? 0 : .2;

			if (!screen.visibleSlides["7"] && !force) return;

			screenDeltaRange = [screen.height * 6, screen.height * 8]

			scrollRatio = (screen.scrollPosition - screenDeltaRange[0]) / (screenDeltaRange[1] - screenDeltaRange[0]);

			scrollRatio = Math.max(Math.min((scrollRatio - .5) * 2, 1), -1);

			for (var key in offsetRanges) {
				newOffsets[key] = Math.round(scrollRatio * offsetRanges[key]);

				if (newOffsets[key] != scrollOffsets[key]) {
					scrollOffsets[key] = newOffsets[key];

					if (key == "storescape") {
						TweenMax.to(components.slideH.storescape.wrapper.element, duration, {y: scrollOffsets[key]});
					}
					else {
						TweenMax.to(components.slideH[key].element, duration, {y: scrollOffsets[key]});
					}
				}
			}
		}

		function activateCars() {
			activateCar("stationwagon", {
				items: ["gas-canister", "map", "binoculars"],
			});

			autogenerateCar(true);
		}

		function activateCar(type, properties) {
			var car = {
					element: $("<img class='clc-slide-h-car clc-slide-h-car-" + type + "' src='assets/img/" + type + ".svg' />"),
					items: []
				},
				carTimeline = new TimelineMax({
					paused: true,
					delay: .6,
					onComplete: function() {
						components.slideH.underlayEffects.element.empty();

						components.slideH.overlayEffects.element.empty();

						components.slideH.product.element.empty();

						car.element.remove();

						if (activeCar == car) activeCar = null;
					}
				}),
				target = {},
				delta,
				arrivalTime,
				departureTime,
				enterTime;

			previousCarIndex = carTypes.indexOf(type);

			car.timeline = carTimeline;

			activeCar = car;

			target.x = -94 * screen.vmin;

			target.y = 0.57735026919 * -target.x;

			delta = Math.sqrt(Math.pow(target.x, 2) + Math.pow(target.y, 2));

			arrivalTime = delta * .0036;

			carTimeline.from(car.element, arrivalTime, {
				x: target.x,
				y: target.y,
				ease: CustomEase.create("custom", "M0,0,C0.338,0.388,0.678,0.867,0.83,0.958,0.9,1,0.932,1,1,1")
			}, 0);

			for (var idx = 0, len = properties.items.length; idx < len; idx++) {
				addItem(properties.items[idx]);
			}

			target.x = 96 * screen.vmin;

			target.y = 0.57735026919 * -target.x;

			delta = Math.sqrt(Math.pow(target.x, 2) + Math.pow(target.y, 2));

			departureTime = delta * .0012;

			carTimeline.to(car.element, departureTime, {
				x: target.x,
				y: target.y,
				ease: Sine.easeIn
			}, arrivalTime + 1.04);

			components.slideH.storescape.element.append(car.element);

			carTimeline.play();

			function addItem(itemType) {
				var item = $("<img class='clc-slide-h-product-item clc-slide-h-product-item-" + itemType + "' src='assets/img/" + itemType + ".svg' />");

				car.items.push(item);

				enterTime = arrivalTime - .22 + (.12 * idx);

				carTimeline.addCallback(function() {
					var clientRect = item[0].getBoundingClientRect(),
						coordinate = { x: clientRect.left + clientRect.width / 2, y: screen.height },
						center = {x: coordinate.x, y: clientRect.height / 2 + .64 * screen.height},
						topDelay = 340,
						adjustmentRatio = screen.lesser / 900,
						entryBurst = new mojs.Burst({
							parent: components.slideH.overlayEffects.element,
							left: 0, top: 0,
							degree: 120,
							angle: 300,
							radius: {[adjustmentRatio * 6]:adjustmentRatio * 44},
							count: 4,
							children: {
								shape: "line",
								radius: 10 * adjustmentRatio,
								radiusY: 0,
								scale: 1,
								strokeDasharray: "100%",
								strokeDashoffset: { "-100%": "100%" },
								stroke: "#FFF",
								easing: "ease.out",
								duration: 300
							},
							delay: 40,
						}),
						trail = new mojs.Shape({
							parent: components.slideH.underlayEffects.element,
							fill: "none",
							stroke: "white",
							shape: "line",
							radiusY: 0,
							radiusX: {0: screen.height - clientRect.height - (.64 * screen.height)},
							strokeDasharray: "100% 100%",
							strokeDashoffset: { "0%": "100%" },
							angle: 90,
							duration: 480,
							strokeWidth: 2 * adjustmentRatio,
							easing: "cubic.out",
							left: 0,
							top: 0,
							delay: 120,
						}),
						circleA = new mojs.Shape({
							parent: components.slideH.underlayEffects.element,
							left: 0, top: 0,
							stroke: "red",
							strokeWidth: {[24 * adjustmentRatio]:0},
							fill: 'none',
							scale: { .8: 1 },
							radius: {[24 * adjustmentRatio]: 84 * adjustmentRatio},
							duration: 320,
							easing: 'cubic.out',
							delay: topDelay,
						}),
						circleB = new mojs.Shape({
							parent: components.slideH.underlayEffects.element,
							left: 0, top: 0,
							stroke: "#FFF",
							strokeWidth: {[54 * adjustmentRatio]:0},
							fill: 'none',
							scale: { .8: 1 },
							radius: {[24 * adjustmentRatio]: 88 * adjustmentRatio},
							duration: 320,
							easing: 'cubic.out',
							delay: topDelay + 60,
						}),
						crossBurst = new mojs.Burst({
							parent: components.slideH.underlayEffects.element,
							left: 0, top: 0,
							radius: {[54 * adjustmentRatio]: 120 * adjustmentRatio},
							angle: "rand(0, 90)",
							count: 10,
							children: {
								shape: "cross",
								radius: 9 * adjustmentRatio,
								angle: "rand(0, 90)",
								strokeWidth: 4 * adjustmentRatio,
								stroke: ['red', 'white'],
								scale: { 1: 0, easing: 'quad.in' },
								pathScale: [.8, null],
								degreeShift: [13, null],
								duration: [500, 700],
								easing: 'quint.out',
								delay: topDelay,
							},
						});

					entryBurst.tune(coordinate).replay();

					trail.tune(coordinate).replay();

					circleA.tune(center).replay();

					circleB.tune(center).replay();

					crossBurst.tune(center).replay();
				}, enterTime - .15);

				carTimeline.from(item, .52, {
					y: .36 * screen.height,
					ease: Back.easeOut.config(.86),
				}, enterTime);

				carTimeline.addCallback(function() {
					wiggleProp(item, "x", -4, 4, [.18, .36]);
					wiggleProp(item, "y", -4, 4, [.18, .36]);
					wiggleProp(item, "rotation", -4, 4, [.14, .36]);
				}, .48 + enterTime);

				carTimeline.addCallback(function() {
					TweenMax.killTweensOf(item, {y: true});

					TweenMax.to(item, .52, {
						y: 16 * screen.vmin,
						opacity: 0,
						ease: Back.easeIn.config(1.4),
						onComplete: function() {
							TweenMax.killTweensOf(item, {
								x: true,
								rotation: true,
							});
						}
					});
				}, enterTime + 1.1);

				components.slideH.product.element.append(item);
			}

			function wiggleProp(element, prop, min, max, time) {
				var duration = Math.random() * time[1] + time[0],
					tweenProps = {
						ease: Power1.easeInOut,
						onComplete: wiggleProp,
						onCompleteParams: [element, prop, min, max, time]
					};

				tweenProps[prop] = Math.random() * (max - min) + min;
			
				TweenMax.to(element, duration, tweenProps);
			}
		}

		function activateMouseParallax() {
			var targetOffsets = {},
				offsets = {};

			parallaxHandler = _.throttle(function(event) {
				var maxDeltas = {
						storescape: -60,
						sky: -20,
					},
					halfPoint = screen.width / 2,
					offsetRatio = ((event.clientX - halfPoint) / halfPoint);

				for (var key in maxDeltas) {
					offsets[key] = Math.round(offsetRatio * maxDeltas[key]);

					if (offsets[key] != targetOffsets[key]) {
						targetOffsets[key] = offsets[key];

						TweenMax.to(components.slideH[key].element, .2, {
							x: targetOffsets[key],
							y: targetOffsets[key] * .575,
						});
					}
				}
			}, 50);

			components.slideH.element.on("mousemove", parallaxHandler);
		}

		function generateStartingClouds() {
			generateCloud({
				width: 14,
				height: 32,
				x: -54,
				y: -24
			}, true);

			generateCloud({
				width: 10,
				height: 24,
				x: 10,
				y: 8
			}, true);

			generateCloud({
				width: 22,
				height: 48,
				x: -62,
				y: 48
			}, true);

			generateCloud({
				width: 22,
				height: 48,
				x: 42,
				y: -34
			}, true);
		}

		function generateClouds() {
			startingCloudTimeline.play();

			autogenerateCloud(true);
		}

		function generateCloud(parameters, isStartingCloud) {
			var cloud = {
					element: $(
						"<div class='clc-slide-h-sky-cloud'>" +
							"<img class='clc-slide-h-sky-cloud-content' src='assets/img/isometric-cloud.svg' />" +
							"<img class='clc-slide-h-sky-cloud-shadow' src='assets/img/isometric-cloud-shadow.svg' />" +
						"</div>"
					)
				},
				properties,
				target,
				delta,
				width;

			if (!parameters) {
				width = 8 + (Math.random() * 16);

				parameters = {
					width: width,
					height: width * 1.4 + 4 + Math.random() * 16,
				};

				properties = {
					width: Math.round(parameters.width * screen.vmin),
					height: Math.round(parameters.height * screen.vmin),
				};

				properties.x = -properties.width - screen.width / 2 - 10;
				
				properties.y = (-.42 + Math.random() * 1.12) * screen.height;
			}
			else {
				properties = {
					x: Math.round(parameters.x * screen.vmin),
					y: Math.round(parameters.y * screen.vmin),
					width: Math.round(parameters.width * screen.vmin),
					height: Math.round(parameters.height * screen.vmin),
					zIndex: 200 + parameters.y
				};
			}

			properties.zIndex = Math.round(properties.y + screen.height); 
			
			target = {
				y: (properties.height / 2) - screen.height,
			};

			TweenMax.set(cloud.element, $.extend({}, properties));

			components.slideH.sky.element.append(cloud.element);

			target.x = 1.73205080757 * (properties.y - target.y) + properties.x;

			delta = Math.sqrt(Math.pow(target.x - properties.x, 2) + Math.pow(target.y - properties.y, 2))

			if (isStartingCloud) {
				if (!startingCloudTimeline) {
					startingCloudTimeline = new TimelineMax({paused: true});
				}

				startingCloudTimeline.to(cloud.element, delta * .12 * (16 / (parameters.width + 4)), {
					x: target.x,
					y: target.y,
					ease: Power0.easeNone,
					onComplete: function() {
						cloud.element.remove();
					}
				}, 0);
			}
			else {
				TweenMax.to(cloud.element, delta * .12 * (16 / (parameters.width + 4)), {
					x: target.x,
					y: target.y,
					ease: Power0.easeNone,
					onComplete: function() {
						cloud.element.remove();
					}
				});
			}
		}

		function autogenerateCloud(initial) {
			if (!initial) generateCloud();

			TweenMax.delayedCall(6 + Math.random() * Math.random() * 48, autogenerateCloud);
		}

		function autogenerateCar(initial) {
			var typeIndex;

			if (!initial) {
				if (activeCar) {
					console.warn("Overlapping car generation.");
				}
				else {
					do {
						typeIndex = Math.round(Math.random() * (carTypes.length - 1));
					} while (typeIndex == previousCarIndex);

					activateCar(carTypes[typeIndex], {
						items: generateItemSet()
					});
				}
			}

			TweenMax.delayedCall(6.4 + Math.random() * 1.5, autogenerateCar);

			function generateItemSet() {
				var consumedIndices = [],
					set = [],
					itemIndex;

				if (Math.random() > .4) {
					return pickedSets[Math.round(Math.random() * (pickedSets.length - 1))];
				}
				else {
					while (consumedIndices.length < 3) {
						itemIndex = Math.round(Math.random() * (itemTypes.length - 1));

						if (consumedIndices.indexOf(itemIndex) == -1) {
							consumedIndices.push(itemIndex);

							set.push(itemTypes[itemIndex]);
						}
					}

					return set;
				}
			}
		}
	}

	function setupSlideI() {
		setupActivation();

		setupForm();

		function setupActivation() {
			var entryTimeline,
				activated;

			observers["visibleSlidesUpdated"].push(updateActivation);

			observers["activeSlideUpdated"].push(updateActivation);

			updateActivation();

			function updateActivation() {
				if (screen.activeSlide.number == 8) {
					activate();
				}
				else if (!screen.visibleSlides["8"]) {
					deactivate();
				}
			}

			function activate() {
				if (activated) return;

				activated = true;

				if (!entryTimeline) {
					entryTimeline = new TimelineMax({paused: true});

					entryTimeline.from(components.slideI.message.words.element[0], .8, {
						opacity: 0
					}, 0);

					entryTimeline.from(components.slideI.message.words.element[1], .8, {
						opacity: 0
					}, .14);

					// entryTimeline.from(components.slideI.message.words.element[2], .8, {
					// 	opacity: 0
					// }, .28);

					entryTimeline.from(components.slideI.message.words.element[2], .8, {
						opacity: 0
					}, .3);

					entryTimeline.from(components.slideI.message.words.element[3], .8, {
						opacity: 0
					}, .44);

					entryTimeline.from(components.slideI.message.words.element[4], .8, {
						opacity: 0
					}, .6);

					entryTimeline.from(components.slideI.divider.element, .62, {
						scaleY: 0,
						opacity: 0,
						transformOrigin: "50% 0%"
					}, .74);

					entryTimeline.from(components.slideI.form.element, .48, {
						x: 42,
					}, .9);

					entryTimeline.from(components.slideI.form.input.element, .62, {
						opacity: 0,
					}, .9);

					entryTimeline.from(components.slideI.form.button.element, .62, {
						opacity: 0,
					}, 1.06);
				}

				entryTimeline.play();
			}

			function deactivate() {
				if (!activated) return;

				activated = false;

				if (entryTimeline) entryTimeline.pause(0);
			}
		}

		function setupForm() {
			var placeholderVisible = true;

			components.slideI.form.input.input.element.on({
				input: function() {
					var value = components.slideI.form.input.input.element.val();

					if (value.length && placeholderVisible) {
						TweenMax.killTweensOf(components.slideI.form.input.placeholder.element, {opacity: true});

						TweenMax.to(components.slideI.form.input.placeholder.element, .3, {opacity: 0});

						placeholderVisible = false;
					}
					else if (value.length == 0 && !placeholderVisible) {
						TweenMax.killTweensOf(components.slideI.form.input.placeholder.element, {opacity: true});

						TweenMax.to(components.slideI.form.input.placeholder.element, .3, {opacity: 1});

						placeholderVisible = true;
					}
				}
			});

			components.slideI.form.button.element.on({
				mouseenter: function() {
					TweenMax.to(components.slideI.form.button.element, .24, {
						className: "+=clc-slide-j-content-form-button-hovered"
					});
				},
				mouseleave: function() {
					TweenMax.to(components.slideI.form.button.element, .24, {
						className: "-=clc-slide-j-content-form-button-hovered"
					});
				}
			});
		}
	}

	function notifyObservers(event, data) {
		var specifiedObservers = observers[event];

		if (!specifiedObservers) return;

		for (var idx = 0, len = specifiedObservers.length; idx < len; idx++) {
			specifiedObservers[idx](data);
		}
	}
});