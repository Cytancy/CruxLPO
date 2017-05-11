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
			mousemove: [],
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
					},
					lines: {
						a: {element: $(".clc-slide-a-cover-a-line-a")},
						b: {element: $(".clc-slide-a-cover-a-line-b")},
					}
				},
				coverB: {
					element: $(".clc-slide-a-cover-b"),
					content: {
						element: $(".clc-slide-a-cover-b-content"),
					},
				},
				footer: {
					element: $(".clc-slide-a-footer"),
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
				sky: {
					element: $(".clc-slide-e-sky"),
					layerA: {element:  $(".clc-slide-e-sky-layer-a")},
					layerB: {element:  $(".clc-slide-e-sky-layer-b")},
					layerC: {element:  $(".clc-slide-e-sky-layer-c")},
					balloon: {
						element: $(".clc-slide-e-sky-balloon"), 
					}
				},
				city: {
					element: $(".clc-slide-e-city"),
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
						element: $(".clc-slide-e-city-water"),
						waveA: {
							top: {element: $(".clc-slide-e-city-water-wave-a .clc-slide-e-city-water-wave-top")}
						},
						waveB: {
							top: {element: $(".clc-slide-e-city-water-wave-b .clc-slide-e-city-water-wave-top")}
						},
						waveC: {
							top: {element: $(".clc-slide-e-city-water-wave-c .clc-slide-e-city-water-wave-top")}
						},
						waveD: {
							top: {element: $(".clc-slide-e-city-water-wave-d .clc-slide-e-city-water-wave-top")}
						}
					},
					boats: {
						element: $(".clc-slide-e-city-boats"),
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
				}
			},
			slideF: {
				element: $(".clc-slide-f"),
				sky: {
					element: $(".clc-slide-f-sky"),
					canvas: {
						element: $(".clc-slide-f-sky-canvas"),
						context: $(".clc-slide-f-sky-canvas")[0].getContext("2d"),
					}
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
				overlayEffects: {
					element: $(".clc-slide-h-overlay-effects"),
				},
				underlayEffects: {
					element: $(".clc-slide-h-underlay-effects"),
				}
			},
			slideI: {
				content: {
					element: $(".clc-slide-i-content")
				},
				message: {
					element: $(".clc-slide-i-content-message"),
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
					},
					warning: {
						element: $(".clc-slide-i-content-form-warning")
					}
				},
				email: {
					element: $(".clc-slide-i-email")
				},
				acceptance: {
					element: $(".clc-slide-i-acceptance"),
					title: {
						element: $(".clc-slide-i-acceptance-title"),
					},
					message: {
						element: $(".clc-slide-i-acceptance-message"),
					},
					ring: {
						element: $(".clc-slide-i-acceptance-ring"),
					}
				}
			}
		},
		screen = {
			slideCount: $(".clc-slide").length,
			visibleSlides: {},
			mouse: {}
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

		$(window).on("mousemove", _.throttle(updateMouse, 50));

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

		function updateMouse(event) {
			var keys = ["screenX", "screenY", "clientX", "clientY", "pageX", "pageY", "offsetX", "offsetY"],
				key,
				halfPoint = screen.width / 2;

			while (keys.length) {
				key = keys.shift();

				screen.mouse[key] = event[key];
			}

			screen.mouse.xOffsetRatio = ((event.clientX - halfPoint) / halfPoint);

			notifyObservers("mousemove");
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
			var entryTimeline = new TimelineMax({paused: true, delay: .34, onComplete: function() {
					// components.slideA.coverA.element.remove();

					components.slideA.coverB.element.remove();
				}}),
				strokeWidth = 42,
				bDelay = .14,
				footerHeight = components.slideA.footer.element.height();

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
				y: -footerHeight,
				ease: Power2.easeOut
			}, 1.5);

			entryTimeline.to(components.slideA.coverB.content.element, .6, {
				yPercent: -100,
				y: footerHeight,
				ease: Power2.easeOut
			}, 1.5);

			entryTimeline.from(components.slideA.footer.button.element, .44, {
				y: footerHeight,
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

		function segmentToString(x, y) {
			return [x.b.toFixed(2), y.b.toFixed(2), x.c.toFixed(2), y.c.toFixed(2), x.d.toFixed(2), y.d.toFixed(2)].join(",");
		}
	}

	function setupScrolling() {
		var targetSlide;

		documentElement.on("scroll", _.throttle(function() {
			window.requestAnimationFrame(checkScroll);
		}, 50));

		checkScroll();

		documentElement.keydown(_.throttle(function(e) {
			switch(e.which) {
				case 37: // left
				case 38: // up 
					jumpToSlide(-1);

					break;

				case 39: // right
				case 40: // down
				case 32: // space
					jumpToSlide(1);

					break;

				default: return; // exit this handler for other keys
			}

			e.preventDefault(); // prevent the default action (scroll / move caret)

			function jumpToSlide(delta) {
				TweenMax.to(bodyElement, .48, {
					scrollTo: {y: (screen.activeSlide.number + delta) * screen.height},
					ease: Power1.easeInOut
				});
			}
		}, 440));

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
				},
				click: function() {
					window.location.href = "https://dev.cruxinformatics.com/";
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
			scrollOffsets = {},
			targetMouseOffsets = {},
			boatCalls = [];

		observers["scroll"].push(updateActivation);

		observers["scroll"].push(updateParallax);

		observers["mousemove"].push(updateMouseParallax);

		observers["resize"].push(updateParallax);

		updateActivation();

		updateParallax(0, true);

		function updateParallax(value, force) {
			var offsetRanges = {
					sky: screen.height * .32,
					city: screen.height * .16,
				},
				screenDeltaRange,
				scrollRatio,
				newOffsets = {},
				duration = force ? 0 : .2;

			if (!screen.visibleSlides["4"] && !force) return;

			screenDeltaRange = [screen.height * 3, screen.height * 5]

			scrollRatio = (screen.scrollPosition - screenDeltaRange[0]) / (screenDeltaRange[1] - screenDeltaRange[0]);

			scrollRatio = Math.max(Math.min((scrollRatio - .5) * 2, 1), -1);

			for (var key in offsetRanges) {
				newOffsets[key] = Math.round(scrollRatio * offsetRanges[key]);

				if (newOffsets[key] != scrollOffsets[key]) {
					scrollOffsets[key] = newOffsets[key];

					TweenMax.to(components.slideE[key].element, duration, {y: scrollOffsets[key]});
				}
			}
		}

		function updateActivation() {
			if (screen.visibleSlides["4"]) {
				if (!slideActive && screen.scrollPosition > screen.height * 3.2) activate();
			}
			else {
				deactivate();
			}
		}

		function activate() {
			if (slideActive) return;

			slideActive = true;

			clearFog();

			activateWater();
			
			activateSky();

			activateBoats();

			activateBalloon();

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

				TweenMax.fromTo(components.slideE.city.water.waveA.top.element, baseTime, {
					xPercent: 0,
				}, {
					xPercent: 50,
					repeat: -1,
					ease: Power0.easeNone
				});

				TweenMax.fromTo(components.slideE.city.water.waveB.top.element, baseTime * .8, {
					xPercent: 50,
				}, {
					xPercent: 0,
					repeat: -1,
					ease: Power0.easeNone
				});

				TweenMax.to(components.slideE.city.water.waveC.top.element, baseTime * .9, {
					xPercent: 50,
					repeat: -1,
					ease: Power0.easeNone
				});

				TweenMax.fromTo(components.slideE.city.water.waveD.top.element, baseTime * .65, {
					xPercent: 50,
				}, {
					xPercent: 0,
					repeat: -1,
					ease: Power0.easeNone
				});
			}

			function activateSky() {
				var baseDuration = 54,
					durations = {
						layerC: baseDuration,
						layerB: baseDuration * 0.833333333,
						layerA: baseDuration * 0.666666667,
					},
					fadeOutTime = 6,
					fadeInTime = 4.5,
					repeats = {},
					maxXPercent = 22;

				cycleSkyLayer("layerA", true);

				cycleSkyLayer("layerB", true);

				cycleSkyLayer("layerC", true);

				function cycleSkyLayer(key, isFirst) {
					var duration = durations[key];

					if (!isFirst) {
						duration *= 2;

						TweenMax.to(components.slideE.sky[key].element, fadeInTime, {
							opacity: 1,
						});
					}

					TweenMax.to(components.slideE.sky[key].element, duration, {
						xPercent: maxXPercent,
						ease: Power0.easeNone
					});

					TweenMax.to(components.slideE.sky[key].element, fadeOutTime, {
						opacity: 0,
						delay: duration - fadeOutTime,
						onComplete: function() {
							TweenMax.set(components.slideE.sky[key].element, {xPercent: -maxXPercent});

							cycleSkyLayer(key, false);
						}
					});
				}
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
							x: screen.width * 1.2 + rightEnd,
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
							x: screen.width * 1.2 + rightEnd,
						}, {
							x: leftEnd,
							ease: Power0.easeNone,
							onComplete: repeats.boatB,
						});
					});
				}

				TweenMax.fromTo(components.slideE.city.boat.b.element, baseBoatSpeed * .92, {
					x: screen.width * 1.2 * .025,
				}, {
					x: screen.width * 1.2 + rightEnd,
					ease: Power0.easeNone,
					onComplete: repeats.boatB,
				});

				repeats.boatC = function() {
					addBoatCall(4 + Math.random() * 10, function() {
						if (!slideActive) return;

						TweenMax.fromTo(components.slideE.city.boat.c.element, baseBoatSpeed * .58, {
							x: leftEnd,
						}, {
							x: screen.width * 1.2 + rightEnd,
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
							x: screen.width * 1.2 + rightEnd,
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
							x: screen.width * 1.2 + rightEnd,
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
							x: screen.width * 1.2 + rightEnd,
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
							x: screen.width * 1.2 + rightEnd,
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

				TweenMax.fromTo(components.slideE.sky.balloon.element, baseTime, {
					x: screen.width * 1.2 * .56,
					y: 0,
				}, {
					x: screen.width * 1.2 + 20,
					y: -132,
					ease: Power0.easeNone,
					onComplete: repeatBalloon
				});

				function repeatBalloon() {
					TweenMax.delayedCall(1 + Math.random() + 6, function() {
						if (!slideActive) return;

						TweenMax.fromTo(components.slideE.sky.balloon.element, baseTime * 2.2, {
							x: -20,
							y: Math.random() * 240 + -120,
						}, {
							x: screen.width * 1.2 + 20,
							y: Math.random() * 240 + -120,
							ease: Power0.easeNone,
							onComplete: repeatBalloon
						});
					});
				}
			}
		}

		function deactivate() {
			if (!slideActive) return;

			while (boatCalls.length) {
				TweenMax.killDelayedCallsTo(boatCalls.shift());
			}

			for (var key in components.slideE.city.boat) {
				TweenMax.killTweensOf(components.slideE.city.boat[key].element, {x: true});

				TweenMax.set(components.slideE.city.boat[key].element, {x: -50});
			}

			if (fogTimeline) fogTimeline.pause(0);

			fogTimeline = null;

			TweenMax.set(components.slideE.fog.element, {display: ""});

			TweenMax.killTweensOf([
				components.slideE.city.water.waveA.top.element,
				components.slideE.city.water.waveB.top.element,
				components.slideE.city.water.waveC.top.element,
				components.slideE.city.water.waveD.top.element,
			], {xPercent: true});

			TweenMax.killTweensOf([
				components.slideE.sky.layerA.element,
				components.slideE.sky.layerB.element,
				components.slideE.sky.layerC.element,
			], {xPercent: true, opacity: true});

			TweenMax.set([
				components.slideE.sky.layerA.element,
				components.slideE.sky.layerB.element,
				components.slideE.sky.layerC.element,
			], {xPercent: 0, opacity: 1});

			TweenMax.killTweensOf(components.slideE.sky.balloon.element, {x: true, y: true});

			slideActive = false;
		}

		function updateMouseParallax() {
			var maxDeltas,
				mouseOffsets = {};

			if (!screen.visibleSlides["4"]) return;

			maxDeltas = {
				city: -200,
				sky: -100,
				water: -240,
			};

			for (var key in maxDeltas) {
				mouseOffsets[key] = Math.round(screen.mouse.xOffsetRatio * maxDeltas[key]);

				if (mouseOffsets[key] != targetMouseOffsets[key]) {
					targetMouseOffsets[key] = mouseOffsets[key];

					if (key == "city") {
						TweenMax.to([
							components.slideE.city.complete.element,
							components.slideE.city.reflection.element,
						], .2, {
							xPercent: targetMouseOffsets[key] / 100,
						});
					}
					else if (key == "sky") {
						TweenMax.to(components.slideE.sky.element, .2, {
							xPercent: targetMouseOffsets[key] / 100,
						});
					}
					else if (key == "water") {
						TweenMax.to([
							components.slideE.city.water.element,
							components.slideE.city.boats.element,
						], .2, {
							xPercent: targetMouseOffsets[key] / 100,
						});
					}
				}
			}
		}
	}

	function setupSlideF() {
		var stars,
			twinklingStars,
			slideActive,
			scrollOffsets = {},
			targetMouseOffsets = {},
			circleRadians = 2 * Math.PI;

		observers["scroll"].push(updateActivation);

		observers["scroll"].push(updateParallax);

		observers["mousemove"].push(updateMouseParallax);

		observers["resize"].push(function() {
			updateParallax();

			generateStars();
		});

		generateStars();

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

			twinkle();

			TweenLite.ticker.addEventListener("tick", updateTwinkles);
		}

		function deactivate() {
			if (!slideActive) return;

			TweenMax.killDelayedCallsTo(twinkle);

			TweenLite.ticker.removeEventListener("tick", updateTwinkles);

			slideActive = false;
		}

		function generateStars() {
			var starCount = 0.00021637867 * screen.width * screen.height,
				starSize = .24 * screen.vmin;

			stars = [];

			if (twinklingStars) {
				while (twinklingStars.length) {
					TweenMax.killTweensOf(twinklingStars.shift(), {opacity: true});
				}
			}

			twinklingStars = [];

			components.slideF.sky.canvas.context.canvas.width = screen.width * 1.05;

			components.slideF.sky.canvas.context.canvas.height = screen.height;

			components.slideF.sky.canvas.context.fillStyle = "#D6D7DC";


			for (var idx = 0; idx < starCount; idx++) {	
				generateStar();
			}

			function generateStar() {
				var star = {
						x: Math.random() * screen.width * 1.05,
						y: Math.random() * Math.random() * screen.height,
						radius: starSize * ((Math.random() * Math.random() * .9) + .1),
						opacity: 1,
					};

				star.clearParameters = {
					x: star.x - star.radius,
					y: star.y - star.radius,
					size: star.radius * 2,
				};

				stars.push(star);
			}
		}

		function twinkle() {
			var star;

			if (!screen.visibleSlides["5"]) return;

			if (stars.length != twinklingStars.length) {
				do {
					star = stars[Math.round(Math.random() * (stars.length - 1))];
				} while (twinklingStars.indexOf(star) != -1);

				twinklingStars.push(star);

				TweenMax.to(star, Math.random() * .72 + .2, {
					opacity: 0,
					onComplete: function() {
						TweenMax.to(star, Math.random() * .72 + .2, {
							opacity: 1,
							onComplete: function() {
								twinklingStars.splice(twinklingStars.indexOf(star), 1);
							}
						});
					}
				});
			}

			TweenMax.delayedCall(Math.pow(Math.random(), 3) * .00005, twinkle);
		}

		function updateTwinkles() {
			var star;

			components.slideF.sky.canvas.context.clearRect(0, 0, components.slideF.sky.canvas.context.canvas.width, components.slideF.sky.canvas.context.canvas.height);

			for (var idx = 0, len = stars.length; idx < len; idx++) {
				star = stars[idx];

				components.slideF.sky.canvas.context.beginPath();

				components.slideF.sky.canvas.context.arc(star.x, star.y, star.radius, 0, circleRadians, false);

				components.slideF.sky.canvas.context.globalAlpha = star.opacity;

				components.slideF.sky.canvas.context.fill();
			}
		}

		function updateMouseParallax() {
			var maxDeltas,
				mouseOffsets = {};

			if (!screen.visibleSlides["5"]) return;

			maxDeltas = {
				mountains: -400,
				sky: -200,
				wanderingMan: 200,
			};

			for (var key in maxDeltas) {
				mouseOffsets[key] = Math.round(screen.mouse.xOffsetRatio * maxDeltas[key]);

				if (mouseOffsets[key] != targetMouseOffsets[key]) {
					targetMouseOffsets[key] = mouseOffsets[key];

					if (key == "mountains") {
						TweenMax.to(components.slideF.mountains.wrapper.element, .2, {
							xPercent: targetMouseOffsets.mountains / 100,
						});
					}
					else if (key == "sky") {
						TweenMax.to(components.slideF.sky.element, .2, {
							xPercent: targetMouseOffsets.sky / 100,
						});
					}
					else if (key == "wanderingMan") {
						TweenMax.to(components.slideF.wanderingMan.element, .2, {
							xPercent: targetMouseOffsets.wanderingMan / 100,
						});
					}
				}
			}
		}
	}

	function setupSlideG() {
		var slideActive,
			scrollOffsets = {},
			boxDropTimeline,
			targetMouseOffsets = {};

		observers["scroll"].push(updateActivation);

		observers["scroll"].push(updateParallax);

		observers["mousemove"].push(updateMouseParallax);

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
				x: 84.33333 * screen.vmin,
				y: -50.172222 * screen.vmin,
			}, {
				x: 0,
				y: 0,
				ease: Back.easeOut.config(.5)
			}, 0);

			boxDropTimeline.fromTo(components.slideG.box.element, .42, {
				y: -.7 * screen.height,
			}, {
				y: 0,
				ease: Back.easeOut.config(.6)
			}, .34);

			boxDropTimeline.from(components.slideG.box.shadow.element, .3, {
				opacity: 0,
				scale: .8
			}, .46);

			boxDropTimeline.to(components.slideG.hand.element, .08, {
				y: .22222 * screen.vmin + 2,
			}, .61);

			boxDropTimeline.to(components.slideG.hand.element, .12, {
				y: 0,
			}, .69);

			boxDropTimeline.to([
				components.slideG.hand.element,
				components.slideG.box.element,
				components.slideG.box.shadow.element,
			], .4, {
				x: screen.vmin * 84.33333,
				y: screen.vmin * -50.172222222222,
				ease: Power1.easeIn
			}, 1.8);

			boxDropTimeline.play();
		}

		function updateMouseParallax() {
			var mouseOffsets = {},
				maxDeltas;

			if (!screen.visibleSlides["6"]) return;

			maxDeltas = {
				workfloor: -120,
				foreground: 50,
			};

			for (var key in maxDeltas) {
				mouseOffsets[key] = Math.round(screen.mouse.xOffsetRatio * maxDeltas[key]);

				if (mouseOffsets[key] != targetMouseOffsets[key]) {
					targetMouseOffsets[key] = mouseOffsets[key];

					TweenMax.to(components.slideG[key].element, .2, {
						x: targetMouseOffsets[key],
						y: targetMouseOffsets[key] * .575,
					});
				}
			}
		}
	}

	function setupSlideH() {
		var activeCars = [],
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
			scrollOffsets = {},
			targetMouseOffsets = {},
			startingCloudTimeline;

		observers["scroll"].push(updateActivation);

		observers["scroll"].push(updateParallax);

		observers["mousemove"].push(updateMouseParallax);

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

			while (activeCars.length) {
				activeCars[0].remove();
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
			activateCar("stationwagon", ["gas-canister", "map", "binoculars"]);

			autogenerateCar(true);
		}

		function activateCar(type, items) {
			var car,
				target = {},
				delta,
				arrivalTime,
				departureTime,
				enterTime,
				typeIndex;

			if (!type) {
				do {
					typeIndex = Math.round(Math.random() * (carTypes.length - 1));
				} while (typeIndex == previousCarIndex);
				
				type = carTypes[typeIndex]
			}

			previousCarIndex = carTypes.indexOf(type);

			car = {
				element: $("<img class='clc-slide-h-car clc-slide-h-car-" + type + "' src='assets/img/" + type + ".svg' />"),
				items: [],
				timeline: new TimelineMax({
					paused: true,
					delay: .2,
					onComplete: function() {
						car.remove();
					}
				}),
				effects: [],
				remove: function() {
					car.timeline.kill();

					car.element.remove();

					while (car.items.length) {
						car.items.shift().remove();
					}

					while (car.effects.length) {
						$(car.effects.shift().el).remove();
					}

					activeCars.splice(activeCars.indexOf(car), 1);
				},
				product: $("<div class='clc-slide-h-product'></div>")
			};

			if (!items) items  = generateItemSet();

			activeCars.push(car);

			target.x = -.55 * screen.width;

			target.y = 0.57735026919 * -target.x;

			delta = Math.sqrt(Math.pow(target.x, 2) + Math.pow(target.y, 2));

			arrivalTime = delta * .003;

			car.timeline.from(car.element, arrivalTime, {
				x: target.x,
				y: target.y,
				ease: CustomEase.create("custom", "M0,0,C0.338,0.388,0.678,0.867,0.83,0.958,0.9,1,0.932,1,1,1")
			}, 0);

			for (var idx = 0, len = items.length; idx < len; idx++) {
				addItem(items[idx]);
			}

			target.x = .45 * screen.width;

			target.y = 0.57735026919 * -target.x;

			delta = Math.sqrt(Math.pow(target.x, 2) + Math.pow(target.y, 2));

			departureTime = delta * .001;

			car.timeline.to(car.element, departureTime, {
				x: target.x,
				y: target.y,
				ease: Sine.easeIn
			}, arrivalTime + 1.04);

			components.slideH.storescape.element.append(car.element);

			components.slideH.element.append(car.product);

			car.timeline.play();

			function addItem(itemType) {
				var item = $("<img class='clc-slide-h-product-item clc-slide-h-product-item-" + itemType + "' src='assets/img/" + itemType + ".svg' />");

				car.items.push(item);

				enterTime = arrivalTime - .22 + (.12 * idx);

				car.timeline.addCallback(function() {
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

					car.effects.push(entryBurst, trail, circleA, circleB, crossBurst);

					entryBurst.tune(coordinate).replay();

					trail.tune(coordinate).replay();

					circleA.tune(center).replay();

					circleB.tune(center).replay();

					crossBurst.tune(center).replay();
				}, enterTime - .15);

				car.timeline.from(item, .52, {
					y: .36 * screen.height,
					ease: Back.easeOut.config(.86),
				}, enterTime);

				car.timeline.addCallback(function() {
					wiggleProp(item, "x", -4, 4, [.18, .36]);
					wiggleProp(item, "y", -4, 4, [.18, .36]);
					wiggleProp(item, "rotation", -4, 4, [.14, .36]);
				}, .48 + enterTime);

				car.timeline.addCallback(function() {
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

				car.product.append(item);
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

		function updateMouseParallax() {
			var mouseOffsets = {},
				maxDeltas;

			if (!screen.visibleSlides["7"]) return;

			maxDeltas = {
				storescape: -60,
				sky: -20,
			};

			for (var key in maxDeltas) {
				mouseOffsets[key] = Math.round(screen.mouse.xOffsetRatio * maxDeltas[key]);

				if (mouseOffsets[key] != targetMouseOffsets[key]) {
					targetMouseOffsets[key] = mouseOffsets[key];

					TweenMax.to(components.slideH[key].element, .2, {
						x: targetMouseOffsets[key],
						y: targetMouseOffsets[key] * .575,
					});
				}
			}
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
			if (!initial) {
				activateCar();

				TweenMax.delayedCall(2.4 + Math.random() * 6, autogenerateCar);
			
				return;
			}

			TweenMax.delayedCall(6, autogenerateCar);
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

				if (components.slideI.form.submitted) {
					components.slideI.acceptance.rotationTimeline.play();

					return;
				}

				components.slideI.form.input.input.element.focus();

				if (!entryTimeline) {
					entryTimeline = new TimelineMax({paused: true});

					entryTimeline.to(components.slideI.message.words.element[0], .8, {
						opacity: 1
					}, 0);

					entryTimeline.to(components.slideI.message.words.element[1], .8, {
						opacity: 1
					}, .14);

					// entryTimeline.to(components.slideI.message.words.element[2], .8, {
					// 	opacity: 1
					// }, .28);

					entryTimeline.to(components.slideI.message.words.element[2], .8, {
						opacity: 1
					}, .3);

					entryTimeline.to(components.slideI.message.words.element[3], .8, {
						opacity: 1
					}, .44);

					entryTimeline.to(components.slideI.message.words.element[4], .8, {
						opacity: 1
					}, .6);

					entryTimeline.fromTo(components.slideI.divider.element, .62, {
						scaleY: 0,
						opacity: 0,
					}, {
						scaleY: 1,
						opacity: 1,
						transformOrigin: "50% 0%"
					}, .74);

					entryTimeline.from(components.slideI.form.element, .48, {
						x: 42,
					}, .9);

					entryTimeline.to(components.slideI.form.input.element, .62, {
						opacity: 1,
					}, .9);

					entryTimeline.to(components.slideI.form.button.element, .62, {
						opacity: 1,
					}, 1.08);
				}

				entryTimeline.play();
			}

			function deactivate() {
				if (!activated) return;

				activated = false;

				if (components.slideI.acceptance.rotationTimeline) components.slideI.acceptance.rotationTimeline.pause();

				TweenMax.set(components.slideI.form.warning.element, {opacity: 0, yPercent: -75});

				if (entryTimeline) entryTimeline.pause(0);
			}
		}

		function setupForm() {
			var placeholderVisible = true;

			TweenMax.set(components.slideI.form.warning.element, {opacity: 0, yPercent: -75});

			components.slideI.form.input.input.element.on({
				input: checkInput
			});

			TweenMax.delayedCall(.4, checkInput);

			components.slideI.form.button.element.on({
				mouseenter: function() {
					TweenMax.to(components.slideI.form.button.element, .24, {
						className: "+=clc-slide-i-content-form-button-hovered"
					});
				},
				mouseleave: function() {
					TweenMax.to(components.slideI.form.button.element, .24, {
						className: "-=clc-slide-i-content-form-button-hovered"
					});
				},
				click: function() {
					var inputValue = components.slideI.form.input.input.element.val();

					if (components.slideI.form.submitted) return;

					if (validateEmail(inputValue)) {
						submitEmail(inputValue);

						hideWarning();
					}
					else {
						showWarning();
					}
				}
			});

			function checkInput() {
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

				if (components.slideI.form.warning.shown && (value.length == 0 || validateEmail(value))) {
					hideWarning();
				}
			}

			function submitEmail(email) {
				var form = $(
						"<form method='POST' action='https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8' target='dummy-w2l-target'>" +
							"<input name='oid' type='hidden' value='00Dj0000001nzOe'>" +
							"<input name='email' type='hidden' value='" + email + "'>" +
						"</form>"
					),
					submitTimeline = new TimelineMax({paused: true}),
					center = {x: screen.width / 2, y: screen.height / 2},
					adjustmentRatio = screen.lesser / 900,
					burst1 = new mojs.Burst({
						parent: components.slideI.acceptance.element, 
						left: 0, top: 0,
						count: 18,
						radius: {[Math.round(100 * adjustmentRatio)] : Math.round(320 * adjustmentRatio)},
						children: {
							shape: "line",
							stroke: ["#E64046", "#3C3C3C", "#CF3A3F"],
							scale: 1,
							strokeWidth: "rand(1, 4)",
							scaleX: {1 : 0},
							degreeShift: 'rand(-32, 32)',
							radius: "rand(30, 60)",
							duration: 360,
							delay: "rand(0, 100)",
							isForce3d: true
						}
					}),
					largeBurst = new mojs.Burst({
						parent: components.slideI.acceptance.element, 
						left: 0, top: 0,
						count: 4,
						radius: 0,
						angle: 45,
						radius: {[Math.round(40 * adjustmentRatio)] : Math.round(520 * adjustmentRatio)},
						children: {
							shape: "line",
							stroke: "red",
							strokeWidth: 5 * adjustmentRatio,
							scale: 1,
							scaleX: {1 : 0},
							radius: Math.round(80 * adjustmentRatio),
							duration: 400,
							isForce3d: true,
							easing: "cubic.inout"
						}
					}),
					largeCircle = new mojs.Shape({
						parent: components.slideI.acceptance.element, 
						left: 0, top: 0,
						scale: {0 : 1},
						fill: "none",
						stroke: "red",
						strokeWidth: 4 * adjustmentRatio,
						opacity: {.25 : 0},
						radius: 300,
						duration: 600
					}),
					crossBurst = new mojs.Burst({
						parent: components.slideI.acceptance.ring.element, 
						left: 0, top: 0,
						radius: {[Math.round(100 * adjustmentRatio)] : Math.round(320 * adjustmentRatio)},
						count: 32,
						children: {
							shape: "cross",
							radius: 10 * adjustmentRatio,
							strokeWidth: 6 * adjustmentRatio,
							stroke: ["red", "#3C3C3C"],
							scale: {0: 1},
							duration: "rand(300, 700)",
							delay: "rand(0, 300)",
							easing: "quint.out",
						},
					});

				TweenMax.set([
					components.slideI.content.element,
				], {pointerEvents: "none"});

				if (screen.width >= 600) {
					submitTimeline.to(components.slideI.message.element, .4, {
						opacity: 0,
						y: screen.height * .14,
						ease: Power2.easeIn
					}, 0);

					submitTimeline.to(components.slideI.divider.element, .4, {
						opacity: 0,
						y: screen.height * .16,
						ease: Power2.easeIn
					}, .08);

					submitTimeline.to(components.slideI.form.input.element, .4, {
						opacity: 0,
						y: screen.height * .18,
						ease: Power2.easeIn
					}, .16);

					submitTimeline.to(components.slideI.form.button.element, .4, {
						opacity: 0,
						y: screen.height * .2,
						ease: Power2.easeIn
					}, .24);
				}
				else {
					submitTimeline.to(components.slideI.form.button.element, .4, {
						opacity: 0,
						y: screen.height * .14,
						ease: Power2.easeIn
					}, 0);

					submitTimeline.to(components.slideI.form.input.element, .4, {
						opacity: 0,
						y: screen.height * .16,
						ease: Power2.easeIn
					}, .08);

					submitTimeline.to(components.slideI.divider.element, .4, {
						opacity: 0,
						y: screen.height * .18,
						ease: Power2.easeIn
					}, .16);

					submitTimeline.to(components.slideI.message.element, .4, {
						opacity: 0,
						y: screen.height * .2,
						ease: Power2.easeIn
					}, .24);
				}

				TweenMax.set(components.slideI.email.element, {scale: .72});

				submitTimeline.to(components.slideI.email.element, .32, {
					scale: 1,
					opacity: 1,
					ease: Back.easeOut.config(1.4)
				}, .58);

				submitTimeline.to(components.slideI.email.element, .34, {
					scale: .72,
					opacity: 0,
				}, .9);

				submitTimeline.addCallback(function() {
					burst1.tune(center).replay();

					largeBurst.tune(center).replay();

					largeCircle.tune(center).replay();

					crossBurst.tune(center).replay();

					components.slideI.acceptance.rotationTimeline = new TimelineMax({paused: true, repeat: -1});

					components.slideI.acceptance.rotationTimeline.to(components.slideI.acceptance.ring.element, 16, {rotation: 360, ease: Power0.easeNone});

					components.slideI.acceptance.rotationTimeline.play();
				}, .48);

				TweenMax.set(components.slideI.acceptance.message.element, {y: -screen.height * .14});
				
				TweenMax.set(components.slideI.acceptance.title.element, {y: -screen.height * .16});

				submitTimeline.to(components.slideI.acceptance.message.element, .48, {
					opacity: 1,
					y: 0,
					ease: Power2.easeOut
				}, .9);

				submitTimeline.to(components.slideI.acceptance.title.element, .48, {
					opacity: 1,
					y: 0,
					ease: Power2.easeOut
				}, .98);

				components.slideI.form.submitted = true;

				bodyElement.append(form);

				form.submit();

				submitTimeline.play();
			}

			function validateEmail(email) {
				return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email);
			}

			function showWarning() {
				TweenMax.fromTo([
					components.slideI.form.input.element,
					components.slideI.form.button.element,
				], .36, {
					x: -1,
				}, {
					x: 1,
					ease: RoughEase.ease.config({
						strength: 8,
						points: 8,
						template: Linear.easeNone,
						randomize: false
					}),
					clearProps: "x"
				}, .1);

				if (components.slideI.form.warning.shown) return;

				components.slideI.form.warning.shown = true;

				TweenMax.killTweensOf(components.slideI.form.warning.element, {opacity: true, yPercent: true});

				TweenMax.to(components.slideI.form.warning.element, .32, {
					opacity: 1,
					yPercent: 0,
					ease: Back.easeOut.config(1.2)
				});
			}

			function hideWarning() {
				if (!components.slideI.form.warning.shown) return;

				components.slideI.form.warning.shown = false;

				TweenMax.killTweensOf(components.slideI.form.warning.element, {opacity: true, yPercent: true});

				TweenMax.to(components.slideI.form.warning.element, .32, {
					opacity: 0,
					yPercent: -75,
					ease: Back.easeIn.config(1.2)
				});
			}
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