export const formControls = { //表单控件
    '0': {
        label: '纯文本',
        node: 'p'
    },
    '1': {
        label: '单行输入框',
        node: 'input'
    },
    '2': {
        label: '多行输入框',
        node: 'el-input',
        props: {
            type: 'textarea'
        }
    },
    '3': {
        label: '下拉框',
        node: 'el-select',
        slot: {
            label: '选项',
            el: 'el-option'
        }
    },
    '4': {
        label: '单选框',
        node: 'el-radio'
    },
    '5': {
        label: '复选框',
        node: 'el-checkbox'
    },
    '6': {
        label: '日期控件',
        node: 'el-date-picker'
    },
    '7': {
        label: '计算控件',
        node: 'el-input'
    },
    '8': {
        label: '附件控件',
        node: 'attachment-control'
    },
    '9': {
        label: '宏控件',
        node: 'macro-control'
    }
}