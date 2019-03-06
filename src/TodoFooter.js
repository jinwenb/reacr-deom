import React, {Component} from 'react';
import * as filters from './type'

export default class TodoFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let {ChangeFilters, countActive, filterRemove} = this.props;
        return (
            <footer>
                {
                    countActive === 0 ? null : <span>你还有{countActive}件待办事项</span>
                }
                <span>
                    <button
                        onClick={() => {
                            ChangeFilters(filters.ALL)
                        }}
                    >
                        全部
                    </button>
                <button
                    onClick={() => {
                        ChangeFilters(filters.ACTIVE)
                    }}
                >
                    未完成
                </button>
                <button
                    onClick={() => {
                        ChangeFilters(filters.TOACTIVATE)
                    }}
                >
                    已完成
                </button>
                </span>
                <span>
                                    <button
                                        onClick={filterRemove}
                                    >删除已完成的</button>

                </span>
            </footer>
        )
    }
}