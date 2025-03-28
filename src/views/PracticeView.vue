<script setup>
import { useRouter } from 'vue-router';
import { Button } from 'primevue';

const router = useRouter()

const toHomePage = () => {router.push('/')}

</script>

<template>
    <main>
        <div class="header">
            <h1>Try Playing an F Chord</h1>

            <Button 
            label="Home"
            @click="toHomePage" 
            />
        </div>

        <div class="image">
            <img src="../assets/FretBoard.jpeg" alt="FretBoard" width="100%">
        </div>

    </main>
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.header{
    display: flex;
    align-items: center;
}

h1{
    margin-right: 150px;
    margin-left: 150px;
}

.image{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}


</style>