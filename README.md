# Perfect Bootstrap
Responsive fixed ratio rows for use with Bootstrap.

The inspiration for this project was to combine the power of [Fluid Squares](http://fluidsquares.com/)(previously called "Perfect Squares") and [Twitter Bootstrap](http://getbootstrap.com/).

Perfect Bootstrap aims to keep its versioning inline with Twitter Bootstrap, but may fall behind when new releases are made.

The concept works by making use of the CSS "quirk" surrounding percentage-based padding. When using a percentage-based `padding-bottom` to an element, the size is actually calculated relative to the `width` of the element. By leveraging this premise, elements can be made to maintain a particular ratio of height to width.

##How to use
Perfect Bootstrap is designed to be used within Twitter Bootstrap's `col-*` classed elements. It follows a similar premise of 12 rows per 100%. 

To create a responsive square:
```html
<div class="col-xs-12">
	<div class="row-xs-12">
		<div class="abs-inner">
			<!-- Your content here -->
		</div>
	</div>
</div>
```
The `abs-inner` element is used to "reset" the interior of the row.

##Customising
By default, Perfect Bootstrap provides upto a height of 200% of the width of an element, and 12 rows per 100%. It also uses the same responsive media query breakpoints as Twitter Bootstrap.

However, you can customise the variables used to generate Perfect Bootstrap but altering the included `grid.variables.less` located at `less/grid.variables.less`, then follow the details provided in the Contributing section.

##Contributing
Despite the name, Perfect Bootstrap claims to be anything but perfect; Pull Requests are actively encouraged for this project. 
Please install the node packages using `npm`
```
npm install
```

then, using Grunt, run
```
grunt release
```

Grunt watch, is also provided for continued development.
