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

	setupSlideI();

	function setupScreen() {
		$(window).on("resize", updateScreen);

		components.slideA.logo.bcr = components.slideA.logo.element[0].getBoundingClientRect();

		updateScreen();

		function updateScreen() {
			screen.width = components.main.element.width();

			screen.height = components.main.element.height();

			notifyObservers("resize");
		}
	}

	function setupEntryCover() {
		if (screen.scrollPosition == 0) {
			enter(true);
		}
		else if (screen.visibleSlides["0"]) {
			enter();
		}
		else {
			components.slideA.coverA.element.remove();

			components.slideA.coverB.element.remove();

			components.slideA.content.background.video.element[0].play();
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
				entryTimeline = new TimelineMax({paused: true, delay: .4, onComplete: function() {
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
				components.slideA.content.background.video.element[0].play();
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
		documentElement.on("scroll", _.throttle(checkScroll, 50));

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

		updateParallax();

		function updateActivation() {
			if (screen.visibleSlides["1"]) {
				activate();
			}
			else {
				deactivate();
			}
		}

		function updateParallax() {
			var offsetRange,
				screenDeltaRange,
				scrollRatio,
				newOffset;

			if (!cloudTimelines) return;

			screenDeltaRange = [screen.height * .5, screen.height * 1.5]

			offsetRange = screen.height * -.2;

			scrollRatio = (screen.scrollPosition - screenDeltaRange[0]) / (screenDeltaRange[1] - screenDeltaRange[0]);

			scrollRatio = Math.max(Math.min((scrollRatio - .5) * 2, 1), -1);

			newOffset = Math.round(scrollRatio * offsetRange);

			if (newOffset == cloudOffset) return;

			cloudOffset = newOffset;
				
			TweenMax.to(components.slideB.cloud.element, .2, {y: cloudOffset});

			if (!tieTimeline) {
				tieTimeline = new TimelineMax({paused: true});


			}
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

		updateParallax();

		function updateActivation() {
			if (screen.activeSlide.number == 2) {
				activate();
			}
			else if (!screen.visibleSlides["2"]) {
				deactivate();
			}
		}

		function updateParallax() {
			var offsetRange,
				screenDeltaRange,
				scrollRatio,
				newOffset;

			if (!screen.visibleSlides["2"]) return;

			screenDeltaRange = [screen.height * 1, screen.height * 3]

			offsetRange = screen.height * .5;

			scrollRatio = (screen.scrollPosition - screenDeltaRange[0]) / (screenDeltaRange[1] - screenDeltaRange[0]);

			scrollRatio = Math.max(Math.min((scrollRatio - .5) * 2, 1), -1);

			newOffset = Math.round(scrollRatio * offsetRange);

			if (newOffset == headacheOffset) return;

			headacheOffset = newOffset;
				
			TweenMax.to(components.slideC.headache.element, .2, {y: headacheOffset});
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

		updateParallax();

		function updateActivation() {
			if (screen.visibleSlides["3"]) {
				activate();
			}
			else {
				deactivate();
			}
		}

		function updateParallax() {
			var offsetRange,
				screenDeltaRange,
				scrollRatio,
				newOffset;

			if (!flickerActivated) return;

			screenDeltaRange = [screen.height * 2.5, screen.height * 3.5]

			offsetRange = screen.height * .2;

			scrollRatio = (screen.scrollPosition - screenDeltaRange[0]) / (screenDeltaRange[1] - screenDeltaRange[0]);

			scrollRatio = Math.max(Math.min((scrollRatio - .5) * 2, 1), -1);

			newOffset = Math.round(scrollRatio * offsetRange);

			if (newOffset == slouchOffset) return;

			slouchOffset = newOffset;
				
			TweenMax.to(components.slideD.slouch.element, .2, {y: slouchOffset});
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
			fogTimeline;

		observers["visibleSlidesUpdated"].push(updateActivation);

		updateActivation();

		function updateActivation() {
			if (screen.visibleSlides["4"]) {
				activate();
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
					fogTimeline = new TimelineMax({paused: true, delay: .1});

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
					delay:  layerCTime * .2 - fadeOutTime,
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
					delay:  layerCTime * .72 - fadeOutTime,
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
					delay:  layerBTime * .54 - fadeOutTime,
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
					delay:  layerBTime * .3 - fadeOutTime,
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
					delay:  layerBTime * .54 - fadeOutTime,
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
					delay:  layerATime * .82 - fadeOutTime,
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
					delay:  layerATime * .62 - fadeOutTime,
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
					delay:  layerATime * 1.04 - fadeOutTime,
				});
			}

			function activateBoats() {
				var baseBoatSpeed = screen.height * .2, // base boat speed on height
					repeats = {},
					leftEnd = -60,
					rightEnd = 10;

				repeats.boatA = function() {
					TweenMax.delayedCall(Math.random() * 12, function() {
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
					TweenMax.delayedCall(Math.random() * 12, function() {
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
					TweenMax.delayedCall(4 + Math.random() * 10, function() {
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
					TweenMax.delayedCall(4 + Math.random() * 24, function() {
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
					TweenMax.delayedCall(18 + Math.random() * 32, function() {
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
					TweenMax.delayedCall(6 + Math.random() * 8, function() {
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
					TweenMax.delayedCall(14 + Math.random() * 60, function() {
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

					entryTimeline.from(components.slideI.message.words.element[2], .8, {
						opacity: 0
					}, .28);

					entryTimeline.from(components.slideI.message.words.element[3], .8, {
						opacity: 0
					}, .44);

					entryTimeline.from(components.slideI.message.words.element[4], .8, {
						opacity: 0
					}, .58);

					entryTimeline.from(components.slideI.message.words.element[5], .8, {
						opacity: 0
					}, .76);

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