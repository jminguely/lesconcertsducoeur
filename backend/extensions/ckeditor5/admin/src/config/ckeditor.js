module.exports = {
  toolbar: {
    items: [
      'heading',
      'removeFormat',
      '|',
      'alignment',
      'bold',
      'italic',
      'bulletedList',
      'numberedList',
      'blockQuote',
      'link',
      '|',
      'fullScreen',
      'undo',
      'redo',
      '|',
      'highLight',
      'fontColor',
      // "fontFamily",
      // "fontSize",
      // "|",
      // "underline",
      // "strikethrough",
      // "subscript",
      // "superscript",
      // "todoList",
      // "insertImage",
      // "strapiMediaLib",
      // "indent",
      // "outdent",
      // "|",
      // "specialCharacters",
      // "insertTable",
      // "mediaEmbed",
      // "htmlEmbed",
      // "codeBlock",
      // "horizontalLine",
      // "|",
    ],
    shouldNotGroupWhenFull: true,
  },
  image: {
    // styles: [
    //     "alignLeft",
    //     "alignCenter",
    //     "alignRight",
    // ],
    // resizeOptions: [
    //     {
    //         name: "resizeImage:original",
    //         value: null,
    //         icon: "original"
    //     },
    //     {
    //         name: "resizeImage:50",
    //         value: "50",
    //         icon: "medium"
    //     },
    //     {
    //         name: "resizeImage:75",
    //         value: "75",
    //         icon: "large"
    //     }
    // ],
    // toolbar: [
    //     "imageStyle:alignLeft",
    //     "imageStyle:alignCenter",
    //     "imageStyle:alignRight",
    //     "|",
    //     "imageTextAlternative",
    //     "|",
    //     "resizeImage:50",
    //     "resizeImage:75",
    //     "resizeImage:original",
    //     "|",
    //     "linkImage",
    // ]
  },
  table: {
    // contentToolbar: [
    //     "tableColumn",
    //     "tableRow",
    //     "mergeTableCells",
    //     "tableProperties",
    //     "tableCellProperties",
    // ]
  },
  fontColor: {
    colors: [
      { color: '#000000', label: 'Black' },
      { color: '#DB303D', label: 'VS' },
      { color: '#4D9A70', label: 'VD' },
      { color: '#EE6F22', label: 'GE' },
      { color: '#3751C0', label: 'FR' },
    ],
  },
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      {
        model: 'heading2',
        view: 'h2',
        title: 'Heading 2',
        class: 'ck-heading_heading2',
      },
      {
        model: 'heading3',
        view: 'h3',
        title: 'Heading 3',
        class: 'ck-heading_heading3',
      },
      {
        model: 'heading4',
        view: 'h4',
        title: 'Heading 4',
        class: 'ck-heading_heading4',
      },
    ],
  },
  highlight: {
    options: [
      {
        model: 'grayButton',
        class: 'bg-gray',
        title: 'Gray',
        color: '#333333',
        type: 'marker',
      },
      {
        model: 'vsButton',
        class: 'bg-VS',
        title: 'VS',
        color: '#DB303D',
        type: 'marker',
      },
      {
        model: 'vdButton',
        class: 'bg-VD',
        title: 'VD',
        color: '#4D9A70',
        type: 'marker',
      },
      {
        model: 'geButton',
        class: 'bg-GE',
        title: 'GE',
        color: '#EE6F22',
        type: 'marker',
      },
      {
        model: 'frButton',
        class: 'bg-FR',
        title: 'FR',
        color: '#3751C0',
        type: 'marker',
      },
    ],
  },
  htmlEmbed: {
    // showPreviews: true,
  },
  fontFamily: {
    // options: [
    //   "default",
    //   "Arial, Helvetica, sans-serif",
    //   "Courier New, Courier, monospace",
    //   "Georgia, serif",
    //   "Lucida Sans Unicode, Lucida Grande, sans-serif",
    //   "Tahoma, Geneva, sans-serif",
    //   "Times New Roman, Times, serif",
    //   "Trebuchet MS, Helvetica, sans-serif",
    //   "Verdana, Geneva, sans-serif",
    //   "JetBrains Mono, monospace",
    //   "Lato, Inter, sans-serif",
    // ],
  },
  link: {
    // defaultProtocol: "http://",
    // decorators: [
    //   {
    //     mode: "manual",
    //     label: "Open in a new tab",
    //     defaultValue: true,
    //     attributes: {
    //       target: "_blank",
    //       rel: "noopener noreferrer",
    //     },
    //   },
    //   {
    //     mode: "manual",
    //     label: "Downloadable",
    //     attributes: {
    //       download: "download",
    //     },
    //   },
    // ],
  },
}
