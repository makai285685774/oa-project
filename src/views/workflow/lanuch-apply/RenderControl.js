import { formControls } from '../components/contants.js'
import { h } from 'vue'
let form = {}

export default {
    props: {
        props: Object
    },
    render(props) {
        let _this = this
            // console.log(this.props)
        const {
            workFormControls,
            dropSourceList
        } = props.props


        const controlsType = workFormControls.controlsType

        let type = formControls

        let {
            enname,
            isMust,
            controlsDataType,
            isHidden,
            defaultValue,
            max,
            isEdit,
            rowHeight,
            placeholder
        } = workFormControls

        workFormControls.controlValue = defaultValue

        if (isHidden === '1') { //控件隐藏
            return
        }


        if (controlsType === '0') { //纯文本
            return h('div', {
                class: ['input']
            }, defaultValue)
        }

        if (controlsType === '1') { //单行文本框
            return h('input', {
                class: ['input', 'el-input__inner'],
                on: {
                    'input': (event) => {
                        workFormControls.controlValue = event.target.value
                    }
                },
                attrs: {
                    placeHolder: placeholder,
                    disabled: isEdit === '0',
                    value: workFormControls.controlValue,
                    type: controlsDataType === '1' ? 'number' : 'text',
                }
            })

        }

        if (controlsType === '6') { //时间控件
            return h('el-date-picker', {
                class: ['input'],
                on: {
                    change: function(formatValue) {
                        console.log(formatValue)
                    }
                },
                props: {
                    placeholder: placeholder,
                    disabled: isEdit === '0',
                }

            })
        }

        if (controlsType === '8') {
            return
        }



    }
}