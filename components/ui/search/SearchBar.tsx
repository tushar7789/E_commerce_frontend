'use client'

import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { AutoComplete, Flex, Input } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles((props) => {
    const { css, prefixCls, cssVar } = props;
    return {
        categorySearch: css`
      .${prefixCls}-select-dropdown-menu-item-group-title {
        color: #666;
        font-weight: ${cssVar.fontWeightStrong};
      }
      .${prefixCls}-select-dropdown-menu-item-group {
        border-bottom: ${cssVar.lineWidth} ${cssVar.lineType} #f6f6f6;
      }
      .${prefixCls}-select-dropdown-menu-item {
        padding-inline-start: ${cssVar.padding};
      }
      .${prefixCls}-select-dropdown-menu-item.show-all {
        text-align: center;
        cursor: default;
      }
      .${prefixCls}-select-dropdown-menu {
        max-height: 300px;
      }
    `,
    };
});

const Title: React.FC<Readonly<{ title?: string }>> = (props) => (
    <Flex align="center" justify="space-between">
        {props.title}
        <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
            more
        </a>
    </Flex>
);

const renderItem = (title: string, count: number) => ({
    value: title,
    label: (
        <Flex align="center" justify="space-between">
            {title}
            <span>
                <UserOutlined /> {count}
            </span>
        </Flex>
    ),
});

const options = [
    {
        label: <Title title="Electronics" />,
        options: [renderItem('Charger', 1240), renderItem('Pendrive', 1060)],
    },
    {
        label: <Title title="Sports" />,
        options: [renderItem('Cricket Bat', 60100), renderItem('Badminton Racket', 30010)],
    },
];

const SearchBar = () => {
    const { styles } = useStyles();
    return (
        <AutoComplete
            classNames={{ popup: { root: styles.categorySearch } }}
            popupMatchSelectWidth={500}
            style={{ width: 550, height: 40 }}
            options={options}
        >
            <Input.Search size="large" placeholder="input here" />
        </AutoComplete>
    )
}

export default SearchBar
