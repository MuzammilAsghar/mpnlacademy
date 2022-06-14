<template>
<div>
<h3>Exams</h3>
<pre>
{{currentUser}}
</pre>
</div>
</template>

<script>
export default{
    computed:{
        currentUser(){
       return this.$store.getters.currentUser;
     }
    }
}
</script>