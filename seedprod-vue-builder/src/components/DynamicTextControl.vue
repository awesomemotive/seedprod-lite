<template>
  <div class="sp-dynamictext-control">
    <div
      class="sp-flex sp-mb-4 sp-items-center sp-justify-between sp-relative sp-cursor-pointer sp-relative"
    >
      
      <div class="sp-dynamictext-section">

            <button @click="addDynamicText" class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-text-neutral-80 sp-py-2.5 sp-px-5 sp-rounded sp-flex sp-items-center sp-mt-3 sp-text-sm sp-font-semibold">     
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" class="sp-current-fill sp-w-4 sp-h-4 sp-mr-2"><path d="M0,0h24v24H0V0z" fill="none"/><path d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"/></svg> {{ txt_1 }} 
            </button>
            
            <modal
                v-if="show_modal_dynamictext"
                @close="show_modal_dynamictext = false"
                class="sp-dynamic-text-modal"
               
              >
                <div slot="body" class="sp-py-6 sp-px-10 sp-relative" >


                  <h3 class="sp-text-lg sp-font-bold sp-mb-3">{{txt_20}}</h3>
                  <div class="sp-form-group sp-text-15px sp-mb-4" v-html="txt_32"></div> 

                  <div class="sp-form-group sp-mb-4">
                  <span class="sp-mr-2">
                    <input type="radio" value="datetime" checked v-model="categorytextType" />
                    {{txt_21}}
                  </span>
                  <span class="sp-mr-2">
                    <input type="radio" value="queryparameter" v-model="categorytextType"/>
                    {{txt_22}}
                  </span>
                  </div>
                  


                  <div v-if="categorytextType=='datetime'" class="sp-form-group">

                      <div class="sp-form-group">
                        <label> {{ txt_30 }}</label>
                        <select v-model="block.settings[dynamicinputname+'dateTimeFormat']" class="sp-form-select">
                            <option value=""></option>
                            <option value='<span class="sp-dynamic-text">[#today :%A]</span>'>{{txt_23}}</option>
                            <option value='<span class="sp-dynamic-text">[#tomorrow :%A]</span>'>{{txt_24}}</option>
                            <option value='<span class="sp-dynamic-text">[#today :%D]</span>'>{{txt_25}}</option>
                            <option value='<span class="sp-dynamic-text">[#tomorrow :%D]</span>'>{{txt_26}}</option>
                            <option value='<span class="sp-dynamic-text">[#this month :%B]</span>'>{{txt_27}}</option>
                            <option value='<span class="sp-dynamic-text">[#next month :%B]</span>'>{{txt_28}}</option>
                            <option value='<span class="sp-dynamic-text">[#this year :%Y]</span>'>{{txt_29}}</option>
                        </select>
                        <span class="sp-text-red" v-if="showError==true">{{ txt_17 }}</span>
                        <small class="sp-block sp-mt-2">{{txt_36}}</small>
                      </div>


                     <div class="sp-form-group">    
                        <button
                          @click="dateFormatChanged"
                          class="sp-bg-primary hover:sp-primary-darker sp-text-white sp-py-2 sp-px-5 sp-rounded sp-items-center sp-mr-3 sp-mt-3 sp-text-sm sp-font-semibold"
                        >{{txt_18}}</button>

                        <button
                          @click="show_modal_dynamictext = false"
                          class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-text-neutral-80 sp-py-2 sp-px-5 sp-rounded sp-items-center sp-mt-3 sp-text-sm sp-font-semibold"
                        >{{txt_19}}</button>
                     </div>


                  </div>

                  <div v-if="categorytextType=='queryparameter'">

                      <div class="sp-form-group">
                        <label> {{ txt_33 }}</label>
                        <input type="text" v-model="block.settings[dynamicinputname+'parameterName']" class="sp-form-input" @change="makequeryparameter()" @blur="makequeryparameter()" />
                        <span  class="sp-text-red" v-if="showErrorQuery==true">{{ txt_35 }}</span>
                      </div> 

                      <div class="sp-form-group">
                        <label> {{ txt_34 }}</label>
                        <input type="text" v-model="block.settings[dynamicinputname+'defaultValue']" class="sp-form-input"  @change="makequeryparameter()" @blur="makequeryparameter()" />
                      </div> 


                      <div class="sp-form-group sp-hidden">
                        <label> {{ txt_31 }}</label>
                        <input type="text" v-model="block.settings[dynamicinputname+'queryParameters']" placeholder="[q:parametername=defaultvalue]" class="sp-form-input" />
                      </div> 

                      <div class="sp-form-group">   
                        <button
                          @click="addQueryParameters"
                          class="sp-bg-neutral-40 hover:sp-bg-neutral-60 sp-text-neutral-80 sp-py-2 sp-px-5 sp-rounded sp-items-center sp-mr-2 sp-mt-3 sp-text-sm sp-font-semibold"
                        >{{txt_18}}</button>  
                              
                        <button
                          @click="show_modal_dynamictext = false"
                          class="sp-bg-neutral-10 hover:sp-bg-neutral-15 sp-text-neutral-80 sp-py-2 sp-px-5 sp-rounded sp-items-center sp-mr-2 sp-mt-3 sp-text-sm sp-font-semibold"
                        >{{txt_19}}</button>
                      </div>

                  </div>


                </div>
                <h3 slot="header"></h3>
                

              </modal>



      </div>


    </div>
  </div>
</template>

<script>
import { __ } from '@wordpress/i18n';
import { helpers } from '../mixins/helpers.js';

import Modal from '@/components/Modal.vue';

export default {
  name: 'DynamicTextControl',
  mixins: [ helpers ],
  data() {
    return {
      txt_1: __( 'Insert Dynamic Text', process.env.VUE_APP_TEXTDOMAIN ),
      txt_15: __( 'Please enter parameter name', process.env.VUE_APP_TEXTDOMAIN ),
      txt_16: __( 'Please enter date/time format', process.env.VUE_APP_TEXTDOMAIN ),
      txt_17: __( 'Please select date/time format', process.env.VUE_APP_TEXTDOMAIN ),
      txt_18: __( 'Insert', process.env.VUE_APP_TEXTDOMAIN ),
      txt_19: __( 'Cancel', process.env.VUE_APP_TEXTDOMAIN ),
      txt_20: __( 'Dynamic Text Replacement', process.env.VUE_APP_TEXTDOMAIN ),
      txt_21: __( 'DateTime', process.env.VUE_APP_TEXTDOMAIN ),
      txt_22: __( 'Query Parameter', process.env.VUE_APP_TEXTDOMAIN ), 
      txt_23: __( 'Today', process.env.VUE_APP_TEXTDOMAIN ),
      txt_24: __( 'Tommorow', process.env.VUE_APP_TEXTDOMAIN ),
      txt_25: __( 'Today Date', process.env.VUE_APP_TEXTDOMAIN ),
      txt_26: __( 'Tomorrow Date', process.env.VUE_APP_TEXTDOMAIN ),
      txt_27: __( 'Month', process.env.VUE_APP_TEXTDOMAIN ),
      txt_28: __( 'Next Month', process.env.VUE_APP_TEXTDOMAIN ),
      txt_29: __( 'Year', process.env.VUE_APP_TEXTDOMAIN ),
      txt_30: __( 'Select Date Time Format', process.env.VUE_APP_TEXTDOMAIN ),
      txt_31: __( 'Query Parameters', process.env.VUE_APP_TEXTDOMAIN ),
      txt_32: __( 'Dynamic Text allows to create evergreen text. You can create date based dynamic text or pass in by query parameter. <a href="https://www.seedprod.com/docs/dynamic-text" target="_blank" class="sp-text-primary hover:sp-underline">Learn More</a>', process.env.VUE_APP_TEXTDOMAIN ),
      txt_33: __( 'Parameter Name', process.env.VUE_APP_TEXTDOMAIN ),
      txt_34: __( 'Default Value', process.env.VUE_APP_TEXTDOMAIN ),
      txt_35: __( 'Please enter parameter name', process.env.VUE_APP_TEXTDOMAIN ),
      txt_36: __( "Don't see the date format you need? Click the Learn More link above to learn how to create any date.", process.env.VUE_APP_TEXTDOMAIN ),
      show_modal_dynamictext:false,
      categorytextType:'datetime',
      showError:false,
      showErrorQuery:false,
      shared: seedprod_store,
    };
  },

  mounted: function() {
      //this.resetDynamicTextModal();
  },
  methods: {
    resetDynamicTextModal(){
        this.categorytextType ='datetime';
        //this.block.settings[this.dynamicinputname+'categorytextType'] = 'datetime';
        this.block.settings[this.dynamicinputname+'dateTimeFormat'] = '';
        this.block.settings[this.dynamicinputname+'queryParameters'] = '';
        this.block.settings[this.dynamicinputname+'parameterName'] = '';
        this.block.settings[this.dynamicinputname+'defaultValue'] = '';
        this.showError = false;
        this.showErrorQuery = false;
    },
    addDynamicText(){
        this.resetDynamicTextModal();
        this.show_modal_dynamictext = true;
    },
    dateFormatChanged(){

        if(this.block.settings[this.dynamicinputname+'dateTimeFormat']!=""){
           var tArea = this.$parent.$refs[this.dynamicinputname+"Ref"];
           if(tArea.hasOwnProperty('$el')){
              tinyMCE.get(this.$parent.$refs[this.dynamicinputname+"Ref"].$el.id).insertContent(this.block.settings[this.inputname+'dateTimeFormat']);
           }else{
                var insert = this.block.settings[this.dynamicinputname+'dateTimeFormat'];
                var startPos = tArea.selectionStart,
                  endPos = tArea.selectionEnd,
                  cursorPos = startPos,
                  tmpStr = tArea.value;
                  let fullcontent = tmpStr.substring(0, startPos) + insert + tmpStr.substring(endPos, tmpStr.length);
                  //console.log(fullcontent);
                  this.$emit( 'input', fullcontent);
           }
           this.show_modal_dynamictext = false;
        }else{
           this.showError = true;
        }

    },
    addQueryParameters(){

        this.makequeryparameter();

        if(this.block.settings[this.dynamicinputname+'queryParameters']!=""){

           var tArea = this.$parent.$refs[this.dynamicinputname+"Ref"];
           if(tArea.hasOwnProperty('$el')){
              tinyMCE.get(this.$parent.$refs[this.dynamicinputname+"Ref"].$el.id).insertContent(this.block.settings[this.dynamicinputname+'queryParameters']);
           }else{
                var insert = this.block.settings[this.dynamicinputname+'queryParameters'];
                var startPos = tArea.selectionStart,
                  endPos = tArea.selectionEnd,
                  cursorPos = startPos,
                  tmpStr = tArea.value;

                  let fullcontent = tmpStr.substring(0, startPos) + insert + tmpStr.substring(endPos, tmpStr.length);
                  this.$emit( 'input', fullcontent);
           }
           this.show_modal_dynamictext = false;

        }else{
           this.showErrorQuery = true;
        }
    },
    makequeryparameter() {
        var query_paramter_data = '';
        let parameterName =  this.block.settings[this.dynamicinputname+'parameterName'];
        let defaultValue =  this.block.settings[this.dynamicinputname+'defaultValue'];

        if(parameterName!="" && parameterName!= undefined){

            query_paramter_data = "[q:"+parameterName+"]";

            if(defaultValue!="" && defaultValue!= undefined){
                query_paramter_data = "[q:"+parameterName+"="+defaultValue+"]";
            }

            query_paramter_data = '<span class="sp-dynamic-text">' + query_paramter_data  + '</span>';
            
        }

        this.block.settings[this.dynamicinputname+'queryParameters'] = query_paramter_data;
        
    },
  },
  watch: {

  },
  computed: {
    dynamicinputname: function() {
      if ( this.inputname === undefined ) {
        return '';
      } else {
        return this.inputname;
      }
    },
  },
  components: {
    Modal,
  },
  props: {
    block: Object,
    inputname: String,
  },
};
</script>
