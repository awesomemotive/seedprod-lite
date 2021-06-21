<template>
	<div :class="{ 'table-loading': loading }">
		<div class="table-loader-wrap" v-if="loading">
			<div class="table-loader-center">
				<div class="table-loader"></div>
				<div class="table-loader-txt">{{ txt_1 }}...</div>
			</div>
		</div>

		<div class="tablenav top">
			<div class="alignleft actions bulkactions" v-if="hasBulkActions">
				<label for="bulk-action-selector-top" class="screen-reader-text"
					>{{ txt_2 }}</label
				>

				<select
					name="action"
					id="bulk-action-selector-top"
					v-model="bulkLocal"
				>
					<option value="-1">{{ txt_3 }}</option>
					<option v-for="action in bulkActions" :value="action.key">{{
						action.label
					}}</option>
				</select>

				<button
					class="button action"
					style="margin-bottom:1px"
					@click.prevent="handleBulkAction"
					:disabled="
						!checkedItems.length &&
							this.bulkLocal.indexOf('all') === -1
					"
				>
					{{ txt_4 }}
				</button>
			</div>

			<div class="alignleft actions">
				<slot name="filters"></slot>
			</div>

			<div class="tablenav-pages">
				<span class="displaying-num">{{ itemsTotal }} {{ txt_5 }}</span>

				<span class="pagination-links" v-if="hasPagination">
					<span
						v-if="disableFirst"
						class="tablenav-pages-navspan button disabled"
						aria-hidden="true"
						>&laquo;</span
					>
					<a
						v-else
						href="#"
						class="first-page"
						@click.prevent="goToPage(1)"
					>
						<span
							aria-hidden="true"
							class="tablenav-pages-navspan button"
							>&laquo;</span
						>
					</a>

					<span
						v-if="disablePrev"
						class="tablenav-pages-navspan button disabled"
						aria-hidden="true"
						>&lsaquo;</span
					>
					<a
						v-else
						href="#"
						class="prev-page"
						@click.prevent="goToPage(currentPage - 1)"
					>
						<span
							aria-hidden="true"
							class="tablenav-pages-navspan button"
							>&lsaquo;</span
						>
					</a>

					<span class="paging-input">
						<span class="tablenav-paging-text">
							<input
								class="current-page"
								type="text"
								name="paged"
								:value="currentPage"
								aria-describedby="table-paging"
								size="1"
								@keyup.enter="goToCustomPage"
							/>
							of
							<span class="total-pages">{{ totalPages }}</span>
						</span>
					</span>

					<span
						v-if="disableNext"
						class="tablenav-pages-navspan button disabled"
						aria-hidden="true"
						>&rsaquo;</span
					>
					<a
						v-else
						href="#"
						class="next-page"
						@click.prevent="goToPage(currentPage + 1)"
					>
						<span
							aria-hidden="true"
							class="tablenav-pages-navspan button"
							>&rsaquo;</span
						>
					</a>

					<span
						v-if="disableLast"
						class="tablenav-pages-navspan button disabled"
						aria-hidden="true"
						>&raquo;</span
					>
					<a
						v-else
						href="#"
						class="last-page"
						@click.prevent="goToPage(totalPages)"
					>
						<span
							aria-hidden="true"
							class="tablenav-pages-navspan button"
							>&raquo;</span
						>
					</a>
				</span>
			</div>
		</div>
		<table :class="tableClass">
			<thead>
				<tr>
					<td
						v-if="showCb"
						class="manage-column column-cb check-column"
					>
						<input type="checkbox" v-model="selectAll" />
					</td>
					<th
						:key="key"
						v-for="(value, key) in columns"
						:class="[
							'column',
							key,
							{ sortable: isSortable(value) },
							{ sorted: isSorted(key) },
							{ asc: isSorted(key) && sortOrder === 'asc' },
							{ desc: isSorted(key) && sortOrder === 'desc' }
						]"
					>
						<template v-if="!isSortable(value)">
							{{ value.label }}
						</template>
						<a href="#" v-else @click.prevent="handleSortBy(key)">
							<span>{{ value.label }}</span>
							<span class="sorting-indicator"></span>
						</a>
					</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
					<td
						v-if="showCb"
						class="manage-column column-cb check-column"
					>
						<input type="checkbox" v-model="selectAll" />
					</td>
					<th
						:key="key"
						v-for="(value, key) in columns"
						:class="['column', key]"
					>
						{{ value.label }}
					</th>
				</tr>
			</tfoot>
			<tbody>
				<template v-if="rows.length">
					<tr
						v-for="row in rows"
						:key="row[index]"
						:class="row['class']"
						@mouseover="rowOver(row)"
						@mouseleave="rowOut(row)"
					>
						<th scope="row" class="check-column" v-if="showCb">
							<input
								type="checkbox"
								name="item[]"
								:value="row[index]"
								v-model="checkedItems"
							/>
						</th>
						<td
							:key="key"
							v-for="(value, key) in columns"
							:class="['column', key]"
						>
							<slot :name="key" :row="row">{{ row[key] }}</slot>

							<div
								v-if="actionColumn === key && hasActions"
								class="row-actions"
							>
								<slot name="row-actions" :row="row">
									<span
										:key="key"
										v-for="(action,key) in actions"
										:class="action.key"
										v-if="filter != 'archived'"
									>
										<a
											href="#"
											@click.prevent="
												actionClicked(action.key, row)
											"
											>{{ action.label }}</a
										>
										<template
											v-if="
												!hideActionSeparator(action.key)
											"
										>
											|
										</template>
									</span>
								</slot>
							</div>
						</td>
					</tr>
				</template>
				<tr v-else>
					<td :colspan="colspan">{{ txt_6 }}</td>
				</tr>
			</tbody>
		</table>
		<div class="tablenav bottom">
			<div class="alignleft actions bulkactions" v-if="hasBulkActions">
				<label for="bulk-action-selector-bottom" class="screen-reader-text"
					>{{ txt_7 }}</label
				>

				<select
					name="action"
					id="bulk-action-selector-bottom"
					v-model="bulkLocal"
				>
					<option value="-1">{{ txt_3 }}</option>
					<option v-for="(action,key) in bulkActions" :value="action.key" :key="key">{{
						action.label
					}}</option>
				</select>

				<button
					class="button action"
					style="margin-bottom:1px"
					@click.prevent="handleBulkAction"
					:disabled="!checkedItems.length"
				>
					{{ txt_4 }}
				</button>
			</div>

			<div class="tablenav-pages">
				<span class="displaying-num">{{ itemsTotal }} {{ txt_5 }}</span>

				<span class="pagination-links" v-if="hasPagination">
					<span
						v-if="disableFirst"
						class="tablenav-pages-navspan button disabled"
						aria-hidden="true"
						>&laquo;</span
					>
					<a
						v-else
						href="#"
						class="first-page"
						@click.prevent="goToPage(1)"
					>
						<span
							aria-hidden="true"
							class="tablenav-pages-navspan button"
							>&laquo;</span
						>
					</a>

					<span
						v-if="disablePrev"
						class="tablenav-pages-navspan button disabled"
						aria-hidden="true"
						>&lsaquo;</span
					>
					<a
						v-else
						href="#"
						class="prev-page"
						@click.prevent="goToPage(currentPage - 1)"
					>
						<span
							aria-hidden="true"
							class="tablenav-pages-navspan button"
							>&lsaquo;</span
						>
					</a>

					<span class="paging-input">
						<span class="tablenav-paging-text">
							<input
								class="current-page"
								type="text"
								name="paged"
								:value="currentPage"
								aria-describedby="table-paging"
								size="1"
								@keyup.enter="goToCustomPage"
							/>
							of
							<span class="total-pages">{{ totalPages }}</span>
						</span>
					</span>

					<span
						v-if="disableNext"
						class="tablenav-pages-navspan button disabled"
						aria-hidden="true"
						>&rsaquo;</span
					>
					<a
						v-else
						href="#"
						class="next-page"
						@click.prevent="goToPage(currentPage + 1)"
					>
						<span
							aria-hidden="true"
							class="tablenav-pages-navspan button"
							>&rsaquo;</span
						>
					</a>

					<span
						v-if="disableLast"
						class="tablenav-pages-navspan button disabled"
						aria-hidden="true"
						>&raquo;</span
					>
					<a
						v-else
						href="#"
						class="last-page"
						@click.prevent="goToPage(totalPages)"
					>
						<span
							aria-hidden="true"
							class="tablenav-pages-navspan button"
							>&raquo;</span
						>
					</a>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import { __ } from '@wordpress/i18n';
export default {
  name: 'ListTable',

  props: {
    filter: {
      type: String,
      default: '',
    },
    columns: {
      type: Object,
      required: true,
      default: function() {
        return {};
      },
    },
    rows: {
      type: Array, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: function() {
        return [];
      },
    },
    index: {
      type: String,
      default: 'id',
    },
    showCb: {
      type: Boolean,
      default: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    actionColumn: {
      type: String,
      default: '',
    },
    actions: {
      type: Array,
      required: false,
      default: function() {
        return [];
      },
    },
    bulkActions: {
      type: Array,
      required: false,
      default: function() {
        return [];
      },
    },
    tableClass: {
      type: String,
      default: 'wp-list-table widefat fixed striped',
    },
    notFound: {
      type: String,
      default: 'No items found.',
    },
    totalItems: {
      type: Number,
      default: 0,
    },
    totalPages: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 20,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    sortBy: {
      type: String,
      default: null,
    },
    sortOrder: {
      type: String,
      default: 'asc',
    },
  },

  data() {
    return {
      txt_1: __( 'Loading', process.env.VUE_APP_TEXTDOMAIN ),
      txt_2: __( 'Select bulk action', process.env.VUE_APP_TEXTDOMAIN ),
      txt_3: __( 'Bulk Actions', process.env.VUE_APP_TEXTDOMAIN ),
      txt_4: __( 'Apply', process.env.VUE_APP_TEXTDOMAIN ),
      txt_5: __( 'items', process.env.VUE_APP_TEXTDOMAIN ),
      txt_6: __( 'No items found.', process.env.VUE_APP_TEXTDOMAIN ),
      txt_7: __( 'Select bulk action', process.env.VUE_APP_TEXTDOMAIN ),
      txt_8: __( 'Select bulk action', process.env.VUE_APP_TEXTDOMAIN ),
      bulkLocal: '-1',
      checkedItems: [],
      shared: seedprod_store_admin,
    };
  },

  computed: {
    hasActions() {
      return 0 < this.actions.length;
    },

    hasBulkActions() {
      this.bulkLocal = '-1';
      return 0 < this.bulkActions.length;
    },

    itemsTotal() {

      return this.totalItems || this.rows.length;
    },

    hasPagination() {
      return this.itemsTotal > this.perPage;
    },

    disableFirst() {
      if ( 1 === this.currentPage || 2 === this.currentPage ) {
        return true;
      }

      return false;
    },

    disablePrev() {
      if ( 1 === this.currentPage ) {
        return true;
      }

      return false;
    },

    disableNext() {
      if ( this.currentPage === this.totalPages ) {
        return true;
      }

      return false;
    },

    disableLast() {
      if (
        this.currentPage === this.totalPages ||
				this.currentPage == this.totalPages - 1
      ) {
        return true;
      }

      return false;
    },

    colspan() {
      let columns = Object.keys( this.columns ).length;

      if ( this.showCb ) {
        columns += 1;
      }

      return columns;
    },

    selectAll: {
      get: function() {
        if ( ! this.rows.length ) {
          return false;
        }

        return this.rows ?
          this.checkedItems.length == this.rows.length :
          false;
      },

      set: function( value ) {
        let selected = [],
          self = this;

        if ( value ) {
          this.rows.forEach( function( item ) {
            if ( item[self.index] !== undefined ) {
              selected.push( item[self.index]);
            } else {
              selected.push( item.id );
            }
          });
        }

        this.checkedItems = selected;
      },
    },
  },

  methods: {
    hideActionSeparator( action ) {
      return action === this.actions[this.actions.length - 1].key;
    },

    rowOver( row ) {
      this.$emit( 'rowOver', row );
    },

    rowOut( row ) {
      this.$emit( 'rowOut', row );
    },

    actionClicked( action, row ) {
      this.$emit( 'action:click', action, row );
    },

    goToPage( page ) {
      this.$emit( 'pagination', page );
    },

    goToCustomPage( event ) {
      let page = parseInt( event.target.value );

      if ( ! isNaN( page ) && ( 0 < page && page <= this.totalPages ) ) {
        this.$emit( 'pagination', page );
      }
    },

    handleBulkAction() {
      if ( '-1' === this.bulkLocal ) {
        return;
      }

      this.$emit( 'bulk:click', this.bulkLocal, this.checkedItems );
    },

    clear_checked() {
      this.checkedItems = [];
    },

    isSortable( column ) {
      if ( column.hasOwnProperty( 'sortable' ) && true === column.sortable ) {
        return true;
      }

      return false;
    },

    isSorted( column ) {
      return column === this.sortBy;
    },

    handleSortBy( column ) {
      let order = 'asc' === this.sortOrder ? 'desc' : 'asc';

      this.$emit( 'sort', column, order );
    },
  },
};
</script>

