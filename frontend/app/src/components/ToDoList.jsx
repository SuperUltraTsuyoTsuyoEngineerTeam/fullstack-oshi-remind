import { useEffect, useState } from 'react';

function ToDoList() {
    const [todoItems, setTodoItems] = useState([]);

    useEffect(() => {
        // アイテムの一覧を取得
        fetch('/api/todoitems/')
            .then(response => response.json())
            .then(data => {
                setTodoItems(data);
            });
    }, []);

    return (
        <div>
            <ul>
                {todoItems.map(item => (
                    <li key={item.id}>{item.task}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
