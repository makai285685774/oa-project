import { ref } from 'vue'
export default function() {
    const fullscreen = ref(false)

    function toggle(){
        fullscreen.value = !fullscreen.value
    }

    return {
        fullscreen,
        toggle
    }

}