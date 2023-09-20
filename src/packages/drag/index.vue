<template>
    <div class="beva-drag">
        <div class="drag-item">拖拽1</div>
				<div class="drag-item">拖拽2</div>
				<div class="drag-item">拖拽3</div>
    </div>
</template>

<script>
    export default {
        name: 'drag',
        data() {
            return {
							color:"red"
						}
        }
    }
</script>
<style scoped="scoped" lang="scss">
    .beva-drag {
        width: 100%;
				background: gray;
    }

    .drag-icon {
        width: 4rem;
        height: 4rem;
        animation: rotatingright 1s linear infinite;
    }
    /*自定义动画类----顺时针旋转（使用这个动画的时候才设置动画执行时间）*/
    @keyframes rotatingright {
        /* transform-origin: 50% 50%; */
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    /*自定义动画类----逆时针旋转（使用这个动画的时候才设置动画执行时间）*/
    @-webkit-keyframes rotatingleft {
        0% {
            -webkit-transform: rotate(0deg);
        }
        50% {
            -webkit-transform: rotate(-180deg);
        }
        100% {
            -webkit-transform: rotate(-360deg);
        }
    }
</style>