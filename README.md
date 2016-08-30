# xmocker
A simulation data generator for HTML

# Install
```shell
npm install --save xmocker
```

# API
## new XMocker(options)
Get a xmocker instance with options `options`

# Usage
```html
<script src="node_modules/xmocker/dist/xmocker.min.js"></script>
```
Then, you can write html like this:
```html
<html>
	<body x-mock>
		<h1 x-word="3-9"></h1>
		<div class="main">
			<article>
				<header>
					<img x-image="200-200:#fcc">
					<h1 x-words="1-5:3-7"></h1>
					<p x-date="zh_CN@yyyy-mm-dd"></p>
				</header>
				<section x-paragraph="3-5"></section>
			</article>
		</div>
	</body>
</html>
```
Output:
```html
<html>
	<body>
		<h1>hello</h1>
		<div class="main">
			<article>
				<header>
					<img src="http://dummyimage.com/200x200/#fcc">
					<h1>my first mock test</h1>
					<p>二零一五年九月一日</p>
				</header>
				<section>
					asdfgfg mgiofg mdspods mof mm sds aasads fldf mklsd
					dsk kopdf mkllsd fdg.
					mkld kfld fdior mlse kgfop kpert kpsdml mlsd mlse mkldf mlkfd
					fd mldf rtryuuuu ldffggf fdj ioads kdf psdsdsop kpas kopsd as fdjio jiogf osd asasd popsd ioes asdf.
					sjkds jlas klfdf klsd jioer iotr wrer weer iosd jios mmoas df fg ddf.
				</section>
			</article>
		</div>
	</body>
</html>
```

# Lisence
MIT