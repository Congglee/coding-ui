# Development

## Compile Pug to HTML

```bash
pug index.pug --pretty --watch

# Compile all Pug files in the views folder to the public folder
pug *.pug --pretty --watch
```

## Compile SCSS to CSS

```bash
sass ./sass/app.scss ./styles/app.css --watch

# Compile all SCSS files in the sass folder to the styles folder
sass ./sass:styles/ --watch
```
