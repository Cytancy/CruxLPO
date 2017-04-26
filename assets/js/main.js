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
				heart: {
					element: $(".clc-slide-c-heart"),
					wrapper: {
						element: $(".clc-slide-c-heart-wrapper"),
					},
					pieceA: {
						element: $(".clc-slide-c-heart-piece-a"),
					},
					pieceB: {
						element: $(".clc-slide-c-heart-piece-b"),
					}
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
		documentElement.on("scroll", checkScroll);

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

			notifyObservers("activeSlideUpdated", screen.activeSlide );
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
				
			TweenMax.set(components.slideB.cloud.element, {y: cloudOffset});

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
		var heartTimeline,
			heartOffset,
			heartActivated;

		observers["visibleSlidesUpdated"].push(updateActivation);

		observers["activeSlideUpdated"].push(updateActivation);

		observers["scroll"].push(updateParallax);

		observers["resize"].push(updateParallax);

		updateActivation();

		updateParallax();

		function updateActivation() {
			if (screen.visibleSlides["2"]) {
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

			if (!heartActivated) return;

			screenDeltaRange = [screen.height * 1.5, screen.height * 2.5]

			offsetRange = screen.height * 1;

			scrollRatio = (screen.scrollPosition - screenDeltaRange[0]) / (screenDeltaRange[1] - screenDeltaRange[0]);

			scrollRatio = Math.max(Math.min((scrollRatio - .5) * 2, 1), -1);

			newOffset = Math.round(scrollRatio * offsetRange);

			if (newOffset == heartOffset) return;

			heartOffset = newOffset;
				
			TweenMax.set(components.slideC.heart.element, {y: heartOffset});
		}

		function activate() {
			if (heartActivated) return;

			heartActivated = true;
			
			if (!heartTimeline) {
				heartTimeline = new TimelineMax({paused: true, delay: 0});

				// heartTimeline.addCallback(pulse, 0, [1]);

				// heartTimeline.addCallback(pulse, 1, [1.1]);

				heartTimeline.addCallback(pulse, 0.85, [1]);

				heartTimeline.addCallback(pulse, 1.6, [1]);

				heartTimeline.addCallback(pulse, 2.3, [1, true]);

				// heartTimeline.addCallback(pulse, 3.6, [1.8]);

				heartTimeline.to(components.slideC.heart.element, .56, {
					scale: .72,
					ease: Power2.easeInOut,
				}, 2.72);

				heartTimeline.fromTo(components.slideC.heart.wrapper.element, 1, {
					x: -1,
					y: -1,
				}, {
					x: 1,
					y: 1,
					ease: RoughEase.ease.config({
						strength: 8,
						points: 24,
						template: Linear.easeNone,
						randomize: false
					}),
					clearProps: "x, y"
				}, 2.72);

				heartTimeline.to(components.slideC.heart.element, .36, {
					scale: 1,
					ease: Back.easeOut.config(5.2),
				}, 3.52);

				heartTimeline.from(components.slideC.heart.pieceA.element, .24, {
					x: 3
				}, 3.52);

				heartTimeline.from(components.slideC.heart.pieceB.element, .24, {
					x: -3
				}, 3.52);

				heartTimeline.to(components.slideC.heart.pieceB.element.find(".clc-slide-c-heart-body"), .24, {
					morphSVG: "M90.4,0C78.6,0,68.3,6,62.2,15.1L51.9,31.7l13.9,13.1l-9.5,15.9l10.8,14.8L57,86l5.1,20.3c3.5-1.5,62.1-30.6,62.1-72.4C124.3,15.2,109.1,0,90.4,0z"
				}, 4.52);

				heartTimeline.to(components.slideC.heart.pieceB.element.find(".clc-slide-c-heart-shading"), .24, {
					morphSVG: "M110.3,54.3c-7.2,7-15.2,13.2-23.9,18.5c-8.8,5.2-18.2,9.1-28,11.8L57,86l5.1,20.3c3.4-1.4,58.5-28.8,61.9-68.6C120.1,43.6,115.5,49.1,110.3,54.3z"
				}, 4.52);
			}

			heartTimeline.play();

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
			if (!heartActivated) return;

			heartTimeline.pause(0);

			heartActivated = false;
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
				
			TweenMax.set(components.slideD.slouch.element, {y: slouchOffset});
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