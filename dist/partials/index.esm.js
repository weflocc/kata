import { getKataConfig, standoutText } from '../_chunks/meta-EMlFI2SU.js';
export { hiddenSlug, hiddenTitle, media, metaDescription, metaField, metaFields, metaFieldset, metaTitle, schemaOrg, sharingImage, slug, title, twitterSharingImage } from '../_chunks/meta-EMlFI2SU.js';
import { BiLinkExternal, BiLink, BiKey, BiAnchor, BiDownArrowCircle, BiTable, BiNews, BiListPlus } from 'react-icons/bi';
import { GoFileSymlinkFile } from 'react-icons/go';
import { AiFillTwitterCircle } from 'react-icons/ai';
import camelCase from 'lodash.camelcase';
import { BsFilePost, BsCardText } from 'react-icons/bs';
import { links as links$1, defaultOptions as defaultOptions$1, basicTextEditor as basicTextEditor$1, media } from '#partials';
import { GrMap } from 'react-icons/gr';
const defaultOptions = {
  collapsable: true,
  collapsed: false
};
const config$2 = getKataConfig();
const basicTextEditor = function () {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Text Body";
  let settings = arguments.length > 1 ? arguments[1] : undefined;
  let includes = arguments.length > 2 ? arguments[2] : undefined;
  let customEditor = [];
  if (includes && includes.buttons) {
    customEditor.push({
      type: "buttons"
    });
  }
  return {
    title: name,
    name: camelCase(name),
    type: "array",
    ...settings,
    of: [{
      type: "block",
      lists: [{
        title: "Bullet",
        value: "bullet"
      }, {
        title: "Numbered",
        value: "number"
      }],
      styles: [],
      marks: {
        decorators: [{
          title: "Strong",
          value: "strong"
        }, {
          title: "Emphasis",
          value: "em"
        }, {
          title: "Underline",
          value: "underline"
        }],
        annotations: [{
          name: "link",
          type: "object",
          title: "External link",
          icon: BiLinkExternal,
          fields: [{
            name: "href",
            type: "url",
            title: "URL",
            validation: Rule => Rule.uri({
              scheme: ["http", "https", "mailto", "tel", "sms"]
            })
          }, {
            title: "Open in new tab",
            name: "blank",
            type: "boolean",
            layout: "checkbox"
          }]
        }, {
          name: "internalLink",
          type: "object",
          title: "Internal link",
          icon: BiLink,
          fields: [{
            name: "reference",
            type: "reference",
            title: "Reference",
            to: config$2.allTypes,
            options: {
              disableNew: true
              // we don't want people to be able to create new pages here!
            }
          }]
        }]
      }
    }, ...customEditor]
  };
};
const fullTextEditor = function () {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Text Body";
  let includes = arguments.length > 1 ? arguments[1] : undefined;
  let settings = arguments.length > 2 ? arguments[2] : undefined;
  let annotations = [{
    name: "link",
    type: "object",
    title: "External link",
    icon: BiLinkExternal,
    fields: [{
      name: "href",
      type: "url",
      title: "URL",
      validation: Rule => Rule.uri({
        scheme: ["http", "https", "mailto", "tel", "sms"]
      })
    }, {
      title: "Open in new tab",
      name: "blank",
      type: "boolean",
      layout: "checkbox",
      initialValue: true
    }]
  }, {
    name: "internalLink",
    type: "object",
    title: "Internal link",
    icon: BiLink,
    fields: [{
      name: "reference",
      type: "reference",
      title: "Reference",
      to: config$2.allTypes
    }]
  }, {
    name: "file",
    type: "object",
    title: "File",
    icon: GoFileSymlinkFile,
    fields: [{
      name: "file",
      type: "file",
      title: "File",
      to: config$2.allTypes
    }]
  }];
  if (includes && includes.idAndAnchor) {
    annotations.push({
      name: "id",
      type: "object",
      title: "ID",
      icon: BiKey,
      fields: [{
        type: "string",
        name: "id",
        title: "Id",
        validation: Rule => Rule.custom(name2 => {
          if (typeof name2 === "undefined") {
            return true;
          }
          return name2.includes(" ") ? "No spaces allowed, please use hyphens (-) instead." : true;
        }).required(),
        description: "Set an id on a section of a page, with no spaces. An anchor link can scroll to this id."
      }]
    });
    annotations.push({
      name: "anchor",
      type: "object",
      title: "Anchor link",
      icon: BiAnchor,
      fields: [{
        type: "string",
        name: "anchor",
        title: "Anchor",
        description: "Without the #. An anchor is the id of a section on this page."
      }]
    });
  }
  let customEditor = [{
    type: "block",
    lists: [{
      title: "Bullet",
      value: "bullet"
    }, {
      title: "Numbered",
      value: "number"
    }],
    marks: {
      decorators: [{
        title: "Strong",
        value: "strong"
      }, {
        title: "Emphasis",
        value: "em"
      }, {
        title: "Underline",
        value: "underline"
      }],
      annotations
    },
    styles: [{
      title: "Normal",
      value: "normal"
    }, {
      title: "Heading",
      value: "h2"
    }, {
      title: "Subheading",
      value: "h3"
    }]
  }, {
    type: "mediaPreview"
  }, {
    type: "buttons"
  }];
  if (includes) {
    if (includes.feature01 || includes.textAndImage) {
      customEditor.push({
        type: "textAndImage"
      });
    }
    if (includes.cta07 || includes.logos) {
      customEditor.push({
        type: "logos"
      });
    }
    if (includes.accordion || includes.dropdown) {
      customEditor.push({
        type: "accordion"
      });
    }
    if (includes.tableField || includes.table) {
      customEditor.push({
        type: "tableField"
      });
    }
    if (includes.testimonials || includes.quotes) {
      customEditor.push({
        type: "testimonials"
      });
    }
    if (includes.twitter) {
      customEditor.push({
        type: "object",
        name: "twitterEmbed",
        fields: [{
          type: "string",
          name: "tweetId",
          title: "Tweet ID",
          validation: Rule => Rule.required(),
          description: 'To find your tweet ID, click on the three dots and select embed tweet. This will open a new tab. Scroll up the new page, and at the top there will be a heading saying "What would you like to embed?" with a url. Your tweet ID is the number at the end of the URL.'
        }],
        preview: {
          select: {
            tweetId: "tweetId"
          },
          prepare(_ref) {
            let {
              tweetId
            } = _ref;
            return {
              title: "Tweet embed",
              subtitle: tweetId,
              media: AiFillTwitterCircle
            };
          }
        }
      });
    }
    if (includes.standoutText) {
      customEditor.push(standoutText);
    }
  }
  return {
    title: name,
    name: camelCase(name),
    type: "array",
    ...settings,
    of: customEditor
  };
};
const liteTextEditor = function () {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Text Body";
  let settings = arguments.length > 1 ? arguments[1] : undefined;
  return {
    title: name,
    name: camelCase(name),
    type: "array",
    ...settings,
    of: [{
      type: "block",
      lists: [],
      styles: [],
      marks: {
        decorators: [{
          title: "Strong",
          value: "strong"
        }, {
          title: "Emphasis",
          value: "em"
        }, {
          title: "Underline",
          value: "underline"
        }],
        annotations: []
      }
    }]
  };
};
const config$1 = getKataConfig();
const linkText = {
  type: "string",
  name: "linkText",
  title: "Link text",
  validation: Rule => Rule.required()
};
const linkStyle = {
  title: "Link style",
  name: "linkStyle",
  type: "string",
  description: "Please select a button style. If you are unsure, select Primary CTA",
  validation: Rule => Rule.required(),
  initialValue: "btn-primary",
  options: {
    list: [{
      title: "Primary CTA",
      value: "btn-primary"
    }, {
      title: "Secondary CTA",
      value: "btn-secondary"
    }, {
      title: "Tertiary CTA",
      value: "btn-tertiary"
    }]
  }
};
const singleLink = {
  title: "Link",
  name: "singleLink",
  type: "object",
  fields: [{
    type: "string",
    name: "linkType",
    title: "Type of link",
    validation: Rule => Rule.required(),
    // initialValue: config.buttonTypes[0].value,
    options: {
      list: config$1.buttonTypes
    }
  }, linkText, {
    type: "url",
    name: "url",
    title: "URL",
    validation: Rule => Rule.uri({
      scheme: ["http", "https", "mailto", "tel", "sms", "www"]
    }),
    hidden: _ref2 => {
      let {
        parent
      } = _ref2;
      return (parent == null ? void 0 : parent.linkType) != "external";
    }
  }, {
    type: "file",
    name: "file",
    title: "File",
    hidden: _ref3 => {
      let {
        parent
      } = _ref3;
      return (parent == null ? void 0 : parent.linkType) != "file";
    }
  }, {
    type: "reference",
    name: "internalLink",
    to: config$1.allTypes,
    options: {
      // disableNew: true, // do we want people to be able to create new pages here?
    },
    hidden: _ref4 => {
      let {
        parent
      } = _ref4;
      return (parent == null ? void 0 : parent.linkType) != "internal";
    }
  }, {
    name: "anchor",
    type: "string",
    title: "Anchor link or Query string",
    hidden: _ref5 => {
      let {
        parent
      } = _ref5;
      return (parent == null ? void 0 : parent.linkType) != "internal";
    }
  }, {
    type: "string",
    name: "query",
    title: "Query",
    description: "For developer use only. If you edit this, your lightbox will break.",
    hidden: _ref6 => {
      let {
        parent
      } = _ref6;
      return (parent == null ? void 0 : parent.linkType) != "lightbox";
    }
  }, linkStyle],
  preview: {
    select: {
      title: "linkText",
      type: "linkType"
    },
    prepare(selection) {
      const {
        title,
        type
      } = selection;
      let icon = BiLink;
      if (type == "external") {
        icon = BiLinkExternal;
      } else if (type == "file") {
        icon = GoFileSymlinkFile;
      } else if (type == "lightbox") {
        icon = BsFilePost;
      }
      return {
        title,
        media: icon
      };
    }
  }
};
const basicSingleLink = {
  title: "Link",
  name: "singleLink",
  type: "object",
  fields: [{
    type: "string",
    name: "linkType",
    title: "Type of link",
    validation: Rule => Rule.required(),
    // initialValue: config.buttonTypes[0].value,
    options: {
      list: config$1.buttonTypes
    }
  }, {
    type: "url",
    name: "url",
    title: "URL",
    validation: Rule => Rule.uri({
      scheme: ["http", "https", "mailto", "tel", "sms", "www"]
    }),
    hidden: _ref7 => {
      let {
        parent
      } = _ref7;
      return (parent == null ? void 0 : parent.linkType) != "external";
    }
  }, {
    type: "file",
    name: "file",
    title: "File",
    hidden: _ref8 => {
      let {
        parent
      } = _ref8;
      return (parent == null ? void 0 : parent.linkType) != "file";
    }
  }, {
    type: "reference",
    name: "internalLink",
    to: config$1.allTypes,
    options: {
      // disableNew: true, // do we want people to be able to create new pages here?
    },
    hidden: _ref9 => {
      let {
        parent
      } = _ref9;
      return (parent == null ? void 0 : parent.linkType) != "internal";
    }
  }, {
    name: "anchor",
    type: "string",
    title: "Anchor link or Query string",
    hidden: _ref10 => {
      let {
        parent
      } = _ref10;
      return (parent == null ? void 0 : parent.linkType) != "internal";
    }
  }, {
    type: "string",
    name: "query",
    title: "Query",
    description: "For developer use only. If you edit this, your lightbox will break.",
    hidden: _ref11 => {
      let {
        parent
      } = _ref11;
      return (parent == null ? void 0 : parent.linkType) != "lightbox";
    }
  }],
  preview: {
    select: {
      title: "linkText",
      type: "linkType"
    },
    prepare(selection) {
      const {
        title,
        type
      } = selection;
      let icon = BiLink;
      if (type == "external") {
        icon = BiLinkExternal;
      } else if (type == "file") {
        icon = GoFileSymlinkFile;
      } else if (type == "lightbox") {
        icon = BsFilePost;
      }
      return {
        title,
        media: icon
      };
    }
  }
};
const basicSingleLinkFn = function () {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "singleLink";
  return {
    name: camelCase(name),
    title: name,
    type: "object",
    fields: [{
      type: "string",
      name: "linkType",
      title: "Type of link",
      validation: Rule => Rule.required(),
      // initialValue: config.buttonTypes[0].value,
      options: {
        list: config$1.buttonTypes
      }
    }, {
      type: "url",
      name: "url",
      title: "URL",
      validation: Rule => Rule.uri({
        scheme: ["http", "https", "mailto", "tel", "sms", "www"]
      }),
      hidden: _ref12 => {
        let {
          parent
        } = _ref12;
        return (parent == null ? void 0 : parent.linkType) != "external";
      }
    }, {
      type: "file",
      name: "file",
      title: "File",
      hidden: _ref13 => {
        let {
          parent
        } = _ref13;
        return (parent == null ? void 0 : parent.linkType) != "file";
      }
    }, {
      type: "reference",
      name: "internalLink",
      to: config$1.allTypes,
      options: {
        // disableNew: true, // do we want people to be able to create new pages here?
      },
      hidden: _ref14 => {
        let {
          parent
        } = _ref14;
        return (parent == null ? void 0 : parent.linkType) != "internal";
      }
    }, {
      name: "anchor",
      type: "string",
      title: "Anchor link or Query string",
      hidden: _ref15 => {
        let {
          parent
        } = _ref15;
        return (parent == null ? void 0 : parent.linkType) != "internal";
      }
    }, {
      type: "string",
      name: "query",
      title: "Query",
      description: "For developer use only. If you edit this, your lightbox will break.",
      hidden: _ref16 => {
        let {
          parent
        } = _ref16;
        return (parent == null ? void 0 : parent.linkType) != "lightbox";
      }
    }],
    preview: {
      select: {
        title: "linkText",
        type: "linkType"
      },
      prepare(selection) {
        const {
          title,
          type
        } = selection;
        let icon = BiLink;
        if (type == "external") {
          icon = BiLinkExternal;
        } else if (type == "file") {
          icon = GoFileSymlinkFile;
        } else if (type == "lightbox") {
          icon = BsFilePost;
        }
        return {
          title,
          media: icon
        };
      }
    }
  };
};
const links = function () {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Links";
  let max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  let settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return {
    name: camelCase(name),
    title: name,
    type: "array",
    of: [singleLink],
    ...settings,
    validation: max ? Rule => Rule.max(max) : ""
  };
};
const feedSelector = _ref17 => {
  let {
    field,
    title,
    selectedTitle,
    articleType,
    categoryTitle,
    categoryType,
    description,
    sliceTitle,
    noShowAll,
    filter,
    filterParams,
    hidden,
    showLinks
  } = _ref17;
  selectedTitle = selectedTitle || "Choose manually";
  categoryTitle = categoryTitle || "Or, Select a category to show automatically";
  description = description || "You can manually select one or more items, or else choose a category to display.";
  sliceTitle = sliceTitle || false;
  noShowAll = noShowAll || false;
  filter = filter || false;
  filterParams = filterParams || false;
  hidden = hidden || false;
  showLinks = showLinks || false;
  let options = {};
  if (filter) {
    options.filter = filter;
  }
  if (filterParams) {
    options.filterParams = filterParams;
  }
  const selected = {
    name: "selected",
    type: "array",
    title: selectedTitle,
    of: [{
      type: "reference",
      to: [{
        type: articleType
      }],
      options
    }]
  };
  const categories = {
    name: "categories",
    type: "array",
    title: categoryTitle,
    of: [{
      type: "reference",
      to: [{
        type: categoryType
      }]
    }]
  };
  const show = {
    name: "show",
    title: "Display all ".concat(articleType, " articles?"),
    type: "boolean"
  };
  const fields = [];
  if (sliceTitle) {
    const title2 = {
      name: "title",
      title: "Title",
      type: "string"
    };
    fields.push(title2);
  }
  if (!noShowAll) {
    fields.push(show);
  }
  if (selected) {
    if (!noShowAll) {
      selected.hidden = _ref18 => {
        let {
          parent
        } = _ref18;
        return parent == null ? void 0 : parent.show;
      };
    }
    fields.push(selected);
  }
  if (categoryType) {
    if (!noShowAll) {
      categories.hidden = _ref19 => {
        let {
          parent
        } = _ref19;
        return parent == null ? void 0 : parent.show;
      };
    }
    fields.push(categories);
  }
  if (showLinks) {
    fields.push(links$1());
  }
  return {
    name: field,
    title: title || null,
    type: "object",
    description,
    fields,
    options: defaultOptions$1,
    hidden
  };
};
const feedSelector2 = _ref20 => {
  let {
    name,
    articleTypes,
    title = false,
    manualTitle = "Manual selection",
    categoryTitle = "All pages/articles with this category",
    categoryType = false,
    description = "",
    noShowAll = false,
    filter = false,
    filterParams = false,
    hidden = false,
    heading = false,
    text = false,
    showLinks = false
  } = _ref20;
  let options = {};
  if (filter) {
    options.filter = filter;
  }
  if (filterParams) {
    options.filterParams = filterParams;
  }
  let types = [];
  if (!noShowAll) {
    types.push({
      title: "Automatic",
      value: "all"
    });
  }
  if (categoryType) {
    types.push({
      title: "By category",
      value: "category"
    });
  }
  types.push({
    title: "Manual",
    value: "manual"
  });
  const type = {
    name: "type",
    type: "string",
    description: "Select the way to add to this list. If unselected, the list will remain empty",
    options: {
      list: types
    }
  };
  let to = [];
  if (articleTypes) {
    articleTypes.forEach(element => {
      to.push({
        type: element
      });
    });
  }
  const manual = {
    name: "selected",
    type: "array",
    title: manualTitle,
    hidden: _ref21 => {
      let {
        parent
      } = _ref21;
      return (parent == null ? void 0 : parent.type) != "manual";
    },
    of: [{
      type: "reference",
      to,
      options
    }]
  };
  const categories = {
    name: "categories",
    type: "array",
    description: "This will show everything assigned to this category",
    title: categoryTitle,
    hidden: _ref22 => {
      let {
        parent
      } = _ref22;
      return (parent == null ? void 0 : parent.type) != "category";
    },
    of: [{
      type: "reference",
      to: [{
        type: categoryType
      }]
    }]
  };
  const fields = [];
  if (heading) {
    const title2 = {
      name: "title",
      title: "Title",
      type: "string"
    };
    fields.push(title2);
  }
  if (text) {
    const text2 = {
      name: "text",
      title: "Text",
      type: "text",
      rows: 3
    };
    fields.push(text2);
  }
  fields.push(type);
  fields.push(manual);
  if (categoryType) {
    fields.push(categories);
  }
  if (showLinks) {
    fields.push(links$1());
  }
  return {
    name,
    title: title || null,
    type: "object",
    description,
    fields: fields || [],
    options: defaultOptions$1,
    hidden
  };
};
const globalSliceReference = function (name) {
  let hidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    name: camelCase(name),
    title: name,
    hidden,
    description: "This slice is shown on multiple pages. Click below to see/edit it. Editing it will affect all instances.",
    type: "reference",
    to: [{
      type: "globalSlices"
    }]
  };
};
const order = {
  name: "order",
  title: "Order",
  type: "number",
  hidden: true
};
const standardImage = function () {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Image";
  let vars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const required = (vars == null ? void 0 : vars.required) || false;
  const title = (vars == null ? void 0 : vars.title) || name;
  const description = (vars == null ? void 0 : vars.description) || "";
  const hidden = (vars == null ? void 0 : vars.hidden) || false;
  return {
    name: camelCase(name),
    title,
    type: "image",
    description,
    hidden,
    options: {
      hotspot: true,
      ...defaultOptions$1
    },
    validation: required ? Rule => Rule.required("Please select an image.") : null
  };
};
const accordion = {
  name: "accordion",
  title: "Dropdown (Accordion)",
  type: "object",
  fields: [{
    name: "list",
    type: "array",
    of: [{
      name: "item",
      type: "object",
      fields: [{
        name: "title",
        type: "string"
      }, basicTextEditor$1()],
      preview: {
        select: {
          title: "title"
        },
        prepare(selection) {
          let {
            title
          } = selection;
          return {
            title: title || "Accordion",
            media: BiDownArrowCircle
          };
        }
      }
    }]
  }],
  preview: {
    select: {
      list: "list"
    },
    prepare(selection) {
      let {
        list
      } = selection;
      let length = list ? list.length : 0;
      return {
        title: "Dropdown (Accordion)",
        subtitle: "Number of accordions: " + length,
        media: BiDownArrowCircle
      };
    }
  }
};
getKataConfig();
const map = {
  title: "Map",
  name: "map",
  type: "object",
  fields: [{
    title: "Location",
    name: "location",
    type: "geopoint",
    validation: Rule => Rule.required("Please enter a location.")
  }],
  preview: {
    // select: {
    //   location: 'location',
    // },
    prepare(value) {
      return {
        title: "Map",
        media: GrMap
      };
    }
  }
};
const table = {
  title: "Table",
  name: "table",
  type: "object",
  fields: [{
    name: "title",
    type: "string",
    title: "Table title"
  }, {
    name: "table",
    type: "table"
  }],
  preview: {
    select: {
      title: "title"
    },
    prepare(selection) {
      let {
        title
      } = selection;
      return {
        title: title || "Table",
        media: BiTable
      };
    }
  }
};
const textAndImage = {
  name: "textAndImage",
  title: "Text & Image",
  type: "object",
  fields: [{
    name: "reversed",
    title: "Reverse Columns",
    description: "By default, text is left and image is right. If you enable this field, the columns will be reversed.",
    type: "boolean",
    initialValue: false
  }, {
    name: "noCrop",
    title: "No Crop?",
    description: "By default, images are scaled and cropped to fit the height of the text. If you enable this field, the image will display at its initial aspect ratio.",
    type: "boolean",
    initialValue: false
  }, {
    name: "feature",
    title: "Text and Image",
    type: "feature01"
  }],
  preview: {
    select: {
      feature01: "feature"
    },
    prepare(selection) {
      var _a;
      const {
        feature01
      } = selection;
      console.log(feature01.media);
      return {
        title: feature01.title || feature01.superHeading || "Text and Image",
        media: ((_a = feature01.media) == null ? void 0 : _a.image) || BiNews
      };
    }
  }
};
const config = getKataConfig();
const buttons = {
  name: "buttons",
  type: "object",
  fields: [links$1()],
  preview: {
    select: {
      links: "links"
    },
    prepare(selection) {
      const {
        links: links2
      } = selection;
      let subTitle = "";
      if (links2) {
        links2.forEach(elem => {
          if (subTitle.length > 0) {
            subTitle += ", ";
          }
          subTitle += elem.linkText;
        });
      }
      return {
        title: "Buttons",
        subtitle: subTitle,
        media: BiLink
      };
    }
  }
};
const richText = {
  name: "richText",
  title: "Rich Text",
  type: "object",
  fields: [{
    title: "Text Body",
    name: "textBody",
    type: "array",
    of: [{
      type: "block",
      lists: [{
        title: "Bullet",
        value: "bullet"
      }, {
        title: "Numbered",
        value: "number"
      }],
      marks: {
        decorators: [{
          title: "Strong",
          value: "strong"
        }, {
          title: "Emphasis",
          value: "em"
        }, {
          title: "Underline",
          value: "underline"
        }],
        annotations: [{
          name: "link",
          type: "object",
          title: "External link",
          icon: BiLinkExternal,
          fields: [{
            name: "href",
            type: "url",
            title: "URL",
            validation: Rule => Rule.uri({
              scheme: ["http", "https", "mailto", "tel", "sms"]
            })
          }, {
            title: "Open in new tab",
            name: "blank",
            type: "boolean",
            layout: "checkbox",
            initialValue: true
          }]
        }, {
          name: "internalLink",
          type: "object",
          title: "Internal link",
          icon: BiLink,
          fields: [{
            name: "reference",
            type: "reference",
            title: "Reference",
            to: config.allTypes
          }]
        }, {
          name: "file",
          type: "object",
          title: "File",
          icon: GoFileSymlinkFile,
          fields: [{
            name: "file",
            type: "file",
            title: "File",
            to: config.allTypes
          }]
        }]
      },
      styles: [{
        title: "Normal",
        value: "normal"
      }, {
        title: "Heading",
        value: "h2"
      }, {
        title: "Subheading",
        value: "h3"
      }]
    }]
  }],
  preview: {
    select: {
      blocks: "textBody"
    },
    prepare(value) {
      const block = (value.blocks || []).find(block2 => block2._type === "block");
      return {
        title: block ? block.children.filter(child => child._type === "span").map(span => span.text).join("") : "No title",
        media: BiListPlus
      };
    }
  }
};
const contentBlocks = function () {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Content Blocks";
  let includes = arguments.length > 1 ? arguments[1] : undefined;
  let customEditor = [richText, buttons, media()];
  if (includes) {
    if (includes.feature01 || includes.textAndImage) customEditor.push(textAndImage);
    if (includes.accordion || includes.dropdown) customEditor.push(accordion);
    if (includes.tableField || includes.table) customEditor.push(table);
    if (includes.map) customEditor.push(map);
    if (includes.testimonials || includes.quotes) customEditor.push({
      name: "testimonial04",
      title: "Testimonials",
      type: "testimonial04"
    });
    if (includes.features) {
      customEditor.push({
        name: "feature05",
        title: "Features",
        type: "feature05"
      });
    }
    if (includes.cta07 || includes.logos) {
      customEditor.push({
        type: "logos"
      });
    }
    if (includes.standoutText) customEditor.push({
      name: "standoutText",
      type: "object",
      fields: [{
        type: "text",
        name: "text",
        title: "Standout text"
      }, {
        name: "cite",
        title: "Cite",
        type: "string",
        instructions: "Underneath the standout text"
      }],
      preview: {
        select: {
          text: "text",
          cite: "cite"
        },
        prepare(selection) {
          const {
            text,
            cite
          } = selection;
          return {
            title: text,
            subtitle: cite,
            media: BsCardText
          };
        }
      }
    });
  }
  return {
    title: name,
    name: camelCase(name),
    type: "array",
    of: customEditor
  };
};
export { basicSingleLink, basicSingleLinkFn, basicTextEditor, contentBlocks, defaultOptions, feedSelector, feedSelector2, fullTextEditor, globalSliceReference, linkStyle, linkText, links, liteTextEditor, order, standardImage };
//# sourceMappingURL=index.esm.js.map
