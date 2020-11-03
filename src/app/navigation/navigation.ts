import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : '',
        translate: '',
        type     : 'group',
        icon     : 'apps',
        children : [
            
            {
                id       : 'Manage Shipments',
                title    : 'Manage Shipments',
                translate: 'Applications',
                type     : 'collapsable',
                icon     : 'build',
                url       : '/dashboard',
                children : [
                    {
                        id        : 'shipments',
                        title     : 'Shipments',
                        type      : 'item',
                        url       : '/shipments',
                    },
                    // {
                    //     id        : 'products',
                    //     title     : 'Items',
                    //     type      : 'item',
                    //     url       : '/e-commerce/products',
                    //     exactMatch: true
                    // },
                    // {
                    //     id        : 'productDetail',
                    //     title     : 'Item Detail',
                    //     type      : 'item',
                    //     url       : '/e-commerce/products/1/printed-dress',
                    //     // exactMatch: true
                    // },
                    {
                        id        : 'orders',
                        title     : 'Link 2',
                        type      : 'item',
                        url       : '/shipments1',
                    },
                    {
                        id        : 'orders',
                        title     : 'Link 3',
                        type      : 'item',
                        url       : '/shipments2',
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Link 4',
                        type      : 'item',
                        url       : '/shipments3',
                    }
                ]
            },
            // {
            //     id       : 'e-commerce-2',
            //     title    : 'E-Commerce-2',
            //     translate: 'Category 2',
            //     type     : 'collapsable',
            //     icon     : 'edit',
            //     children : [
            //         {
            //             id        : 'products',
            //             title     : 'Link 1',
            //             type      : 'item',
            //             url       : '/e-commerce/products2',
            //             exactMatch: true
            //         },
            //         {
            //             id        : 'productDetail',
            //             title     : 'Link 2',
            //             type      : 'item',
            //             url       : '/e-commerce/products/1/printed-dress2',
            //             // exactMatch: true
            //         }
            //     ]
            // },
        ]
    //         {
    //             id       : 'dashboards',
    //             title    : 'Dashboards',
    //             translate: 'NAV.DASHBOARDS',
    //             type     : 'collapsable',
    //             icon     : 'dashboard',
    //             children : [
    //                 {
    //                     id   : 'analytics',
    //                     title: 'Analytics',
    //                     type : 'item',
    //                     url  : '/apps/dashboards/analytics'
    //                 },
    //                 {
    //                     id   : 'project',
    //                     title: 'Project',
    //                     type : 'item',
    //                     url  : '/apps/dashboards/project'
    //                 }
    //             ]
    //         },
    //         {
    //             id       : 'calendar',
    //             title    : 'Calendar',
    //             translate: 'NAV.CALENDAR',
    //             type     : 'item',
    //             icon     : 'today',
    //             url      : '/apps/calendar'
    //         },
    //         {
    //             id       : 'e-commerce',
    //             title    : 'E-Commerce',
    //             translate: 'NAV.ECOMMERCE',
    //             type     : 'collapsable',
    //             icon     : 'shopping_cart',
    //             children : [
    //                 {
    //                     id        : 'products',
    //                     title     : 'Products',
    //                     type      : 'item',
    //                     url       : '/e-commerce/products',
    //                     exactMatch: true
    //                 },
    //                 {
    //                     id        : 'productDetail',
    //                     title     : 'Product Detail',
    //                     type      : 'item',
    //                     url       : '/e-commerce/products/1/printed-dress',
    //                     // exactMatch: true
    //                 },
    //                 {
    //                     id        : 'orders',
    //                     title     : 'Orders',
    //                     type      : 'item',
    //                     url       : '/e-commerce/orders',
    //                     exactMatch: true
    //                 },
    //                 {
    //                     id        : 'orderDetail',
    //                     title     : 'Order Detail',
    //                     type      : 'item',
    //                     url       : '/e-commerce/orders/1',
    //                     exactMatch: true
    //                 }
    //             ]
    //         },
    //         {
    //             id       : 'academy',
    //             title    : 'Academy',
    //             translate: 'NAV.ACADEMY',
    //             type     : 'item',
    //             icon     : 'school',
    //             url      : '/apps/academy'
    //         },
    //         {
    //             id       : 'mail',
    //             title    : 'Mail',
    //             translate: 'NAV.MAIL.TITLE',
    //             type     : 'item',
    //             icon     : 'email',
    //             url      : '/apps/mail',
    //             badge    : {
    //                 title    : '25',
    //                 translate: 'NAV.MAIL.BADGE',
    //                 bg       : '#F44336',
    //                 fg       : '#FFFFFF'
    //             }
    //         },
    //         {
    //             id       : 'mail-ngrx',
    //             title    : 'Mail Ngrx',
    //             translate: 'NAV.MAIL_NGRX.TITLE',
    //             type     : 'item',
    //             icon     : 'email',
    //             url      : '/apps/mail-ngrx',
    //             badge    : {
    //                 title    : '13',
    //                 translate: 'NAV.MAIL_NGRX.BADGE',
    //                 bg       : '#EC0C8E',
    //                 fg       : '#FFFFFF'
    //             }
    //         },
    //         {
    //             id       : 'chat',
    //             title    : 'Chat',
    //             translate: 'NAV.CHAT',
    //             type     : 'item',
    //             icon     : 'chat',
    //             url      : '/apps/chat',
    //             badge    : {
    //                 title: '13',
    //                 bg   : '#09d261',
    //                 fg   : '#FFFFFF'
    //             }
    //         },
    //         {
    //             id       : 'file-manager',
    //             title    : 'File Manager',
    //             translate: 'NAV.FILE_MANAGER',
    //             type     : 'item',
    //             icon     : 'folder',
    //             url      : '/apps/file-manager'
    //         },
    //         {
    //             id       : 'contacts',
    //             title    : 'Contacts',
    //             translate: 'NAV.CONTACTS',
    //             type     : 'item',
    //             icon     : 'account_box',
    //             url      : '/apps/contacts'
    //         },
    //         {
    //             id       : 'to-do',
    //             title    : 'To-Do',
    //             translate: 'NAV.TODO',
    //             type     : 'item',
    //             icon     : 'check_box',
    //             url      : '/apps/todo',
    //             badge    : {
    //                 title: '3',
    //                 bg   : '#FF6F00',
    //                 fg   : '#FFFFFF'
    //             }
    //         },
    //         {
    //             id       : 'scrumboard',
    //             title    : 'Scrumboard',
    //             translate: 'NAV.SCRUMBOARD',
    //             type     : 'item',
    //             icon     : 'assessment',
    //             url      : '/apps/scrumboard'
    //         }
    //     ]
    // },
    // {
    //     id      : 'pages',
    //     title   : 'Pages',
    //     type    : 'group',
    //     icon    : 'pages',
    //     children: [
    //         {
    //             id      : 'authentication',
    //             title   : 'Authentication',
    //             type    : 'collapsable',
    //             icon    : 'lock',
    //             badge   : {
    //                 title: '10',
    //                 bg   : '#525e8a',
    //                 fg   : '#FFFFFF'
    //             },
    //             children: [
    //                 {
    //                     id   : 'login',
    //                     title: 'Login',
    //                     type : 'item',
    //                     url  : '/pages/auth/login'
    //                 },
    //                 {
    //                     id   : 'login-v2',
    //                     title: 'Login v2',
    //                     type : 'item',
    //                     url  : '/pages/auth/login-2'
    //                 },
    //                 {
    //                     id   : 'register',
    //                     title: 'Register',
    //                     type : 'item',
    //                     url  : '/pages/auth/register'
    //                 },
    //                 {
    //                     id   : 'register-v2',
    //                     title: 'Register v2',
    //                     type : 'item',
    //                     url  : '/pages/auth/register-2'
    //                 },
    //                 {
    //                     id   : 'forgot-password',
    //                     title: 'Forgot Password',
    //                     type : 'item',
    //                     url  : '/pages/auth/forgot-password'
    //                 },
    //                 {
    //                     id   : 'forgot-password-v2',
    //                     title: 'Forgot Password v2',
    //                     type : 'item',
    //                     url  : '/pages/auth/forgot-password-2'
    //                 },
    //                 {
    //                     id   : 'reset-password',
    //                     title: 'Reset Password',
    //                     type : 'item',
    //                     url  : '/pages/auth/reset-password'
    //                 },
    //                 {
    //                     id   : 'reset-password-v2',
    //                     title: 'Reset Password v2',
    //                     type : 'item',
    //                     url  : '/pages/auth/reset-password-2'
    //                 },
    //                 {
    //                     id   : 'lock-screen',
    //                     title: 'Lock Screen',
    //                     type : 'item',
    //                     url  : '/pages/auth/lock'
    //                 },
    //                 {
    //                     id   : 'mail-confirmation',
    //                     title: 'Mail Confirmation',
    //                     type : 'item',
    //                     url  : '/pages/auth/mail-confirm'
    //                 }
    //             ]
    //         },
    //         {
    //             id   : 'coming-soon',
    //             title: 'Coming Soon',
    //             type : 'item',
    //             icon : 'alarm',
    //             url  : '/pages/coming-soon'
    //         },
    //         {
    //             id      : 'errors',
    //             title   : 'Errors',
    //             type    : 'collapsable',
    //             icon    : 'error',
    //             children: [
    //                 {
    //                     id   : '404',
    //                     title: '404',
    //                     type : 'item',
    //                     url  : '/pages/errors/error-404'
    //                 },
    //                 {
    //                     id   : '500',
    //                     title: '500',
    //                     type : 'item',
    //                     url  : '/pages/errors/error-500'
    //                 }
    //             ]
    //         },
    //         {
    //             id      : 'invoice',
    //             title   : 'Invoice',
    //             type    : 'collapsable',
    //             icon    : 'receipt',
    //             children: [
    //                 {
    //                     id   : 'modern',
    //                     title: 'Modern',
    //                     type : 'item',
    //                     url  : '/pages/invoices/modern'
    //                 },
    //                 {
    //                     id   : 'compact',
    //                     title: 'Compact',
    //                     type : 'item',
    //                     url  : '/pages/invoices/compact'
    //                 }
    //             ]
    //         },
    //         {
    //             id   : 'maintenance',
    //             title: 'Maintenance',
    //             type : 'item',
    //             icon : 'build',
    //             url  : '/pages/maintenance'
    //         },
    //         {
    //             id      : 'pricing',
    //             title   : 'Pricing',
    //             type    : 'collapsable',
    //             icon    : 'attach_money',
    //             children: [
    //                 {
    //                     id   : 'style-1',
    //                     title: 'Style 1',
    //                     type : 'item',
    //                     url  : '/pages/pricing/style-1'
    //                 },
    //                 {
    //                     id   : 'style-2',
    //                     title: 'Style 2',
    //                     type : 'item',
    //                     url  : '/pages/pricing/style-2'
    //                 },
    //                 {
    //                     id   : 'style-3',
    //                     title: 'Style 3',
    //                     type : 'item',
    //                     url  : '/pages/pricing/style-3'
    //                 }
    //             ]
    //         },
    //         {
    //             id   : 'profile',
    //             title: 'Profile',
    //             type : 'item',
    //             icon : 'person',
    //             url  : '/pages/profile'
    //         },
    //         {
    //             id      : 'search',
    //             title   : 'Search',
    //             type    : 'collapsable',
    //             icon    : 'search',
    //             children: [
    //                 {
    //                     id   : 'search-classic',
    //                     title: 'Classic',
    //                     type : 'item',
    //                     url  : '/pages/search/classic'
    //                 },
    //                 {
    //                     id   : 'search-modern',
    //                     title: 'Modern',
    //                     type : 'item',
    //                     url  : '/pages/search/modern'
    //                 }
    //             ]
    //         },
    //         {
    //             id   : 'faq',
    //             title: 'Faq',
    //             type : 'item',
    //             icon : 'help',
    //             url  : '/pages/faq'
    //         },
    //         {
    //             id   : 'knowledge-base',
    //             title: 'Knowledge Base',
    //             type : 'item',
    //             icon : 'import_contacts',
    //             url  : '/pages/knowledge-base'
    //         }
    //     ]
    // },
    // {
    //     id      : 'user-interface',
    //     title   : 'User Interface',
    //     type    : 'group',
    //     icon    : 'web',
    //     children: [
    //         {
    //             id   : 'angular-material',
    //             title: 'Angular Material',
    //             type : 'item',
    //             icon : 'ballot',
    //             url  : '/ui/angular-material'
    //         },
    //         {
    //             id   : 'cards',
    //             title: 'Cards',
    //             type : 'item',
    //             icon : 'crop_portrait',
    //             url  : '/ui/cards'
    //         },
    //         {
    //             id   : 'forms',
    //             title: 'Forms',
    //             type : 'item',
    //             icon : 'web_asset',
    //             url  : '/ui/forms'
    //         },
    //         {
    //             id   : 'icons',
    //             title: 'Icons',
    //             type : 'item',
    //             icon : 'photo',
    //             url  : '/ui/icons'
    //         },
    //         {
    //             id   : 'typography',
    //             title: 'Typography',
    //             type : 'item',
    //             icon : 'text_fields',
    //             url  : '/ui/typography'
    //         },
    //         {
    //             id   : 'helper-classes',
    //             title: 'Helper Classes',
    //             type : 'item',
    //             icon : 'help',
    //             url  : '/ui/helper-classes'
    //         },
    //         {
    //             id      : 'page-layouts',
    //             title   : 'Page Layouts',
    //             type    : 'collapsable',
    //             icon    : 'view_quilt',
    //             children: [
    //                 {
    //                     id      : 'carded',
    //                     title   : 'Carded',
    //                     type    : 'collapsable',
    //                     badge   : {
    //                         title: '12',
    //                         bg   : '#525e8a',
    //                         fg   : '#FFFFFF'
    //                     },
    //                     children: [
    //                         {
    //                             id   : 'full-width-1',
    //                             title: 'Full Width #1',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/carded/full-width-1'
    //                         },
    //                         {
    //                             id   : 'full-width-2',
    //                             title: 'Full Width #2',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/carded/full-width-2'
    //                         },
    //                         {
    //                             id   : 'full-width-tabbed-1',
    //                             title: 'Full Width Tabbed #1',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/carded/full-width-tabbed-1'
    //                         },
    //                         {
    //                             id   : 'full-width-tabbed-2',
    //                             title: 'Full Width Tabbed #2',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/carded/full-width-tabbed-2'
    //                         },
    //                         {
    //                             id   : 'left-sidebar-1',
    //                             title: 'Left Sidebar #1',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/carded/left-sidebar-1'
    //                         },
    //                         {
    //                             id   : 'left-sidebar-2',
    //                             title: 'Left Sidebar #2',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/carded/left-sidebar-2'
    //                         },
    //                         {
    //                             id   : 'left-sidebar-tabbed-1',
    //                             title: 'Left Sidebar Tabbed #1',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/carded/left-sidebar-tabbed-1'
    //                         },
    //                         {
    //                             id   : 'left-sidebar-tabbed-2',
    //                             title: 'Left Sidebar Tabbed #2',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/carded/left-sidebar-tabbed-2'
    //                         },
    //                         {
    //                             id   : 'right-sidebar-1',
    //                             title: 'Right Sidebar #1',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/carded/right-sidebar-1'
    //                         },
    //                         {
    //                             id   : 'right-sidebar-2',
    //                             title: 'Right Sidebar #2',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/carded/right-sidebar-2'
    //                         },
    //                         {
    //                             id   : 'right-sidebar-tabbed-1',
    //                             title: 'Right Sidebar Tabbed #1',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/carded/right-sidebar-tabbed-1'
    //                         },
    //                         {
    //                             id   : 'right-sidebar-tabbed-2',
    //                             title: 'Right Sidebar Tabbed #2',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/carded/right-sidebar-tabbed-2'
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     id      : 'simple',
    //                     title   : 'Simple',
    //                     type    : 'collapsable',
    //                     badge   : {
    //                         title: '10',
    //                         bg   : '#525e8a',
    //                         fg   : '#FFFFFF'
    //                     },
    //                     children: [
    //                         {
    //                             id   : 'full-width-1',
    //                             title: 'Full Width #1',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/simple/full-width-1'
    //                         },
    //                         {
    //                             id   : 'full-width-tabbed-1',
    //                             title: 'Full Width Tabbed #1',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/simple/full-width-tabbed-1'
    //                         },
    //                         {
    //                             id   : 'left-sidebar-1',
    //                             title: 'Left Sidebar #1',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/simple/left-sidebar-1'
    //                         },
    //                         {
    //                             id   : 'left-sidebar-2',
    //                             title: 'Left Sidebar #2',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/simple/left-sidebar-2'
    //                         },
    //                         {
    //                             id   : 'left-sidebar-3',
    //                             title: 'Left Sidebar #3',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/simple/left-sidebar-3'
    //                         },
    //                         {
    //                             id   : 'left-sidebar-4',
    //                             title: 'Left Sidebar #4',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/simple/left-sidebar-4'
    //                         },
    //                         {
    //                             id   : 'right-sidebar-1',
    //                             title: 'Right Sidebar #1',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/simple/right-sidebar-1'
    //                         },
    //                         {
    //                             id   : 'right-sidebar-2',
    //                             title: 'Right Sidebar #2',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/simple/right-sidebar-2'
    //                         },
    //                         {
    //                             id   : 'right-sidebar-3',
    //                             title: 'Right Sidebar #3',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/simple/right-sidebar-3'
    //                         },
    //                         {
    //                             id   : 'right-sidebar-4',
    //                             title: 'Right Sidebar #4',
    //                             type : 'item',
    //                             url  : '/ui/page-layouts/simple/right-sidebar-4'
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     id   : 'blank',
    //                     title: 'Blank',
    //                     type : 'item',
    //                     url  : '/ui/page-layouts/blank'
    //                 }
    //             ]
    //         },
    //         {
    //             id   : 'colors',
    //             title: 'Colors',
    //             type : 'item',
    //             icon : 'color_lens',
    //             url  : '/ui/colors'
    //         }
    //     ]
    // },
    // {
    //     id      : 'documentation',
    //     title   : 'Documentation',
    //     icon    : 'import_contacts',
    //     type    : 'group',
    //     children: [
    //         {
    //             id   : 'changelog',
    //             title: 'Changelog',
    //             type : 'item',
    //             icon : 'update',
    //             url  : '/documentation/changelog',
    //             badge: {
    //                 title: '9.0.0',
    //                 bg   : '#EC0C8E',
    //                 fg   : '#FFFFFF'
    //             }
    //         },
    //         {
    //             id      : 'getting-started',
    //             title   : 'Getting Started',
    //             type    : 'collapsable',
    //             icon    : 'import_contacts',
    //             children: [
    //                 {
    //                     id   : 'introduction',
    //                     title: 'Introduction',
    //                     type : 'item',
    //                     url  : '/documentation/getting-started/introduction'
    //                 },
    //                 {
    //                     id   : 'installation',
    //                     title: 'Installation',
    //                     type : 'item',
    //                     url  : '/documentation/getting-started/installation'
    //                 }
    //             ]
    //         },
    //         {
    //             id      : 'working-with-fuse',
    //             title   : 'Working with Fuse',
    //             type    : 'collapsable',
    //             icon    : 'import_contacts',
    //             children: [
    //                 {
    //                     id   : 'server',
    //                     title: 'Server',
    //                     type : 'item',
    //                     url  : '/documentation/working-with-fuse/server'
    //                 },
    //                 {
    //                     id   : 'production',
    //                     title: 'Production',
    //                     type : 'item',
    //                     url  : '/documentation/working-with-fuse/production'
    //                 },
    //                 {
    //                     id   : 'directory-structure',
    //                     title: 'Directory Structure',
    //                     type : 'item',
    //                     url  : '/documentation/working-with-fuse/directory-structure'
    //                 },
    //                 {
    //                     id   : 'updating-fuse',
    //                     title: 'Updating Fuse',
    //                     type : 'item',
    //                     url  : '/documentation/working-with-fuse/updating-fuse'
    //                 },
    //                 {
    //                     id   : 'multi-language',
    //                     title: 'Multi Language',
    //                     type : 'item',
    //                     url  : '/documentation/working-with-fuse/multi-language'
    //                 },
    //                 {
    //                     id   : 'material-theming',
    //                     title: 'Material Theming',
    //                     type : 'item',
    //                     url  : '/documentation/working-with-fuse/material-theming'
    //                 },
    //                 {
    //                     id   : 'theme-layouts',
    //                     title: 'Theme Layouts',
    //                     type : 'item',
    //                     url  : '/documentation/working-with-fuse/theme-layouts'
    //                 },
    //                 {
    //                     id   : 'page-layouts',
    //                     title: 'Page Layouts',
    //                     type : 'item',
    //                     url  : '/documentation/working-with-fuse/page-layouts'
    //                 }
    //             ]
    //         },
    //         {
    //             id      : 'components',
    //             title   : 'Components',
    //             type    : 'collapsable',
    //             icon    : 'import_contacts',
    //             children: [
    //                 {
    //                     id   : 'countdown',
    //                     title: 'Countdown',
    //                     type : 'item',
    //                     url  : '/documentation/components/countdown'
    //                 },
    //                 {
    //                     id   : 'highlight',
    //                     title: 'Highlight',
    //                     type : 'item',
    //                     url  : '/documentation/components/highlight'
    //                 },
    //                 {
    //                     id   : 'material-color-picker',
    //                     title: 'Material Color Picker',
    //                     type : 'item',
    //                     url  : '/documentation/components/material-color-picker'
    //                 },
    //                 {
    //                     id   : 'navigation',
    //                     title: 'Navigation',
    //                     type : 'item',
    //                     url  : '/documentation/components/navigation'
    //                 },
    //                 {
    //                     id   : 'progress-bar',
    //                     title: 'Progress Bar',
    //                     type : 'item',
    //                     url  : '/documentation/components/progress-bar'
    //                 },
    //                 {
    //                     id   : 'search-bar',
    //                     title: 'Search Bar',
    //                     type : 'item',
    //                     url  : '/documentation/components/search-bar'
    //                 },
    //                 {
    //                     id   : 'sidebar',
    //                     title: 'Sidebar',
    //                     type : 'item',
    //                     url  : '/documentation/components/sidebar'
    //                 },
    //                 {
    //                     id   : 'shortcuts',
    //                     title: 'Shortcuts',
    //                     type : 'item',
    //                     url  : '/documentation/components/shortcuts'
    //                 },
    //                 {
    //                     id   : 'widget',
    //                     title: 'Widget',
    //                     type : 'item',
    //                     url  : '/documentation/components/widget'
    //                 }
    //             ]
    //         },
    //         {
    //             id      : '3rd-party-components',
    //             title   : '3rd Party Components',
    //             type    : 'collapsable',
    //             icon    : 'import_contacts',
    //             children: [
    //                 {
    //                     id      : 'datatables',
    //                     title   : 'Datatables',
    //                     type    : 'collapsable',
    //                     children: [
    //                         {
    //                             id   : 'ngxdatatable',
    //                             title: 'ngx-datatable',
    //                             type : 'item',
    //                             url  : '/documentation/components-third-party/datatables/ngx-datatable'
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     id   : 'google-maps',
    //                     title: 'Google Maps',
    //                     type : 'item',
    //                     url  : '/documentation/components-third-party/google-maps'
    //                 }
    //             ]
    //         },
    //         {
    //             id      : 'directives',
    //             title   : 'Directives',
    //             type    : 'collapsable',
    //             icon    : 'import_contacts',
    //             children: [
    //                 {
    //                     id   : 'fuse-if-on-dom',
    //                     title: 'fuseIfOnDom',
    //                     type : 'item',
    //                     url  : '/documentation/directives/fuse-if-on-dom'
    //                 },
    //                 {
    //                     id   : 'fuse-inner-scroll',
    //                     title: 'fuseInnerScroll',
    //                     type : 'item',
    //                     url  : '/documentation/directives/fuse-inner-scroll'
    //                 },
    //                 {
    //                     id   : 'fuse-mat-sidenav',
    //                     title: 'fuseMatSidenav',
    //                     type : 'item',
    //                     url  : '/documentation/directives/fuse-mat-sidenav'
    //                 },
    //                 {
    //                     id   : 'fuse-perfect-scrollbar',
    //                     title: 'fusePerfectScrollbar',
    //                     type : 'item',
    //                     url  : '/documentation/directives/fuse-perfect-scrollbar'
    //                 }
    //             ]
    //         },
    //         {
    //             id      : 'services',
    //             title   : 'Services',
    //             type    : 'collapsable',
    //             icon    : 'import_contacts',
    //             children: [
    //                 {
    //                     id   : 'fuse-config',
    //                     title: 'Fuse Config',
    //                     type : 'item',
    //                     url  : '/documentation/services/fuse-config'
    //                 },
    //                 {
    //                     id   : 'fuse-splash-screen',
    //                     title: 'Fuse Splash Screen',
    //                     type : 'item',
    //                     url  : '/documentation/services/fuse-splash-screen'
    //                 }
    //             ]
    //         }
    //     ]
    }
];
