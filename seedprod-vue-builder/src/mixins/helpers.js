import tinycolor from 'tinycolor2';
import _ from 'lodash';
import qs from 'qs';
import { __ } from '@wordpress/i18n';
export const helpers = {
  methods: {
    set_default_val( obj, param, val ) {
      if ( obj[param] == undefined ) {
        this.$set( obj, param, val );
      }
    },
    update_head_css: _.debounce( function( e ) {

      //console.log("head css");
      let darkLinkColor = tinycolor(
        this.shared.settings.document.settings.linkColor
      )
        .darken()
        .toString();
      this.shared.settings.document.settings.linkDarkerColor = darkLinkColor;

      let backgroundImage = '';
      if ( '' != this.shared.settings.document.settings.bgImage ) {
			  backgroundImage =
				'url(\'' +
				this.shared.settings.document.settings.bgImage +
				'\')';
      }
      if (
        '' != this.shared.settings.document.settings.bgImage &&
				'' != this.shared.settings.document.settings.bgDimming
			  ) {
        backgroundImage =
				  'linear-gradient(0deg, ' +
				  'rgba(0,0,0,0.' +
				  this.shared.settings.document.settings.bgDimming +
				  ')' +
				  ', ' +
				  'rgba(0,0,0,0.' +
				  this.shared.settings.document.settings.bgDimming +
				  ')' +
				  '),' +
				  'url(\'' +
				  this.shared.settings.document.settings.bgImage +
				  '\')';
			  }

			  if ( '' == backgroundImage ) {
        if ( 'g' == this.shared.settings.document.settings.bgStyle ) {
				  if (
            'linear' == this.shared.settings.document.settings.bgGradient.type
				  ) {
            backgroundImage =
					  'linear-gradient(' +
					  this.shared.settings.document.settings.bgGradient.angle +
					  'deg, ' +
					  this.shared.settings.document.settings.bgGradient.color1 +
					  ' ' +
					  this.shared.settings.document.settings.bgGradient.color1location +
					  '%, ' +
					  this.shared.settings.document.settings.bgGradient.color2 +
					  ' ' +
					  this.shared.settings.document.settings.bgGradient.color2location +
					  '%)';
				  } else {
            backgroundImage =
					  'radial-gradient(circle at ' +
					  this.shared.settings.document.settings.bgGradient.position +
					  ', ' +
					  this.shared.settings.document.settings.bgGradient.color1 +
					  ' ' +
					  this.shared.settings.document.settings.bgGradient.color1location +
					  '%, ' +
					  this.shared.settings.document.settings.bgGradient.color2 +
					  ' ' +
					  this.shared.settings.document.settings.bgGradient.color2location +
					  '%)';
				  }
        }
			  }

      let headcss =
				'#sp-page{color:' +
				this.shared.settings.document.settings.textColor +
				'} ' +
				'#sp-page .sp-header-tag-h1,#sp-page .sp-header-tag-h2,#sp-page .sp-header-tag-h3,#sp-page .sp-header-tag-h4,#sp-page .sp-header-tag-h5,#sp-page .sp-header-tag-h6{color:' +
				this.shared.settings.document.settings.headerColor +
				'}' +
				'#sp-page h1,#sp-page h2,#sp-page h3,#sp-page h4,#sp-page h5,#sp-page h6{color:' +
				this.shared.settings.document.settings.headerColor +
				'; font-family:' +
				this.font_render( this.shared.settings.document.settings.headerFont ) +
				';font-weight:' +
				this.font_variant_render(
				  this.shared.settings.document.settings.headerFontVariant,
				  'weight'
				) +
				';font-style:' +
				this.font_variant_render(
				  this.shared.settings.document.settings.headerFontVariant,
				  'style'
				) +
				'} ' +
				'#sp-page a{color:' +
				this.shared.settings.document.settings.linkColor +
				'} #sp-page a:hover{color:' +
				darkLinkColor +
				'}' +
				'#sp-page .btn{background-color:' +
				this.shared.settings.document.settings.buttonColor +
				'}' +
				'body{background-color:' + this.shared.settings.document.settings.bgColor +
				'; background-image:' + backgroundImage + ';}'

				;

      let self = this;
      let namespacedcss = '';

      let data = qs.stringify({
        css: this.shared.settings.document.settings.customCss,
			  });

      self.axios
			  .post( seedprod_get_namespaced_custom_css_url, data, {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			  })
			  .then( function( response ) {
          namespacedcss = response.data;

          //console.log(namespacedcss);
          jQuery( '#tmp-custom-css-style' ).remove();
          jQuery( 'head' ).append(
            '<style id=\'tmp-custom-css-style\' type=\'text/css\'></style>'
          );
          jQuery( '#tmp-custom-css-style' ).html( headcss + namespacedcss );
			  });

			 // console.log(namespacedcss);
      //jQuery("#tmp-custom-css-style").html(headcss + namespacedcss);
      this.shared.settings.document.settings.headCss = headcss;
    }, 100 ),

    highlight_option_target( id ) {
      this.shared.highlight_option_target = id;

      //console.log(id);
    },

    // 	highlight_option_target: _.debounce(function (id) {
    // 		this.shared.highlight_option_target = id;
    // 		console.log(id);
    //   }, 50),
    moving( e, oe ) {

      //console.log(e);
      //
      // this.shared.stop = true;

      // if (e.originalEvent.clientY < 300) {
      // 	console.log('up '+e.originalEvent.clientY);
      // 	this.shared.stop = false;
      // 	this.scroll(-100)
      // }

      // if (e.clientY > (jQuery(window).height() - 300)) {
      // 	console.log('down '+e.originalEvent.clientY);
      // 	this.shared.stop = false;
      // 	this.scroll(100)
      // }

      // if (e.pageY < mY) {
      // 	console.log('Up');
      // 	 // moving downward
      // } else if (e.pageY > mY) {
      // 	console.log('Down');
      // 	// movement on horizontal axis
      // } else {
      // 	console.log('Moving left-right or the opposite');
      // }
    },
    scroll( step ) {
      let scrollY = jQuery( '#seedprod-builder-view' ).scrollTop();
      jQuery( '#seedprod-builder-view' ).scrollTop( scrollY + step );
      if ( ! this.shared.stop ) {
        setTimeout( function() {
          scroll( step );
        }, 20 );
      }
    },
    start_move() {
      this.shared.is_moving = true;

      //document.addEventListener('mousemove', this.mousePosition, true)
    },
    end_move( evt ) {
      this.shared.is_moving = false;
      this.shared.stop = false;

      // if(this.shared.last_block_added !== false){
      // 	this.focus_block(this.shared.last_block_added);
      // 	this.edit_block(this.shared.last_block_added, null, true );
      // 	this.shared.last_block_added = false;
      // }
      //console.log(this.shared.last_block_added);
      //document.removeEventListener('mousemove', this.mousePosition, true)
    },
    mousePosition( event ) {

      //event is your object :)
      console.log( 'event', event );
    },
    width_height_render( r = '' ) {
      if ( /^\d+$/.test( r ) ) {
        r = r + 'px';
      }
      return r;
    },
    text_shadow( type = '', textColor = '#000000' ) {
      let r = '';
      let textshadowcolor = '0,0,0';
      let lightness = tinycolor( textColor );
      if ( 0.65 <= lightness.getLuminance() ) {

        //textshadowcolor = "255, 255, 255";
      }
      if ( 1 == type ) {
        r = '1px 1px 0px rgba(' + textshadowcolor + ',0.5)';
      }
      if ( 2 == type ) {
        r = '1px 1px 3px rgba(' + textshadowcolor + ',0.5)';
      }
      if ( 3 == type ) {
        r = '2px 2px 4px rgba(' + textshadowcolor + ',0.4)';
      }
      if ( 4 == type ) {
        r = '3px 3px 6px rgba(' + textshadowcolor + ',0.3)';
      }
      if ( 5 == type ) {
        r = '3px 4px 12px rgba(' + textshadowcolor + ',0.3)';
      }
      if ( 6 == type ) {
        r = '5px 5px 20px rgba(' + textshadowcolor + ',0.3)';
      }
      return r;
    },
    divider_shadow( type = '' ) {
      let r = '';
      if ( 1 == type ) {
        r = '0 1px 1px rgba(0,0,0,0.2)';
      }
      if ( 2 == type ) {
        r = '0 2px 2px rgba(0,0,0,0.4)';
      }
      if ( 3 == type ) {
        r = '0 4px 4px rgba(0,0,0,0.4)';
      }
      if ( 4 == type ) {
        r = '0 6px 6px rgba(0,0,0,0.4)';
      }

      // if (type == 5) {
      // 	r = "0 15px 15px rgba(0,0,0,0.4)";
      // }
      // if (type == 6) {
      // 	r = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
      // }
      return r;
    },

    box_shadow( type = '' ) {
      let r = '';
      if ( 1 == type ) {
        r = '0 1px 2px 0 rgba(0, 0, 0, 0.5)';
      }
      if ( 2 == type ) {
        r = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.6)';
      }
      if ( 3 == type ) {
        r =
					'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.6)';
      }
      if ( 4 == type ) {
        r =
					'0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.5)';
      }
      if ( 5 == type ) {
        r =
					'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.4)';
      }
      if ( 6 == type ) {
        r = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
      }
      if ( 7 == type ) {
        r = '0 10px 6px -6px #777';
      }
      return r;
    },
    border_render( height = '', style = '', color = '' ) {
      if ( '' == height ) {
        height = '1px';
      }
      if ( '' == style ) {
        style = 'solid';
      }
      if ( '#666666' == color ) {
        color = '#666666';
      }

      return height + 'px ' + style + ' ' + color;
    },
    font_variant_render( fontVariant = '', type = 'weight' ) {
      let fontWeight = '';
      let fontStyle = '';

      if ( '' != fontVariant ) {
        if ( 'weight' == type ) {
          fontWeight = parseInt( fontVariant );
        }
        if ( 'style' == type ) {
          fontStyle = fontVariant.replace( /[0-9]/g, '' );
          if ( '' == fontStyle ) {
            fontStyle = 'normal';
          }
        }
      }

      if ( 'weight' == type ) {
        return fontWeight;
      } else {
        return fontStyle;
      }
    },
    font_render( fontFamily = '' ) {
      if ( '' != fontFamily ) {
        if ( false === fontFamily.includes( ',' ) ) {
          fontFamily = '\'' + fontFamily + '\'';
        }
      }
      return fontFamily;
    },
    border_render( width, style, color ) {
      if ( '' == width || 0 == width || '' == color ) {
        return '';
      }
      return width + 'px ' + style + ' ' + color;
    },
    padding_render( pt = '', pr = '', pb = '', pl = '' ) {
      if ( '' == pt && '' == pr && '' == pb && '' == pl ) {
        pt = 10;
        pb = 10;
        pl = 10;
        pr = 10;
        return pt + 'px ' + pr + 'px ' + pb + 'px ' + pl + 'px ';
      } else {
        if ( '' == pt ) {
          pt = 0;
        }
        if ( '' == pr ) {
          pr = 0;
        }
        if ( '' == pb ) {
          pb = 0;
        }
        if ( '' == pl ) {
          pl = 0;
        }
        return pt + 'px ' + pr + 'px ' + pb + 'px ' + pl + 'px ';
      }
    },

    border_radius_render( tl = '', tr = '', br = '', bl = '' ) {
      if ( '' == tl && '' == tr && '' == br && '' == bl ) {
        tl = 0;
        br = 0;
        bl = 0;
        tr = 0;
        return tl + 'px ' + tr + 'px ' + br + 'px ' + bl + 'px ';
      } else {

        if ( '' == tl ) {
          tl = 0;
        }
        if ( '' == tr ) {
          tr = 0;
        }
        if ( '' == br ) {
          br = 0;
        }
        if ( '' == bl ) {
          bl = 0;
        }
        return tl + 'px ' + tr + 'px ' + br + 'px ' + bl + 'px ';
      }
    },
    align_render( align = '', type = 'align' ) {
      let r = '';
      if ( 'align' == type ) {
        if ( 'left' == align ) {
          r = 'left';
        }
        if ( 'right' == align ) {
          r = 'right';
        }
        if ( 'center' == align ) {
          r = 'center';
        }
      }
      if ( 'width' == type ) {
        if ( 'full' == this.block.settings.align ) {
          r = '100%';
        } else {
          r = 'auto';
        }
      }
      return r;
    },
    align_flex_render( align = '', type = 'align' ) {
      let r = '';
      if ( 'align' == type ) {
        if ( 'left' == align ) {
          r = 'flex-start';
        }
        if ( 'right' == align ) {
          r = 'flex-end';
        }
        if ( 'center' == align ) {
          r = 'center';
        }
      }
      if ( 'width' == type ) {
        if ( 'full' == this.block.settings.align ) {
          r = '100%';
        } else {
          r = 'auto';
        }
      }
      return r;
    },
    load_font( font = '', variant = '' ) {
      if (
        '' != font &&
				this.shared.setup_page_meta.googlefonts['Google Fonts'][font]
      ) {
        if ( '' != variant ) {

          // see variant exists
          let BreakException = {};
          let variant_exists = false;
          try {
            this.shared.setup_page_meta.googlefonts['Google Fonts'][
              font
            ].variants.forEach( function( v ) {
              if ( v.id == variant ) {
                throw BreakException;
              }
            });
          } catch ( e ) {
            variant_exists = true;
          }
          if ( false === variant_exists ) {
            variant = '';
          }
        }

        let url =
					'https://fonts.googleapis.com/css?family=' +
					font.split( ' ' ).join( '+' ) +
					':' +
					variant +
					'&display=swap';
        let link = document.createElement( 'link' );
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild( link );
      }
    },
    add_section: function( obj, sindex = null ) {

      let newObj = {
        id: this.uid(),
        type: 'section',
        rows: [],
        settings: JSON.parse(
          JSON.stringify( this.shared.block_templates.section )
        ),
      };

      // clone section
      this.shared.settings.document.sections.splice( sindex + 1, 0, newObj );

      //this.edit_block(newObj.id);
      this.focus_block( newObj.id, 'bottom' );
      this.$router.push({ name: 'setup_block_options' });

      //setTimeout(function () { jQuery('#seedprod-builder-view').scrollTop(jQuery('#sp-' + newObj.id).offset().top) }, 100);
    },
    focus_block: function( id, dir = 'top' ) {

      //console.log(id);
      let pos = true;
      if ( 'bottom' === dir ) {
        pos = false;
      }

      //console.log('focus');
      this.$nextTick( function() {
        let container = this.shared.code_container;
        if ( id !== undefined ) {
          if ( null !== id ) {
            try {
              container.querySelector( '#sp-' + id ).scrollIntoView( pos );
            } catch ( err ) {}
          }
        }
      });
    },
    add_row: function( obj, sindex = null, rindex = null ) {
      let newObj = {
        id: this.uid(),
        type: 'row',
        colType: '1-col',
        cols: [],
        settings: JSON.parse( JSON.stringify( this.shared.block_templates.row ) ),
      };

      // clone section
      this.shared.settings.document.sections[sindex].rows.splice(
        rindex + 1,
        0,
        newObj
      );
      this.focus_block( newObj.id, 'bottom' );
      this.$router.push({ name: 'setup_block_options' });

      // setTimeout(function() {
      // 	jQuery("#seedprod-builder-view").scrollTop(
      // 		jQuery("#sp-" + newObj.id).offset().top
      // 	);
      // }, 100);
    },
    generate_cols: function( type ) {

      // create cols
      let c;

      if ( '1-col' == type ) {
        c = 1;
      }
      if (
        '2-col' == type ||
				'left-sidebar' == type ||
				'right-sidebar' == type
      ) {
        c = 2;
      }
      if ( '3-col' == type ) {
        c = 3;
      }
      if ( '4-col' == type ) {
        c = 4;
      }
      if ( '5-col' == type ) {
        c = 5;
      }
      if ( '6-col' == type ) {
        c = 6;
      }

      let i;
      let cols = [];
      for ( i = 0; i < c; i++ ) {
        let cp = {
          id: this.uid(),
          type: 'col',
          blocks: [],
          settings: JSON.parse( JSON.stringify( this.shared.block_templates.col ) ),
        };

        if (
          ( 'left-sidebar' == type && 0 == i ) ||
					( 'right-sidebar' == type && 1 == i )
        ) {
          cp.settings.colWidth = 35;
        }
        if (
          ( 'left-sidebar' == type && 1 == i ) ||
					( 'right-sidebar' == type && 0 == i )
        ) {
          cp.settings.colWidth = 65;
        }

        cols.push( cp );
      }
      return cols;
    },
    add_cols: function( type, obj, sindex = null, rindex = null ) {
      let newcols = this.generate_cols( type );
      this.shared.settings.document.sections[sindex].rows[
        rindex
      ].cols = newcols;
    },
    goto( route_name ) {
      if ( this.$route.name !== route_name ) {
        this.$router.push({ name: route_name });
      }
    },
    add_block() {

      //console.log('ff');
      //console.log(this.$route.params.id);
      //if(this.$route.name !== 'setup_block_options' && this.$route.params.id !== ''){
      this.$router.push({ name: 'setup_block_options' });

      //}
    },
    duplicate_element: function(
      obj,
      sindex = null,
      rindex = null,
      cindex = null,
      bindex = null
    ) {
      const cloneObj = JSON.parse( JSON.stringify( obj ) );

      if (
        null !== sindex &&
				null !== rindex &&
				null !== cindex &&
				null !== bindex
      ) {

        //update ids
        cloneObj.id = this.uid();

        // clone block
        this.shared.settings.document.sections[sindex].rows[rindex].cols[
          cindex
        ].blocks.splice( bindex + 1, 0, cloneObj );
      } else if ( null !== sindex && null !== rindex ) {

        // update ids
        let self = this;
        cloneObj.id = this.uid();
        cloneObj.cols.forEach( function( col ) {
          col.id = self.uid();
          col.blocks.forEach( function( block ) {
            block.id = self.uid();
          });
        });

        // clone row
        this.shared.settings.document.sections[sindex].rows.splice(
          rindex + 1,
          0,
          cloneObj
        );
      } else if ( null !== sindex ) {
        let self = this;
        cloneObj.id = this.uid();
        cloneObj.rows.forEach( function( row ) {
          row.id = self.uid();
          row.cols.forEach( function( col ) {
            col.id = self.uid();
            col.blocks.forEach( function( block ) {
              block.id = self.uid();
            });
          });
        });

        // clone section
        this.shared.settings.document.sections.splice( sindex + 1, 0, cloneObj );
      }

      // focus
      this.focus_block( cloneObj.id );
      this.edit_block( cloneObj.id, null, true );

    },
    delete_blank_element: function(
      sindex = null,
      rindex = null,
      cindex = null,
      bindex = null
    ) {

      // delete row
      if ( null !== sindex && null !== rindex ) {

        //console.log('dsfsdffd');
        // delete section
        this.$delete(
          this.shared.settings.document.sections[sindex].rows,
          rindex
        );
      } else if ( null !== sindex ) {

        // delete section
        this.$delete( this.shared.settings.document.sections, sindex );
      }

    },
    delete_element: function(
      sindex = null,
      rindex = null,
      cindex = null,
      bindex = null
    ) {
      this.$swal({

        //imageUrl: this.shared.plugin_path + "public/img/delete.png",
        title: __( 'Are you sure you want to delete?', process.env.VUE_APP_TEXTDOMAIN ),
        type: null,
        showCancelButton: true,
        confirmButtonColor: '#d33',

        //cancelButtonColor: '',
        confirmButtonText: __( 'Yes, delete it!', process.env.VUE_APP_TEXTDOMAIN ),
      }).then( result => {
        if ( result.value ) {
          if (
            null !== sindex &&
						null !== rindex &&
						null !== cindex &&
						null !== bindex
          ) {

            // delete block
            this.$delete(
              this.shared.settings.document.sections[sindex].rows[rindex].cols[
                cindex
              ].blocks,
              bindex
            );
          } else if ( null !== sindex && null !== rindex ) {

            // delete row
            // this.$delete(
            // 	this.shared.settings.document.sections[sindex].rows,
            // 	rindex
            // );
            //console.log(this.shared.settings.document.sections[sindex].rows.length);
            if (
              1 == this.shared.settings.document.sections[sindex].rows.length
            ) {

              // del columns if last row
              this.shared.settings.document.sections[sindex].rows[0].cols = [];
            } else {
              this.$delete(
                this.shared.settings.document.sections[sindex].rows,
                rindex
              );
            }
          } else if ( null !== sindex ) {

            // delete section
            this.$delete( this.shared.settings.document.sections, sindex );
          }
          this.$router.push({ name: 'setup_block_options' });

          this.$swal({
            imageUrl:
							this.shared.plugin_path + 'public/svg/success-24px-white.svg',
            text: 'Deleted',
            toast: true,
            type: null,
            customClass: 'sp-toast-error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
    },
    edit_block: function( index, length = null, force = false ) {

      //console.log(index);
      if ( this.shared.highlight_option_target != index && false === force ) {

        // console.log(index);
        // console.log('gothere');
        return false;
      }
      if ( 0 === length ) {
        return false;
      }

			 //console.log(index);
      //this.shared.highlight_option_target = true;
      if ( this.$route.params.blockid != index ) {
        this.$router.push({
          name: 'setup_block_options',
          params: {
            id: this.shared.lpage.id,
            blockid: index,
          },
        });
      }
    },
    uid: function() {
      let uid =
				String.fromCharCode( 97 + Math.floor( Math.random() * 26 ) ) +
				Math.random()
				  .toString( 36 )
				  .substring( 2, 7 )
				  .toLowerCase();
      return uid;
    },
    help_iframe: function( url ) {
      let u_s = url.split( '#' );
      let hash = '';

      //console.log(u_s);
      if ( u_s[1]) {
        url = u_s[0];
        hash = u_s[1];
      }
      this.$swal({
        width: 600,
        html:
					'<iframe class=\'iframe_loading\' id=\'inline-help\' src=\'https://staging.seedprod.com/docs/' +
					url +
					'?iframe=1' +
					'&hash=' +
					hash +
					'\' style=\'width:100%;\' onload=\'help_iframe()\'></iframe>',
        toast: false,
        showCancelButton: true,
        cancelButtonText: 'Close',
        confirmButtonText:
					__( 'Visit Docs&nbsp;<i class="fas fa-external-link-alt"></i>', process.env.VUE_APP_TEXTDOMAIN ),
      }).then( result => {
        if ( result.value ) {
          let rurl = 'https://staging.seedprod.com/docs/' + url + '#' + hash;
          window.open( rurl, '_blank' );
        }
      });
    },
    show_upgrade_notice: function(
      feature,
      details,
      medium = 'link',
      generic = false
    ) {
      let _self = this;
      if ( generic ) {
        feature = __( 'Upgrade to PRO', process.env.VUE_APP_TEXTDOMAIN );
        details =
					__( 'Increase traffic, engagement, and get more email subscribers. Click below to learn more about all our awesome features.', process.env.VUE_APP_TEXTDOMAIN ) ;
      } else {
        feature = feature + __( ' is a PRO Feature', process.env.VUE_APP_TEXTDOMAIN );
        details =
					__( 'We\'re sorry, the ', process.env.VUE_APP_TEXTDOMAIN ) +
					details +
					__( ' feature is not available on your plan. Please upgrade to the PRO plan to unlock all these awesome features.', process.env.VUE_APP_TEXTDOMAIN );
      }
      this.$swal({
        customContainerClass: 'seedprod-upgrade-popup',
        imageUrl: _self.shared.plugin_path + 'public/img/lock.svg',
        title: feature,
        text: details,
        type: null,
        showCancelButton: false,
        confirmButtonColor: '#4CAF50',
        cancelButtonColor: '#d33',
        confirmButtonText: __( 'UPGRADE TO PRO', process.env.VUE_APP_TEXTDOMAIN ),
        showCloseButton: true,
        footer:
					'<i class="fas fa-check-circle"></i><div style="text-align:center;margin-left:40px;margin-right:40px;">' +
					__( '<strong>Bonus:</strong>&nbsp;SeedProd Lite users get a discount off the regular price, automatically applied at checkout.', process.env.VUE_APP_TEXTDOMAIN ) +
					'</div>',
      }).then( result => {
        if ( result.value ) {
          window.open( this.shared.upgrade_link + medium, '_blank' );
          this.$swal.fire({
            customContainerClass: 'seedprod-moreinfo-popup',
            imageUrl:
							_self.shared.plugin_path + 'public/img/info-with-circle.svg',
            type: null,
            html:
							__( 'Thanks for your interest in SeedProd Pro!<br>If you have any questions or issues just <a href=\'https://www.seedprod.com/?contact=1\' target=\'_blank\'>let us know</a>.<br><br>After purchasing SeedProd Pro, you\'ll need to download and install the Pro version of the plugin, and then remove the free plugin. <br><br>(Don\'t worry, all your settings will be preserved.)', process.env.VUE_APP_TEXTDOMAIN ),
          });
        }
      });
    },
    show_uplock_notice: function(
      feature,
      details,
      medium = 'link',
      generic = false
    ) {
      let _self = this;
      if ( generic ) {
        feature = __( 'Upgrade to PRO', process.env.VUE_APP_TEXTDOMAIN );
        details =
					__( 'Increase traffic, engagement, and get more email subscribers. Click below to learn more about all our awesome features.', process.env.VUE_APP_TEXTDOMAIN );
      } else {
        feature = __( 'Upgrade to Unlock ', process.env.VUE_APP_TEXTDOMAIN ) + feature;
        details =
					__( 'We\'re sorry, the ', process.env.VUE_APP_TEXTDOMAIN ) +
					details +
					__( ' feature is not available on your plan. Please upgrade your plan to unlock this feature and more!', process.env.VUE_APP_TEXTDOMAIN );
      }
      this.$swal({
        customContainerClass: 'seedprod-upgrade-popup',
        imageUrl: _self.shared.plugin_path + 'public/img/lock.svg',
        title: feature,
        text: details,
        type: null,
        showCancelButton: false,
        confirmButtonColor: '#4CAF50',
        cancelButtonColor: '#d33',
        confirmButtonText: 'UPGRADE',
        showCloseButton: true,
        footer: __( 'Upgrade with just a click of a button!', process.env.VUE_APP_TEXTDOMAIN ),
      }).then( result => {
        if ( result.value ) {
          window.open(
            'https://app.seedprod.com/upgrade-license?license_key=' +
							_self.shared.license_key +
							'&api_token=' +
							_self.shared.api_token,
            '_blank'
          );

          // this.$swal.fire(
          //     {
          //         customContainerClass: 'seedprod-moreinfo-popup',
          //         imageUrl:
          //             _self.shared.plugin_path +
          //             "public/img/info-with-circle.svg",
          //         type: null,
          //         html: "Thanks for your interest in SeedProd Pro!<br>If you have any questions or issues just <a href='https://www.seedprod.com/?contact=1' target='_blank'>let us know</a>.<br><br>After purchasing SeedProd Pro, you'll need to download and install the Pro version of the plugin, and then remove the free plugin. <br><br>(Don't worry, all your settings will be preserved.)"

          //     }

          // );
        }
      });
    },
    debounce_update_mobile_css: _.debounce( function( e ) {
      jQuery( '#tmp-custom-mobile-css-style' ).remove();
      jQuery( 'head' ).append(
        '<style id=\'tmp-custom-mobile-css-style\' type=\'text/css\'></style>'
      );
      jQuery( '#tmp-custom-mobile-css-style' ).html( this.generate_mobile_css() );
    }, 100 ),
    update_mobile_css() {
      jQuery( '#tmp-custom-mobile-css-style' ).remove();
      jQuery( 'head' ).append(
        '<style id=\'tmp-custom-mobile-css-style\' type=\'text/css\'></style>'
      );
      jQuery( '#tmp-custom-mobile-css-style' ).html( this.generate_mobile_css() );
    },
    generate_mobile_css() {
      let content = document.documentElement.innerHTML;

      let regex = /data-mobile-css="([^"]*)"/g;
      let contentData = [];

      if ( ! lodash.isEmpty( content.match( regex ) ) ) {
        contentData = [ ...content.match( regex ) ];
      }

      let css = '';

      if ( ! lodash.isEmpty( contentData ) ) {

        // Looping through object
        contentData.forEach( element => {
          let attrValue = element.match( /"([^"]+)"/ );

          if ( Array.isArray( attrValue ) ) {

            // Process
            let splitString = attrValue[1].split( '|' );

            let element = splitString[0];
            let styles = splitString[1];

            // Check for multiple elements
            let multiElements = element.split( ',' );
            let elementsLength = multiElements.length;
            let selectorCss = '';

            for ( let j = 0; j < elementsLength; j++ ) {
              if ( ! lodash.isEmpty( multiElements[j]) ) {
                if ( 0 === j ) {
                  selectorCss += `.sp-mobile-view ${ multiElements[j] }`;
                } else {
                  selectorCss += `, .sp-mobile-view ${ multiElements[j] }`;
                }
              }
            }

            let splitStyles = styles.split( ';' );
            let stylesLength = splitStyles.length;
            let finalStyle = `${selectorCss} {`;

            for ( let i = 0; i < stylesLength; i++ ) {
              if ( ! lodash.isEmpty( splitStyles[i]) ) {
                finalStyle += `${ splitStyles[i].replace( ';', '' ) } !important;`;
              }
            }

            finalStyle += '}';
            css += finalStyle;
          }

        });
      }

      this.shared.settings.document.settings.mobileCss = css;
      return css;
    },
    generate_mobile_css_old() {

      //console.log(this.traverse(seedprod_store.settings.document,this.process));
      let css = '';
      let mobile_values = this.traverse(
        seedprod_store.settings.document,
        this.process
      );

      mobile_values.forEach( function( value ) {
        let mv = value.split( ',' );

        if ( false === lodash.isEmpty( mv[2]) ) {
          let id_new_block = true;
          if ( block_id == 'sp-' + mv[0]) {
            id_new_block = false;
          }
          var block_id = 'sp-' + mv[0];
          let property = lodash.kebabCase( mv[1].replace( '_mobile', '' ) );
          let val = mv[2];

          css = css + '.sp-mobile-view ' + '#' + block_id + '.sp-css-target{';
          if ( 'line-height' == property ) {
            css = css + property + ':' + val + ' !important;';
          } else {
            css = css + property + ':' + val + 'px !important;';
          }
          css = css + ' }';

          css = css + '.sp-mobile-view ' + '#' + block_id + ' .sp-css-target{';
          if ( 'line-height' == property ) {
            css = css + property + ':' + val + ' !important;';
          } else {
            css = css + property + ':' + val + 'px !important;';
          }
          css = css + ' }';
        }
      });
      this.shared.settings.document.settings.mobileCss = css;
      return css;
    },
    process( key, value, id, translations ) {
      if ( -1 !== key.indexOf( '_mobile' ) ) {
        if ( false === !! ~translations.indexOf( value ) ) {

          //console.log(id + "-" + key + " : "+value);
          translations.push( id + ',' + key + ',' + value );
        }
      }
    },
    traverse( o, func, id = null, translations = []) {
      for ( let i in o ) {
        if ( 0 === i.indexOf( 'id' ) ) {
          id = o[i];
        }

        //console.log(id, );
        func.apply( this, [ i, o[i], id, translations ]);
        if ( null !== o[i] && 'object' == typeof o[i]) {

          //going one step down in the object tree!!
          this.traverse( o[i], func, id, translations );
        }
      }

      return translations;
    },
    debounce_update_placeholder_css: _.debounce( function( e ) {
      jQuery( '#tmp-custom-placeholder-css-style' ).remove();
      jQuery( 'head' ).append(
        '<style id=\'tmp-custom-placeholder-css-style\' type=\'text/css\'></style>'
      );
      jQuery( '#tmp-custom-placeholder-css-style' ).html( this.generate_placeholder_css() );
    }, 100 ),
    update_placeholder_css() {
      jQuery( '#tmp-custom-placeholder-css-style' ).remove();
      jQuery( 'head' ).append(
        '<style id=\'tmp-custom-placeholder-css-style\' type=\'text/css\'></style>'
      );
      jQuery( '#tmp-custom-placeholder-css-style' ).html( this.generate_placeholder_css() );
    },
    generate_placeholder_css() {

      //console.log(this.traverse(seedprod_store.settings.document,this.process));
      let css = '';
      let placeholder_values = this.traverse(
        seedprod_store.settings.document,
        this.process_placeholder
      );

      placeholder_values.forEach( function( value ) {
        let mv = value.split( ',' );

        if ( false === lodash.isEmpty( mv[2]) ) {
          let id_new_block = true;
          if ( block_id == 'sp-' + mv[0]) {
            id_new_block = false;
          }
          var block_id = 'sp-' + mv[0];
          let val = mv[2];
          let placeholderColor = tinycolor( val ).setAlpha( .7 );

          css = css + 'input::placeholder, #' + block_id + ' input::placeholder {';
          css = css +  'color:' + '' + placeholderColor + '';
          css = css + ' }';
        }
      });

      //console.log(css);
      this.shared.settings.document.settings.placeholderCss = css;
      return css;
    },
    process_placeholder( key, value, id, translations ) {
      if ( -1 !== key.indexOf( 'fieldTextColor' ) ) {
        if ( false === !! ~translations.indexOf( value ) ) {

          //console.log(id + "-" + key + " : "+value);
          translations.push( id + ',' + key + ',' + value );
        }
      }
    },
  },
};
