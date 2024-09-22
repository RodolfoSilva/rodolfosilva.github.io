---
layout: post
title: Adding a new icon collection to a Phoenix project
description: Learn how to easily add custom icon collections, like Lucide, to your Phoenix project. This guide covers configuring icon dependencies, updating Tailwind, and seamlessly integrating new SVG icons alongside Heroicons.
date: 2024-09-22 10:00:00.000000000 -03:00
slug: elixir/adding-a-new-icon-collection-to-a-phoenix-project/
categories:
  - Tips
tags:
  - tips
  - elixir
---

Phoenix is a fantastic framework that provides a wide range of built-in components when generating a new project, including support for [Heroicons](https://heroicons.com/). While [Heroicons](https://heroicons.com/) are sufficient for small projects, there may be times when you want to use other icon collections available in the community. In this article, I’ll explain how you can easily add new icon collections to your Phoenix project.

Most popular icon collections provide their icons in SVG format. In this article, we’ll use [Lucide](https://lucide.dev/) as an example. Instead of downloading all the icons manually, we’ll install the collection as a dependency in our `mix.exs` file.

To include [Lucide](https://lucide.dev/) as a dependency, specify the icons directory from the repository using the sparse option. Additionally, disable the app and compilation by setting `app: false` and `compile: false`. Set the dependency level to 1. To ensure version consistency, reference a specific tag or version as shown below:

```elixir
{:lucide,
  github: "lucide-icons/lucide",
  tag: "0.445.0",
  sparse: "icons",
  app: false,
  compile: false,
  depth: 1,
}
```

In your `core_component.ex`, after the existing `icon/1` function, add a new variation as shown below. This will allow you to use [Lucide](https://lucide.dev/) icons with the `lucide-` prefix:

```elixir
def icon(%{name: "lucide-" <> _} = assigns) do
  ~H"""
  <span class={[@name, @class]} />
  """
end
```

You will need to update your `tailwind.config.js` to compile all icons with the `lucide-` prefix as Tailwind classes. The version below is a modified variant of the original [Heroicons](https://heroicons.com/) configuration plugin, adapted to work with [Lucide](https://lucide.dev/). Essentially, this configuration will scan for all icons in the icons folder of the dependency we added and generate a class for each icon with the necessary styles. In the `matchComponents`, you should provide the icon collection name as the key and make any necessary adjustments for your icon collection. In my case, I had to remove the default `width` and `height` attributes from the icons and adjust the `stroke-width` to match the value used by the [Heroicons](https://heroicons.com/) collection. This way, both collections can be used seamlessly in the project. Be sure to include this code as the last plugin in the list inside the configuration file.

```js
plugin(function ({ matchComponents, theme }) {
  let iconsDir = path.join(__dirname, "../deps/lucide/icons");
  let values = {};
  fs.readdirSync(iconsDir).forEach((file) => {
    if (path.extname(file) != ".svg") return;

    let name = path.basename(file, ".svg");
    values[name] = { name, fullPath: path.join(iconsDir, file) };
  });
  matchComponents(
    {
      lucide: ({ name, fullPath }) => {
        let content = fs
          .readFileSync(fullPath)
          .toString()
          .replace(/\r?\n|\r/g, "")
          .replace(/stroke-width="2"/g, 'stroke-width="1.5"')
          .replace(/(?:width|height)="24"\s?/g, "");
        let size = theme("spacing.6");

        return {
          [`--lucide-${name}`]: `url('data:image/svg+xml;utf8,${content}')`,
          "-webkit-mask": `var(--lucide-${name})`,
          mask: `var(--lucide-${name})`,
          "mask-repeat": "no-repeat",
          "background-color": "currentColor",
          "vertical-align": "middle",
          display: "inline-block",
          width: size,
          height: size,
        };
      },
    },
    { values }
  );
});
```

That’s it! I hope this guide helps you successfully integrate new icon collections into your Phoenix project. Whether you're using [Lucide](https://lucide.dev/) or any other collection, the steps outlined here will allow you to customize and extend your project’s design with ease. Happy coding!
