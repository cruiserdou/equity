package com.springapp.mvc.common;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

/**
 * Created by zhm_zheng on 14/7/26.
 */
public final class CommonThreadPool {

    private static ExecutorService executor = Executors.newCachedThreadPool();

    private CommonThreadPool(){ }

    public static <V> Future<V> submit(Callable<V> command){
        Future<V> future = executor.submit(command);
        return future;
    }

    public static void execute(Runnable command){
        executor.execute(command);
    }
}
