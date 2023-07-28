# Amir4rab/UI

> **Warning** This project is in Beta

## Description

Set of elegant react components with tailwind styling and responsive design.

## Acknowledgments

This project is inspired by the [shadcn/ui](https://github.com/shadcn/ui) and makes heavy use of the following libraries:

- [Tailwind by @tailwindlabs](https://github.com/tailwindlabs/tailwindcss)
- [CVA by @joe-bell](https://github.com/joe-bell/cva)
- [Tailwind Merge by @dcastil](https://github.com/dcastil/tailwind-merge)

Many of the components are inspired by the following awesome youtube channels which you have to check out:

- [Sam Selikoff](https://www.youtube.com/@samselikoff)
- [Frontendfyi](https://www.youtube.com/@frontendfyi)

## Components

you can find the list of components either [here](./components/) or on [ui.amir4rab.com](https://ui.amir4rab.com/components)

## Supported frameworks/Libraries

| Support level       | Next.js | React + Vite | Preact |
| ------------------- | ------- | ------------ | ------ |
| Fully Supported     | X       | -            | -      |
| Partially Supported | -       | X            | X      |

### Next.js {#next-eg}

You just need to complete the setup process. You can find the complete example on [here](./examples/next).

### React + Vite {#react-vite-eg}

Since there are some differences between Next.js and Vite you might have to do the following:

- Adjusting import paths since Vite doesn't support typescript paths by default

You can find the 'React + Vite' example on [here](./examples/react-vite/).

### Preact + Vite {#preact-vite-eg}

Since there are some differences between react and preact you might have to do the following:

- Modifying imports from react to preact
- Adjusting import paths since Vite doesn't support typescript paths by default
- Rewriting the generic system for generic components
- Removing "use client" directive

You can find the 'Preact + Vite' example on [here](./examples/preact-vite/).

### React + X

Incase your environment support typescript paths add the following path to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    // ...
    "paths": {
      "@/*": ["./src/*"]
    }
  }
  // ...
}
```

## License

This project is license under MIT license and free to use
