import React from 'react';
import { Typography, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const containerStyle = {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: '"Arial", sans-serif'
};

const authorInfoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px'
};

const marginLeftStyle = { marginLeft: '20px' };

function AuthorInfo() {
    return (
        <div style={authorInfoContainerStyle}>
            <Avatar size={64} icon={<UserOutlined />} src="URL_TO_YOUR_IMAGE_HERE" />
            <div style={marginLeftStyle}>
                <Title level={4}>Nirvan Panjwani</Title>
                <Paragraph>Aug 13, 2021 • 3 min read</Paragraph>
            </div>
        </div>
    );
}

function List() {
    return (
        <div style={containerStyle}>
            <AuthorInfo />

            <Title>The To-Do List: A Procrastinator’s Saving Grace</Title>
            <Paragraph>
                <span role="img" aria-label="wave">👋</span> I used to come home from school and jump straight into my bed. Sometimes to sleep, sometimes to endlessly scroll on my phone, or sometimes to finish entire seasons of shows in one sitting. I would always think to myself, “just 10 more minutes, I’ll start my work at 3:30”, and slowly it would become 4, then 4:30, and pretty soon my mom was calling me down for dinner.
            </Paragraph>
            <Paragraph>
                My homework would always be ready by class the next morning, but at what cost? Some days, I would barely sleep 2 hours, which inevitably lead to less focus during classes, forcing me to not only have to do homework at night but also teach myself that day’s lesson.
            </Paragraph>
            <Paragraph>
                And so I navigated to google classroom with an old note pad in hand and scrawled down a list of homework that was due the next morning. It didn’t help. Now, I was a hopeless procrastinator with a list of the stuff I was procrastinating.
            </Paragraph>
            <Divider />
            <Paragraph>
                And so I navigated to google classroom with an old note pad in hand and scrawled down a list of homework that was due the next morning. It didn’t help. Now, I was a hopeless procrastinator with a list of the stuff I was procrastinating.
            </Paragraph>
            <Paragraph>
                So I decided to create a new system for myself, based on the classic to-do list. I mixed in tasks I enjoyed doing, like creating logos for my non-profit or working on a solution for the robotics team, with tasks I hated, like prepping for my history test the next day. Every single task, no matter how menial was added to my list. At the top are tasks I enjoyed or didn’t mind doing, and at the bottom are the tasks I was dreading. Next to each task was an estimation of how long the task would take me.
            </Paragraph>
            <Paragraph>
                This was perfect. When I finished school, the first thing I would do is make my list for that day. Then, I would start with the easier, shorter tasks and convince myself that I was procrastinating doing the harder ones. However, I wasn’t, in reality, I was being uber-productive, crossing off item after item on my to-do list. When it came time to write that English essay, I was always in a good mood due to the dopamine release that had come from the sense of accomplishment from the past few tasks. Like gas for a car, dopamine is the driving factor. The natural chemical release after crossing a task off keeps you coming back task after task, even if the task isn’t enjoyable.
            </Paragraph>
            <Paragraph>
                Nowadays, this notepad is more vital to my life than my phone. I put everything on the pad, and each day I’m able to jump right into productivity after school. In fact, it’s currently 4pm and I’m procrastinating my chemistry homework by writing this blog post 😃.
            </Paragraph>
        </div>
    );
}

export default List;
