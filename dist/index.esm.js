import { definePlugin } from 'sanity';
import { defaultOptions, media, basicTextEditor, links, liteTextEditor, basicSingleLink, fullTextEditor, standardImage, linkText, linkStyle, hiddenTitle as hiddenTitle$1, sharingImage, twitterSharingImage, schemaOrg } from '#partials';
import { BiListPlus, BiChat, BiLink, BiLinkExternal, BiAnchor } from 'react-icons/bi';
import { BsFillChatQuoteFill, BsFilePost } from 'react-icons/bs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { ThemeProvider, studioTheme, InfoToolTip, Container, Card, Heading, Inline, Button, Stack, Text, media as media$1, Grid, getKataConfig, hiddenTitle, standoutText } from './_chunks/meta-EMlFI2SU.js';
import { GoFileSymlinkFile } from 'react-icons/go';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import { RiGlobeFill, RiMenuAddLine } from 'react-icons/ri';
const title = {
  name: "title",
  type: "string"
};
const superHeading = {
  name: "superHeading",
  type: "string"
};
const text = {
  name: "text",
  title: "Text",
  type: "text",
  rows: 3
};
const longerText = {
  name: "text",
  title: "Text",
  type: "text",
  rows: 7
};
const hero01 = {
  name: "hero01",
  type: "object",
  title: "Hero #1",
  options: defaultOptions,
  fields: [media(), superHeading, title, basicTextEditor(), links()]
};
const hero04 = {
  name: "hero04",
  type: "object",
  title: "Hero #4",
  options: defaultOptions,
  fields: [media(), title]
};
const hero05 = {
  name: "hero05",
  type: "object",
  title: "Hero #5",
  options: defaultOptions,
  fields: [media(), superHeading, title, basicTextEditor(), links()]
};
const hero06 = {
  name: "hero06",
  type: "object",
  title: "Hero #6",
  options: defaultOptions,
  fields: [media(), superHeading, title, basicTextEditor(), links()]
};
const hero07 = {
  name: "hero07",
  type: "object",
  title: "Hero #7",
  options: defaultOptions,
  fields: [media(), superHeading, title, links()]
};
const hero08 = {
  name: "hero08",
  type: "object",
  title: "Hero #8",
  options: defaultOptions,
  fields: [superHeading, title, liteTextEditor(), links()]
};
const hero09 = {
  name: "hero09",
  type: "object",
  title: "Hero #9",
  options: defaultOptions,
  fields: [media(), superHeading, title, basicTextEditor(), links()]
};
const hero10 = {
  name: "hero10",
  type: "object",
  title: "Hero #10",
  options: defaultOptions,
  fields: [media(), superHeading, title, basicTextEditor(), links()]
};
const hero11 = {
  name: "hero11",
  type: "object",
  title: "Hero #11",
  options: defaultOptions,
  fields: [title, basicTextEditor(), links(), {
    name: "sideLinkText",
    type: "string"
  }, {
    name: "subtitle",
    type: "string"
  }, media()]
};
const features = {
  title: "Features",
  name: "list",
  type: "array",
  of: [{
    type: "object",
    title: "Feature",
    name: "feature",
    fields: [{
      type: "image",
      name: "icon",
      title: "Icon"
    }, title, liteTextEditor(), basicSingleLink],
    preview: {
      select: {
        heading: "title",
        blocks: "textBody",
        image: "icon"
      },
      prepare(selection) {
        const {
          heading,
          image,
          blocks
        } = selection;
        const block = (blocks || []).find(block2 => block2._type === "block");
        let subheading = block ? block.children.filter(child => child._type === "span").map(span => span.text).join("") : "No title";
        return {
          title: heading || subheading,
          media: image || BiListPlus
        };
      }
    }
  }]
};
const shortFeatures = vars => {
  return {
    title: "Features",
    name: "list",
    type: "array",
    of: [{
      type: "object",
      title: "Feature",
      name: "feature",
      fields: [{
        type: "image",
        name: "image",
        title: "Image or Icon"
      }, title, basicSingleLink],
      preview: {
        select: {
          heading: "title"
        },
        prepare(selection) {
          const {
            heading
          } = selection;
          return {
            title: heading,
            media: BiListPlus
          };
        }
      }
    }]
  };
};
const featureImageTabs = {
  title: "Tabs",
  name: "list",
  type: "array",
  of: [{
    type: "object",
    title: "Feature",
    name: "feature",
    fields: [{
      type: "string",
      name: "tabName",
      title: "Tab Name"
    }, media(), title, basicTextEditor(), basicSingleLink],
    preview: {
      select: {
        heading: "tabName"
      },
      prepare(selection) {
        const {
          heading
        } = selection;
        return {
          title: heading,
          media: BiListPlus
        };
      }
    }
  }]
};
const featureTabs = {
  title: "Tabs",
  name: "list",
  type: "array",
  of: [{
    type: "object",
    title: "Feature",
    name: "feature",
    fields: [{
      type: "string",
      name: "tabName",
      title: "Tab Name"
    }, {
      type: "array",
      name: "features",
      of: [{
        type: "object",
        title: "Item",
        name: "item",
        fields: [title, basicTextEditor()],
        preview: {
          select: {
            heading: "title"
          },
          prepare(selection) {
            const {
              heading
            } = selection;
            return {
              title: heading,
              media: BiListPlus
            };
          }
        }
      }]
    }, basicSingleLink],
    preview: {
      select: {
        heading: "tabName"
      },
      prepare(selection) {
        const {
          heading
        } = selection;
        return {
          title: heading,
          media: BiListPlus
        };
      }
    }
  }]
};
const locations = {
  title: "Locations",
  name: "list",
  type: "array",
  of: [{
    title: "Location",
    name: "location",
    type: "object",
    fields: [title, {
      title: "Location",
      name: "location",
      type: "geopoint"
    }],
    preview: {
      select: {
        heading: "title"
      },
      prepare(selection) {
        const {
          heading
        } = selection;
        return {
          title: heading,
          media: BiListPlus
        };
      }
    }
  }]
};
const feature01 = {
  name: "feature01",
  type: "object",
  title: "Feature #1",
  options: defaultOptions,
  fields: [superHeading, title, basicTextEditor(), links(), media()],
  preview: {
    select: {
      superHeading: "superHeading",
      heading: "title"
    },
    prepare(selection) {
      const {
        superHeading: superHeading2,
        heading
      } = selection;
      return {
        title: superHeading2 || heading,
        subtitle: superHeading2 ? heading : "",
        media: BiListPlus
      };
    }
  }
};
const feature02 = {
  name: "feature02",
  type: "object",
  title: "Feature #2",
  options: defaultOptions,
  fields: [title, basicTextEditor(), shortFeatures(), media()]
};
const feature03 = {
  name: "feature03",
  type: "object",
  title: "Feature #3",
  options: defaultOptions,
  fields: [title, basicTextEditor(), links(), media()]
};
const feature04 = {
  name: "feature04",
  type: "object",
  title: "Feature #4",
  options: defaultOptions,
  fields: [title, basicTextEditor(), links()]
};
const feature05 = {
  name: "feature05",
  type: "object",
  title: "Feature #5",
  options: defaultOptions,
  fields: [title, text, features, links()]
};
const feature06 = {
  name: "feature06",
  type: "object",
  title: "Feature #6",
  options: defaultOptions,
  fields: [title, basicTextEditor(), links(), features]
};
const feature07 = {
  name: "feature07",
  type: "object",
  title: "Feature #7",
  options: defaultOptions,
  fields: [title, basicTextEditor(), features, links()]
};
const feature08 = {
  name: "feature08",
  type: "object",
  title: "Feature #8",
  options: defaultOptions,
  fields: [title, basicTextEditor(), media(), links()]
};
const feature09 = {
  name: "feature09",
  type: "object",
  title: "Feature #9",
  options: defaultOptions,
  fields: [title, featureTabs]
};
const feature10 = {
  name: "feature10",
  type: "object",
  title: "Feature #10",
  options: defaultOptions,
  fields: [title, locations]
};
const feature11 = {
  name: "feature11",
  type: "object",
  title: "Feature #11",
  options: defaultOptions,
  fields: [featureImageTabs]
};
const feature12 = {
  name: "feature12",
  type: "object",
  title: "Feature #12",
  options: defaultOptions,
  fields: [title, text, shortFeatures(), links(), media()]
};
function listSchema(fields) {
  return {
    title: "List",
    name: "list",
    type: "array",
    of: [{
      type: "object",
      name: "listItem",
      fields: [...fields],
      preview: {
        select: {
          heading: "title"
        },
        prepare(selection) {
          const {
            heading
          } = selection;
          return {
            title: heading || "List item",
            media: BiListPlus
          };
        }
      }
    }]
  };
}
const list$3 = listSchema([title, basicTextEditor()]);
const listWithButtons = listSchema([title, basicTextEditor("Text Body", null, {
  buttons: true
})]);
listSchema([title, fullTextEditor()]);
const simpleList = listSchema([title, liteTextEditor()]);
const text01 = {
  name: "text01",
  type: "object",
  title: "Text #1",
  options: defaultOptions,
  fields: [title, basicTextEditor(), links()]
};
const text02 = {
  name: "text02",
  type: "object",
  title: "Text #2",
  options: defaultOptions,
  fields: [title, basicTextEditor()]
};
const text03 = {
  name: "text03",
  type: "object",
  title: "Text #3",
  options: defaultOptions,
  fields: [title, basicTextEditor()]
};
const text04 = {
  name: "text04",
  type: "object",
  title: "Text #4",
  options: defaultOptions,
  fields: [superHeading, title, list$3, standardImage()]
};
const text05 = {
  name: "text05",
  type: "object",
  title: "Text #5",
  options: defaultOptions,
  fields: [title, basicTextEditor(), standardImage()]
};
const text06 = {
  name: "text06",
  type: "object",
  title: "Text #6",
  options: defaultOptions,
  fields: [title, basicTextEditor()]
};
const text07 = {
  name: "text07",
  type: "object",
  title: "Text #7",
  options: defaultOptions,
  fields: [title, simpleList]
};
const text08 = {
  name: "text08",
  type: "object",
  title: "Text #8",
  options: defaultOptions,
  fields: [title, basicTextEditor(), links()]
};
const text09 = {
  name: "text09",
  type: "object",
  title: "Text #9",
  options: defaultOptions,
  fields: [title, list$3]
};
const text10 = {
  name: "text10",
  type: "object",
  title: "Text #10",
  options: defaultOptions,
  fields: [title, listWithButtons]
};
const thumbnails$1 = {
  name: "list",
  title: "Thumbnails",
  type: "array",
  options: {
    collapsable: true
  },
  of: [{
    name: "item",
    title: "Item",
    type: "object",
    fields: [title, longerText, basicSingleLink, standardImage()],
    preview: {
      select: {
        heading: "title",
        text: "text",
        image: "image"
      },
      prepare(selection) {
        const {
          heading,
          text: text2,
          image
        } = selection;
        return {
          title: heading || text2,
          media: image || BiListPlus
        };
      }
    }
  }]
};
const imageThumbnails$1 = {
  name: "list",
  title: "Thumbnails",
  type: "array",
  options: {
    collapsable: true
  },
  of: [{
    name: "item",
    title: "Item",
    type: "object",
    fields: [title, basicSingleLink, standardImage()],
    preview: {
      select: {
        heading: "title",
        image: "image"
      },
      prepare(selection) {
        const {
          heading,
          image
        } = selection;
        return {
          title: heading,
          media: image || BiListPlus
        };
      }
    }
  }]
};
const portfolio06Slides = {
  name: "list",
  title: "Thumbnails",
  type: "array",
  options: {
    collapsable: true
  },
  of: [standardImage()]
};
const portfolio01 = {
  name: "portfolio01",
  type: "object",
  title: "Portfolio #1",
  options: defaultOptions,
  fields: [superHeading, title, thumbnails$1]
};
const portfolio03 = {
  name: "portfolio03",
  type: "object",
  title: "Portfolio #3",
  options: defaultOptions,
  fields: [title, text, thumbnails$1, links()]
};
const portfolio04 = {
  name: "portfolio04",
  type: "object",
  title: "Portfolio #4",
  options: defaultOptions,
  fields: [title, thumbnails$1, links()]
};
const portfolio05 = {
  name: "portfolio05",
  type: "object",
  title: "Portfolio #5",
  options: defaultOptions,
  fields: [title, thumbnails$1]
};
const portfolio06 = {
  name: "portfolio06",
  type: "object",
  title: "Portfolio #6",
  options: defaultOptions,
  fields: [title, portfolio06Slides, basicTextEditor(), links()]
};
const portfolio07 = {
  name: "portfolio07",
  type: "object",
  title: "Portfolio #7",
  options: defaultOptions,
  fields: [title, imageThumbnails$1]
};
const portfolio08 = {
  name: "portfolio08",
  type: "object",
  title: "Portfolio #8",
  options: defaultOptions,
  fields: [title, thumbnails$1]
};
const portfolio09 = {
  name: "portfolio09",
  type: "object",
  title: "Portfolio #9",
  options: defaultOptions,
  fields: [title, text, thumbnails$1]
};
const portfolio10 = {
  name: "portfolio10",
  type: "object",
  title: "Portfolio #10",
  options: defaultOptions,
  fields: [title, thumbnails$1]
};
const quote = {
  name: "quote",
  type: "text",
  rows: 5
};
const cite = {
  name: "cite",
  type: "string"
};
const name = {
  name: "name",
  type: "string"
};
const job = {
  name: "job",
  type: "string"
};
const preview = {
  select: {
    title: "quote",
    subtitle: "name"
  },
  prepare(selection) {
    const {
      title: title2,
      subtitle
    } = selection;
    let showEllipsis = true;
    if (title2.length < 50) {
      showEllipsis = false;
    }
    const heading = title2.toString().slice(0, 50);
    return {
      title: "".concat(heading).concat(showEllipsis ? "..." : ""),
      subtitle,
      media: BsFillChatQuoteFill
    };
  }
};
const testimonials$1 = {
  name: "list",
  title: "Testimonials",
  type: "array",
  options: {
    collapsable: true
  },
  of: [{
    name: "item",
    title: "Item",
    type: "object",
    fields: [quote, name, job],
    preview
  }]
};
const testimonialsImage = {
  name: "list",
  title: "Testimonials",
  type: "array",
  options: {
    collapsable: true
  },
  of: [{
    name: "item",
    title: "Item",
    type: "object",
    fields: [quote, name, job, links("Links", 1), standardImage()],
    preview
  }]
};
const testimonial01 = {
  name: "testimonial01",
  type: "object",
  title: "Testimonial #1",
  options: defaultOptions,
  fields: [title, testimonialsImage],
  preview: {
    prepare() {
      return {
        title: "Testimonials",
        media: BiChat
      };
    }
  }
};
const testimonial02 = {
  name: "testimonial02",
  type: "object",
  title: "Testimonial #2",
  options: defaultOptions,
  fields: [testimonialsImage],
  preview: {
    prepare() {
      return {
        title: "Testimonials",
        media: BiChat
      };
    }
  }
};
const testimonial03 = {
  name: "testimonial03",
  type: "object",
  title: "Testimonial #3",
  options: defaultOptions,
  fields: [title, testimonials$1],
  preview: {
    prepare() {
      return {
        title: "Testimonials",
        media: BiChat
      };
    }
  }
};
const testimonial04 = {
  name: "testimonial04",
  type: "object",
  title: "Testimonial #4",
  options: defaultOptions,
  fields: [testimonials$1],
  preview: {
    prepare() {
      return {
        title: "Testimonials",
        media: BiChat
      };
    }
  }
};
const testimonial05 = {
  name: "testimonial05",
  type: "object",
  title: "Testimonial #5",
  options: defaultOptions,
  fields: [quote, cite, links()],
  preview: {
    prepare() {
      return {
        title: "Testimonials",
        media: BiChat
      };
    }
  }
};
const location = {
  title: "Location",
  name: "location",
  type: "geopoint",
  validation: Rule => Rule.required("Please enter a location.")
};
const address = {
  title: "Address",
  name: "address",
  type: "text",
  rows: 4
};
const openingTimes = {
  title: "Opening Times",
  name: "openingTimes",
  type: "text",
  rows: 4
};
const email = {
  name: "email",
  type: "string"
};
const telephone = {
  name: "telephone",
  type: "string"
};
const thanks = {
  name: "thanks",
  type: "string",
  title: "Thanks text"
};
const contact01 = {
  name: "contact01",
  type: "object",
  title: "Contact #1",
  options: defaultOptions,
  fields: [title, basicTextEditor(), address, email, telephone, thanks]
};
const contact02 = {
  name: "contact02",
  type: "object",
  title: "Contact #2",
  options: defaultOptions,
  fields: [title, location, basicTextEditor(), address, openingTimes, email,
  // website,
  // websiteText,
  telephone, {
    name: "what3Words",
    type: "string",
    title: "What 3 Words",
    description: "Enter your three words here in the format one.two.three"
  }]
};
const contact03 = {
  name: "contact03",
  type: "object",
  title: "Contact #3",
  options: defaultOptions,
  fields: [title, basicTextEditor(), address, email, telephone]
};
const list$2 = {
  name: "list",
  title: "List",
  type: "array",
  of: [{
    name: "item",
    title: "Item",
    type: "object",
    fields: [title, text, links()]
  }]
};
const cta01 = {
  name: "cta01",
  type: "object",
  title: "Call To Action #01",
  options: defaultOptions,
  fields: [title, basicTextEditor(), links()]
};
const cta02 = {
  name: "cta02",
  type: "object",
  title: "Call To Action #02",
  options: defaultOptions,
  fields: [title, list$2]
};
const cta05 = {
  name: "cta05",
  type: "object",
  title: "Call To Action #05",
  options: defaultOptions,
  fields: [title, basicTextEditor(), standardImage(), links()]
};
const cta07 = {
  name: "cta07",
  type: "object",
  title: "Call To Action #07",
  options: defaultOptions,
  fields: [title, basicTextEditor(), {
    name: "list",
    title: "Logos",
    type: "array",
    options: {
      layout: "grid"
    },
    of: [{
      name: "item",
      type: "object",
      title: "Item",
      fields: [{
        name: "title",
        type: "string"
      }, standardImage("Logo"), {
        name: "url",
        type: "url"
      }]
    }],
    preview: {
      select: {
        image: "image"
      },
      prepare(selection) {
        const {
          image
        } = selection;
        return {
          title: "Logo",
          media: image
        };
      }
    }
  }, links()]
};
const cta08 = {
  name: "cta08",
  type: "object",
  title: "Call To Action #08",
  options: defaultOptions,
  fields: [links()]
};
const featureList01 = {
  name: "featureList01",
  title: "Feature List #1",
  type: "object",
  options: defaultOptions,
  fields: [{
    name: "list",
    type: "array",
    title: "Features",
    of: [{
      type: "feature01",
      name: "feature01"
    }]
  }]
};
const imageThumbnails = {
  name: "list",
  title: "Images",
  type: "array",
  of: [{
    name: "item",
    title: "Item",
    type: "object",
    fields: [{
      name: "title",
      title: "Image Caption",
      type: "string"
    }, basicSingleLink, standardImage()],
    preview: {
      select: {
        heading: "title",
        image: "image"
      },
      prepare(selection) {
        const {
          heading,
          image
        } = selection;
        return {
          title: heading || image.title || "Image",
          media: image || BiListPlus
        };
      }
    }
  }]
};
const imageThumbnailsNoLink = {
  name: "list",
  title: "Images",
  type: "array",
  options: {
    layout: "grid"
  },
  of: [{
    name: "item",
    title: "Item",
    type: "object",
    fields: [{
      name: "title",
      title: "Image Caption",
      type: "string"
    }, standardImage()],
    preview: {
      select: {
        heading: "title",
        image: "image"
      },
      prepare(selection) {
        const {
          heading,
          image
        } = selection;
        return {
          title: heading || image.title || "Image",
          media: image || BiListPlus
        };
      }
    }
  }]
};
const images01 = {
  name: "images01",
  type: "object",
  title: "Images #1",
  options: defaultOptions,
  fields: [title, imageThumbnails]
};
const images02 = {
  name: "images02",
  type: "object",
  title: "Images #2",
  options: defaultOptions,
  fields: [title, imageThumbnailsNoLink]
};
const images03 = {
  name: "images03",
  type: "object",
  title: "Images #3",
  options: defaultOptions,
  fields: [media()]
};
const images04 = {
  name: "images04",
  type: "object",
  title: "Images #4",
  options: defaultOptions,
  fields: [imageThumbnailsNoLink]
};
const list$1 = {
  title: "List",
  name: "list",
  type: "array",
  of: [{
    type: "object",
    title: "Item",
    name: "item",
    fields: [title, superHeading, text, links("Links", 1), standardImage()],
    preview: {
      select: {
        heading: "title"
      },
      prepare(selection) {
        const {
          heading
        } = selection;
        return {
          title: heading,
          media: BiListPlus
        };
      }
    }
  }]
};
const news02 = {
  name: "news02",
  type: "object",
  title: "News #2",
  options: defaultOptions,
  fields: [title]
};
const news03 = {
  name: "news03",
  type: "object",
  title: "News #3",
  options: defaultOptions,
  fields: [title]
};
const news05 = {
  name: "news05",
  type: "object",
  title: "News #5",
  options: defaultOptions,
  fields: [title, list$1]
};
const news06 = {
  name: "news06",
  type: "object",
  title: "News #6",
  options: defaultOptions,
  fields: [title]
};
const statistics = {
  title: "Statistics",
  name: "list",
  type: "array",
  of: [{
    type: "object",
    name: "listItem",
    fields: [{
      title: "Statistic",
      name: "stat",
      type: "string"
    }, {
      title: "Title",
      name: "title",
      type: "text",
      rows: 3
    }],
    preview: {
      select: {
        title: "stat",
        subtitle: "title"
      },
      prepare(selection) {
        const {
          title,
          subtitle
        } = selection;
        let showEllipsis = true;
        if (title.length < 50) {
          showEllipsis = false;
        }
        const shortenedSubtitle = subtitle.toString().slice(0, 50);
        return {
          title,
          subtitle: "".concat(shortenedSubtitle).concat(showEllipsis ? "..." : ""),
          media: BiListPlus
        };
      }
    }
  }]
};
const stats01 = {
  name: "stats01",
  type: "object",
  title: "Statistics #01",
  options: defaultOptions,
  fields: [title, statistics, links()]
};
const thumbnails = {
  name: "list",
  title: "Thumbnails",
  type: "array",
  options: {
    collapsable: true
  },
  of: [{
    name: "item",
    title: "Item",
    type: "object",
    fields: [standardImage(), title, text, {
      name: "linkText",
      type: "string"
    }, basicSingleLink],
    preview: {
      select: {
        heading: "title",
        image: "image"
      },
      prepare(selection) {
        const {
          heading,
          image
        } = selection;
        return {
          title: heading,
          media: image || BiListPlus
        };
      }
    }
  }]
};
const people = {
  name: "list",
  title: "People",
  type: "array",
  options: {
    collapsable: true
  },
  of: [{
    name: "item",
    title: "Item",
    type: "object",
    fields: [standardImage(), {
      name: "title",
      type: "string",
      title: "Name"
    }, {
      name: "job",
      type: "string"
    }, liteTextEditor(), basicSingleLink],
    preview: {
      select: {
        heading: "title",
        image: "image"
      },
      prepare(selection) {
        const {
          heading,
          image
        } = selection;
        return {
          title: heading,
          media: image || BiListPlus
        };
      }
    }
  }]
};
const profiles = {
  name: "list",
  title: "Profiles",
  type: "array",
  options: {
    collapsable: true
  },
  of: [{
    name: "profile",
    type: "object",
    fields: [{
      name: "name",
      type: "string"
    }, {
      name: "job",
      type: "string"
    }, {
      name: "bio",
      type: "text",
      rows: 3
    }, standardImage(), {
      name: "socials",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [{
        title: "Twitter",
        name: "twitter",
        type: "url"
      }, {
        title: "Facebook",
        name: "facebook",
        type: "url"
      }, {
        title: "Instagram",
        name: "instagram",
        type: "url"
      }, {
        title: "Linked In",
        name: "linkedIn",
        type: "url"
      }, {
        title: "Youtube",
        name: "youtube",
        type: "url"
      }, {
        title: "Email",
        name: "email",
        type: "url",
        validation: Rule => Rule.uri({
          scheme: ["mailto"]
        })
      }]
    }],
    preview: {
      select: {
        heading: "name",
        image: "image"
      },
      prepare(selection) {
        const {
          heading,
          image
        } = selection;
        return {
          title: heading,
          media: image || BiListPlus
        };
      }
    }
  }]
};
const team01 = {
  name: "team01",
  type: "object",
  title: "Team #1",
  options: defaultOptions,
  fields: [title, text, people, links()]
};
const team03 = {
  name: "team03",
  type: "object",
  options: defaultOptions,
  fields: [title, text, profiles]
};
const team04 = {
  name: "team04",
  type: "object",
  title: "Team #4",
  options: defaultOptions,
  fields: [title, text, thumbnails]
};
const list = {
  title: "List",
  name: "list",
  type: "array",
  of: [{
    type: "object",
    title: "Item",
    name: "item",
    fields: [{
      type: "image",
      name: "icon",
      title: "Icon"
    }, title, {
      type: "date",
      name: "tickDate",
      title: "Tick Date",
      description: "The tick will appear for this item after this date.",
      options: {
        dateFormat: "DD MMM YYYY"
      }
    }, {
      type: "string",
      name: "displayDate",
      title: "Display Date"
    }, text],
    preview: {
      select: {
        heading: "title",
        image: "icon"
      },
      prepare(selection) {
        const {
          heading,
          image
        } = selection;
        return {
          title: heading,
          media: image || BiListPlus
        };
      }
    }
  }]
};
const timeline01 = {
  name: "timeline01",
  type: "object",
  title: "Timeline #1",
  options: defaultOptions,
  fields: [title, list]
};
const AccordionPreview = value => {
  const {
    accordions
  } = value;
  if (accordions) {
    return /* @__PURE__ */jsx(ThemeProvider, {
      theme: studioTheme,
      children: /* @__PURE__ */jsx(InfoToolTip, {
        children: /* @__PURE__ */jsx(Container, {
          padding: 3,
          children: accordions.items.map(element => /* @__PURE__ */jsx(Card, {
            border: true,
            marginTop: 2,
            padding: 4,
            radius: 2,
            children: /* @__PURE__ */jsx(Heading, {
              children: element.title
            })
          }, element._key))
        })
      })
    });
  } else {
    return /* @__PURE__ */jsx(ThemeProvider, {
      theme: studioTheme,
      children: /* @__PURE__ */jsx(InfoToolTip, {
        children: /* @__PURE__ */jsx(Container, {
          padding: 3,
          children: /* @__PURE__ */jsx("p", {
            children: "Double click to add (Accordion)"
          })
        })
      })
    });
  }
};
var accordion = {
  name: "accordion",
  type: "object",
  title: "Accordion",
  fields: [{
    name: "wrapper",
    title: "Accordion Content",
    type: "object",
    fields: [{
      name: "items",
      type: "array",
      of: [{
        name: "accordionItem",
        type: "object",
        fields: [{
          name: "title",
          type: "string"
        }, fullTextEditor()]
      }]
    }]
  }],
  preview: {
    select: {
      accordions: "wrapper"
    }
  },
  components: {
    preview: AccordionPreview
  }
};
const ButtonsPreview = value => {
  const links2 = {
    ...value
  };
  delete links2._type;
  const icons = {
    internal: BiLink,
    external: BiLinkExternal,
    file: GoFileSymlinkFile
  };
  if (links2) {
    return /* @__PURE__ */jsx(ThemeProvider, {
      theme: studioTheme,
      children: /* @__PURE__ */jsx(InfoToolTip, {
        children: /* @__PURE__ */jsx(Container, {
          padding: 3,
          style: {
            textAlign: "center"
          },
          children: /* @__PURE__ */jsx(Inline, {
            space: [3, 3, 4],
            children: Object.values(links2).map(element => {
              if (element) {
                return /* @__PURE__ */jsx(Button, {
                  padding: 4,
                  mode: "ghost",
                  icon: icons[element.linkType],
                  text: element.linkText ? element.linkText : "..."
                }, element._key);
              }
            })
          })
        })
      })
    });
  } else {
    return /* @__PURE__ */jsx(ThemeProvider, {
      theme: studioTheme,
      children: /* @__PURE__ */jsx(InfoToolTip, {
        children: /* @__PURE__ */jsx(Container, {
          padding: 3,
          style: {
            textAlign: "center"
          },
          children: /* @__PURE__ */jsx("p", {
            children: "Double click to add a button"
          })
        })
      })
    });
  }
};
var buttons = {
  title: "Buttons",
  name: "buttons",
  type: "object",
  fields: [links()],
  preview: {
    select: {
      link1: "links.0",
      link2: "links.1",
      link3: "links.2",
      link4: "links.3",
      link5: "links.4"
    }
  },
  components: {
    preview: ButtonsPreview
  }
};
const LogosPreview = props => {
  const {
    cta07
  } = props;
  const logos = cta07 == null ? void 0 : cta07.list;
  if (logos) {
    return /* @__PURE__ */jsx(ThemeProvider, {
      theme: studioTheme,
      children: /* @__PURE__ */jsx(InfoToolTip, {
        children: /* @__PURE__ */jsx(Container, {
          padding: 3,
          children: /* @__PURE__ */jsx(Stack, {
            space: [2, 2, 3, 4],
            children: logos.map(element => {
              if (element) {
                return /* @__PURE__ */jsx(Card, {
                  padding: 4,
                  shadow: 1,
                  children: /* @__PURE__ */jsx(Stack, {
                    space: [3, 3, 4, 5],
                    children: /* @__PURE__ */jsx(Text, {
                      size: [2, 2, 3, 4],
                      weight: "semibold",
                      children: '"'.concat(element.title, '"')
                    })
                  })
                }, element._key);
              }
            })
          })
        })
      })
    });
  } else {
    return /* @__PURE__ */jsx(ThemeProvider, {
      theme: studioTheme,
      children: /* @__PURE__ */jsx(InfoToolTip, {
        children: /* @__PURE__ */jsx(Container, {
          padding: 3,
          children: /* @__PURE__ */jsx("p", {
            children: "Double click to add (Logos)"
          })
        })
      })
    });
  }
};
var logos = {
  title: "Logos",
  name: "logos",
  type: "object",
  fields: [{
    name: "cta07",
    title: "Logos",
    type: "cta07",
    options: {
      collapsible: false
    }
  }],
  preview: {
    select: {
      cta07: "cta07"
    }
  },
  components: {
    preview: LogosPreview
  }
};
const MediaPreview = () => {
  return /* @__PURE__ */jsx(ThemeProvider, {
    theme: studioTheme,
    children: /* @__PURE__ */jsx(InfoToolTip, {
      children: /* @__PURE__ */jsx(Container, {
        padding: 3,
        children: /* @__PURE__ */jsx("p", {
          children: "Double click edit. (Media)"
        })
      })
    })
  });
};
var mediaPreview = {
  name: "mediaPreview",
  title: "Media",
  type: "object",
  fields: [{
    type: "boolean",
    name: "noCrop",
    title: "Disable automatic scaling and cropping of this image?",
    description: "This only applies if you select image or image slideshow from the options below.",
    initialValue: false
  }, media$1()],
  preview: {
    select: {
      media: "media"
    }
  },
  components: {
    preview: MediaPreview
  }
};
const TableRow = props => {
  const {
    items,
    cols
  } = props;
  let cells = [];
  for (let i = 0; i < cols; i++) {
    if (items[i]) {
      cells.push( /* @__PURE__ */jsx(Card, {
        padding: 3,
        shadow: 1,
        children: /* @__PURE__ */jsx(Text, {
          weight: i === 0 ? "semibold" : "regular",
          children: items[i]
        })
      }));
    } else {
      cells.push( /* @__PURE__ */jsx(Card, {
        padding: 3,
        shadow: 1
      }));
    }
  }
  return cells;
};
const TablePreview = value => {
  const {
    table
  } = value;
  if (table && table.rows.length) {
    return /* @__PURE__ */jsx(ThemeProvider, {
      theme: studioTheme,
      children: /* @__PURE__ */jsx(InfoToolTip, {
        children: /* @__PURE__ */jsx(Container, {
          padding: 3,
          children: /* @__PURE__ */jsx(Grid, {
            columns: table.rows[0].cells.length,
            children: table.rows.map(element => {
              return /* @__PURE__ */jsx(TableRow, {
                cols: table.rows[0].cells.length,
                items: element.cells
              }, element._key);
            })
          })
        })
      })
    });
  }
  return /* @__PURE__ */jsx(ThemeProvider, {
    theme: studioTheme,
    children: /* @__PURE__ */jsx(InfoToolTip, {
      children: /* @__PURE__ */jsx(Container, {
        padding: 3,
        children: /* @__PURE__ */jsx("p", {
          children: "Double click to add."
        })
      })
    })
  });
};
var tableField = {
  title: "Table",
  name: "tableField",
  type: "object",
  fields: [{
    name: "table",
    type: "table"
  }],
  preview: {
    select: {
      table: "table"
    }
  },
  components: {
    preview: TablePreview
  }
};
const TestimonialsPreview = value => {
  const {
    testimonialsParent
  } = value;
  const testimonials = testimonialsParent == null ? void 0 : testimonialsParent.list;
  if (testimonials) {
    return /* @__PURE__ */jsx(ThemeProvider, {
      theme: studioTheme,
      children: /* @__PURE__ */jsx(InfoToolTip, {
        children: /* @__PURE__ */jsx(Container, {
          padding: 3,
          children: /* @__PURE__ */jsx(Stack, {
            space: [2, 2, 3, 4],
            children: testimonials.map(element => {
              if (element) {
                return /* @__PURE__ */jsx(Card, {
                  padding: 4,
                  shadow: 1,
                  children: /* @__PURE__ */jsxs(Stack, {
                    space: [3, 3, 4, 5],
                    children: [/* @__PURE__ */jsx(Text, {
                      size: [2, 2, 3, 4],
                      weight: "semibold",
                      children: '"'.concat(element.quote, '"')
                    }), /* @__PURE__ */jsx(Text, {
                      muted: true,
                      size: [1, 1, 2],
                      children: "- " + element.name
                    })]
                  })
                }, element._key);
              }
            })
          })
        })
      })
    });
  } else {
    return /* @__PURE__ */jsx(ThemeProvider, {
      theme: studioTheme,
      children: /* @__PURE__ */jsx(InfoToolTip, {
        children: /* @__PURE__ */jsx(Container, {
          padding: 3,
          children: /* @__PURE__ */jsx("p", {
            children: "Double click to add (Testimonials)"
          })
        })
      })
    });
  }
};
var testimonials = {
  title: "Testimonials",
  name: "testimonials",
  type: "object",
  fields: [{
    name: "testimonial04",
    title: "Testimonials",
    type: "testimonial04",
    options: {
      collapsible: false
    }
  }],
  preview: {
    select: {
      testimonialsParent: "testimonial04"
    }
  },
  components: {
    preview: TestimonialsPreview
  }
};
const FeaturePreview = value => {
  const {
    feature
  } = value;
  console.log(feature);
  return /* @__PURE__ */jsx(ThemeProvider, {
    theme: studioTheme,
    children: /* @__PURE__ */jsx(Container, {
      padding: 3,
      children: /* @__PURE__ */jsx("p", {
        children: "Double click to add (Text & Image)"
      })
    })
  });
};
var textAndImage = {
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
    description: "By default, images are cropped to fit the height of the text. If you enable this field, the image will display at its initial aspect ratio.",
    type: "boolean",
    initialValue: false
  }, {
    name: "feature",
    title: "Text and Image",
    type: "feature01"
  }],
  preview: {
    select: {
      feature: "feature"
    }
  },
  components: {
    preview: FeaturePreview
  }
};
const Preview = _ref => {
  let {
    value
  } = _ref;
  const {
    url
  } = value;
  const id = getYouTubeId(url);
  return /* @__PURE__ */jsx(YouTube, {
    videoId: id
  });
};
var youtube = {
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  fields: [{
    name: "url",
    type: "url",
    title: "YouTube video URL"
  }],
  preview: {
    select: {
      url: "url"
    }
  },
  components: {
    preview: Preview
  }
};
var anchor = {
  name: "anchor",
  type: "object",
  title: "Page Anchor",
  description: "Scroll to section on same page",
  fields: [{
    name: "anchor",
    type: "string",
    title: "Anchor link (id)"
  }, linkText, linkStyle],
  preview: {
    select: {
      title: "linkText",
      subtitle: "anchor"
    },
    prepare(selection) {
      const {
        title,
        subtitle
      } = selection;
      return {
        title: title || subtitle,
        subtitle: title ? subtitle : "",
        media: BiAnchor
      };
    }
  }
};
var externalLink = {
  title: "External Link",
  name: "externalLink",
  type: "object",
  fields: [linkText, linkStyle, {
    type: "url",
    name: "url",
    title: "URL",
    validation: Rule => Rule.uri({
      scheme: ["http", "https", "mailto", "tel", "sms"]
    })
  }],
  preview: {
    select: {
      title: "linkText",
      subtitle: "url"
    },
    prepare(selection) {
      const {
        title,
        subtitle
      } = selection;
      return {
        title,
        subtitle,
        media: BiLinkExternal
      };
    }
  }
};
var fileLink = {
  name: "fileLink",
  type: "object",
  title: "File Link",
  fields: [{
    type: "file",
    name: "fileLink"
  }, linkText, linkStyle],
  preview: {
    select: {
      title: "linkText"
    },
    prepare(selection) {
      const {
        title
      } = selection;
      return {
        title,
        media: GoFileSymlinkFile
      };
    }
  }
};
const config$2 = getKataConfig();
var internalLink = {
  name: "internalLink",
  type: "object",
  title: "Internal Link",
  fields: [{
    type: "reference",
    name: "internalLink",
    to: config$2.allTypes,
    options: {
      disableNew: true
      // we don't want people to be able to create new pages here!
    }
  }, linkText, linkStyle, {
    name: "anchor",
    type: "string",
    title: "Anchor link or Query string",
    instructions: "Please set internal link to the page you want to anchor on, even if that is the same page as you are currently on."
  }],
  preview: {
    select: {
      title: "linkText",
      subtitle: "internalLink.title"
    },
    prepare(selection) {
      const {
        title,
        subtitle
      } = selection;
      return {
        title,
        subtitle,
        media: BiLink
      };
    }
  }
};
var lightboxButton = {
  name: "lightboxButton",
  type: "object",
  title: "Lightbox Button",
  fields: [{
    type: "string",
    name: "query",
    title: "Query",
    hidden: _ref2 => {
      let {
        currentUser
      } = _ref2;
      return (currentUser == null ? void 0 : currentUser.email) != "studio@flocc.co";
    },
    description: "For developer use only. If you edit this, your lightbox will break."
  }, linkText, linkStyle],
  preview: {
    select: {
      title: "linkText"
    },
    prepare(selection) {
      const {
        title,
        subtitle
      } = selection;
      return {
        title,
        subtitle,
        media: BsFilePost
      };
    }
  }
};
var link = {
  title: "Link",
  name: "link",
  type: "object",
  description: "Add one or two call-to-action links",
  fields: [{
    name: "link",
    title: "Link",
    type: "array",
    validation: Rule => Rule.max(2).warning("The maximum number of CTAs on this slice is 2"),
    modal: "popover",
    of: [{
      type: "internalLink"
    }, {
      type: "fileLink"
    }, {
      type: "externalLink"
    }]
  }]
};
const config$1 = getKataConfig();
var globalSlices = {
  type: "document",
  name: "globalSlices",
  title: "Global Slices",
  icon: RiGlobeFill,
  fields: [{
    name: "title",
    type: "string",
    title: "Title"
  }, {
    name: "slices",
    type: "array",
    title: "Add the slice type you require",
    description: "Normally, you should only add a single slice here. If you are creating dynamic content, add multiple of the same type of slice, and set the target for each.",
    options: {
      modal: "fullscreen"
    },
    of: config$1.allSlices
  }]
};
const linkItem = index => {
  if (index < 5) {
    index++;
    return {
      type: "object",
      title: "Menu Item",
      name: "menuItem",
      fields: [{
        type: "string",
        name: "title",
        title: "Custom link text"
      }, basicSingleLink, {
        title: "Children",
        name: "list",
        type: "array",
        of: [linkItem(index)]
      }],
      preview: {
        select: {
          linkTitle: "singleLink.internalLink.title",
          title: "title"
        },
        prepare(selection) {
          const {
            title,
            linkTitle
          } = selection;
          return {
            title: title || linkTitle || "Unknown",
            media: RiMenuAddLine
          };
        }
      }
    };
  } else {
    return {
      type: "object",
      title: "Menu Item",
      name: "menuItem",
      fields: [basicSingleLink]
    };
  }
};
var pageInfiniteMenu = {
  type: "document",
  name: "pageInfiniteMenu",
  title: "Menu",
  initialValue: {
    title: "Menu"
  },
  fields: [hiddenTitle, {
    title: "Menu",
    type: "array",
    name: "menu",
    of: [linkItem(0)]
  }]
};
var pageMenu = {
  type: "document",
  name: "pageMenu",
  title: "Menu",
  initialValue: {
    title: "Menu"
  },
  fields: [hiddenTitle$1, {
    title: "Menu",
    type: "array",
    name: "menu",
    of: [{
      type: "object",
      title: "Menu Item",
      name: "menuItem",
      fields: [{
        type: "string",
        name: "title",
        title: "Custom link text"
      }, basicSingleLink, {
        title: "Children",
        name: "list",
        type: "array",
        of: [{
          type: "object",
          title: "Menu Item",
          name: "menuItem",
          fields: [{
            type: "string",
            name: "title",
            title: "Custom link text"
          }, basicSingleLink],
          preview: {
            select: {
              linkTitle: "singleLink.internalLink.title",
              title: "title"
            },
            prepare(selection) {
              const {
                title,
                linkTitle
              } = selection;
              return {
                title: title || linkTitle || "Unknown",
                media: RiMenuAddLine
              };
            }
          }
        }]
      }],
      preview: {
        select: {
          linkTitle: "singleLink.internalLink.title",
          title: "title"
        },
        prepare(selection) {
          const {
            title,
            linkTitle
          } = selection;
          return {
            title: title || linkTitle || "Unknown",
            media: RiMenuAddLine
          };
        }
      }
    }]
  }]
};
var pageTwoMenus = {
  type: "document",
  name: "pageTwoMenus",
  title: "Menus",
  initialValue: {
    title: "Menus"
  },
  fields: [hiddenTitle$1, {
    title: "Menu",
    type: "array",
    name: "menu",
    of: [{
      type: "object",
      title: "Menu Item",
      name: "menuItem",
      fields: [{
        type: "string",
        name: "title",
        title: "Custom link text"
      }, basicSingleLink, {
        title: "Children",
        name: "list",
        type: "array",
        of: [{
          type: "object",
          title: "Menu Item",
          name: "menuItem",
          fields: [{
            type: "string",
            name: "title",
            title: "Custom link text"
          }, basicSingleLink],
          preview: {
            select: {
              linkTitle: "singleLink.internalLink.title",
              title: "title"
            },
            prepare(selection) {
              const {
                title,
                linkTitle
              } = selection;
              return {
                title: title || linkTitle || "Unknown",
                media: RiMenuAddLine
              };
            }
          }
        }]
      }],
      preview: {
        select: {
          linkTitle: "singleLink.internalLink.title",
          title: "title"
        },
        prepare(selection) {
          const {
            title,
            linkTitle
          } = selection;
          return {
            title: title || linkTitle || "Unknown",
            media: RiMenuAddLine
          };
        }
      }
    }]
  }, {
    title: "Secondary Menu",
    type: "array",
    name: "secondaryMenu",
    of: [{
      type: "object",
      title: "Menu Item",
      name: "menuItem",
      fields: [{
        type: "string",
        name: "title",
        title: "Custom link text"
      }, basicSingleLink, {
        title: "Children",
        name: "list",
        type: "array",
        of: [{
          type: "object",
          title: "Menu Item",
          name: "menuItem",
          fields: [{
            type: "string",
            name: "title",
            title: "Custom link text"
          }, basicSingleLink],
          preview: {
            select: {
              linkTitle: "singleLink.internalLink.title",
              title: "title"
            },
            prepare(selection) {
              const {
                title,
                linkTitle
              } = selection;
              return {
                title: title || linkTitle || "Unknown",
                media: RiMenuAddLine
              };
            }
          }
        }]
      }],
      preview: {
        select: {
          linkTitle: "singleLink.internalLink.title",
          title: "title"
        },
        prepare(selection) {
          const {
            title,
            linkTitle
          } = selection;
          return {
            title: title || linkTitle || "Unknown",
            media: RiMenuAddLine
          };
        }
      }
    }]
  }]
};
var pageMeta = {
  type: "document",
  name: "pageMeta",
  title: "Global Meta",
  initialValue: {
    title: "Global Meta"
  },
  fields: [hiddenTitle$1, {
    name: "metaTitle",
    title: "Global Meta Title",
    type: "string"
  }, {
    name: "metaDescription",
    title: "Global Meta Description",
    type: "text",
    rows: 3
  }, sharingImage, twitterSharingImage, schemaOrg]
};
var pageSocialMedia = {
  type: "document",
  name: "pageSocialMedia",
  title: "Social Media",
  initialValue: {
    title: "Social Media"
  },
  fields: [hiddenTitle$1, {
    title: "Twitter",
    name: "twitter",
    type: "string"
  }, {
    title: "Facebook",
    name: "facebook",
    type: "string"
  }, {
    title: "Instagram",
    name: "instagram",
    type: "string"
  }, {
    title: "Linked In",
    name: "linkedIn",
    type: "string"
  }, {
    title: "Youtube",
    name: "youtube",
    type: "string"
  }]
};
var custom = {
  type: "string",
  name: "custom",
  title: "Custom",
  description: "A custom slice will be added here."
};
var pageFloccCredit = {
  type: "document",
  name: "pageFloccCredit",
  title: "Flocc Credit",
  initialValue: {
    title: "Flocc Credit",
    linkText: "Digital Marketing by flocc",
    url: "https://flocc.co"
  },
  fields: [hiddenTitle$1, linkText, {
    type: "url",
    name: "url",
    title: "URL"
  }]
};
const config = getKataConfig();
var pageSimpleMenu = {
  type: "document",
  name: "pageSimpleMenu",
  title: "Menu",
  initialValue: {
    title: "Menu"
  },
  fields: [hiddenTitle, {
    title: "Menu",
    type: "array",
    name: "menu",
    of: [{
      type: "object",
      title: "Menu Item",
      name: "menuItem",
      fields: [{
        title: "Custom Title",
        name: "noLinkJustTitle",
        type: "string"
      }, {
        title: "Link",
        name: "link",
        type: "reference",
        to: config.allTypes,
        options: {
          disableNew: true
          // we don't want people to be able to create new pages here!
        }
      }],
      preview: {
        select: {
          title: "link.title",
          noLinkJustTitle: "noLinkJustTitle"
        },
        prepare(selection) {
          const {
            title,
            noLinkJustTitle
          } = selection;
          return {
            title: title || noLinkJustTitle || "Unknown",
            media: RiMenuAddLine
          };
        }
      }
    }]
  }]
};
const KataPlugin = definePlugin(() => {
  const types = [accordion, buttons, logos, mediaPreview, standoutText, tableField, testimonials, textAndImage, youtube, globalSlices, pageInfiniteMenu, pageMenu, pageTwoMenus, pageMeta, pageSocialMedia, pageFloccCredit, pageSimpleMenu, custom, hero01, hero04, hero05, hero06, hero07, hero08, hero09, hero10, hero11, feature01, feature02, feature03, feature04, feature05, feature06, feature07, feature08, feature09, feature10, feature11, feature12, text01, text02, text03, text04, text05, text06, text07, text08, text09, text10, portfolio01, portfolio03, portfolio04, portfolio05, portfolio06, portfolio07, portfolio08, portfolio09, portfolio10, testimonial01, testimonial02, testimonial03, testimonial04, testimonial05, contact01, contact02, contact03, cta01, cta02, cta05, cta07, cta08, featureList01, images01, images02, images03, images04, news02, news03, news05, news06, stats01, team01, team03, team04, timeline01, anchor, externalLink, fileLink, internalLink, lightboxButton, link];
  return {
    name: "sanity-plugin-kata",
    schema: {
      types
    }
  };
});
export { KataPlugin };
//# sourceMappingURL=index.esm.js.map
