<script setup>
import { useRouter } from 'vue-router';
import { Button, VirtualScroller } from 'primevue';
import skills from '../data/skills.json'

const router = useRouter()
const toSkillsPage = () => {router.push('/skills')}

</script>

<template>
    <main>
        <div class="Header">
            <h1>Get Good at Guitar</h1>
        </div>

        <div class="skillsBox">


            <VirtualScroller 
                class="skillsList"
                :items="skills" 
                :itemSize="50" 
                style="width: 400px; height: 200px"
            >
                <template v-slot:item="{ item, options }">
                    <div class="innerBox">
                        <p class="itemName">{{ item.name }}</p> 
                        <p class="itemRating">{{ item.progressRate }}</p>
                    </div>
                </template>
            </VirtualScroller>

            <Button 
                class="skillsButton"
                label="View All Skills"
                @click="toSkillsPage" 
            />

        </div>

            

    </main>
</template>

<style scoped>

main {
    display: flex;
    align-items: center;
    justify-content: center;
}

div{
    margin: 10px;
}

.header{
    display: flex;
    align-items: center;
    justify-content: center;
}

.skillsBox {
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    align-items: baseline;
    width: 50%;
}

.skillsList{
    background-color: #DCD6F7;
}

.skillsButton {
    width: 25%;
    height: 50%;
}

.innerBox {
    height: 50px;
}

.itemName{
    position: absolute;
    left: 20px;
}

.itemRating{
    position: absolute;
    left: 80%;
}


</style>