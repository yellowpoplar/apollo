import React from "react";
import { inject, observer } from "mobx-react";


@inject("store") @observer
export default class Delay extends React.Component {
    render() {
        const { moduleDelay } = this.props.store;

        const items = moduleDelay.keys()
            .map(key => {
                const module = moduleDelay.get(key);

                return (
                    <div className="delay-item" key={'delay_' + key}>
                        <div className="name">{module.name}</div>
                        <div className="value">{`${module.delay}`}</div>
                    </div>
                );
            });

        return (
            <div className="delay card">
                <div className="card-header"><span>Module Delay</span></div>
                <div className="card-content-column">
                    {items}
                </div>
            </div>
        );
    }
}