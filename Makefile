clean:
	git clean -fxd

install:
	npm install

test:
	jshint `find . -name '*.js' ! -path './node_modules/*' ! -path './bower_components/*' ! -path './lib/*'`
