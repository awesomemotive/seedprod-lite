<template>
  <div :id="'sp-'+block.id" class="sp-wccheckout-wrapper" :style="wccheckoutWrapperStyleObject">
    <component :is="'style'" type="text/css">
      {{wccheckoutCSS}}
      {{buttonStyleCSS}}
    </component>

    <div class="sp-wccheckout-shortcode">[woocommerce_checkout]</div>

    <!-- Mobile Styles -->
    <pre :data-mobile-css="mobileLabelStylesCal"></pre>
    <pre :data-mobile-css="mobileHeaderStylesCal"></pre>

    <span class="sp-hidden">START-REMOVE</span>
    <div :id="'sp-wc-checkout-preview-'+block.id"></div>
    <span class="sp-hidden">END-REMOVE</span>
    <div ref="insertHeaderClass"></div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';
import tinycolor from 'tinycolor2';

export default {
  name: 'WCCheckout',
  mixins: [ helpers ],
  props: {
    block: Object,
  },
  data() {
    return {
      luminance: 'light',
      shared: seedprod_store,
    };
  },
  mounted() {
    let self = this;
    lodash.forOwn( this.shared.block_templates.wccheckout, function( value, key ) {
      self.set_default_val( self.block.settings, key, value );
    });

    // Render shortcode for builder preview
    const wcCartPreviewId = 'sp-wc-checkout-preview-' + this.block.id;
    this.axios
      .get( 'admin-ajax.php?action=seedprod_pro_render_shortcode_wc_checkout' )
      .then( function( response ) {
        const wcCartPreviewTarget = document.getElementById( wcCartPreviewId );
        wcCartPreviewTarget.innerHTML = response.data;
      });

    // Add .sp-css-target class to shortcode-rendered header tags
    const pre = '#sp-' + this.block.id + ' .woocommerce ';
    const wcFormLabelSuffix = ' > label.woocommerce-form__label > span';
    const headerSelectors = pre + 'h1,' + pre + 'h2,' + pre + 'h3,' +
                            pre + 'h4,' + pre + 'h5,' + pre + 'h6,' +
                            pre + 'h1' + wcFormLabelSuffix + ',' +
                            pre + 'h2' + wcFormLabelSuffix + ',' +
                            pre + 'h3' + wcFormLabelSuffix + ',' +
                            pre + 'h4' + wcFormLabelSuffix + ',' +
                            pre + 'h5' + wcFormLabelSuffix + ',' +
                            pre + 'h6' + wcFormLabelSuffix;
    let headerClassScriptContents = 'const pre = \'' + pre + '\';' +
                                    'const headerSelectors = \'' + headerSelectors + '\';' +
                                    'document.querySelectorAll(headerSelectors).forEach(el=>el.classList.add(\'sp-css-target\'));';
    const headerClassScript = document.createElement( 'script' );
    headerClassScript.text = headerClassScriptContents;
    this.$refs.insertHeaderClass.appendChild( headerClassScript );
  },
  computed: {
    wccheckoutCSS: function() {
      const cssRules = [];

      // Selector Prefix
      const pre = '#sp-' + this.block.id + ' .woocommerce ';

      cssRules.push(

        // Default Styles
        pre + 'table.shop_table' + '{' +
          'border-spacing:0;' +
          'overflow:hidden;' +
          'background:none;' +
        '}' +
        pre + 'table.shop_table *' + '{' +
          'background:none;' +
        '}' +
        pre + 'table.cart img' + '{' +
        'width: 32px;' +
        'box-shadow: none;' +
        '}'
      );

      if ( 1 == this.block.settings.layoutColumns ) {
        cssRules.push( pre + '.col2-set [class^=\'col-\']{float:none; width:100%;}' );
      } else {
        cssRules.push( pre + '.col2-set{width: 48%; float: left;}' );
        cssRules.push( pre + ' #order_review,' + pre + ' #order_review_heading{width: 48%;float: right;clear: right;}' );
        cssRules.push( pre + ' .col-1,' + pre + ' .col-2{float:none !important;width:100% !important}' );
        cssRules.push( pre + '.col2-set [class^=\'col-\']{float:none; width:100%;}' );
        cssRules.push( pre + ' .woocommerce-checkout::after{content: \'\';clear: both;display: table;}' );
        cssRules.push( '@media (max-width: 480px) { ' + pre + ' .col2-set {float:none;width:100%}' + '}' );
        cssRules.push( '@media (max-width: 480px) { ' + pre + ' #order_review_heading {float:none;width:100%}' + '}' );
        cssRules.push( '@media (max-width: 480px) { ' + pre + ' #order_review {float:none;width:100%}' + '}' );
      }

      // Make heading styles supercede label styles
      const wcFormLabelSuffix = ' > label.woocommerce-form__label > span';
      const headerSelectors = pre + 'h1,' + pre + 'h2,' + pre + 'h3,' +
                              pre + 'h4,' + pre + 'h5,' + pre + 'h6,' +
                              pre + 'h1' + wcFormLabelSuffix + ',' +
                              pre + 'h2' + wcFormLabelSuffix + ',' +
                              pre + 'h3' + wcFormLabelSuffix + ',' +
                              pre + 'h4' + wcFormLabelSuffix + ',' +
                              pre + 'h5' + wcFormLabelSuffix + ',' +
                              pre + 'h6' + wcFormLabelSuffix;

      if ( '' !== this.block.settings.headerColor ) {
        cssRules.push(
          headerSelectors +
          '{color:' + this.block.settings.headerColor + '}'
        );
      }

      if ( '' !== this.block.settings.align ) {
        cssRules.push(
          headerSelectors +
          '{text-align:' + this.align_render( this.block.settings.align ) + '}'
        );
      }

      const headerStyle = this.headerStyleObject;

      cssRules.push(
        headerSelectors + '{' +
          ( headerStyle['font-size'] ?
            'font-size:' + headerStyle['font-size'] + ';' :
            '' ) +
          ( headerStyle['font-weight'] ?
            'font-weight:' + headerStyle['font-weight'] + ';' :
            '' ) +
          ( headerStyle['font-style'] ?
            'font-style:' + headerStyle['font-style'] + ';' :
            '' ) +
          ( headerStyle['text-decoration'] ?
            'text-decoration:' + headerStyle['text-decoration'] + ';' :
            '' ) +
          ( headerStyle['font-family'] ?
            'font-family:' + headerStyle['font-family'] + ';' :
            '' ) +
          ( headerStyle['line-height'] ?
            'line-height:' + headerStyle['line-height'] + ';' :
            '' ) +
          ( headerStyle['letter-spacing'] ?
            'letter-spacing:' + headerStyle['letter-spacing'] + ';' :
            '' ) +
          ( headerStyle['text-transform'] ?
            'text-transform:' + headerStyle['text-transform'] + ';' :
            '' ) +
        '}'
      );

      if ( '' !== this.block.settings.fieldBGColor ) {
        cssRules.push(
          pre + 'input,' +
          pre + 'select,' +
          pre + 'textarea,' +
          '.select2-container--default .select2-selection--single .select2-selection__rendered' +
          '{background-color:' + this.block.settings.fieldBGColor + '}'
        );
      }

      if ( '' !== this.block.settings.fieldTextColor ) {
        cssRules.push(
          pre + 'input,' +
          pre + 'select,' +
          pre + 'textarea,' +
          '.select2-container--default .select2-selection--single .select2-selection__rendered' +
          '{color:' + this.block.settings.fieldTextColor + '}'
        );
      }

      if ( '' !== this.block.settings.fieldBorderColor ) {
        cssRules.push(
          pre + 'input,' +
          pre + 'select,' +
          pre + 'textarea,' +
          '.select2-container--default .select2-selection--single' +
          '{border-color:' + this.block.settings.fieldBorderColor + ' !important}'
        );
      }

      let btField = this.block.settings.fieldborderTop;
      let brField = this.block.settings.fieldborderRight;
      let bbField = this.block.settings.fieldborderBottom;
      let blField = this.block.settings.fieldborderLeft;
      if ( this.block.settings.fieldborderSync ) {
        brField = btField;
        bbField = btField;
        blField = btField;
      }
      cssRules.push(
        pre + 'input,' +
        pre + 'select,' +
        pre + 'textarea,' +
        '.select2-container--default .select2-selection--single .select2-selection__rendered' + '{' +
          'border-top-width:'    + btField + 'px;' +
          'border-right-width:'  + brField + 'px;' +
          'border-bottom-width:' + bbField + 'px;' +
          'border-left-width:'   + blField + 'px;' +
        '}'
      );

      const labelSelectors = pre + '.woocommerce-billing-fields label,' +
                             pre + '.woocommerce-shipping-fields label,' +
                             pre + '.woocommerce-additional-fields label';

      if ( '' !== this.block.settings.labelColor ) {
        cssRules.push(
          labelSelectors +
          '{color:' + this.block.settings.labelColor + '}'
        );
      }

      if ( '' !== this.block.settings.labelalign ) {
        cssRules.push(
          labelSelectors +
          '{text-align:' + this.align_render( this.block.settings.labelalign ) + '}'
        );
      }

      const labelStyle = this.labelStyleObject;

      cssRules.push(
        labelSelectors + '{' +
          ( labelStyle['font-size'] ?
            'font-size:' + labelStyle['font-size'] + ';' :
            '' ) +
          ( labelStyle['font-weight'] ?
            'font-weight:' + labelStyle['font-weight'] + ';' :
            '' ) +
          ( labelStyle['font-style'] ?
            'font-style:' + labelStyle['font-style'] + ';' :
            '' ) +
          ( labelStyle['text-decoration'] ?
            'text-decoration:' + labelStyle['text-decoration'] + ';' :
            '' ) +
          ( labelStyle['font-family'] ?
            'font-family:' + labelStyle['font-family'] + ';' :
            '' ) +
          ( labelStyle['line-height'] ?
            'line-height:' + labelStyle['line-height'] + ';' :
            '' ) +
          ( labelStyle['letter-spacing'] ?
            'letter-spacing:' + labelStyle['letter-spacing'] + ';' :
            '' ) +
          ( labelStyle['text-transform'] ?
            'text-transform:' + labelStyle['text-transform'] + ';' :
            '' ) +
        '}'
      );

      if ( '' !== this.block.settings.rowSpacing ) {
        cssRules.push(
          pre + 'form .form-row' +
          '{margin-bottom:' + this.block.settings.rowSpacing + 'px}'
        );
      }

      if ( '' !== this.block.settings.alertInfoHlColor ) {
        cssRules.push(
          pre + '.woocommerce-info' +
          '{border-top-color:' + this.block.settings.alertInfoHlColor + '}' +
          pre + '.woocommerce-info::before' +
          '{color:' + this.block.settings.alertInfoHlColor + '}'
        );
      }

      if ( '' !== this.block.settings.alertErrorHlColor ) {
        cssRules.push(
          pre + '.woocommerce-error' +
          '{border-top-color:' + this.block.settings.alertErrorHlColor + '}' +
          pre + '.woocommerce-error::before' +
          '{color:' + this.block.settings.alertErrorHlColor + '}'
        );
      }

      if ( '' !== this.block.settings.alertSuccessHlColor ) {
        cssRules.push(
          pre + '.woocommerce-message' +
          '{border-top-color:' + this.block.settings.alertSuccessHlColor + '}' +
          pre + '.woocommerce-message::before' +
          '{color:' + this.block.settings.alertSuccessHlColor + '}'
        );
      }

      if ( '' !== this.block.settings.cartFieldBorderColor ) {
        cssRules.push(
          pre + 'table.shop_table,' +
          pre + 'table.shop_table td,' +
          pre + 'table.shop_table tfoot td,' +
          pre + 'table.shop_table tfoot th,' +
          pre + 'table.shop_table tbody th' +
          '{border-color:' + this.block.settings.cartFieldBorderColor + '}'
        );
      }

      let btCart = this.block.settings.cartborderTop;
      let brCart = this.block.settings.cartborderRight;
      let bbCart = this.block.settings.cartborderBottom;
      let blCart = this.block.settings.cartborderLeft;
      if ( this.block.settings.cartborderSync ) {
        brCart = btCart;
        bbCart = btCart;
        blCart = btCart;
      }
      cssRules.push(
        pre + 'table.shop_table' + '{' +
          'border-top-width:'    + btCart + 'px;' +
          'border-right-width:'  + brCart + 'px;' +
          'border-bottom-width:' + bbCart + 'px;' +
          'border-left-width:'   + blCart + 'px;' +
        '}'
      );

      if ( '' !== this.block.settings.cartBorderRadius ) {
        cssRules.push(
          pre + 'table.shop_table' +
           '{border-radius:' + this.block.settings.cartBorderRadius + 'px}'
        );
      }

      if ( '' !== this.block.settings.cartBgColor ) {
        cssRules.push(
          pre + 'table.shop_table,' +
          pre + 'table.shop_table thead,' +
          pre + 'table.shop_table tfoot' +
          '{background-color:' + this.block.settings.cartBgColor + '}'
        );
      }

      if ( '' !== this.block.settings.cartTextColor ) {
        cssRules.push(
          pre + 'table.shop_table' +
          '{color:' + this.block.settings.cartTextColor + '}'
        );
      }

      if ( '' !== this.block.settings.cartFont ) {
        cssRules.push(
          pre + 'table.shop_table' + '{' +
            'font-family:' +
              this.font_render( this.block.settings.cartFont ) + ';' +
            'font-weight:' +
              this.font_variant_render( this.block.settings.cartFontVariant, 'weight' ) + ';' +
            'font-style:' +
              this.font_variant_render( this.block.settings.cartFontVariant, 'style' ) + ';' +
          '}'
        );
      }

      const cartHeaderSelectors = pre + 'table.shop_table th,' +
                                  pre + 'table.shop_table thead th,' +
                                  pre + 'table.shop_table tfoot th';

      if ( '' !== this.block.settings.cartHeaderBgColor ) {
        cssRules.push(
          cartHeaderSelectors +
          '{background-color:' + this.block.settings.cartHeaderBgColor + '}'
        );
      }

      if ( '' !== this.block.settings.cartHeaderFont ) {
        cssRules.push(
          cartHeaderSelectors + '{' +
            'font-family:' +
              this.font_render( this.block.settings.cartHeaderFont ) + ';' +
            'font-weight:' +
              this.font_variant_render( this.block.settings.cartHeaderFontVariant, 'weight' ) + ';' +
            'font-style:' +
              this.font_variant_render( this.block.settings.cartHeaderFontVariant, 'style' ) + ';' +
          '}'
        );
      }

      if ( '' !== this.block.settings.cartHeaderColor ) {
        cssRules.push(
          pre + 'table.shop_table th,' +
          pre + 'table.shop_table thead th,' +
          pre + 'table.shop_table tfoot th' +
          '{color:' + this.block.settings.cartHeaderColor + '}'
        );
      }

      if ( '' !== this.block.settings.paymentBgColor ) {
        cssRules.push(
          pre + '.woocommerce-checkout-payment' +
          '{background-color:' + this.block.settings.paymentBgColor + '}'
        );
      }

      if ( '' !== this.block.settings.paymentTextColor ) {
        cssRules.push(
          pre + '.woocommerce-checkout-payment' +
          '{color:' + this.block.settings.paymentTextColor + '}'
        );
      }

      if ( '' !== this.block.settings.paymentFont ) {
        cssRules.push(
          pre + '.woocommerce-checkout-payment' + '{' +
            'font-family:' +
              this.font_render( this.block.settings.paymentFont ) + ';' +
            'font-weight:' +
              this.font_variant_render( this.block.settings.paymentFontVariant, 'weight' ) + ';' +
            'font-style:' +
              this.font_variant_render( this.block.settings.paymentFontVariant, 'style' ) + ';' +
          '}'
        );
      }

      // console.log( cssRules.join(' ') );
      return cssRules.join( ' ' );
    },
    buttonStyleCSS: function() {
      let cssRules = [];

      // Selector Prefix
      const pre = '#sp-' + this.block.id + ' .woocommerce ';

      const btnSelectors = pre + 'a.button,' +
                           pre + 'button.button,' +
                           pre + 'input.button,' +
                           pre + '#respond input#submit';

      const btnSelectorsHover = pre + 'a.button:hover,' +
                                pre + 'button.button:hover,' +
                                pre + 'input.button:hover,' +
                                pre + '#respond input#submit:hover';

      const blockBtnColor = this.block.settings.btnBgColor;
      const pageBtnColor = this.shared.settings.document.settings.buttonColor;
      const btnColor = ( blockBtnColor ? blockBtnColor : pageBtnColor );

      let tc = '';
      let lightness = tinycolor( btnColor );
      if ( 0.5 <= lightness.getLuminance() ) {
        tc = '#000';
        this.luminance = 'light';
      } else {
        tc = '#fff';
        this.luminance = 'dark';
      }

      // Defaults
      cssRules.push(
        btnSelectors + '{' +
          'background-color:' + btnColor + ';' +
          'color:' + tc + ';' +
        '}' +
        btnSelectorsHover + '{' +
          'background-color:' +
            tinycolor( btnColor ).darken( 5 ).toString() + ';' +
        '}'
      );

      if ( '' !== this.block.settings.btnBorderRadius ) {
        cssRules.push(
          btnSelectors +
          '{border-radius:' + this.block.settings.btnBorderRadius + 'px}'
        );
      }

      if ( 'flat' == this.block.settings.btnStyle ) {
        cssRules.push(
          btnSelectors + '{' +
            'background-color:' + btnColor  + ';' +
          '}' +
          btnSelectorsHover + '{' +
            'background-color:' +
              tinycolor( btnColor ).darken( 5 ).toString() + ';' +
          '}'
        );
      }

      if ( 'link' == this.block.settings.btnStyle ) {
        cssRules.push(
          btnSelectors + '{' +
            'border:none;' +
            'color:' + btnColor + ';' +
            'background-color:transparent;' +
          '}' +
          btnSelectorsHover + '{' +
            'color:' + tinycolor( btnColor ).darken( 5 ).toString() + ';' +
            'background-color:transparent;' +
          '}'
        );
      }

      if ( 'ghost' == this.block.settings.btnStyle ) {
        cssRules.push(
          btnSelectors + '{' +
            'border:1px solid' + btnColor + ';' +
            'color:' + btnColor + ';' +
            'background-color:transparent;' +
          '}' +
          btnSelectorsHover + '{' +
            'color:' + tinycolor( btnColor ).darken( 5 ).toString() + ';' +
            'background-color:transparent;' +
          '}'
        );
      }

      if ( '2d' == this.block.settings.btnStyle ) {
        const darkBorderColor = tinycolor( btnColor ).darken( 10 ).toString();
        cssRules.push(
          btnSelectors + '{' +
            'border:none;' +
            'border-bottom:3px solid ' + darkBorderColor + ';' +
          '}'
        );
      }

      if ( '3d' == this.block.settings.btnStyle ) {
        const darkBgColor = tinycolor( btnColor ).darken( 7 ).toString();
        const darkBorderColor = tinycolor( btnColor ).darken( 10 ).toString();
        cssRules.push(
          btnSelectors + '{' +
            'background:' + 'linear-gradient(-180deg,' + btnColor + ',' + darkBgColor + ' 90%);' +
            'border:1px solid ' + darkBorderColor + ';' +
            'box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.2)' +
          '}'
        );
      }

      return cssRules.join( ' ' );
    },
    wccheckoutWrapperStyleObject: function() {
      let p = '';
      if ( this.block.settings.paddingSync ) {
        p = this.padding_render(
          this.block.settings.paddingTop,
          this.block.settings.paddingTop,
          this.block.settings.paddingTop,
          this.block.settings.paddingTop
        );
      } else {
        p = this.padding_render(
          this.block.settings.paddingTop,
          this.block.settings.paddingRight,
          this.block.settings.paddingBottom,
          this.block.settings.paddingLeft
        );
      }

      let mt = '';
      if ( '' != this.block.settings.marginTop ) {
        mt = this.block.settings.marginTop + 'px';
      }

      return {
        padding: p,
        'margin-top': mt,
      };
    },
    mobileHeaderStylesCal: function() {

      // target rule|css properties
      let css = '';
      const pre = '#sp-' + this.block.id + ' .woocommerce ';

      // Make heading styles supercede label styles
      const wcFormLabelSuffix = ' > label.woocommerce-form__label > span';
      const target = pre + 'h1,' + pre + 'h2,' + pre + 'h3,' +
                              pre + 'h4,' + pre + 'h5,' + pre + 'h6,' +
                              pre + 'h1' + wcFormLabelSuffix + ',' +
                              pre + 'h2' + wcFormLabelSuffix + ',' +
                              pre + 'h3' + wcFormLabelSuffix + ',' +
                              pre + 'h4' + wcFormLabelSuffix + ',' +
                              pre + 'h5' + wcFormLabelSuffix + ',' +
                              pre + 'h6' + wcFormLabelSuffix;

      if ( '' != this.block.settings.fontSize_mobile ) {
        css += 'font-size:' + this.block.settings.fontSize_mobile + 'px;';
      }

      if ( '' != this.block.settings.lineHeight_mobile ) {
        css += 'line-height:' + this.block.settings.lineHeight_mobile + ';';
      }

      if ( '' != this.block.settings.letterSpacing_mobile ) {
        css += 'letter-spacing:' + this.block.settings.letterSpacing_mobile + 'px;';
      }

      if ( '' == css ) {
        return '';
      } else {
        return target + '|' + css;
      }

    },
    headerStyleObject: function() {
      let size = '';
      if ( '' != this.block.settings.fontSize ) {
        size = this.block.settings.fontSize + 'px';
      }

      let lh = '';
      if ( '' !== this.block.settings.lineHeight ) {
        lh = this.block.settings.lineHeight;
      }

      let ls = '';
      if ( '' != this.block.settings.letterSpacing ) {
        ls = this.block.settings.letterSpacing + 'px';
      }

      let tt = '';
      if ( '' != this.block.settings.typographyLetterCase ) {
        tt = this.block.settings.typographyLetterCase;
      }

      let fw = '';
      if ( true === this.block.settings.typographyBold ) {
        fw = 'bold';
      } else {
        fw = this.font_variant_render(
          this.block.settings.fontVariant,
          'weight'
        );
      }

      let fs = '';
      if ( true === this.block.settings.typographyItalic ) {
        fs = 'italic';
      } else {
        fs = this.font_variant_render( this.block.settings.fontVariant, 'style' );
      }

      let td = '';
      if ( true === this.block.settings.typographyUnderline ) {
        td = 'underline';
      }

      return {
        'font-size': size,
        'font-weight': fw,
        'font-style': fs,
        'text-decoration': td,
        'font-family': this.font_render( this.block.settings.font ),
        'line-height': lh,
        'letter-spacing': ls,
        'text-transform': tt,
      };
    },
    mobileLabelStylesCal: function() {

      // target rule|css properties
      let css = '';

      // Selector Prefix
      const pre = '#sp-' + this.block.id + ' .woocommerce ';
      let target = pre + '.woocommerce-billing-fields label,' +
                   pre + '.woocommerce-shipping-fields label,' +
                   pre + '.woocommerce-additional-fields label';

      if ( '' != this.block.settings.labelfontSize_mobile ) {
        css += 'font-size:' + this.block.settings.labelfontSize_mobile + 'px;';
      }

      if ( '' != this.block.settings.labellineHeight_mobile ) {
        css += 'line-height:' + this.block.settings.labellineHeight_mobile + ';';
      }

      if ( '' != this.block.settings.labelletterSpacing_mobile ) {
        css += 'letter-spacing:' + this.block.settings.labelletterSpacing_mobile + 'px;';
      }

      if ( '' == css ) {
        return '';
      } else {
        return target + '|' + css;
      }

    },
    labelStyleObject: function() {
      let size = '';
      if ( '' != this.block.settings.labelfontSize ) {
        size = this.block.settings.labelfontSize + 'px';
      }

      let lh = '';
      if ( '' !== this.block.settings.labellineHeight ) {
        lh = this.block.settings.labellineHeight;
      }

      let ls = '';
      if ( '' != this.block.settings.labelletterSpacing ) {
        ls = this.block.settings.labelletterSpacing + 'px';
      }

      let tt = '';
      if ( '' != this.block.settings.labeltypographyLetterCase ) {
        tt = this.block.settings.labeltypographyLetterCase;
      }

      let fw = '';
      if ( true === this.block.settings.labeltypographyBold ) {
        fw = 'bold';
      } else {
        fw = this.font_variant_render(
          this.block.settings.labelfontVariant,
          'weight'
        );
      }

      let fs = '';
      if ( true === this.block.settings.labeltypographyItalic ) {
        fs = 'italic';
      } else {
        fs = this.font_variant_render( this.block.settings.labelfontVariant, 'style' );
      }

      let td = '';
      if ( true === this.block.settings.labeltypographyUnderline ) {
        td = 'underline';
      }

      return {
        'font-size': size,
        'font-weight': fw,
        'font-style': fs,
        'text-decoration': td,
        'font-family': this.font_render( this.block.settings.labelfont ),
        'line-height': lh,
        'letter-spacing': ls,
        'text-transform': tt,
      };
    },
  },
};
</script>
