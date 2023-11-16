const traitInputAttr = { placeholder: 'eg. Text here' };

export default {
  assetManager: {
    addButton: 'Зураг нэмэх',
    inputPlh: 'http://path/to/the/image.jpg',
    modalTitle: 'Зураг сонгох',
    uploadTitle: 'Файлуудаа энд гаргах эсвэл дарж байршуулна уу',
  },
  // Here just as a reference, GrapesJS core doesn't contain any block,
  // so this should be omitted from other local files
  blockManager: {
    labels: {
      // 'block-id': 'Block Label',
    },
    categories: {
      // 'category-id': 'Category Label',
    },
  },
  domComponents: {
    names: {
      '': 'Box',
      wrapper: 'Их бие',
      text: 'Текст',
      comment: 'Сэтгэгдэл',
      image: 'Зураг',
      video: 'Бичлэг',
      label: 'Label',
      link: 'Холбоос',
      map: 'Газрын зураг',
      tfoot: 'Хүснэгтний хөл',
      tbody: 'Хүснэгтний бие',
      thead: 'Хүснэгтний толгой',
      table: 'Хүснэгт',
      row: 'Хүснэгтний эгнээ',
      cell: 'Хүснэгтний нүд',
    },
  },
  deviceManager: {
    device: 'Төхөөрөмж Device',
    devices: {
      desktop: 'Дэлгэц Desktop',
      tablet: 'Таблет Tablet',
      mobileLandscape: 'Гар утасны хөндлөн Mobile Landscape',
      mobilePortrait: 'Гар утасны босоо Mobile Portrait',
    },
  },
  panels: {
    buttons: {
      titles: {
        preview: 'Уридчилан харах',
        fullscreen: 'Бүтэн дэлгэц',
        'sw-visibility': 'Бүрэлдэхүүн хэсгүүдийг харах',
        'export-template': 'Код харах',
        'open-sm': 'Open Style Manager',
        'open-tm': 'Тохиргоо',
        'open-layers': 'Open Layer Manager',
        'open-blocks': 'Блокуудыг нээх',
      },
    },
  },
  selectorManager: {
    label: 'Ангиуд',
    selected: 'Сонгогдсон',
    emptyState: '- State -',
    states: {
      hover: 'Hover',
      active: 'Дарах',
      'nth-of-type(2n)': 'Even/Odd',
    },
  },
  styleManager: {
    empty: 'Select an element before using Style Manager',
    layer: 'Layer',
    fileButton: 'Зурагууд',
    sectors: {
      general: 'Ерөнхий',
      layout: 'Layout',
      typography: 'Типографи',
      decorations: 'Чимэглэл',
      extra: 'Илүү',
      flex: 'Уяан хатан',
      dimension: 'Хэмжээ',
    },
    // Default names for sub properties in Composite and Stack types.
    // Other labels are generated directly from their property names (eg. 'font-size' will be 'Font size').
    properties: {
      'text-shadow-h': 'X',
      'text-shadow-v': 'Y',
      'text-shadow-blur': 'Blur',
      'text-shadow-color': 'Color',
      'box-shadow-h': 'X',
      'box-shadow-v': 'Y',
      'box-shadow-blur': 'Blur',
      'box-shadow-spread': 'Spread',
      'box-shadow-color': 'Color',
      'box-shadow-type': 'Type',
      'margin-top-sub': 'Top',
      'margin-right-sub': 'Right',
      'margin-bottom-sub': 'Bottom',
      'margin-left-sub': 'Left',
      'padding-top-sub': 'Top',
      'padding-right-sub': 'Right',
      'padding-bottom-sub': 'Bottom',
      'padding-left-sub': 'Left',
      'border-width-sub': 'Width',
      'border-style-sub': 'Style',
      'border-color-sub': 'Color',
      'border-top-left-radius-sub': 'Top Left',
      'border-top-right-radius-sub': 'Top Right',
      'border-bottom-right-radius-sub': 'Bottom Right',
      'border-bottom-left-radius-sub': 'Bottom Left',
      'transform-rotate-x': 'Rotate X',
      'transform-rotate-y': 'Rotate Y',
      'transform-rotate-z': 'Rotate Z',
      'transform-scale-x': 'Scale X',
      'transform-scale-y': 'Scale Y',
      'transform-scale-z': 'Scale Z',
      'transition-property-sub': 'Property',
      'transition-duration-sub': 'Duration',
      'transition-timing-function-sub': 'Timing',
      'background-image-sub': 'Image',
      'background-repeat-sub': 'Repeat',
      'background-position-sub': 'Position',
      'background-attachment-sub': 'Attachment',
      'background-size-sub': 'Size',
    },
    // Translate options in style properties
    // options: {
    //   float: { // Id of the property
    //     ...
    //     left: 'Left', // {option id}: {Option label}
    //   }
    // }
  },
  traitManager: {
    empty: 'Select an element before using Trait Manager',
    label: 'Component settings',
    traits: {
      // The core library generates the name by their `name` property
      labels: {
        // id: 'Id',
        // alt: 'Alt',
        // title: 'Title',
        // href: 'Href',
      },
      // In a simple trait, like text input, these are used on input attributes
      attributes: {
        id: traitInputAttr,
        alt: traitInputAttr,
        title: traitInputAttr,
        href: { placeholder: 'eg. https://google.com' },
      },
      // In a trait like select, these are used to translate option names
      options: {
        target: {
          false: 'This window',
          _blank: 'New window',
        },
      },
    },
  },
  storageManager: {
    recover: 'Та хадгалаагүй өөрчлөлтүүдийг сэргээхийг хүсэж байна уу?',
  },
};
