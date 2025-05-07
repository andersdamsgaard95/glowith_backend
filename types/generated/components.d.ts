import type { Schema, Struct } from '@strapi/strapi';

export interface BackgroundColorBackgroundColor extends Struct.ComponentSchema {
  collectionName: 'components_background_color_background_colors';
  info: {
    description: '';
    displayName: 'backgroundColor';
    icon: 'brush';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<
      [
        'None',
        'Theme Blue',
        'Theme Light Pink',
        'Theme Dark Pink',
        'Theme Yellow',
        'Theme Purple',
        'Theme Green',
        'Theme White',
        'Theme Black',
      ]
    >;
  };
}

export interface BlockSettingsBlockSettings extends Struct.ComponentSchema {
  collectionName: 'components_block_settings_block_settings';
  info: {
    description: '';
    displayName: 'BlockSettings';
    icon: 'cog';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Component<
      'background-color.background-color',
      false
    >;
    blockPadding: Schema.Attribute.Component<
      'top-bottom-padding.top-bottom-padding',
      false
    >;
  };
}

export interface ButtonButton extends Struct.ComponentSchema {
  collectionName: 'components_button_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    color: Schema.Attribute.Enumeration<
      ['Theme Dark Pink', 'Theme Blue', 'Theme Green']
    >;
    openInNewTab: Schema.Attribute.Boolean;
    path: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeaderNestedComponentsSubMenuInspirationLink
  extends Struct.ComponentSchema {
  collectionName: 'components_header_nested_components_sub_menu_inspiration_links';
  info: {
    displayName: 'subMenuInspirationLink';
    icon: 'picture';
  };
  attributes: {
    destinationPath: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HeroBannerHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_hero_banner_hero_banners';
  info: {
    description: '';
    displayName: 'Hero Banner';
    icon: 'monitor';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Component<
      'background-color.background-color',
      false
    >;
    button: Schema.Attribute.Component<'button.button', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    imageFullBackground: Schema.Attribute.Boolean;
    imageZoomOn: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
    textColorOnImage: Schema.Attribute.Enumeration<['Dark', 'Light']>;
    textPosition: Schema.Attribute.Enumeration<
      [
        'Left Bottom',
        'Left Center',
        'Left Top',
        'Right Bottom',
        'Right Center',
        'Right Top',
      ]
    >;
  };
}

export interface MenuItemMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_item_menu_items';
  info: {
    description: '';
    displayName: 'menuItem';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    destinationPath: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface MultiBoxGridMultiBoxGrid extends Struct.ComponentSchema {
  collectionName: 'components_multi_box_grid_multi_box_grids';
  info: {
    description: '';
    displayName: 'Multi-box-grid';
    icon: 'grid';
  };
  attributes: {
    bigBoxLeft: Schema.Attribute.Boolean;
    button: Schema.Attribute.Component<'button.button', false>;
    buttonPosition: Schema.Attribute.Enumeration<
      ['Center (default)', 'Left', 'Right']
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    multiBoxBig: Schema.Attribute.Component<'multi-box.multi-box', false>;
    multiBoxSmall: Schema.Attribute.Component<'multi-box.multi-box', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      >;
    settings: Schema.Attribute.Component<
      'block-settings.block-settings',
      false
    >;
  };
}

export interface MultiBoxRowMultiBoxRow extends Struct.ComponentSchema {
  collectionName: 'components_multi_box_row_multi_box_rows';
  info: {
    description: '';
    displayName: 'MultiBoxRow';
    icon: 'apps';
  };
  attributes: {
    button: Schema.Attribute.Component<'button.button', false>;
    buttonPosition: Schema.Attribute.Enumeration<
      ['Center (default)', 'Left', 'Right']
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    multiBoxSmall: Schema.Attribute.Component<'multi-box.multi-box', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
    settings: Schema.Attribute.Component<
      'block-settings.block-settings',
      false
    >;
  };
}

export interface MultiBoxMultiBox extends Struct.ComponentSchema {
  collectionName: 'components_multi_box_multi_boxes';
  info: {
    description: '';
    displayName: 'Multi-box';
    icon: 'stack';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Component<
      'background-color.background-color',
      false
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
    imageOptions: Schema.Attribute.Enumeration<
      ['Shift automatically', 'Shift to next on hover']
    >;
    link: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
    textOptionsIfImage: Schema.Attribute.Enumeration<
      ['Displayed underneath (default)', 'Visible on hover inside box']
    >;
  };
}

export interface TextWithImageTextWithImage extends Struct.ComponentSchema {
  collectionName: 'components_text_with_image_text_with_images';
  info: {
    description: '';
    displayName: 'textWithImage';
    icon: 'picture';
  };
  attributes: {
    button: Schema.Attribute.Component<'button.button', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageOptions: Schema.Attribute.Enumeration<['Cover', 'Add margin']>;
    imagePosition: Schema.Attribute.Enumeration<['Left (default)', 'Right']>;
    settings: Schema.Attribute.Component<
      'block-settings.block-settings',
      false
    >;
    text: Schema.Attribute.RichText;
    textBackgroundColor: Schema.Attribute.Component<
      'background-color.background-color',
      false
    >;
  };
}

export interface TopBottomPaddingTopBottomPadding
  extends Struct.ComponentSchema {
  collectionName: 'components_top_bottom_padding_top_bottom_paddings';
  info: {
    displayName: 'Top/Bottom-Padding';
    icon: 'expand';
  };
  attributes: {
    paddingBottom: Schema.Attribute.Enumeration<
      ['Default 50px', 'Small 25px', 'None']
    >;
    paddingTop: Schema.Attribute.Enumeration<
      ['Default 50px', 'Small 25px', 'None']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'background-color.background-color': BackgroundColorBackgroundColor;
      'block-settings.block-settings': BlockSettingsBlockSettings;
      'button.button': ButtonButton;
      'header-nested-components.sub-menu-inspiration-link': HeaderNestedComponentsSubMenuInspirationLink;
      'hero-banner.hero-banner': HeroBannerHeroBanner;
      'menu-item.menu-item': MenuItemMenuItem;
      'multi-box-grid.multi-box-grid': MultiBoxGridMultiBoxGrid;
      'multi-box-row.multi-box-row': MultiBoxRowMultiBoxRow;
      'multi-box.multi-box': MultiBoxMultiBox;
      'text-with-image.text-with-image': TextWithImageTextWithImage;
      'top-bottom-padding.top-bottom-padding': TopBottomPaddingTopBottomPadding;
    }
  }
}
