async function getIcon(name = '', dir = '') {
  if (!hasSusha()) return;

  let folder = `./susha-radix/radix-icons/${name}`;

  let dirUrl = new URL(dir, window.location.href);
  let parsedUrl = new URL(folder, dirUrl);

  let icon = await fetch(parsedUrl.href);

  if (icon.status === 200) {
    return await icon.blob()

  } else {
    console.log(icon.status)
    return false;
  }
}

async function createIcon(blob) {
  if (!hasSusha()) return;

  // Convert the blob to a base64 string
  let base64 = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

  let icon = i()
    .class$('radix-icon')
    .att$('role', 'img')
    .att$('aria-label', 'icon')
    .att$('tabindex', '-1')
    .att$('title', 'icon')
    .att$('alt', 'icon')
    .style$({
      'background-image': `url(data:image/svg+xml;base64,${base64})`,
      width: '15px',
      height: '15px',
      'vertical-align': '-.125em',
      display: 'inline-block'
    })

  return icon;

}

window.Radix_META = class Radix_META {
  static struct = [
    "accessibility.svg",
    "activity-log.svg",
    "align-baseline.svg",
    "align-bottom.svg",
    "align-center-horizontally.svg",
    "align-center.svg",
    "align-center-vertically.svg",
    "align-end.svg",
    "align-horizontal-centers.svg",
    "align-left.svg",
    "align-right.svg",
    "align-start.svg",
    "align-stretch.svg",
    "align-top.svg",
    "align-vertical-centers.svg",
    "all-sides.svg",
    "angle.svg",
    "archive.svg",
    "arrow-bottom-left.svg",
    "arrow-bottom-right.svg",
    "arrow-down.svg",
    "arrow-left.svg",
    "arrow-right.svg",
    "arrow-top-left.svg",
    "arrow-top-right.svg",
    "arrow-up.svg",
    "aspect-ratio.svg",
    "avatar.svg",
    "backpack.svg",
    "badge.svg",
    "bar-chart.svg",
    "bell.svg",
    "blending-mode.svg",
    "bookmark-filled.svg",
    "bookmark.svg",
    "border-all.svg",
    "border-bottom.svg",
    "border-dashed.svg",
    "border-dotted.svg",
    "border-left.svg",
    "border-none.svg",
    "border-right.svg",
    "border-solid.svg",
    "border-split.svg",
    "border-style.svg",
    "border-top.svg",
    "border-width.svg",
    "box-model.svg",
    "box.svg",
    "button.svg",
    "calendar.svg",
    "camera.svg",
    "card-stack-minus.svg",
    "card-stack-plus.svg",
    "card-stack.svg",
    "caret-down.svg",
    "caret-left.svg",
    "caret-right.svg",
    "caret-sort.svg",
    "caret-up.svg",
    "chat-bubble.svg",
    "checkbox.svg",
    "check-circled.svg",
    "check.svg",
    "chevron-down.svg",
    "chevron-left.svg",
    "chevron-right.svg",
    "chevron-up.svg",
    "circle-backslash.svg",
    "circle.svg",
    "clipboard-copy.svg",
    "clipboard.svg",
    "clock.svg",
    "codesandbox-logo.svg",
    "code.svg",
    "color-wheel.svg",
    "column-spacing.svg",
    "columns.svg",
    "commit.svg",
    "component-1.svg",
    "component-2.svg",
    "component-boolean.svg",
    "component-instance.svg",
    "component-none.svg",
    "component-placeholder.svg",
    "container.svg",
    "cookie.svg",
    "copy.svg",
    "corner-bottom-left.svg",
    "corner-bottom-right.svg",
    "corners.svg",
    "corner-top-left.svg",
    "corner-top-right.svg",
    "countdown-timer.svg",
    "counter-clockwise-clock.svg",
    "crop.svg",
    "cross-1.svg",
    "cross-2.svg",
    "cross-circled.svg",
    "crosshair-1.svg",
    "crosshair-2.svg",
    "crumpled-paper.svg",
    "cube.svg",
    "cursor-arrow.svg",
    "cursor-text.svg",
    "dashboard.svg",
    "dash.svg",
    "desktop.svg",
    "dimensions.svg",
    "discord-logo.svg",
    "disc.svg",
    "divider-horizontal.svg",
    "divider-vertical.svg",
    "dot-filled.svg",
    "dots-horizontal.svg",
    "dot-solid.svg",
    "dots-vertical.svg",
    "dot.svg",
    "double-arrow-down.svg",
    "double-arrow-left.svg",
    "double-arrow-right.svg",
    "double-arrow-up.svg",
    "download.svg",
    "drag-handle-dots-1.svg",
    "drag-handle-dots-2.svg",
    "drag-handle-horizontal.svg",
    "drag-handle-vertical.svg",
    "drawing-pin-filled.svg",
    "drawing-pin-solid.svg",
    "drawing-pin.svg",
    "dropdown-menu.svg",
    "enter-full-screen.svg",
    "enter.svg",
    "envelope-closed.svg",
    "envelope-open.svg",
    "eraser.svg",
    "exclamation-triangle.svg",
    "exit-full-screen.svg",
    "exit.svg",
    "external-link.svg",
    "eye-closed.svg",
    "eye-none.svg",
    "eye-open.svg",
    "face.svg",
    "figma-logo.svg",
    "file-minus.svg",
    "file-plus.svg",
    "file.svg",
    "file-text.svg",
    "font-bold.svg",
    "font-family.svg",
    "font-italic.svg",
    "font-roman.svg",
    "font-size.svg",
    "font-style.svg",
    "framer-logo.svg",
    "frame.svg",
    "gear.svg",
    "github-logo.svg",
    "globe.svg",
    "grid.svg",
    "group.svg",
    "half-1.svg",
    "half-2.svg",
    "hamburger-menu.svg",
    "hand.svg",
    "heading.svg",
    "heart-filled.svg",
    "heart.svg",
    "height.svg",
    "hobby-knife.svg",
    "home.svg",
    "iconjar-logo.svg",
    "id-card.svg",
    "image.svg",
    "info-circled.svg",
    "inner-shadow.svg",
    "input.svg",
    "instagram-logo.svg",
    "justify-center.svg",
    "justify-end.svg",
    "justify-start.svg",
    "justify-stretch.svg",
    "keyboard.svg",
    "lap-timer.svg",
    "laptop.svg",
    "layers.svg",
    "layout.svg",
    "letter-case-capitalize.svg",
    "letter-case-lowercase.svg",
    "letter-case-toggle.svg",
    "letter-case-uppercase.svg",
    "letter-spacing.svg",
    "lightning-bolt.svg",
    "line-height.svg",
    "link-1.svg",
    "link-2.svg",
    "link-break-1.svg",
    "link-break-2.svg",
    "linkedin-logo.svg",
    "link-none-1.svg",
    "link-none-2.svg",
    "list-bullet.svg",
    "lock-closed.svg",
    "lock-open-1.svg",
    "lock-open-2.svg",
    "loop.svg",
    "magic-wand.svg",
    "magnifying-glass.svg",
    "margin.svg",
    "mask-off.svg",
    "mask-on.svg",
    "minus-circled.svg",
    "minus.svg",
    "mixer-horizontal.svg",
    "mixer-vertical.svg",
    "mix.svg",
    "mobile.svg",
    "modulz-logo.svg",
    "moon.svg",
    "move.svg",
    "notion-logo.svg",
    "opacity.svg",
    "open-in-new-window.svg",
    "outer-shadow.svg",
    "overline.svg",
    "padding.svg",
    "paper-plane.svg",
    "pause.svg",
    "pencil-1.svg",
    "pencil-2.svg",
    "person.svg",
    "pie-chart.svg",
    "pilcrow.svg",
    "pin-bottom.svg",
    "pin-left.svg",
    "pin-right.svg",
    "pin-top.svg",
    "play.svg",
    "plus-circled.svg",
    "plus.svg",
    "question-mark-circled.svg",
    "question-mark.svg",
    "quote.svg",
    "radiobutton.svg",
    "reader.svg",
    "reload.svg",
    "reset.svg",
    "resume.svg",
    "rocket.svg",
    "rotate-counter-clockwise.svg",
    "row-spacing.svg",
    "rows.svg",
    "ruler-horizontal.svg",
    "ruler-square.svg",
    "scissors.svg",
    "section.svg",
    "sewing-pin-filled.svg",
    "sewing-pin-solid.svg",
    "sewing-pin.svg",
    "shadow-inner.svg",
    "shadow-none.svg",
    "shadow-outer.svg",
    "shadow.svg",
    "share-1.svg",
    "share-2.svg",
    "shuffle.svg",
    "size.svg",
    "sketch-logo.svg",
    "slash.svg",
    "slider.svg",
    "space-between-horizontally.svg",
    "space-between-vertically.svg",
    "space-evenly-horizontally.svg",
    "space-evenly-vertically.svg",
    "speaker-loud.svg",
    "speaker-moderate.svg",
    "speaker-off.svg",
    "speaker-quiet.svg",
    "square.svg",
    "stack.svg",
    "star-filled.svg",
    "star.svg",
    "stitches-logo.svg",
    "stop.svg",
    "stopwatch.svg",
    "stretch-horizontally.svg",
    "stretch-vertically.svg",
    "strikethrough.svg",
    "sun.svg",
    "switch.svg",
    "symbol.svg",
    "table.svg",
    "target.svg",
    "text-align-bottom.svg",
    "text-align-center.svg",
    "text-align-justify.svg",
    "text-align-left.svg",
    "text-align-middle.svg",
    "text-align-right.svg",
    "text-align-top.svg",
    "text-none.svg",
    "text.svg",
    "thick-arrow-down.svg",
    "thick-arrow-left.svg",
    "thick-arrow-right.svg",
    "thick-arrow-up.svg",
    "timer.svg",
    "tokens.svg",
    "track-next.svg",
    "track-previous.svg",
    "transform.svg",
    "transparency-grid.svg",
    "trash.svg",
    "triangle-down.svg",
    "triangle-left.svg",
    "triangle-right.svg",
    "triangle-up.svg",
    "twitter-logo.svg",
    "underline.svg",
    "update.svg",
    "upload.svg",
    "value-none.svg",
    "value.svg",
    "vercel-logo.svg",
    "video.svg",
    "view-grid.svg",
    "view-horizontal.svg",
    "view-none.svg",
    "view-vertical.svg",
    "width.svg",
    "zoom-in.svg",
    "zoom-out.svg"
  ]

  constructor(loc = './') {
    this.buffers = {}
    
    this.loaded = new Promise(resolve => {
      [...Radix_META.struct].map(async (name_, i) => {
        // split at first '.'
        const [name, ext] = name_.split('.')

        this.buffers[name] = await getIcon(name, loc)
        this[name] = async () => await createIcon(this.buffers[name])
        
        if (i === Radix_META.struct.length - 1) resolve()
      })
    })

    .then(_ => this.loaded = true)
  }
}