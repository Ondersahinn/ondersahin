import { AppstoreOutlined, TagOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Link from 'next/link'

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
export const items: MenuProps['items'] = [
  getItem('Ürünler', 'sub1', <TagOutlined />, [
    getItem(<Link href="/panel/categories">Kategoriler</Link>, 'categories'),
    getItem(<Link href="/panel/resources">Resources</Link>, 'resources'),
    getItem(<Link href="/panel/blog">Blog</Link>, 'blog'),
  ]),

];

export const slugify = (text: string) => {
  var trMap: any = {
    'çÇ': 'c',
    'ğĞ': 'g',
    'şŞ': 's',
    'üÜ': 'u',
    'ıİ': 'i',
    'öÖ': 'o'
  };
  for (var key in trMap) {
    text = text.replace(new RegExp('[' + key + ']', 'g'), trMap[key]);
  }
  return text.replace(/[^-a-zA-Z0-9\s]+/ig, '') // remove non-alphanumeric chars
    .replace(/\s/gi, "-") // convert spaces to dashes
    .replace(/[-]+/gi, "-") // trim repeated dashes
    .toLowerCase();

}

export const categoryColumns = [
  {
    title: 'Category Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Path',
    dataIndex: 'path',
    key: 'path',
  },
  {
    title: 'Create date time',
    dataIndex: 'since',
    key: 'since',
  },
];