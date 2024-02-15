import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '实战案例',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        解决实际问题的能力，能够熟练使用搜索引擎和技术文档查找解决方案。
      </>
    ),
  },
  {
    title: '前端八股文',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        前端开发中常见的基本知识点和技能总结，通常是面试准备时需要熟悉的内容。
      </>
    ),
  },
  {
    title: '文档贡献',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        一个人业余时间有限，需要借助社区和开源项目，才能在工作中获得成长。
        通过贡献文档，帮助他人，提升自己。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
