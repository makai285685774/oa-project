import { h } from 'vue'

export default {
    name: 'TableRenderRow',
    props: {
        render: Function,
        row: Object,
        index: Number
    },
    render: (props) => {

        const params = {
            row: props.row,
            index: props.index
        }
        return props.render(h, params)
    }
}