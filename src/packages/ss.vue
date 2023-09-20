<template>
    <div>fjhffjf
        <lod></lod>
    </div>
</template>
<script>
import l from "./beva";
    export default {
        name: 'loading',
        data() {
            return {}
        },
        components:{
            lod: l.loading
        },
        mounted(){
            console.log("sss:",l)
        }
    }
</script>