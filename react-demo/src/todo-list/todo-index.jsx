import { CiEdit } from "react-icons/ci";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import TodoHome from "./Todo-home";
import TodoLogin from "./todo-login";
import TodoRegister from "./todo-register";
import TodoDashboard from "./todo-dashboard";
import TodoNopage from "./todo-nopage";
import TodoAddTask from "./todo-addtask";
import TodoEdit from "./todo-edit";
import TodoDelete from "./todo-delete";
import TodoAllTask from "./todo-allTask";


const TodoIndex = () => {
    // const navigate = useNavigate();
    return (
        <div>
            <BrowserRouter>
                <header className="bg-gray-200 flex justify-between p-2 items-center">
                    <div className="bg-gray-300 flex items-center gap-2 p-2 rounded-lg">
                        <CiEdit className="text-2xl bg-gray-900/10 text-white p-1 rounded-lg" />
                        <p className="text-xl font-bold">Task Manager</p></div>

                    <div>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-2">
                                <p className="hover:bg-gray-300 p-2 rounded-lg cursor-pointer font-semibold">Features</p>
                                <p className="hover:bg-gray-300 p-2 rounded-lg cursor-pointer font-semibold">Pricing</p>
                                <p className="hover:bg-gray-300 p-2 rounded-lg cursor-pointer font-semibold">About</p>
                                <p className="hover:bg-gray-300 p-2 rounded-lg cursor-pointer font-semibold">Contact</p>
                            </div>
                            <Link to="/" className="bg-blue-600 p-2 text-white rounded-lg hover:bg-blue-700 cursor-pointer">Get Started</Link>

                        </div>
                    </div>
                </header>
                <section>
                    <Routes>
                        <Route path="/" element={<TodoHome />} />
                        <Route path="login" element={<TodoLogin />} />
                        <Route path="register" element={<TodoRegister />} />
                        <Route path="dashboard" element={<TodoDashboard />} >
                            <Route index element={<TodoAllTask />} />
                            <Route path="add" element={<TodoAddTask />} />
                            <Route path="edit" element={<TodoEdit />} />
                            <Route path="delete" element={<TodoDelete />} />
                        </Route>
                        <Route path="*" element={<TodoNopage />} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    );
};

export default TodoIndex;