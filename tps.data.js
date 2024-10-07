.ism-slider > ol, .ism-slider > ol > li, .ism-slider > ol > li > img { width: 100%; list-style: none; margin: 0; padding: 0; }
.ism-slider {
  overflow: hidden;
  position: relative;
  padding: 0 !important;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.1);
  -webkit-animation: ism-fadein 3s;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
}
@-webkit-keyframes ism-fadein {
  from { opacity: 0; }
  to { opacity: 1; }
}
@-webkit-keyframes ism-loading {
  50% { left: 120px; }
}

.ism-slider .ism-slides {
  list-style: none;
  position: absolute;
  height: 100%;
  top: 0;
  padding: 0 !important;
  margin-top: 0;
  margin-bottom: 0;
  z-index: 1;
}

.ism-slider li.ism-slide {
  height: 100%;
  overflow: hidden;
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  margin: 0 !important;
  padding: 0 !important;
  background-color: #d5d5d5;
  text-align: center;
}

.ism-slider .ism-img-frame {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
}

.ism-slider a.ism-image-link {
  position: absolute;
  color: inherit;
  text-decoration: none;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ism-slider .ism-img {
  display: block;
  border: none;
  position: absolute;
  pointer-events: none;
}

.ism-button, .ism-pause-button {
  position: absolute;
  display: block;
  -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;
  border: none;
  outline: none;
  text-align:center;
  z-index: 6;
  cursor: pointer;
  padding: 0;
  background-repeat: no-repeat;
  background-position: center center;
}

.ism-pause-button {
  display: none;
  left: 50%;
}

.ism-slider:hover .ism-pause-button {
  display: block;
}

.ism-caption {
  -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;
  padding: 0 1em;
  text-shadow: none;
  line-height: 1.2em;
  padding: 0.25em 0.5em;
  width: auto;
  height: auto;
  text-align: center;
  visibility: hidden;
}

a.ism-image-link .ism-caption, a.ism-caption {
  text-decoration: none;
  font-weight: normal;
}

a.ism-caption:hover {
  text-decoration: underline;
}

.ism-caption-0 {
  z-index: 3;
}

.ism-caption-1 {
  z-index: 4;
}

.ism-caption-2 {
  z-index: 5;
}

.ism-radios {
  margin: 0;
  padding: 0;
  list-style: none;
  color: #fff;
  font-size: 1px;
}

.ism-slider .ism-radios {
  position: absolute;
  -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;
  z-index: 6;
  bottom: 5px;
  left: 0;
  right: 0;
  width: auto;
  background-color: rgba(255, 255, 255, 0.0);
  padding: 0 7px;
  height: 0;
  overflow: visible;
}

.ism-slider .ism-radios.ism-radios-as-thumbnails {
  bottom: 5px;
}

.ism-radios li {
  position: relative;
  display: inline-block;
  margin: 0 3px;
  padding: 0;
}

.ism-radios input.ism-radio {
  display: none;
}

.ism-radios label {
  display: block;
  -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
}

.ism-radios-as-thumbnails label {
  -webkit-background-size: 120% auto; -moz-background-size: 120% auto; -o-background-size: 120% auto; background-size: 120% auto;
  background-position: center center;
  background-repeat: no-repeat;
  border: 2px solid rgba(255, 255, 255, 0.6);
  opacity: 0.8;
}

.ism-radios-as-thumbnails label:hover {
  border: 2px solid #fff;
  opacity: 1;
}

.ism-radios-as-thumbnails li.active label {
  border: 2px solid rgba(255, 255, 255, 1.0);
  opacity: 1;
}

p.ism-badge {
  margin: 0 auto;
  text-align: right;
  font-size: 10px;
  padding-top: 1px;
  color: #ccc;
  font-family: sans-serif;
  font-weight: normal;
}

p.ism-badge a.ism-link {
  color: inherit;
  text-decoration: none;
  margin-right: 0.25em;
}

p.ism-badge a.ism-link:hover {
  color: #aaa;
  text-decoration: underline;
}

.ism-zoom-in {
  -webkit-animation: zoomin 0.81s linear 1;
  animation: zoomin 0.81s linear 1;
}

@-webkit-keyframes zoomin {
  0% { -webkit-transform: scale(1.0); transform: scale(1.0); }
  100% { -webkit-transform: scale(3.0); transform: scale(3.0); }
}
@keyframes zoomin {
  0% { -webkit-transform: scale(1.0); transform: scale(1.0); }
  100% { -webkit-transform: scale(3.0); transform: scale(3.0); }
}

@-webkit-keyframes fadein {
  0% { opacity: 0; }
 100% { opacity: 1; }
}
@keyframes fadein {
  0% { opacity: 0; }
 100% { opacity: 1; }
}

@-webkit-keyframes slidein {
  0% { -webkit-transform: translate(-1200px, 0); transform: translate(-1200px, 0); }
  100% { -webkit-transform: translate(0, 0); transform: translate(0, 0); }
}
@keyframes slidein {
  0% { -webkit-transform: translate(-1200px, 0); transform: translate(-1200px, 0); }
  100% { -webkit-transform: translate(0, 0); transform: translate(0, 0); }
}

@-webkit-keyframes popin {
  50% { -webkit-transform: scale(1.2); transform: scale(1.2); }
}
@keyframes popin {
  50% { -webkit-transform: scale(1.2); transform: scale(1.2); }
}

.ism-zoom-pan {
  -webkit-animation: zoompan 20.0s linear 1;
  animation: zoompan 20.0s linear 1;
}
@-webkit-keyframes zoompan {
  0% { -webkit-transform: translate(0, 0) scale(1.0); transform: translate(0, 0) scale(1.0); }
  50% { -webkit-transform: translate(-5%, -5%) scale(1.3); transform: translate(-5%, -5%) scale(1.3); }
  100% { -webkit-transform: translate(0, 0) scale(1.0); transform: translate(0, 0) scale(1.0); }
}
@keyframes zoompan {
  0% { -webkit-transform: translate(0, 0) scale(1.0); transform: translate(0, 0) scale(1.0); }
  50% { -webkit-transform: translate(-5%, -5%) scale(1.3); transform: translate(-5%, -5%) scale(1.3); }
  100% { -webkit-transform: translate(0, 0) scale(1.0); transform: translate(0, 0) scale(1.0); }
}

.ism-zoom-rotate {
  -webkit-animation: zoomrotate 20.0s linear 1;
  animation: zoomrotate 20.0s linear 1;
}
@-webkit-keyframes zoomrotate {
  0% { -webkit-transform: rotate(0) scale(1.0); transform: rotate(0) scale(1.0); }
  50% { -webkit-transform: rotate(-5deg) scale(1.3); transform: rotate(-5deg) scale(1.3); }
  100% { -webkit-transform: rotate(0) scale(1.0); transform: rotate(0) scale(1.0); }
}
@keyframes zoomrotate {
  0% { -webkit-transform: rotate(0) scale(1.0); transform: rotate(0) scale(1.0); }
  50% { -webkit-transform: rotate(-5deg) scale(1.3); transform: rotate(-5deg) scale(1.3); }
  100% { -webkit-transform: rotate(0) scale(1.0); transform: rotate(0) scale(1.0); }
}
/* SLIDER */

#HeroSliderFirst {
    width: 900px;
    -webkit-border-radius: 5px; border-radius: 5px; 
}

#HeroSliderFirst-ism-badge {
    width: 900px;
}

#HeroSliderFirst:before {
    content: ''; display: block; padding-top: 50%;
}

#HeroSliderFirst .ism-frame {
    position: absolute; top: 0; bottom: 0; left: 0; width: 100%;
}

#HeroSliderFirst .ism-button {
    display: block;
    border-radius: 25px;
    width: 50px; height: 50px; background-size: 16px 16px; top: 50%; margin-top: -25px;
    color: #fff; background-color: rgba(0, 0, 0, 0.3);
    visibility: hidden;
}

#HeroSliderFirst .ism-button-prev {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAs6AAALOgFkf1cNAAAC+ElEQVR42uWbT4hVZRiHn/d0JQkTURQkHE1Sa0gREbKghbpIdCMuIiKwCfIPkwvBjaQiiuVCQQgCQUF0FyWCga2qhZvrQqiFCDWQMumo4R8YREh8WvilJ7jMjDn33jPn++0v5z7P/X3vOd93OVCTqLPUzeQYtV8dVC/mBj5Tbfo0zVzAp6jb1Qf+N80c4Jerv9k6zTqDz1CPOHKadYXfpA44ep5ZQKPi4NOA08DKdl2jqCj4ZHUb8Gc74SvZAHUx8C2wsBPXKyoEPkP9Avi1U/CVaYD6MbCzk+CVEKC+BHwDrOvWdyi6BN5QtwJD3YTvSgPURcAZ4PUqLL+ig+DT1V3A5arAd6wB6gfAbqC3arfdRpvBXwROAu9X9WmzaCP8p8D1KsO3pQHqfOAs8AYQVd9oFeMIPk3dAQyktV55+HFrgLoe2Acsnmhb7cZzgjeAY8DGiXrWUDwHfF/ark5Y+P/VALUnDbk3q3qe0JYGqFPVfuAKsKQO8GNugPoecBBYSs3SGAX8BeArYCs1TTEC/EfAH3WGb9kAdTbwfap7Qc1TlMBfVj9JQ25ZDvBPBKhrgJ+B48AkMsq/v/JNYCYgmaUAiIiLwDzgc+Bejg0gIh5FxJfAAuDH7ASURNyKiNVAH3A1OwElESeAFekJMD8BScL1iNiZRAzVcUiO6V4fEU1gDrAXuJ+dgCThYUTsA+YD57MTUBJxIyLeBfqBwewElER8DbwNHMlSQJIwGBHbgVXAX9kJKIn4KQ3J/cDf2QlIEh5ExB6gB7iQnYCSiKGIeAvYAVzLTkBJxGHgHeBolgKShCsRsQVYC9zJTkBJxLk0Gw5mKSBJGE77ileAX7ITUBJxLSKWArvSBivfqK+qpxy/NCeqiA3q3W4IqMTRd0Sc5vGZ5GFyjzpXvZRVA1o8O/QCB4BbubfhNfW72g/BMYj4UL2XrYAkYVa2L021WBYDtR2CYxiSv/P436tDwO3ch+Qi9YfsXp1tIaJPHVYv5NyGOepnz/q5fwCJ0AEINjk5wQAAAABJRU5ErkJggg==);
    left: 10px;
}

#HeroSliderFirst .ism-button-next {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAs6AAALOgFkf1cNAAACy0lEQVR42uWbS2hUVxyHv78PLKKiFgXBiIgvBEVKwZWL4kJrF7oQCSpoAlYkuhCyq4hQ2goqSBFBsNBCoXShbgp15XsTQSGKqKj1QdTYFCVQiuDic5FcGkQhj0nm3vl/6+Ge+X3zO2fumTkXhoi6S51NVtQbapfallVAh//Toc7KLED1jbpPnZJVQMF99fPMAgqOqZ9mFqD6UP06s4CC8+r0MucZN8rX/wJ4pu5VP8nYgIHcU5dna8BAFgM31e8rvUiOoAHvt2FHZgEFf6iTs0yBD/EV0K3uVidkFAAwFTgB3FKXZBRQsBS4q+5XZ2YUUPAtcEVtzioAYBnwm/q7OimjgILNwAt1Z1YBADOAk+ptdUFGAQDRPy0equ213GBVRcBADgOX1Y1ZBQAsB86qP4/0BqqqAgq292+3W7IKAJgNnFI71XkZBRQ5VgBP1DZ1WjYBAzkOXFLXZhUAsBI4p55Qx2cUULAbeKxuyyoAYC7wi3pdnZNRQJHzs/5FslWdmk1AwUTgJ+Ciui6jAACBWcDfGQX0At8A8yPiBsCEROHPA80R0ZNtEXwKtETEmvfDZ2jAIeDHiHjxsRc0ogCBl8DGiOjIdiv8H3AQaBpM+EZrwFVgU0S8zLYd7gLaImL1UMM3QgOOAUcjomu4F6iqgH+AzRFxoRabhCrxlr6/zppqEb5qDbgGbIiI7lpvE8vOc6A9IlbVOnwVGnAS+CEinozWAGUV8BrYGhF/jvZAZZwCh4B5YxG+bA3oBNZHxPOxHLQMDegG9kfEyrEOX4YG/AociIhH9XoD9RLQC7RGxJl6168eU+Aofb/JnSnB9BvTBtwBvhzN7/SyNqAH+C4ilpUt/LAY4lnh0+pCGolBCuhVt9CIDPKhqco8WVrLRfAvYG1EPKjSB1qLRfAVcARYVLXwtZgC5+pxxL3eAq6p/47kaFrVBexRmxolzzsZ+iOF4pXTWQAAAABJRU5ErkJggg==);
    right: 10px;
}

#HeroSliderFirst .ism-pause-button {
    width: 50px; height: 50px; background-size: 16px 16px; top: 50%; margin-top: -25px; border-radius: 25px; margin-left: -25px;
    color: #fff; background-color: rgba(0, 0, 0, 0.3); background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAc0lEQVR42u3SsQkAIAxFQeP+O38XsBKxMPfKgCQcjqHe1W6YJFeXVNXJuxd3zO4/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID0RwuEoAh40yYcSQAAAABJRU5ErkJggg==);
}

#HeroSliderFirst .ism-pause-button.ism-play {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAs6AAALOgFkf1cNAAACy0lEQVR42uWbS2hUVxyHv78PLKKiFgXBiIgvBEVKwZWL4kJrF7oQCSpoAlYkuhCyq4hQ2goqSBFBsNBCoXShbgp15XsTQSGKqKj1QdTYFCVQiuDic5FcGkQhj0nm3vl/6+Ge+X3zO2fumTkXhoi6S51NVtQbapfallVAh//Toc7KLED1jbpPnZJVQMF99fPMAgqOqZ9mFqD6UP06s4CC8+r0MucZN8rX/wJ4pu5VP8nYgIHcU5dna8BAFgM31e8rvUiOoAHvt2FHZgEFf6iTs0yBD/EV0K3uVidkFAAwFTgB3FKXZBRQsBS4q+5XZ2YUUPAtcEVtzioAYBnwm/q7OimjgILNwAt1Z1YBADOAk+ptdUFGAQDRPy0equ213GBVRcBADgOX1Y1ZBQAsB86qP4/0BqqqAgq292+3W7IKAJgNnFI71XkZBRQ5VgBP1DZ1WjYBAzkOXFLXZhUAsBI4p55Qx2cUULAbeKxuyyoAYC7wi3pdnZNRQJHzs/5FslWdmk1AwUTgJ+Ciui6jAACBWcDfGQX0At8A8yPiBsCEROHPA80R0ZNtEXwKtETEmvfDZ2jAIeDHiHjxsRc0ogCBl8DGiOjIdiv8H3AQaBpM+EZrwFVgU0S8zLYd7gLaImL1UMM3QgOOAUcjomu4F6iqgH+AzRFxoRabhCrxlr6/zppqEb5qDbgGbIiI7lpvE8vOc6A9IlbVOnwVGnAS+CEinozWAGUV8BrYGhF/jvZAZZwCh4B5YxG+bA3oBNZHxPOxHLQMDegG9kfEyrEOX4YG/AociIhH9XoD9RLQC7RGxJl6168eU+Aofb/JnSnB9BvTBtwBvhzN7/SyNqAH+C4ilpUt/LAY4lnh0+pCGolBCuhVt9CIDPKhqco8WVrLRfAvYG1EPKjSB1qLRfAVcARYVLXwtZgC5+pxxL3eAq6p/47kaFrVBexRmxolzzsZ+iOF4pXTWQAAAABJRU5ErkJggg==);
}

#HeroSliderFirst .ism-button:hover {
    background-color: rgba(0, 0, 0, 0.6);
}

#HeroSliderFirst .ism-pause-button:hover {
    background-color: rgba(0, 0, 0, 0.6);
}

#HeroSliderFirst:hover .ism-button {
    visibility: visible;
}

#HeroSliderFirst .ism-radios {
    display: block;
    height: 20px;
    text-align: left;
}

#HeroSliderFirst .ism-radios label {
    width: 20px; height: 20px;
    border-radius: 10px;
    color: #000; background-color: rgba(0, 0, 0, 0.2); border: 2px solid rgba(255, 255, 255, 0.7);
}

#HeroSliderFirst .ism-radios li.active label {
    background-color: rgba(255, 255, 255, 1.0);
}

#HeroSliderFirst .ism-radios label:hover {
    border: 2px solid rgba(255, 255, 255, 1.0);
}


/* SLIDES */

#HeroSliderFirst .ism-slide-0 .ism-img-frame {
    width: 100%;
}

#HeroSliderFirst .ism-slide-0 .ism-img {
    width: 100%;
    top: 50%; -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%);
}

#HeroSliderFirst .ism-slide-1 .ism-img-frame {
    width: 100%;
}

#HeroSliderFirst .ism-slide-1 .ism-img {
    width: 100%;
    top: 50%; -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%);
}

#HeroSliderFirst .ism-slide-2 .ism-img-frame {
    width: 100%;
}

#HeroSliderFirst .ism-slide-2 .ism-img {
    width: 100%;
    top: 50%; -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%);
}

#HeroSliderFirst .ism-slide-3 .ism-img-frame {
    width: 100%;
}

#HeroSliderFirst .ism-slide-3 .ism-img {
    width: 100%;
    top: 50%; -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%);
}

#HeroSliderFirst .ism-slide-4 .ism-img-frame {
    width: 100%;
}

#HeroSliderFirst .ism-slide-4 .ism-img {
    width: 100%;
    top: 50%; -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%);
}

#HeroSliderFirst .ism-slide-5 .ism-img-frame {
    width: 100%;
}

#HeroSliderFirst .ism-slide-5 .ism-img {
    width: 100%;
    top: 50%; -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%);
}

#HeroSliderFirst .ism-slide-6 .ism-img-frame {
    width: 100%;
}

#HeroSliderFirst .ism-slide-6 .ism-img {
    width: 100%;
    top: 50%; -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%);
}

#HeroSliderFirst .ism-slide-7 .ism-img-frame {
    width: 100%;
}

#HeroSliderFirst .ism-slide-7 .ism-img {
    width: 100%;
    top: 50%; -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%);
}

#HeroSliderFirst .ism-slide-8 .ism-img-frame {
    width: 100%;
}

#HeroSliderFirst .ism-slide-8 .ism-img {
    width: 100%;
    top: 50%; -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%);
}


/* CAPTIONS */

#HeroSliderFirst .ism-slide-0 .ism-caption-0.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-0 .ism-caption-1.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-0 .ism-caption-2.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-1 .ism-caption-0.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-1 .ism-caption-1.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-1 .ism-caption-2.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-2 .ism-caption-0.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-2 .ism-caption-1.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-2 .ism-caption-2.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-3 .ism-caption-0.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-3 .ism-caption-1.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-3 .ism-caption-2.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-4 .ism-caption-0.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-4 .ism-caption-1.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-4 .ism-caption-2.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-5 .ism-caption-0.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-5 .ism-caption-1.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-5 .ism-caption-2.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-6 .ism-caption-0.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-6 .ism-caption-1.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-6 .ism-caption-2.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-7 .ism-caption-0.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-7 .ism-caption-1.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-7 .ism-caption-2.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-8 .ism-caption-0.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-8 .ism-caption-1.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-8 .ism-caption-2.ism-caption-anim {
    -webkit-animation: fadein 0.5s; animation: fadein 0.5s;
}

#HeroSliderFirst .ism-slide-0 .ism-caption-0 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 10%;
    left: 5%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-0 .ism-caption-1 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 60%;
    left: 40%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-0 .ism-caption-2 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 20%;
    left: 60%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-1 .ism-caption-0 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 10%;
    left: 5%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-1 .ism-caption-1 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 60%;
    left: 40%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-1 .ism-caption-2 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 20%;
    left: 60%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-2 .ism-caption-0 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 10%;
    left: 5%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-2 .ism-caption-1 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 60%;
    left: 40%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-2 .ism-caption-2 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 20%;
    left: 60%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-3 .ism-caption-0 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 10%;
    left: 5%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-3 .ism-caption-1 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 60%;
    left: 40%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-3 .ism-caption-2 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 20%;
    left: 60%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-4 .ism-caption-0 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 10%;
    left: 5%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-4 .ism-caption-1 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 60%;
    left: 40%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-4 .ism-caption-2 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 20%;
    left: 60%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-5 .ism-caption-0 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 10%;
    left: 5%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-5 .ism-caption-1 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 60%;
    left: 40%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-5 .ism-caption-2 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 20%;
    left: 60%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-6 .ism-caption-0 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 10%;
    left: 5%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-6 .ism-caption-1 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 60%;
    left: 40%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-6 .ism-caption-2 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 20%;
    left: 60%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-7 .ism-caption-0 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 10%;
    left: 5%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-7 .ism-caption-1 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 60%;
    left: 40%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-7 .ism-caption-2 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 20%;
    left: 60%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-8 .ism-caption-0 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 10%;
    left: 5%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-8 .ism-caption-1 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 60%;
    left: 40%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

#HeroSliderFirst .ism-slide-8 .ism-caption-2 {
    font-size: 1.25em;
    font-family: sans-serif;
    position: absolute; top: 20%;
    left: 60%;
    border-radius: 4px;
    border: none;
    color: #fff; background-color: rgba(0, 0, 0, 0.70);
}

