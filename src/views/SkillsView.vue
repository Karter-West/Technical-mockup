<script setup>
import { useRouter } from 'vue-router';
import { Button, Card } from 'primevue';
import skills from '../data/skills.json'

const router = useRouter()

const toHomePage = () => {router.push('/')}
const toPracticePage = () => {router.push('/practice')}

//<Button 
//label="Practice Page"
//@click="toPracticePage" 
///>

</script>

<template>
    <main>
        <div class="header">
            <h1>Select a skill to practice:</h1>

            <h1>Personal Progress Rating:</h1>

            <Button 
            label="Home"
            @click="toHomePage" 
            />
        </div>

        <div class="skillsDisplay">
            <Card class="card" @click="toPracticePage" v-for="skill in skills">
                <template #content>
                    <div class="card-content">
                        <p>{{ skill.name }}</p>
                        <p>{{ skill.progressRate }}/5</p>
                    </div>
                </template>
            </Card>
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
    justify-content: center;
}

h1 {
    width: 45%;
    font-size: 40px;
}

.skillsDisplay{
    display: flex;
    width: 100%;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
}

.card{
    width: 80%;
}

.card-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>