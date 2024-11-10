<template>
    <ul :class="classContainer">
        <li v-for="(node, index) in nodes" :key="`node-${index}`" :class="{
        'menu-main-heading': node.heading,
        'menu-main-item': !node.heading,
        'open': node.sub && node.subActivePaths ? subIsActive(node.subActivePaths) : false}">
            {{ node.heading ? node.name : '' }}
            <template v-if="node.sub">
                <a v-if="!node.heading" href="#" class="menu-main-link"
                    :class="node.sub ? 'menu-main-link-submenu' : '' || (isActive(node.to)) ? 'active' : ''"
                    :event="node.sub ? '' : 'click'" @click="linkClicked($event, node.sub)">
                <span v-if="node.icon" class="menu-main-link-icon" v-html="node.icon"></span>
                <span v-if="node.name" class="menu-main-link-text">{{ node.name }}</span>
                <span v-if="node.badge" class="menu-main-link-badge badge badge-pill badge-primary"
                    :class="node['badge-variant'] ? `badge-${node['badge-variant']}` : 'badge-primary' ">{{ node.badge }}</span>
                </a>
            </template>
            <template v-else>
                <NuxtLink v-if="!node.heading" :to="node.to ? node.to : '#'"
                    :class="node.sub ? 'menu-main-link-submenu' : '' || isActive(node.to) ? 'active' : ''" class="menu-main-link"
                    :event="node.sub ? '' : 'click'" @click="linkClicked($event, node.sub)">
                       
                <span v-if="node.icon" class="menu-main-link-icon" v-html="node.icon"></span>
                <span v-if="node.name" class="menu-main-link-text">{{ node.name }}</span>
                <span v-if="node.badge" class="menu-main-link-badge badge badge-pill badge-primary"
                    :class="node['badge-variant'] ? `badge-${node['badge-variant']}` : 'badge-primary' ">{{ node.badge }}</span>
                </NuxtLink>
            </template>
            <app-navigation v-if="node.sub" :nodes="node.sub" sub-menu></app-navigation>
        </li>
    </ul>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const props = defineProps({
    nodes: {
        type: Array,
        description: 'The nodes of the navigation'
    },
    subMenu: {
        type: Boolean,
        default: false,
        description: 'If true, a submenu will be rendered'
    },
    dark: {
        type: Boolean,
        default: false,
        description: 'Dark mode for menu'
    },
    horizontal: {
        type: Boolean,
        default: false,
        description: 'Horizontal menu in large screen width'
    },
    horizontalHover: {
        type: Boolean,
        default: false,
        description: 'Hover mode for horizontal menu'
    },
    horizontalCenter: {
        type: Boolean,
        default: false,
        description: 'Center mode for horizontal menu'
    },
    horizontalJustify: {
        type: Boolean,
        default: false,
        description: 'Justify mode for horizontal menu'
    }
});

const classContainer = computed(() => ({
    'menu-main': !props.subMenu,
    'menu-main-submenu': props.subMenu,
    'menu-main-dark': props.dark,
    'menu-main-horizontal': props.horizontal,
    'menu-main-hover': props.horizontalHover,
    'menu-main-horizontal-center': props.horizontalCenter,
    'menu-main-horizontal-justify': props.horizontalJustify
}));
const isActive = (path) => { 
    return route.path === path ? true : false; 
};

const subIsActive = (paths) => {
    if (props.horizontal) {
        return false;
    }

    return route().current(paths);
};

const linkClicked = (e, submenu) => {
    let windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (submenu) {
        let el = e.target.closest('li');
        if (!(windowW > 991 && props.horizontal && props.horizontalHover)) {
            if (el.classList.contains('open')) {
                el.classList.remove('open');
            } else {
                const children = Array.from(el.closest('ul').children);
                children.forEach(element => {
                    element.classList.remove('open');
                });
                el.classList.add('open');
            }
        }
    } else {
        if (windowW < 992) {
            // Assuming you have a method to commit to the store
            // Example: useStore().commit('sidebar', { mode: 'close' })
        }
    }
};
</script>

